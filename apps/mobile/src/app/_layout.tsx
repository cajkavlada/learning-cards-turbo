import { Stack } from "expo-router";

import "~/styles/globals.css";
import "react-native-reanimated";

import { View } from "react-native";

import { TRPCProvider } from "~/utils/api";

export default function RootLayout() {
  return (
    <TRPCProvider>
      <View className="flex-1">
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </View>
    </TRPCProvider>
  );
}
