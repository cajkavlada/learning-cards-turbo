import { Button, View } from "react-native";

export function TestComponent({ children }: { children: React.ReactNode }) {
  console.log("ahoj vsem");
  return (
    <View className="pt-16">
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
