import { useState } from "react";

export function RoasCalculator() {
  const [spend, setSpend] = useState("5000");
  const [installs, setInstalls] = useState("400");
  const [revenue, setRevenue] = useState("6500");

  const spendNum = parseFloat(spend) || 0;
  const installsNum = parseFloat(installs) || 0;
  const revenueNum = parseFloat(revenue) || 0;

  const cpi = installsNum > 0 ? spendNum / installsNum : null;
  const roas = spendNum > 0 ? (revenueNum / spendNum) * 100 : null;
  const profitable = roas !== null && roas >= 100;

  const inputClasses =
    "w-full rounded-sm border border-ink-border bg-ink-950 px-3 py-2 font-mono text-sm text-paper outline-none transition-colors focus:border-gold";

  return (
    <div className="rounded-sm border border-ink-border bg-ink-900 p-6 sm:p-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label htmlFor="calc-spend" className="font-mono text-xs uppercase tracking-wide text-paper-faint">
              Ad spend ($)
            </label>
            <input
              id="calc-spend"
              type="number"
              inputMode="decimal"
              min="0"
              value={spend}
              onChange={(e) => setSpend(e.target.value)}
              className={`mt-2 ${inputClasses}`}
            />
          </div>
          <div>
            <label htmlFor="calc-installs" className="font-mono text-xs uppercase tracking-wide text-paper-faint">
              Installs
            </label>
            <input
              id="calc-installs"
              type="number"
              inputMode="decimal"
              min="0"
              value={installs}
              onChange={(e) => setInstalls(e.target.value)}
              className={`mt-2 ${inputClasses}`}
            />
          </div>
          <div>
            <label htmlFor="calc-revenue" className="font-mono text-xs uppercase tracking-wide text-paper-faint">
              Revenue generated ($)
            </label>
            <input
              id="calc-revenue"
              type="number"
              inputMode="decimal"
              min="0"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              className={`mt-2 ${inputClasses}`}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 border-t border-ink-border pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-paper-faint">CPI (cost per install)</p>
            <p className="mt-2 font-display text-4xl text-paper">
              {cpi !== null ? `$${cpi.toFixed(2)}` : "—"}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-paper-faint">ROAS</p>
            <p className={`mt-2 font-display text-4xl ${profitable ? "text-signal-up" : "text-paper"}`}>
              {roas !== null ? `${roas.toFixed(0)}%` : "—"}
            </p>
            {roas !== null && (
              <p className="mt-1 text-xs text-paper-muted">
                {profitable
                  ? "Above 100% — spend has paid for itself."
                  : "Below 100% — spend hasn't paid for itself yet."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
