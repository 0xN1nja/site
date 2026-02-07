import { getBlogPosts } from "@/lib/blog";
import { extractDate } from "@/lib/utils";
import { Rss } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "0xN1nja // blogs",
  description: "blogs I guess.",
};

const blogsPage = () => {
  const allBlogs = getBlogPosts();

  return (
    <section>
      <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
        <div className="pb-10">
          <h1 className="text-2xl font-bold pb-8">Blogs</h1>
          <p>
            I write about things I learn, projects I work on, and other cool
            stuff. Follow on
            <a
              href="http://x.com/0xN1nja"
              target="_blank"
              className="link mx-1"
              rel="noreferrer"
            >
              X
            </a>{" "}
            for updates.
          </p>
        </div>

        {allBlogs
          .filter(({ metadata }) => {
            return !metadata.draft;
          })
          .toSorted((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, index) => (
            <React.Fragment key={post.slug}>
              {!post.metadata.externalLink ? (
                <Link
                  className="w-full cursor-pointer"
                  aria-label={post.metadata.title}
                  href={`/blogs/${post.slug}`}
                >
                  <div className="w-full py-1 transform hover:scale-[1.01] transition-all">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <div className="flex items-center">
                        <div className="text-left mr-6">
                          {Number(index) + 1}
                        </div>
                        <h4 className="w-full focusable link">
                          {post.metadata.title}
                        </h4>
                      </div>
                      <div className="flex items-center mt-2 sm:mt-0  justify-between">
                        <p className="text-xs text-left sm:text-right md:mb-0 mr-2 ml-8 sm:ml-0 text-text/70">
                          <time>{extractDate(post.metadata.publishedAt)}</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <a
                  className="w-full cursor-pointer"
                  aria-label={post.metadata.title}
                  href={post.metadata.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full  py-1 transform hover:scale-[1.01] transition-all">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <div className="flex items-center">
                        <div className="text-left mr-6">
                          {Number(index) + 1}
                        </div>
                        <h4 className="w-full focusable link">
                          {post.metadata.title}
                        </h4>
                      </div>
                      <div className="flex items-center mt-2 sm:mt-0  justify-between">
                        <p className="text-xs text-left sm:text-right md:mb-0 mr-2 ml-8 sm:ml-0 text-text/70">
                          <time>{extractDate(post.metadata.publishedAt)}</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </React.Fragment>
          ))}
      </div>
    </section>
  );
};

export default blogsPage;
