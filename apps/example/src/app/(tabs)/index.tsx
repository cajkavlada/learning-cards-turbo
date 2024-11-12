import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Pmobile, TestComponent } from "@repo/ui-mobile";

export default function Page() {
  const { top } = useSafeAreaInsets();
  return (
    <View className="flex flex-1">
      <View
        className="py-12 md:py-24 lg:py-32 xl:py-48"
        style={{ paddingTop: top + 24 }}
      >
        <View className="container px-4 md:px-6">
          <View className="flex flex-col gap-4">
            <Pmobile>
              This is an Expo PNPM Monorepo with an Expo Application in the{" "}
              ./apps/example and a UI package in{" "}
            </Pmobile>
            <Pmobile>
              There are two tabs. Both tabs load the exact same code. The first
              tab, Home, imports components from ./apps/example/components. The
              second tab, Package, imports the same code from.
            </Pmobile>
          </View>
        </View>
        <Pmobile>sdfxvsdf</Pmobile>
        <TestComponent>
          <Text>ahoj</Text>
        </TestComponent>
      </View>
    </View>
  );
}
