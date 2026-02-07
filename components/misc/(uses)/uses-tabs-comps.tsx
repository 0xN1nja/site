import Image from "next/image";

import { Colophon } from "@/components/misc/(uses)/colophon";
import { DesignAndColors } from "@/components/misc/(uses)/design-colors";
import { MyLogo } from "@/components/misc/(uses)/my-logo";
import { Typography } from "@/components/misc/(uses)/typography";

import setup from "@/public/images/uses/setup.png";

export const AllTabs = () => {
  return (
    <section className="border-none">
      <Image
        src={setup}
        placeholder="blur"
        alt={"Desktop setup 1"}
        width={1920}
        height={1080}
        className={"h-full object-top py-3"}
        priority
      />
      <EverydayTab />
      <SoftwareTab />
      <BrowserTab />
      <CodingTab />
      <WebsiteTab />
    </section>
  );
};

const EverydayTabData = [
  {
    key: "Laptop",
    desc: 'MacBook Air M4 13" 16GB RAM 512GB SSD Sky Blue',
  },
  {
    key: "Phone",
    desc: "iPhone 13 256GB",
  },
  {
    key: "Watch",
    desc: "Apple Watch Series 9",
  },
  {
    key: "Earphones",
    desc: "AirPods Pro 2",
  },
  {
    key: "Mouse",
    desc: "Apple Magic Mouse",
  },
];

export const EverydayTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Everyday</h1>

      {EverydayTabData.map((data, i) => (
        <div key={i}>
          <span className="font-medium dark:text-white">{data.key}: </span>
          <span className="text-zinc-600 dark:text-zinc-400">{data.desc}</span>
        </div>
      ))}
    </div>
  );
};

const SoftwareTabData = [
  {
    key: "OS",
    desc: "MacOS",
  },
  {
    key: "Terminal",
    desc: "Kitty",
  },
  {
    key: "Text Editor",
    desc: "Neovim and VSCode",
  },
  {
    key: "Video Streaming",
    desc: "Plex and Jellyfin",
  },
  {
    key: "Music",
    desc: "Apple Music and Spotify",
  },
  {
    key: "Notes",
    desc: "Obsidian",
  },
];

export const SoftwareTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Software</h1>

      {SoftwareTabData.map((data, i) => (
        <div key={i}>
          <span className="font-medium dark:text-white">{data.key}: </span>
          <span className="text-zinc-600 dark:text-zinc-400">{data.desc}</span>
        </div>
      ))}
    </div>
  );
};

const BrowserTabData = [
  {
    desc: "Dark Reader",
  },
  {
    desc: "JSON Viewer",
  },
  {
    desc: "KaraKeep",
  },
  {
    desc: "uBlock Origin",
  },
  {
    desc: "Proton Pass",
  },
  {
    desc: "Proton VPN",
  },
  {
    desc: "Return YouTube Dislike",
  },
];

export const BrowserTab = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold py-8">Browser</h1>

        <div className="pb-5">
          I use Safari as my primary browser and Brave as my secondary browser.
        </div>
      </div>
      Here are the browser extensions I use:
      {BrowserTabData.map((data, i) => (
        <div key={i}>
          <p className="text-zinc-600 dark:text-zinc-400">
            <span className="dark:text-white">{i + 1}. </span>
            {data.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export const CodingTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold py-8">Coding</h1>

      <div className="pb-5">
        I use Neovim most of the time and occasionally VSCode.
      </div>

      <div>
        <span className="font-medium dark:text-white">Font: </span>
        <span className="text-zinc-600 dark:text-zinc-400">
          Jetbrains Mono Nerd Font
        </span>
      </div>
      <div>
        <span className="font-medium dark:text-white">Theme: </span>
        <span className="text-zinc-600 dark:text-zinc-400">Tokyonight</span>
      </div>
    </div>
  );
};

const InspirationsList = [
  {
    title: "anishde.dev",
    link: "https://anishde.dev",
  },
  {
    title: "delba.dev",
    link: "https://delba.dev",
  },
  {
    title: "github.com/vimfn/www",
    link: "https://github.com/vimfn/www",
  },
  {
    title: "honghong.me",
    link: "https://honghong.me",
  },
  {
    title: "jahir.dev",
    link: "https://jahir.dev",
  },
  {
    title: "leerob.io",
    link: "https://leerob.io",
  },
  {
    title: "marcbouchenoire.com",
    link: "https://marcbouchenoire.com",
  },
  {
    title: "ped.ro",
    link: "https://ped.ro",
  },
  {
    title: "ui.aceternity.com",
    link: "https://ui.aceternity.com",
  },
  {
    title: "ui.shadcn.com",
    link: "https://ui.shadcn.com",
  },
  {
    title: "zenorocha.com",
    link: "https://zenorocha.com",
  },
];

InspirationsList.sort((a, b) => {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();
  if (titleA < titleB) return -1;
  if (titleA > titleB) return 1;
  return 0;
});

export const WebsiteTab = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold pt-8">Website</h1>
      <h1 className="text-xl font-bold py-5">Tech Stack</h1>
      <p>
        This website is created with Next.js, Tailwind CSS, MDX, Umami, and
        PlanetScale. It's hosted on Vercel. If you're curious, feel free to
        explore the source code on{" "}
        <a
          href="https://github.com/0xN1nja/site"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {""}.
      </p>
      <Colophon />
      <div>
        <h1 className="text-xl font-bold py-5">Inspirations</h1>
        <p>
          Thanks to these awesome websites for inspiring me to build this site,
          listed in alphabetical order.
        </p>
        <ul className="list-disc mx-4 mt-6">
          {InspirationsList.map(({ title, link }) => (
            <li key={link}>
              <a className="link" target="_blank" href={link} rel="noreferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="text-xl font-bold py-5">Typography</h1>
      <p className="pb-5">
        For the website typography, I am using Inter for most of the content and
        Kaisei Tokumin for Open Graph Images and a few other elements. Both have
        some font features enabled to make them stand out from the default.
      </p>
      <Typography />
      <h1 className="text-xl font-bold py-5">Design & Colors</h1>
      <DesignAndColors />
      <h1 className="text-xl font-bold py-5">Logo</h1>
      My personal logo is designed by myself.
      <MyLogo />
    </div>
  );
};
