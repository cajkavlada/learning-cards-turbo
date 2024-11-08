// Learn more: https://docs.expo.dev/guides/monorepos/
const { getDefaultConfig } = require("expo/metro-config");
const { FileStore } = require("metro-cache");
const { makeMetroConfig } = require("@rnx-kit/metro-config");
const { withNativeWind } = require("nativewind/metro");
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");
const { mergeConfig } = require("metro-config");

const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const symlinksResolver = MetroSymlinksResolver();

const config = withTurborepoManagedCache(
  withMonorepoPaths(getDefaultConfig(projectRoot)),
);

// XXX: Resolve our exports in workspace packages
// https://github.com/expo/expo/issues/26926
config.resolver.unstable_enablePackageExports = true;

config.resolver.extraNodeModules = {
  // Map any dependencies explicitly if needed
  "@repo/ui-mobile": path.resolve(workspaceRoot, "packages/ui/mobile"),
};

module.exports = withNativeWind(
  makeMetroConfig({
    ...config,
    resolver: {
      ...config.resolver,
      resolveRequest: (context, moduleName, platform) => {
        try {
          // Symlinks resolver throws when it can't find what we're looking for.
          const res = symlinksResolver(context, moduleName, platform);

          if (res) {
            return res;
          }
        } catch {
          // If we have an error, we pass it on to the next resolver in the chain,
          // which should be one of expos.
          // https://github.com/expo/expo/blob/9c025ce7c10b23546ca889f3905f4a46d65608a4/packages/%40expo/cli/src/start/server/metro/withMetroResolvers.ts#L47
          return context.resolveRequest(context, moduleName, platform);
        }
      },
    },
  }),
  {
    input: "./src/styles/globals.css",
    configPath: "./tailwind.config.ts",
  },
);

/**
 * Add the monorepo paths to the Metro config.
 * This allows Metro to resolve modules from the monorepo.
 *
 * @see https://docs.expo.dev/guides/monorepos/#modify-the-metro-config
 * @param {import('expo/metro-config').MetroConfig} config
 * @returns {import('expo/metro-config').MetroConfig}
 */
function withMonorepoPaths(config) {
  // #1 - Watch all files in the monorepo
  config.watchFolders = [workspaceRoot];

  // #2 - Resolve modules within the project's `node_modules` first, then all monorepo modules
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, "node_modules"),
    path.resolve(workspaceRoot, "node_modules"),
  ];
  return config;
}

/**
 * Move the Metro cache to the `.cache/metro` folder.
 * If you have any environment variables, you can configure Turborepo to invalidate it when needed.
 *
 * @see https://turbo.build/repo/docs/reference/configuration#env
 * @param {import('expo/metro-config').MetroConfig} config
 * @returns {import('expo/metro-config').MetroConfig}
 */
function withTurborepoManagedCache(config) {
  config.cacheStores = [
    new FileStore({ root: path.join(__dirname, ".cache/metro") }),
  ];
  return config;
}
