import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, H1, Code } from "@/components";
import { P } from "@repo/ui";
// import { TestComponent } from "@repo/ui-mobile";

export default function Page() {
  const { top } = useSafeAreaInsets();
  return (
    <View className='flex flex-1'>
      <View
        className='py-12 md:py-24 lg:py-32 xl:py-48'
        style={{ paddingTop: top + 24 }}
      >
        <View className='container px-4 md:px-6'>
          <View className='flex flex-col gap-4'>
            <H1 className='text-red-500'>Nativewind Monorepo Example</H1>
            <P>
              This is an Expo PNPM Monorepo with an Expo Application in the{" "}
              <Code>./apps/example</Code> and a UI package in{" "}
              <Code>./packages/ui</Code>.
            </P>
            <P>
              There are two tabs. Both tabs load the exact same code. The first
              tab, Home, imports components from{" "}
              <Code>./apps/example/components</Code>. The second tab, Package,
              imports the same code from <Code>./packages/ui/src</Code>.
            </P>
          </View>
        </View>
        {/* <TestComponent>
          <Text>ahoj</Text>
        </TestComponent> */}
      </View>
    </View>
  );
}