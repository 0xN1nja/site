export const Storage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-8">Storage — Unraid</h2>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        The tower PC runs Unraid. It has a Core 2 Duo with 4 GB RAM (sounds
        underpowered, but a NAS spends most of its time waiting for disk I/O,
        not crunching numbers, so it holds up fine)
      </p>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        Unraid&apos;s lets you mix drive sizes and add disks one at a time, with
        a single parity drive protecting against one disk failure. The array
        handles media and long-term storage; an SSD cache pool takes fast writes
        and flushes them to the array overnight. Everything is shared over
        SMB/NFS to the rest of the network.
      </p>
    </div>
  );
};
