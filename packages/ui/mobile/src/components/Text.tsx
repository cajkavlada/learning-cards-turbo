import { Button, View } from "react-native";

export function TestComponent({ children }: { children: React.ReactNode }) {
  console.log("ahoj vsem");
  return (
    <View className="bg-green-500 pt-4">
      {children}
      <Button
        title="cus"
        onPress={() => {
          console.log("hojaja");
        }}
      />
    </View>
  );
}
