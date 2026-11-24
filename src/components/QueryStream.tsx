import { useEffect, useRef, useState } from "react";
import { CornerDownRight, Pause, Play, Search } from "lucide-react";
import { sampleQueries, intentMeta, type Intent } from "../data/expertise";
import { IntentChip } from "./ui/IntentChip";
import { useReducedMotion } from "../hooks/useReducedMotion";

const FEED_SIZE = 4;
const SEED = [9, 8, 7];

function countIntents(idx: number[]) {
  const c: Record<Intent, number> = { buy: 0, compare: 0, learn: 0, block: 0 };
  idx.forEach((i) => c[sampleQueries[i].intent]++);
  return c;
}
const intents: Intent[] = ["buy", "compare", "learn", "block"];
const barColor: Record<Intent, string> = {
  buy: "bg-intent-buy",
  compare: "bg-intent-compare",
  learn: "bg-intent-learn",
  block: "bg-intent-block",
};

// Hero visual: illustrative search queries arrive, get classified by intent,
// and are routed to a campaign or excluded. Pausable; static under reduced motion.
export function QueryStream() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [sorted, setSorted] = useState(false);
  // Start with a few already-sorted queries so the panel never opens empty.
  const [feed, setFeed] = useState<number[]>(SEED);
  const [tally, setTally] = useState<Record<Intent, number>>(() => countIntents(SEED));
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  const current = sampleQueries[index];
  const running = !reduced && !userPaused && !hovered && visible;

  // Pause when scrolled offscreen or the tab is hidden.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting && !document.hidden));
    io.observe(el);
    const onVis = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  useEffect(() => {
    if (!running) return;
    let t: number;
    if (typed < current.query.length) {
      t = window.setTimeout(() => setTyped((n) => n + 1), 34 + Math.random() * 40);
    } else if (!sorted) {
      t = window.setTimeout(() => setSorted(true), 450);
    } else {
      t = window.setTimeout(() => {
        setFeed((f) => [index, ...f].slice(0, FEED_SIZE));
        setTally((s) => ({ ...s, [current.intent]: s[current.intent] + 1 }));
        setIndex((i) => (i + 1) % sampleQueries.length);
        setTyped(0);
        setSorted(false);
      }, 1500);
    }
    return () => window.clearTimeout(t);
  }, [running, typed, sorted, index, current]);

  // Reduced motion: a complete, static snapshot.
  const staticMode = reduced;
  const feedItems = staticMode ? sampleQueries.slice(1, 1 + FEED_SIZE) : feed.map((i) => sampleQueries[i]);
  const counts = staticMode
    ? countIntents(sampleQueries.map((_, i) => i))
    : tally;
  const total = Math.max(1, intents.reduce((n, k) => n + counts[k], 0));
  const shownQuery = staticMode ? sampleQueries[0].query : current.query.slice(0, typed);
  const shownSorted = staticMode || sorted;
  const shown = staticMode ? sampleQueries[0] : current;

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="grid-paper relative overflow-hidden rounded-[28px] border border-rule bg-surface/80 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-6"
      role="figure"
      aria-label="Illustration: incoming searches sorted by intent and routed to campaigns"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-haze">Incoming searches, sorted by intent</p>
        {!reduced && (
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            className="grid h-8 w-8 place-items-center rounded-full border border-rule text-haze transition-colors hover:text-chalk"
            aria-label={userPaused ? "Play animation" : "Pause animation"}
          >
            {userPaused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
        )}
      </div>

      {/* Search box */}
      <div className="mt-4 rounded-2xl border border-rule bg-well px-4 py-3.5">
        <div className="flex items-center gap-3" aria-hidden="true">
          <Search className="h-4 w-4 shrink-0 text-dim" />
          <span className="min-h-[1.5rem] truncate text-[15px] text-chalk sm:text-base">
            {shownQuery}
            {!staticMode && !sorted && <span className="ml-px inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-caret bg-brass" />}
          </span>
        </div>
        <div
          className={`mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-rule pt-3 text-sm transition-opacity duration-300 ${
            shownSorted ? "opacity-100" : "opacity-0"
          }`}
          aria-live="polite"
        >
          <IntentChip intent={shown.intent} />
          <span className="inline-flex items-center gap-1.5 text-haze">
            <CornerDownRight className="h-3.5 w-3.5" aria-hidden="true" />
            {shown.route}
          </span>
        </div>
      </div>

      {/* Recently sorted */}
      <ul className="mt-4 space-y-1" aria-label="Recently sorted searches">
        {Array.from({ length: FEED_SIZE }).map((_, i) => {
          const q = feedItems[i];
          return (
            <li
              key={q ? `${q.query}-${i}` : `empty-${i}`}
              className={`flex min-h-[44px] items-center justify-between gap-3 rounded-xl px-3 py-2 ${q ? "bg-canvas/50" : ""}`}
              style={{ opacity: q ? 1 - i * 0.18 : 1 }}
            >
              {q ? (
                <>
                  <span className={`truncate text-sm ${q.intent === "block" ? "text-dim line-through decoration-intent-block/60" : "text-chalk/90"}`}>
                    {q.query}
                  </span>
                  <IntentChip intent={q.intent} />
                </>
              ) : (
                <span className="h-px w-full bg-rule/60" aria-hidden="true" />
              )}
            </li>
          );
        })}
      </ul>

      {/* Running mix */}
      <div className="mt-5">
        <div className="flex h-2 overflow-hidden rounded-full bg-well" aria-hidden="true">
          {intents.map((k) => (
            <span
              key={k}
              className={`${barColor[k]} transition-[width] duration-700 ease-out`}
              style={{ width: `${(counts[k] / total) * 100}%` }}
            />
          ))}
        </div>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-haze">
          {intents.map((k) => (
            <li key={k} className="inline-flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${barColor[k]}`} aria-hidden="true" />
              {intentMeta[k].label}
              <span className="nums text-dim">{counts[k]}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-dim">Illustrative example of how I sort search intent. Not client data.</p>
      </div>
    </div>
  );
}
