import { approach } from "../data/profile";
import { RoasCalculator } from "src/components/RoasCalculator.tsx";

export function Approach() {
  return (
    <section id="approach" className="border-t border-ink-border px-6 py-28 md:pl-28 md:pr-16">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="font-display text-3xl text-paper md:text-4xl">My approach</h2>
        <p className="mt-4 max-w-prose text-paper-muted">How I move from a data point to a decision.</p>

        <ol className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-5">
          {approach.map((item, i) => (
            <li key={item.step} className="relative border-t border-ink-border pt-5">
              <span className="font-mono text-xs text-paper-faint">0{i + 1}</span>
              <h3 className="mt-2 font-display text-xl text-paper">{item.step}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper-muted">{item.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <h3 className="font-display text-xl text-paper">Try the math</h3>
          <p className="mt-2 max-w-prose text-sm text-paper-muted">
            The same formula behind every decision above. Plug in your own numbers — this isn't tied to any
            specific campaign.
          </p>
          <div className="mt-6">
            <RoasCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
