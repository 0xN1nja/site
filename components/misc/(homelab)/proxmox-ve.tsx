import Image from "next/image";

export const ProxmoxVE = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-8">Virtualisation — Proxmox VE</h2>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        The HP laptop runs Proxmox VE, it has i3 11th-gen and 24 GB of RAM so it
        has enough headroom to run multiple VMs without issues.
      </p>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        I&apos;m not using LXC containers right now. All self-hosted services
        run inside a Debian VM using Docker Compose. It is easier to manage,
        easier to move, and closer to how things would run in a real
        environment. A Windows 11 VM is also around for when I need it.
      </p>
      <div>
        <span className="font-medium dark:text-white">VMs: </span>
        <span className="text-zinc-600 dark:text-zinc-400">
          Debian and Windows 11
        </span>
      </div>
      <div className="py-3">
        <Image
          src="/images/homelab/proxmox-ve.png"
          alt="Proxmox VE dashboard"
          width={900}
          height={520}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
