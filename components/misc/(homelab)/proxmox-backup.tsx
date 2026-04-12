import Image from "next/image";

export const ProxmoxBackup = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-8">
        Backups — Proxmox Backup Server
      </h2>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        The Compaq laptop has a Core 2 Duo with 4 GB RAM. It runs Proxmox Backup
        Server. It doesn&apos;t need to be fast, it just needs to be on and
        available. PBS integrates directly with Proxmox VE so every VM gets
        backed up on a schedule automatically.
      </p>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        PBS uses chunk-based deduplication — only changed blocks are written
        between backups — which makes incremental backups very efficient even on
        a spinning disk. Restores are checksum-verified and accessible straight
        from the Proxmox VE UI.
      </p>
      <div className="py-3">
        <Image
          src="/images/homelab/proxmox-bakup-server.png"
          alt="Proxmox Backup Server dashboard"
          width={900}
          height={520}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
