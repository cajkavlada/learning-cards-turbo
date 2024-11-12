import { Pressable, Text, View } from "react-native";

// import { api } from "~/utils/api";

export function Greeter() {
  // const { mutate: greet, data } = api.sayHi.useMutation();

  return (
    <View className="flex flex-row items-center gap-4 rounded-xl border bg-card p-4 text-card-foreground">
      <Pressable
        className="rounded-md bg-primary px-4 py-2"
        onPress={() => console.log("World")}
      >
        <Text className="text-primary-foreground">Greet me</Text>
      </Pressable>
      <Text>{"No message"}</Text>
    </View>
  );
}
