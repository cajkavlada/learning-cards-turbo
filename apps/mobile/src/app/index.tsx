import { Text, View } from "react-native";

import { Greeter } from "~/components/Greeter";

export default function HomeScreen() {
  return (
    <>
      <View className="p-4 pt-16">
        <Text>Welcome!</Text>
        <Greeter />
      </View>
    </>
  );
}
