import Constants from "expo-constants";

import { env } from "@repo/env/expoEnv";

export const getBaseUrl = () => {
  const debuggerHost = Constants.expoConfig?.hostUri;
  const localhost = debuggerHost?.split(":")[0];

  if (!localhost) {
    return env.EXPO_PUBLIC_API_URL;
    // throw new Error(
    //   "Failed to get localhost. Please point to your production server.",
    // );
  }
  return `http://${localhost}:3000`;
};
