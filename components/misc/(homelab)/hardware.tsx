const hardwareData = [
  {
    device: "Netgear 1100",
    role: "Router / Firewall",
    specs: "1 GB RAM",
    os: "pfSense+",
  },
  {
    device: "TP-Link 8-Port",
    role: "Managed Switch",
    specs: "—",
    os: "—",
  },
  {
    device: "TP-Link Archer C6",
    role: "Access Point",
    specs: "Dual-band Wi-Fi",
    os: "—",
  },
  {
    device: "Raspberry Pi 4",
    role: "Monitoring",
    specs: "2 GB RAM",
    os: "Raspberry Pi OS",
  },
  {
    device: "HP Laptop",
    role: "Primary hypervisor",
    specs: "i3 11th Gen, 24 GB RAM",
    os: "Proxmox VE",
  },
  {
    device: "Compaq Laptop",
    role: "Backup server",
    specs: "Core 2 Duo, 4 GB RAM",
    os: "Proxmox Backup Server",
  },
  {
    device: "Tower PC",
    role: "NAS",
    specs: "Core 2 Duo, 4 GB RAM",
    os: "Unraid",
  },
];

export const Hardware = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-8">Hardware</h2>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        A mix of machines running different workloads.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="pb-2 pr-6 font-medium">Device</th>
              <th className="pb-2 pr-6 font-medium">Role</th>
              <th className="pb-2 pr-6 font-medium">Specs</th>
              <th className="pb-2 font-medium">OS</th>
            </tr>
          </thead>
          <tbody>
            {hardwareData.map((row, i) => (
              <tr
                key={row.device}
                className={
                  i < hardwareData.length - 1 ? "border-b border-border" : ""
                }
              >
                <td className="py-2 pr-6 font-medium">{row.device}</td>
                <td className="py-2 pr-6 text-zinc-600 dark:text-zinc-400">
                  {row.role}
                </td>
                <td className="py-2 pr-6 text-zinc-600 dark:text-zinc-400">
                  {row.specs}
                </td>
                <td className="py-2 text-zinc-600 dark:text-zinc-400">
                  {row.os}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
