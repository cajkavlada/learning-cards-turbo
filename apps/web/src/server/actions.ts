"use server";

import { z } from "zod";

import { sayHi } from "@repo/backend-core";

import { actionClient } from "~/utils/safe-action";

export const greetAction = actionClient
  .schema(z.string())
  .action(async ({ parsedInput: subject }) => await sayHi(subject));
