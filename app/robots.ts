import { env } from "@/app/env";

export default function robots() {
  const SITE_URL =
    env.NODE_ENV === "production"
      ? "https://0xn1nja.dev"
      : "http://localhost:3000";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
