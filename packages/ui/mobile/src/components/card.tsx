import { View } from "react-native";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex flex-row items-center gap-4 rounded-xl border bg-card p-4 text-card-foreground">
      {children}
    </View>
  );
}
