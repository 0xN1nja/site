import Image from "next/image";

export const Monitoring = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-8">Monitoring</h2>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        The Raspberry Pi 4 is connected to a monitor and runs Raspberry Pi OS.
        It&apos;s dedicated to displaying the Grafana dashboard full-time, so I
        can see what&apos;s going on in the lab at a glance. It also runs some
        lightweight containers.
      </p>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        Metrics are collected via InfluxDB2 and visualised in Grafana using the{" "}
        <a
          href="https://grafana.com/grafana/dashboards/10048-proxmox/"
          className="link font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proxmox dashboard (10048)
        </a>
        . Covers node CPU, RAM, disk I/O, and network across both Proxmox hosts.
      </p>
      <div className="py-3">
        <Image
          src="/images/homelab/grafana.png"
          alt="Grafana monitoring dashboard"
          width={900}
          height={520}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
