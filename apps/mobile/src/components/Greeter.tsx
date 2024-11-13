import { Text } from "react-native";

import { Button, Card } from "@repo/ui-mobile";

import { api } from "~/utils/api";

export function Greeter() {
  const { mutate: greet, data } = api.sayHi.useMutation();

  return (
    <Card>
      <Button onPress={() => greet("World")}>
        <Text className="text-primary-foreground">Greet me</Text>
      </Button>
      <Text className="text-card-foreground">{data ?? "No message"}</Text>
    </Card>
  );
}
