/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lastfm.freetls.fastly.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/(gh|github|git)/:slug*",
        destination: "https://github.com/0xN1nja/:slug*",
        permanent: true,
      },
      {
        source: "/(twitter|x)",
        destination: "https://twitter.com/0xN1nja",
        permanent: true,
      },
      {
        source: "/(linkedin|ln)",
        destination: "https://www.linkedin.com/in/0xN1nja/",
        permanent: true,
      },
      {
        source: "/(spotify)",
        destination: "https://open.spotify.com/user/zs3iqfqkwdhgtzitjrhg38xvj",
        permanent: true,
      },
      {
        source: "/(feed.xml|feed|rss)",
        destination: "https://0xn1nja.dev/rss.xml",
        permanent: true,
      },
      {
        source: "/gpg",
        destination: "https://github.com/0xN1nja.gpg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
