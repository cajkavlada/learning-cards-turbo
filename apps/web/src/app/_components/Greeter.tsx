"use client";

import { useAction } from "next-safe-action/hooks";

import { Button, Card } from "@repo/ui-web";

import { greetAction } from "~/server/actions";

export function Greeter() {
  const {
    execute: greet,
    result: { data },
  } = useAction(greetAction);

  return (
    <Card className="flex items-center gap-4 p-4">
      <Button onClick={() => greet("World")}>Greet me</Button>
      <p>{data ?? "No message"}</p>
    </Card>
  );
}
