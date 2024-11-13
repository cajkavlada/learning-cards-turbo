import { Text, View } from "react-native";

import { Greeter } from "~/components/Greeter";
import { api } from "~/utils/api";

export default function HomeScreen() {
  const { data: title } = api.getTitle.useQuery();

  return (
    <>
      <View className="flex-1 bg-background p-4">
        <Text className="pb-2 text-foreground">{title}</Text>
        <Greeter />
      </View>
    </>
  );
}
