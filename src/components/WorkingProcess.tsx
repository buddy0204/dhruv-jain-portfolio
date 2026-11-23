import { useEffect, useRef, useState } from "react";
import { workingProcess } from "../data/expertise";
import { SectionHeader } from "./ui/SectionHeader";
import { decisionLoop } from "../data/inhouse";

export function WorkingProcess() {
  const listRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  // Scroll-linked progress line. One passive listener, throttled with rAF.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = listRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const p = (anchor - rect.top) / rect.height;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const n = workingProcess.length;

  return (
    <section id="process" aria-labelledby="process-title" className="section border-t border-rule">
      <div className="page grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            id="process"
            title="How I take on a new account"
            lede="Nine steps from the first conversation to scaling. Tracking gets verified before money is spent, and budgets only grow where returns hold."
          />
        </div>

        <ol ref={listRef} className="relative">
          <div className="absolute bottom-6 left-[15px] top-2 w-0.5 rounded-full bg-rule" aria-hidden="true" />
          <div
            className="absolute left-[15px] top-2 w-0.5 rounded-full bg-brass"
            style={{ height: `calc((100% - 2rem) * ${progress})` }}
            aria-hidden="true"
          />
          {workingProcess.map((s, i) => {
            const reached = progress >= (i + 0.3) / n;
            return (
              <li key={s.title} className="relative flex gap-6 pb-10 last:pb-0">
                <span
                  className={`nums relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 text-xs font-bold transition-colors duration-300 ${
                    reached ? "border-brass bg-brass text-canvas" : "border-rule bg-canvas text-haze"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="pt-0.5">
                  <h3 className={`text-xl font-semibold tracking-tight transition-colors duration-300 ${reached ? "text-chalk" : "text-chalk/70"}`}>
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-[48ch] leading-relaxed text-haze">{s.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="page mt-24">
        <div className="rounded-[32px] border border-rule bg-surface p-6 sm:p-10">
          <h3 className="text-2xl font-bold tracking-tight text-chalk md:text-3xl">The weekly loop behind every decision</h3>
          <p className="mt-3 max-w-measure leading-relaxed text-haze">
            Once an account is live, this is how I move from a data point to a decision, every week.
          </p>
          <ol className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {decisionLoop.map((item, i) => (
              <li key={item.step} className="relative border-t-2 border-rule pt-5">
                <span className="absolute -top-[2px] left-0 h-0.5 w-10 bg-brass" aria-hidden="true" />
                <span className="nums text-sm font-semibold text-brass">{i + 1}</span>
                <h4 className="mt-1 text-xl font-semibold tracking-tight text-chalk">{item.step}</h4>
                <p className="mt-2 text-[15px] leading-relaxed text-haze">{item.detail}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-dim">Then back to step 1, at the new spend level.</p>
        </div>
      </div>
    </section>
  );
}
