import Image from "next/image";

export const Network = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-8">Network</h2>
      <div className="space-y-2 pb-5">
        <div>
          <span className="font-medium dark:text-white">
            Router / Firewall:{" "}
          </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            Netgear 1100 running pfSense+. Handles DHCP, DNS, firewall rules,
            and VLANs. All routing logic lives here rather than scattered across
            consumer firmware.
          </span>
        </div>
        <div>
          <span className="font-medium dark:text-white">Switch: </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            TP-Link 8-port managed switch. All lab machines are wired through
            this — predictable latency, no Wi-Fi surprises.
          </span>
        </div>
        <div>
          <span className="font-medium dark:text-white">Access Point: </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            TP-Link Archer C6 in AP mode. DHCP is handled by pfSense, not the
            Archer. It&apos;s just an Access Point.
          </span>
        </div>
        <div>
          <span className="font-medium dark:text-white">Remote Access: </span>
          <span className="text-zinc-600 dark:text-zinc-400">
            Tailscale. Every device in the lab is on a Tailnet, so I can reach
            anything from anywhere without poking holes in the firewall.
          </span>
        </div>
      </div>
      <div className="py-3">
        <Image
          src="/images/homelab/netgear-1100.jpeg"
          alt="Netgear 1100 running pfSense+"
          width={900}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
