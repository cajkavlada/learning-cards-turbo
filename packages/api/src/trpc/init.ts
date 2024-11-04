import { initTRPC } from "@trpc/server";

export function createTRPCContext() {
  return {};
}

const t = initTRPC.create();

export const createTRPCRouter = t.router;
export const baseProcedure = t.procedure;
