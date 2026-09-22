import type { Trend } from "../data/caseStudies";

// A small abstract directional glyph — deliberately not a data chart.
// It illustrates "up / down / flat" without implying a specific numeric value,
// since we only ever describe results directionally.
export function TrendGlyph({ direction, className = "" }: { direction: Trend; className?: string }) {
  const paths: Record<Trend, string> = {
    up: "M2 20 L10 12 L16 16 L26 4",
    down: "M2 6 L10 14 L16 10 L26 22",
    flat: "M2 13 L26 13",
  };
  const color = direction === "up" ? "text-signal-up" : direction === "down" ? "text-paper-muted" : "text-gold";

  return (
    <svg
      viewBox="0 0 28 26"
      className={`h-5 w-7 shrink-0 ${color} ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path d={paths[direction]} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {direction === "up" && <path d="M20 4 L26 4 L26 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
      {direction === "down" && <path d="M20 22 L26 22 L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}
