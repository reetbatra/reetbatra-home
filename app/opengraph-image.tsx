import { ImageResponse } from "next/og";

export const alt = "Reet Batra. Builder at heart, marketer by habit.";
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
          padding: 72,
          background: "#fdfaf5",
          color: "#1c1a17",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 4,
            color: "#9c8c80",
            fontFamily: "monospace",
          }}
        >
          <span>REETBATRA.COM</span>
          <span>BANGALORE, INDIA</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, lineHeight: 1, letterSpacing: -4 }}>
            Builder at heart,
          </div>
          <div
            style={{
              fontSize: 108,
              lineHeight: 1,
              letterSpacing: -4,
              color: "#c87358",
              fontStyle: "italic",
            }}
          >
            marketer by habit.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 28,
            color: "#7a6d63",
            fontFamily: "sans-serif",
          }}
        >
          <span>Reet Batra</span>
          <span>Currently building AskTota</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
