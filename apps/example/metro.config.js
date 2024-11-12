// Learn more: https://docs.expo.dev/guides/monorepos/
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { FileStore } = require("metro-cache");
const { makeMetroConfig } = require("@rnx-kit/metro-config");
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");
const { withNativeWind } = require("nativewind/metro");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const defaultConfig = getDefaultConfig(projectRoot);

const symlinksResolver = MetroSymlinksResolver();

function resolveRequest(context, moduleName, platform) {
  try {
    const res = symlinksResolver(context, moduleName, platform);

    if (res) return res;
  } catch {
    return context.resolveRequest(context, moduleName, platform);
  }
}

const config = makeMetroConfig({
  ...defaultConfig,
  resolver: {
    ...defaultConfig.resolver,
    nodeModulesPaths: [
      path.resolve(projectRoot, "node_modules"),
      path.resolve(workspaceRoot, "node_modules"),
    ],
    resolveRequest,
    unstable_enablePackageExports: true,
  },
  watchFolders: [workspaceRoot],
  cacheStores: [new FileStore({ root: path.join(__dirname, ".cache/metro") })],
});

module.exports = withNativeWind(config, {
  input: "./src/global.css",
  configPath: "./tailwind.config.ts",
});
