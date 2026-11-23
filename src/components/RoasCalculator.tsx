import { useId, useState } from "react";

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

// Adapted from the original calculator for D2C: ROAS alone doesn't say whether
// spend is profitable, so it's compared with break-even ROAS from gross margin.
export function RoasCalculator() {
  const uid = useId();
  const [spend, setSpend] = useState("40000");
  const [value, setValue] = useState("140000");
  const [margin, setMargin] = useState("40");

  const s = Math.max(0, parseFloat(spend) || 0);
  const v = Math.max(0, parseFloat(value) || 0);
  const m = Math.min(100, Math.max(0, parseFloat(margin) || 0));

  const roas = s > 0 ? v / s : null;
  const breakEven = m > 0 ? 100 / m : null;
  const contribution = v * (m / 100) - s;
  const profitable = roas !== null && breakEven !== null && roas > breakEven;

  const fields = [
    { id: "spend", label: "Ad spend (₹)", value: spend, set: setSpend, max: undefined },
    { id: "value", label: "Conversion value (₹)", value: value, set: setValue, max: undefined },
    { id: "margin", label: "Gross margin (%)", value: margin, set: setMargin, max: 100 },
  ];

  return (
    <div className="rounded-[32px] border border-rule bg-surface p-6 sm:p-10">
      <div className="max-w-measure">
        <h3 className="text-2xl font-bold tracking-tight text-chalk md:text-3xl">Is your ROAS actually profitable?</h3>
        <p className="mt-3 leading-relaxed text-haze">
          A ROAS figure only means something next to your margin. Enter your own numbers to compare your ROAS with the
          break-even point. This is a general calculator, not tied to any client.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          {fields.map((f) => (
            <div key={f.id}>
              <label htmlFor={`${uid}-${f.id}`} className="text-sm font-medium text-haze">
                {f.label}
              </label>
              <input
                id={`${uid}-${f.id}`}
                type="number"
                inputMode="decimal"
                min={0}
                max={f.max}
                value={f.value}
                onChange={(e) => f.set(e.target.value)}
                className="nums mt-2 w-full rounded-xl border border-rule bg-well px-4 py-3 text-lg text-chalk outline-none transition-colors focus:border-brass"
              />
            </div>
          ))}
        </div>

        <div className="grid self-start gap-px overflow-hidden rounded-2xl border border-rule bg-rule sm:grid-cols-2" aria-live="polite">
          <div className="bg-canvas p-6">
            <p className="text-sm text-haze">Your ROAS</p>
            <p className={`nums mt-2 text-5xl font-extrabold tracking-tight ${profitable ? "text-intent-buy" : "text-chalk"}`}>
              {roas !== null ? `${roas.toFixed(1)}x` : "–"}
            </p>
          </div>
          <div className="bg-canvas p-6">
            <p className="text-sm text-haze">Break-even ROAS</p>
            <p className="nums mt-2 text-5xl font-extrabold tracking-tight text-chalk">
              {breakEven !== null ? `${breakEven.toFixed(1)}x` : "–"}
            </p>
          </div>
          <div className="bg-canvas p-6 sm:col-span-2">
            <p className="text-sm text-haze">Gross profit after ad spend</p>
            <p className={`nums mt-2 text-3xl font-bold tracking-tight ${contribution >= 0 ? "text-chalk" : "text-intent-block"}`}>
              {inr.format(contribution)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-haze">
              {roas === null || breakEven === null
                ? "Enter ad spend and a margin above zero to compare."
                : profitable
                  ? "Above break-even: this spend is adding gross profit."
                  : "At or below break-even: this spend isn't covering product costs yet."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
