import { readFileSync } from "node:fs";
import { join } from "node:path";
import { profile } from "@/config/links";

export const ogImageSize = { width: 1200, height: 630 };

let cachedAvatarDataUrl: string | null = null;

function getAvatarDataUrl() {
  if (!cachedAvatarDataUrl) {
    const bytes = readFileSync(join(process.cwd(), "public", "avatar.jpg"));
    cachedAvatarDataUrl = `data:image/jpeg;base64,${bytes.toString("base64")}`;
  }
  return cachedAvatarDataUrl;
}

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        background: "linear-gradient(135deg, #0a0a0a 0%, #151514 55%, #0a0a0a 100%)",
        fontFamily: "sans-serif",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse (Satori) only renders plain <img> */}
      <img
        alt=""
        src={getAvatarDataUrl()}
        width={168}
        height={168}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          objectPosition: "50% 22%",
          border: "3px solid rgba(255,255,255,0.18)",
        }}
      />

      <div
        style={{
          display: "flex",
          fontSize: 56,
          fontWeight: 700,
          color: "#f5f5f5",
          letterSpacing: 2,
        }}
      >
        {profile.name}
      </div>

      <div style={{ display: "flex", fontSize: 28, color: "#a3a3a3" }}>{profile.tagline}</div>

      <div
        style={{
          display: "flex",
          marginTop: 8,
          padding: "10px 28px",
          borderRadius: 999,
          border: "1px solid rgba(224,180,110,0.4)",
          color: "#e0b46e",
          fontSize: 24,
          letterSpacing: 1,
        }}
      >
        links.bortolettotech.com
      </div>
    </div>
  );
}
