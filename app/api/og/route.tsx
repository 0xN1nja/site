import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 8192;
  for (let i = 0; i < bytes.byteLength; i += chunkSize) {
    binary += String.fromCharCode(
      ...Array.from(bytes.subarray(i, i + chunkSize)),
    );
  }
  return btoa(binary);
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");

  const [fontData, bgImageData] = await Promise.all([
    fetch(
      new URL("../../../public/fonts/kaisei-tokumin-bold.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer()),
    fetch(new URL("../../../public/meta/og.jpg", import.meta.url)).then((res) =>
      res.arrayBuffer(),
    ),
  ]);

  const bgDataUrl = `data:image/jpeg;base64,${arrayBufferToBase64(bgImageData)}`;

  return new ImageResponse(
    <div
      style={{
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
      }}
    >
      <div
        style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontFamily: "Kaisei Tokumin",
            fontStyle: "normal",
            color: "white",
            letterSpacing: "-0.02em",
            textShadow: "0 0 40px rgba(255,255,255,0.6)",
            borderBottom: "2px solid rgba(255,255,255,0.5)",
            paddingBottom: 4,
          }}
        >
          0xN1nja
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 130,
          fontFamily: "Kaisei Tokumin",
          letterSpacing: "-0.05em",
          fontStyle: "normal",
          color: "white",
          lineHeight: "120px",
          whiteSpace: "pre-wrap",
        }}
      >
        {postTitle}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 38,
          fontFamily: "Kaisei Tokumin",
          fontStyle: "normal",
          color: "white",
          letterSpacing: "0.04em",
          borderBottom: "2px solid rgba(255,255,255,0.5)",
          paddingBottom: 4,
        }}
      >
        19 / software engineer
      </div>
    </div>,
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
}
