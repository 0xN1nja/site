import Image from "next/image";

const otherServices = [
  [
    "AdGuard Home",
    "Network-wide ad and tracker blocking (runs on both Pi and main node)",
  ],
  ["Nextcloud", "Self-hosted cloud storage — self-hosted Google Drive"],
  ["Paperless-ngx", "Document management with OCR"],
  ["Immich", "Photo and video backup — self-hosted Google Photos"],
  ["Miniflux", "Minimal RSS reader"],
  ["KaraKeep", "Bookmarks, read-later, and web archiving"],
  ["Portainer", "Docker container management UI (Pi and main node)"],
  ["Mealie", "Recipe management — import from URLs"],
  ["Grafana", "Metrics and monitoring dashboards"],
  ["Searxng", "Self-hosted meta search engine"],
  ["Code Server", "VS Code in the browser"],
  ["Gotify", "Push notifications for lab alerts"],
  ["Navidrome", "Music streaming server, Subsonic-compatible"],
  ["Changedetection.io", "Get notified when a webpage changes"],
  ["Calibre / Calibre-Web", "eBook library and browser-based reading"],
  ["Audiobookshelf", "Audiobook and podcast server with progress sync"],
  ["Filebrowser", "Web-based file manager"],
  ["StirlingPDF", "Self-hosted PDF tools"],
  ["IT Tools", "Developer utilities"],
  ["PairDrop", "Local network file sharing"],
  ["Microbin", "Self-hosted pastebin"],
];

export const OtherServices = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-8">Other Services</h2>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        Beyond the media stack, there&apos;s a collection of other self-hosted
        tools covering storage, productivity, monitoring, and utilities.
      </p>
      <div className="overflow-x-auto pb-5">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="pb-2 pr-6 font-medium">Service</th>
              <th className="pb-2 font-medium">What it does</th>
            </tr>
          </thead>
          <tbody>
            {otherServices.map(([name, desc], i) => (
              <tr
                key={name}
                className={
                  i < otherServices.length - 1 ? "border-b border-border" : ""
                }
              >
                <td className="py-2 pr-6 font-medium whitespace-nowrap">
                  {name}
                </td>
                <td className="py-2 text-zinc-600 dark:text-zinc-400">
                  {desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-3">
        <Image
          src="/images/homelab/homepage-services.png"
          alt="Services dashboard"
          width={900}
          height={520}
          className="w-full h-auto"
        />
      </div>
      <div className="py-3 pb-8">
        <Image
          src="/images/homelab/homepage-bookmarks.png"
          alt="Bookmarks dashboard"
          width={900}
          height={520}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
