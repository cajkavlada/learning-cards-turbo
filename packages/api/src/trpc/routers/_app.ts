import { z } from "zod";

import { getTitle, sayHi } from "@repo/backend-core";

import { baseProcedure, createTRPCRouter } from "../init";

export const trpcRouter = createTRPCRouter({
  getTitle: baseProcedure.query(() => getTitle()),
  sayHi: baseProcedure
    .input(z.string())
    .mutation(({ input: name }) => sayHi(name)),
});
