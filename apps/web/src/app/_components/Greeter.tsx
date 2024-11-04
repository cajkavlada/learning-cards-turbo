"use client";

import { useAction } from "next-safe-action/hooks";

import { Button, Card } from "@repo/ui";

import { greetAction } from "~/server/actions";

export function Greeter() {
  const { execute: greet, result } = useAction(greetAction);

  return (
    <Card className="flex items-center gap-4 p-4">
      <Button onClick={() => greet("John")}>Greet me</Button>
      <p>{result.data ?? "No message"}</p>
    </Card>
  );
}
