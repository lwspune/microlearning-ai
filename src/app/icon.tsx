import { ImageResponse } from "next/og";
import { LADDER_PATH } from "@/components/icons";

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
          background: "#3b33a8",
        }}
      >
        <svg
          width={px * 0.62}
          height={px * 0.62}
          viewBox="0 0 20 20"
          fill="none"
          stroke="#ffffff"
          strokeWidth={2}
          strokeLinecap="round"
        >
          <path d={LADDER_PATH} />
        </svg>
      </div>
    ),
    { width: px, height: px },
  );
}
