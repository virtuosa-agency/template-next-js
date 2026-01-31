import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { origin } = new URL(request.url);
    const imgSrc = `${origin}/images/og.png`; // public/images/og.png

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1C1C1C",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            width={1200}
            height={630}
            src={imgSrc}
            alt="Next Generation Logo"
          />
        </div>
      ),
      { width: 1200, height: 630 },
    );
  } catch (e) {
    console.log("Error generating OG image:", e);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}
