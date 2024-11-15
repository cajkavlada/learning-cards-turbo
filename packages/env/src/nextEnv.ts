import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_VAR: z.string(),
  },
  server: {
    SECRET_VAR: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_VAR: process.env.NEXT_PUBLIC_VAR,
    SECRET_VAR: process.env.SECRET_VAR,
  },
});
