import type { CSSProperties, ReactNode } from "react";

type CollageLayerProps = {
  src: string;
  cover?: boolean;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  height?: string;
  opacity?: number;
  rotate?: number;
  z?: number;
  blend?: "normal" | "multiply" | "screen" | "overlay";
  filter?: string;
};

export function CollageLayer({
  src,
  cover,
  top,
  right,
  bottom,
  left,
  width,
  height,
  opacity = 0.6,
  rotate = 0,
  z = 1,
  blend = "normal",
  filter,
}: CollageLayerProps) {
  const style: CSSProperties = cover
    ? { inset: 0 }
    : { top, right, bottom, left, width, height };

  return (
    <div
      className="absolute bg-cover bg-center transition-all duration-700"
      style={{
        ...style,
        opacity,
        zIndex: z,
        backgroundImage: `url(${src})`,
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        mixBlendMode: blend !== "normal" ? blend : undefined,
        filter: filter ?? "saturate(0.55) contrast(1.08) brightness(0.85)",
      }}
    />
  );
}

type CollageProps = {
  children: ReactNode;
  aspect?: string;
  tint?: boolean;
  vignette?: boolean;
  className?: string;
};

export function Collage({
  children,
  aspect = "16/11",
  tint = true,
  vignette = true,
  className = "",
}: CollageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden border border-rule bg-elevated ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {children}
      {tint && (
        <div
          className="absolute inset-0 z-[10] mix-blend-multiply pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, var(--color-crimson) 0%, var(--color-crimson-deep) 100%)",
            opacity: 0.4,
          }}
        />
      )}
      {vignette && (
        <div
          className="absolute inset-0 z-[11] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.78) 100%)",
          }}
        />
      )}
    </div>
  );
}
