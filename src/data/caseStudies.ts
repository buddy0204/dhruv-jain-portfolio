// All results are described directionally (no invented or precise percentages).
// Edit copy here to update the case studies without touching component code.

export type Trend = "up" | "down" | "flat";

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  meta: {
    product: string;
    channel: string;
    objective: string;
    role: string;
  };
  challenge: string;
  actions: string[];
  result: string;
  takeaway: string;
  kpis: { label: string; direction: Trend; note: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "troas-recovery",
    index: "01",
    title: "Unsticking a tROAS campaign that had stopped spending",
    meta: {
      product: "B2C app (portfolio, anonymized)",
      channel: "Google Ads — Target ROAS",
      objective: "Campaign Optimization",
      role: "Sole owner of diagnosis and fix",
    },
    challenge:
      "One app's Target ROAS campaign had been capped by an overly conservative tROAS setting for an extended period. It had effectively stopped spending — the auction couldn't find enough inventory to bid on at that target, so the campaign was quietly going stale while budget sat unused.",
    actions: [
      "Audited the campaign to confirm the target — not creative fatigue or audience exhaustion — was the actual bottleneck",
      "Refreshed underperforming ad assets to give the auction healthier creative to work with",
      "Lowered the tROAS target deliberately, in a controlled step, to widen the auction back up",
      "Monitored spend delivery and efficiency daily post-change to confirm the fix held",
    ],
    result:
      "Spend delivery came back and stayed healthy, and overall campaign performance improved once the auction had room to compete again.",
    takeaway:
      "A campaign that stops spending isn't always a demand problem — check the constraint you set before you touch the audience or creative.",
    kpis: [
      { label: "Spend delivery", direction: "up", note: "restored to full budget pacing" },
      { label: "Auction eligibility", direction: "up", note: "widened after target adjustment" },
      { label: "Time to diagnose", direction: "down", note: "isolated to the tROAS setting quickly" },
    ],
  },
  {
    id: "creative-testing",
    index: "02",
    title: "A faster kill/scale loop for install-campaign creative",
    meta: {
      product: "Multiple apps, install campaigns",
      channel: "Meta Ads",
      objective: "Acquisition / Growth",
      role: "Ran testing cycle across the portfolio",
    },
    challenge:
      "Install campaigns across several apps in the portfolio were leaning on a small set of proven creatives. Without a structured way to test new ones, there was no clear signal on which new concepts were worth the budget — or how quickly to know.",
    actions: [
      "Briefed and launched multiple creative variants per app into live install campaigns",
      "Set a short evaluation window to judge each variant primarily on CPI",
      "Paused high-CPI variants within about a week rather than letting them run on hope",
      "Reallocated budget toward variants showing an early positive response, scaling them further",
    ],
    result:
      "The portfolio moved from a handful of static winning creatives to a running pipeline — new concepts get a fair, time-boxed test, weak performers get cut fast, and strong performers get scaled without long delays.",
    takeaway:
      "The value wasn't any single winning ad — it was building a cadence where testing, killing, and scaling all happen on a predictable weekly rhythm.",
    kpis: [
      { label: "Time to pause weak creative", direction: "down", note: "cut within ~1 week of launch" },
      { label: "Budget on validated winners", direction: "up", note: "scaled once response was positive" },
      { label: "Creative pipeline", direction: "up", note: "moved from ad hoc to a repeatable cycle" },
    ],
  },
  {
    id: "new-market-expansion",
    index: "03",
    title: "Validating a new app in a new market, starting from zero",
    meta: {
      product: "New app launch",
      channel: "Google Ads",
      objective: "Experiment / New Channel",
      role: "Built and ran the market-test plan",
    },
    challenge:
      "A new app had no acquisition history at all — no baseline CPI, no proven market, no existing campaign structure to lean on. The question was less \"can we scale this\" and more \"where does this even work.\"",
    actions: [
      "Stood up campaign structure from scratch with no prior performance data to reference",
      "Tested acquisition across several distinct markets in parallel rather than committing budget to one",
      "Tracked day-0 return alongside CPI for each market to judge early payback speed, not just volume",
      "Narrowed spend toward the market(s) showing the strongest early payback at a workable CPI",
    ],
    result:
      "One market stood out with day-0 return effectively matching spend at a healthy CPI — an early payback signal strong enough to justify committing further budget there instead of spreading thin across every market tested.",
    takeaway:
      "When there's no history to optimize against, the first job is finding where to even place the bet — early payback speed was a faster signal than raw install volume.",
    kpis: [
      { label: "Day-0 payback", direction: "up", note: "reached near break-even on spend same-day in the lead market" },
      { label: "CPI in lead market", direction: "flat", note: "held at a workable level while payback improved" },
      { label: "Markets tested in parallel", direction: "up", note: "structured comparison instead of a single bet" },
    ],
  },
];

// Portfolio-wide impact, stated directionally per the confirmed real outcomes
// (Data Analyst role, Pixster Studio) — described without specific figures.
export const portfolioImpact = [
  {
    label: "ROAS across the portfolio",
    direction: "up" as Trend,
    detail: "Meaningful increase, driven by weekly anomaly detection and faster reallocation.",
  },
  {
    label: "CPI / CPA across the portfolio",
    direction: "down" as Trend,
    detail: "Brought down through tighter targeting review and creative discipline.",
  },
  {
    label: "Manual reporting time",
    direction: "down" as Trend,
    detail: "Cut substantially after building automated Power BI and Looker Studio dashboards.",
  },
];
