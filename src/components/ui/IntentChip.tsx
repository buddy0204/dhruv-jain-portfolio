import type { Intent } from "../../data/expertise";
import { intentMeta } from "../../data/expertise";

const styles: Record<Intent, string> = {
  buy: "text-intent-buy bg-intent-buy/10 ring-intent-buy/30",
  compare: "text-intent-compare bg-intent-compare/10 ring-intent-compare/30",
  learn: "text-intent-learn bg-intent-learn/10 ring-intent-learn/30",
  block: "text-intent-block bg-intent-block/10 ring-intent-block/30",
};

export function IntentChip({ intent, className = "" }: { intent: Intent; className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[intent]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {intentMeta[intent].label}
    </span>
  );
}

export const intentText: Record<Intent, string> = {
  buy: "text-intent-buy",
  compare: "text-intent-compare",
  learn: "text-intent-learn",
  block: "text-intent-block",
};
