import { Stack } from "expo-router";

import "../styles/globals.css";
import "react-native-reanimated";

import { TRPCProvider } from "~/utils/api";

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
