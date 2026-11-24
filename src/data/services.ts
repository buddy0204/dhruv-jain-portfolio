// What a prospective freelance client can hire you for.
// Keep this in line with what you actually offer; edit freely.

export interface Service {
  id: string;
  title: string;
  forWho: string;
  summary: string;
  includes: string[];
  proof: string;
  proofHref: string;
}

export const services: Service[] = [
  {
    id: "d2c",
    title: "Google Ads for D2C & e-commerce",
    forWho: "For brands selling online that want ad spend to come back as profitable revenue.",
    summary:
      "Performance Max, Search, Shopping and Demand Gen, built on keyword research and run against a ROAS target.",
    includes: [
      "Keyword and competitor research",
      "Campaign structure and product feed optimisation",
      "Conversion tracking checks",
      "Weekly search term and bid optimisation",
      "Budget scaling where ROAS holds",
    ],
    proof: "5x+ ROAS for Louis Stitch, 10x+ for Jaiman Toys",
    proofHref: "#brands",
  },
  {
    id: "apps",
    title: "App install campaigns",
    forWho: "For app teams that need installs and in-app actions at a cost that makes sense.",
    summary:
      "Google App campaigns, Meta Ads and Apple Search Ads, managed on a weekly test, kill and scale rhythm.",
    includes: [
      "Channel and market planning",
      "Install, in-app action and value-based bidding",
      "Creative testing pipeline",
      "New-market and new-app launch tests",
      "CPI, CPA and ROAS reporting",
    ],
    proof: "30-app portfolio, 100+ campaigns, ₹50L+ monthly spend",
    proofHref: "#app-campaigns",
  },
  {
    id: "audit",
    title: "Account audit & tracking review",
    forWho: "For teams already running ads who suspect spend is leaking or data can't be trusted.",
    summary:
      "A structured review of your account and measurement, with a prioritised list of what to fix first.",
    includes: [
      "Campaign structure and targeting review",
      "Search term and placement waste",
      "Conversion tracking and GA4 checks",
      "Bidding and budget allocation review",
      "Prioritised action plan",
    ],
    proof: "The same audit I run before taking on any account",
    proofHref: "#process",
  },
];
