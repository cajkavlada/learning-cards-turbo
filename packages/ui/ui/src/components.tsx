import { Text } from "react-native";

export const P = ({ children }) => (
  <Text className="bg-red-500 text-lg leading-10 text-gray-800 dark:text-blue-200 md:text-xl">
    {children}
  </Text>
);
