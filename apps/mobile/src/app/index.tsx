import { Text, View } from "react-native";

import { Pmobile, TestComponent } from "@repo/ui-mobile";

import { Greeter } from "~/components/Greeter";
import { api } from "~/utils/api";

export default function HomeScreen() {
  const { data: title } = api.getTitle.useQuery();

  return (
    <>
      <Pmobile>
        This is an Expo PNPM Monorepo with an Expo Application in the{" "}
        ./apps/example and a UI package in{" "}
      </Pmobile>
      <TestComponent>
        <Text>ahoj</Text>
      </TestComponent>
      <View className="p-4 pt-16">
        <Text>{title}</Text>
        <Greeter />
      </View>
    </>
  );
}
