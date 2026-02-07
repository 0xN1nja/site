import { env } from "@/app/env";
import { getBlogPosts } from "@/lib/blog";

export default async function sitemap() {
  const SITE_URL =
    env.NODE_ENV === "production"
      ? "https://0xn1nja.dev"
      : "http://localhost:3000";

  const blogs = getBlogPosts().map((post) => ({
    url: `${SITE_URL}/notes/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/blogs", "/projects", "/uses", "/work"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
