import type { ReactNode } from "react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <div className="pullquote">
      <blockquote>&ldquo;{children}&rdquo;</blockquote>
    </div>
  );
}
