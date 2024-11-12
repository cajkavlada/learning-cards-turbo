import { Text } from "react-native";

export const Pmobile = ({ children }: { children: React.ReactNode }) => (
  <Text className="bg-purple-300 text-lg leading-10 text-gray-800 dark:text-green-600 md:text-xl">
    {children}
  </Text>
);
