import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GITHUB_TOKEN: z.string().startsWith("github_"),
    DISCORD_WEBHOOK_URL: z.string().min(30).optional(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  client: {
    NEXT_PUBLIC_UMAMI_URL: z.string().url().optional(),
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().uuid().optional(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_UMAMI_URL: process.env.NEXT_PUBLIC_UMAMI_URL,
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  },
});
