import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FDF8F5",
          color: "#202838",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#9A5968" }}>MANTRA DIGITAL MAGIC</div>
        <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: 900 }}>
          Beautiful websites. Smarter digital solutions.
        </div>
        <div style={{ fontSize: 28, color: "#8E3144" }}>From £99 a month, excluding VAT · 12-month initial commitment</div>
      </div>
    ),
    size,
  );
}
