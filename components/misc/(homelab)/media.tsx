import Image from "next/image";

const arrStack = [
  ["Overseerr", "Request management and media discovery tool"],
  ["Radarr", "Movie library management and downloads"],
  ["Sonarr", "TV show library management and downloads"],
  ["Lidarr", "Music library management"],
  ["Readarr", "Book and eBook management"],
  ["Prowlarr", "Centralised indexer management for all *arr apps"],
  ["SABnzbd", "Usenet downloader"],
  ["qBittorrent", "Torrent downloader"],
  ["Bazarr", "Automatic subtitle downloads"],
  ["Tautulli", "Plex statistics and monitoring"],
  ["Profilarr", "Quality profile sync across *arr apps"],
  ["Trailarr", "Trailer management"],
];

export const MediaStack = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold py-8">Media Stack</h2>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        Both Plex and Jellyfin point at the same media library. Plex for the
        polished apps and hardware transcoding; Jellyfin for accessing my media
        library remotely via Tailscale. The *arr stack handles everything before
        a file lands in the library.
      </p>
      <p className="pb-5 text-zinc-600 dark:text-zinc-400">
        The flow: request on Overseerr → Radarr or Sonarr picks it up → Prowlarr
        finds a source → SABnzbd or qBittorrent downloads it → the *arr app
        renames and moves it to the media library → Plex and Jellyfin see it
        automatically.
      </p>
      <div className="overflow-x-auto pb-5">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="pb-2 pr-6 font-medium">Service</th>
              <th className="pb-2 font-medium">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {arrStack.map(([name, desc], i) => (
              <tr
                key={name}
                className={
                  i < arrStack.length - 1 ? "border-b border-border" : ""
                }
              >
                <td className="py-2 pr-6 font-medium">{name}</td>
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
          src="/images/homelab/homepage-media.webp"
          alt="Media services dashboard"
          width={900}
          height={520}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
