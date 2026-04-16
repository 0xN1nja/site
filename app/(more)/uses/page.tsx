import { UsesTabs } from "@/components/misc/(uses)/uses-tab";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "0xN1nja // uses",
  description: "A list of software and hardware that I use.",
  openGraph: {
    title: "0xN1nja // uses",
    description: "A list of software and hardware that I use.",
    images: ["https://0xn1nja.dev/og/uses.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "0xN1nja // uses",
    description: "A list of software and hardware that I use.",
    images: ["https://0xn1nja.dev/og/uses.png"],
  },
};

const usesPage = () => {
  return (
    <section>
      <div className="pb-5">
        <h1 className="text-2xl font-bold pb-8">Uses</h1>
        Here's a list of software and hardware that I use on a regular basis.
        <br />
        <br />
        <p>
          Every once in a while someone asks me about my development environment
          or has questions about certain hardware. I thought it would be fun to
          list out everything I use here. Keep in mind, I change things around
          quite a bit, but I will try to keep this page updated. If I missed
          anything, please let me know.
        </p>
      </div>
      <UsesTabs />
    </section>
  );
};

export default usesPage;
