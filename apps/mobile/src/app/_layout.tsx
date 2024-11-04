import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import "../styles/globals.css";
import "react-native-reanimated";

import { TRPCProvider } from "~/utils/api";

// Prevent the splash screen from auto-hiding before asset loading is complete.
void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <TRPCProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </TRPCProvider>
  );
}
