import type { Metadata } from "next/types";
import {
  Hardware,
  MediaStack,
  Monitoring,
  Network,
  OtherServices,
  ProxmoxBackup,
  ProxmoxVE,
  Setup,
  Storage,
} from "@/components/misc/(homelab)";

export const metadata: Metadata = {
  title: "0xN1nja // homelab",
  description: "A look at the hardware and software running in my homelab.",
  openGraph: {
    title: "0xN1nja // homelab",
    description: "A look at the hardware and software running in my homelab.",
    images: ["https://0xn1nja.dev/og/homelab.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "0xN1nja // homelab",
    description: "A look at the hardware and software running in my homelab.",
    images: ["https://0xn1nja.dev/og/homelab.png"],
  },
};

const HomelabPage = () => {
  return (
    <section>
      <div className="pb-5">
        <h1 className="text-2xl font-bold pb-8">Homelab</h1>
        Here&apos;s a breakdown of everything running in my homelab — hardware,
        network, virtualisation, storage, monitoring and services.
        <br />
        <br />
        <p>
          Every once in a while someone asks me about my Homelab. This page
          covers the hardware, what&apos;s running on it, and how it all fits
          together. If anything&apos;s missing or you have questions, hit me up
          on{" "}
          <a
            href="https://x.com/0xN1nja"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            @0xN1nja
          </a>
          .
        </p>
      </div>

      <Setup />
      <Hardware />
      <Network />
      <ProxmoxVE />
      <ProxmoxBackup />
      <Storage />
      <Monitoring />
      <MediaStack />
      <OtherServices />
    </section>
  );
};

export default HomelabPage;
