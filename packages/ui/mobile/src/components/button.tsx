import { Pressable } from "react-native";

export function Button({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: () => void;
}) {
  return (
    <Pressable className="rounded-md bg-primary px-4 py-2" onPress={onPress}>
      {children}
    </Pressable>
  );
}
