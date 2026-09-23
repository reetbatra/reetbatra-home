import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#1c1a17",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: 15,
            color: "#c87358",
            letterSpacing: "-0.5px",
            lineHeight: 1,
          }}
        >
          RB
        </span>
      </div>
    ),
    { ...size }
  );
}
