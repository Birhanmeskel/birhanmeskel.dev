import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/site";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = { bg: "#1a1410", text: "#ede3d6", heading: "#f8f1e7", muted: "#a8998a", accent: "#e0a84e" };
const STACK = ["Next.js", "NestJS", "React Native", "Power Platform"];

// Cached so the image is prerendered at build time (a static PNG with Content-Length),
// instead of being regenerated on every request — some crawlers (WhatsApp) are picky.
async function loadFonts() {
  "use cache";
  // Cached values must be serializable, so pass the font files through as base64.
  const files = await Promise.all([
    readFile(join(process.cwd(), "src/assets/Inter-Regular.woff")),
    readFile(join(process.cwd(), "src/assets/Inter-ExtraBold.woff")),
  ]);
  return files.map((f) => f.toString("base64"));
}

function toArrayBuffer(base64: string): ArrayBuffer {
  const buf = Buffer.from(base64, "base64");
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer;
}

export default async function OpengraphImage() {
  const [regular, extraBold] = (await loadFonts()).map(toArrayBuffer);
  const domain = profile.siteUrl.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: `radial-gradient(circle at 85% 15%, rgba(224,168,78,0.18), transparent 55%), ${COLORS.bg}`,
          fontFamily: "Inter",
          color: COLORS.text,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 20,
            border: `3px solid rgba(224,168,78,0.4)`,
            color: COLORS.accent,
            fontSize: 56,
            fontWeight: 800,
          }}
        >
          B
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, color: COLORS.heading, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ marginTop: 12, fontSize: 34, color: COLORS.accent }}>{profile.title}</div>
          <div style={{ marginTop: 24, fontSize: 28, color: COLORS.muted, maxWidth: 900 }}>{profile.tagline}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24 }}>
          <div style={{ display: "flex", gap: 12 }}>
            {STACK.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 999,
                  background: "rgba(224,168,78,0.12)",
                  color: COLORS.accent,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", color: COLORS.muted, whiteSpace: "nowrap" }}>{domain}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
