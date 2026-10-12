import { ImageResponse } from "next/og";

/** Home-screen icons for the PWA manifest: /icon/192 and /icon/512. */
export function generateImageMetadata() {
  return [192, 512].map((px) => ({ id: String(px), size: { width: px, height: px }, contentType: "image/png" }));
}

export default async function Icon({ id }: { id: Promise<string | number> }) {
  const px = Number(await id);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1d4ed8",
          color: "#ffffff",
          fontSize: px * 0.5,
          fontWeight: 700,
          fontStyle: "italic",
        }}
      >
        i
      </div>
    ),
    { width: px, height: px },
  );
}
