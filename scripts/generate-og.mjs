import satori from "satori";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public/og");

fs.mkdirSync(OUT_DIR, { recursive: true });

const fontData = fs.readFileSync(
  path.join(ROOT, "public/fonts/kaisei-tokumin-bold.ttf"),
);
const bgBuffer = fs.readFileSync(path.join(ROOT, "public/meta/og.jpg"));
const bgDataUrl = `data:image/jpeg;base64,${bgBuffer.toString("base64")}`;

async function generateImage(title, filename) {
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundImage: `url(${bgDataUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 100px",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                fontSize: 48,
                fontFamily: "Kaisei Tokumin",
                fontStyle: "normal",
                color: "white",
                letterSpacing: "-0.02em",
                borderBottom: "2px solid rgba(255,255,255,0.5)",
                paddingBottom: 4,
              },
              children: "0xN1nja",
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                fontSize: 130,
                fontFamily: "Kaisei Tokumin",
                letterSpacing: "-0.05em",
                fontStyle: "normal",
                color: "white",
                lineHeight: "120px",
                whiteSpace: "pre-wrap",
              },
              children: title,
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                fontSize: 38,
                fontFamily: "Kaisei Tokumin",
                fontStyle: "normal",
                color: "white",
                letterSpacing: "0.04em",
                borderBottom: "2px solid rgba(255,255,255,0.5)",
                paddingBottom: 4,
              },
              children: "19 / software engineer",
            },
          },
        ],
      },
    },
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Kaisei Tokumin",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );

  const outPath = path.join(OUT_DIR, `${filename}.png`);
  await sharp(Buffer.from(svg)).png().toFile(outPath);
  console.log(`  generated public/og/${filename}.png`);
}

function parseFrontmatter(content) {
  const match = /---\s*([\s\S]*?)\s*---/.exec(content);
  if (!match) return {};
  const meta = {};
  for (const line of match[1].trim().split("\n")) {
    const [key, ...rest] = line.split(": ");
    if (!key) continue;
    meta[key.trim()] = rest
      .join(": ")
      .trim()
      .replace(/^['"](.*)['"]$/, "$1");
  }
  return meta;
}

async function main() {
  console.log("Generating OG images...");

  const staticPages = [
    { title: "Homelab", filename: "homelab" },
    { title: "Uses", filename: "uses" },
    { title: "Work", filename: "work" },
    { title: "Projects", filename: "projects" },
    { title: "Blogs", filename: "blogs" },
  ];

  for (const { title, filename } of staticPages) {
    await generateImage(title, filename);
  }

  const contentDir = path.join(ROOT, "content");
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const meta = parseFrontmatter(raw);
    if (meta.draft === "true") continue;
    const slug = path.basename(file, ".mdx");
    const title = meta.title || slug;
    await generateImage(title, `blog-${slug}`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
