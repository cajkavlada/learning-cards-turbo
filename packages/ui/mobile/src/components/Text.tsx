import { Button, View } from "react-native";

export function TestComponent({ children }: { children: React.ReactNode }) {
  console.log("ahoj vsem");
  return (
    <View>
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
