import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export function Greeter() {
  const [result, setResult] = useState<string | null>(null);
  return (
    <View className="flex flex-row items-center gap-4 rounded-xl border bg-card p-4 text-card-foreground">
      <Pressable
        className="rounded-md bg-primary px-4 py-2"
        onPress={() => setResult("Hi, John!")}
      >
        <Text className="text-primary-foreground">Greet me</Text>
      </Pressable>
      <Text>{result ?? "No message"}</Text>
    </View>
  );
}
