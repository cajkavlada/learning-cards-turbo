import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { createTRPCContext } from "./trpc/init";
import { trpcRouter } from "./trpc/routers/_app";

export function trpcRouteHandler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: trpcRouter,
    createContext: createTRPCContext,
  });
}

export type TRPCRouter = typeof trpcRouter;
