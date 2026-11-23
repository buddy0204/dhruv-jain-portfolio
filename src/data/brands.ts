// Brand profiles and case studies.
//
// Honesty rule for this file: the only performance figures are the ROAS levels
// you've confirmed (5x+ and 10x+). Spend, revenue, conversion counts and growth
// percentages are intentionally absent. If a client approves sharing more,
// add it to `extraMetrics` and it will render automatically.
// Learnings and challenge wording are drafted from your brief: review them
// and adjust anything that doesn't match how the account actually ran.

export type CampaignType = "Performance Max" | "Search" | "Shopping" | "Demand Gen";

export interface Metric {
  label: string;
  value: string;
}

export interface Brand {
  id: string;
  name: string;
  initials: string;
  logoSrc?: string; // drop a file in /public and set e.g. "louis-stitch.svg"
  website?: string;
  category: string;
  model: string;
  role: string;
  roas: number; // ROAS floor maintained, as a multiple
  campaigns: CampaignType[];
  responsibilities: string[];
  approach: string[];
  learnings: string[];
  caseStudy: {
    title: string;
    chapters: {
      overview: string;
      objective: string;
      challenges: string[];
      strategy: string[];
      execution: string[];
      performance: string;
      learnings: string[];
    };
    extraMetrics: Metric[]; // e.g. { label: "Conversion rate", value: "x%" }. Leave empty until approved.
  };
}

export const brands: Brand[] = [
  {
    id: "louis-stitch",
    name: "Louis Stitch",
    initials: "LS",
    category: "Premium men's footwear, apparel & accessories",
    model: "D2C fashion brand selling through its own store and marketplaces",
    role: "Freelance Google Ads manager",
    roas: 5,
    campaigns: ["Performance Max", "Search", "Shopping"],
    responsibilities: [
      "Day-to-day management of the Google Ads account",
      "Campaign optimisation for profitable revenue, not just volume",
      "Audience targeting and audience signal setup",
      "Conversion performance and tracking checks",
      "Scaling budgets where returns held",
    ],
    approach: [
      "Keep brand, category and product searches in separate structures so each is bid and judged on its own economics.",
      "Feed Performance Max with clean product data and focused audience signals instead of letting it run on defaults.",
      "Scale in measured steps, and only where ROAS holds above target after each change.",
    ],
    learnings: [
      "Premium products face long consideration. Remarketing and branded search carry real weight in the final purchase.",
      "Generic category terms are crowded by marketplaces, so product-specific queries are where a brand store wins efficiently.",
    ],
    caseStudy: {
      title: "Driving Profitable D2C Growth Through Google Ads",
      chapters: {
        overview:
          "Louis Stitch is a premium men's fashion brand known for footwear, leather accessories and apparel. Alongside marketplaces, it sells direct through its own online store, which is where Google Ads sends its traffic.",
        objective:
          "Grow online revenue from Google Ads while keeping every rupee of spend accountable to a profitable return, with a ROAS floor of 5x.",
        challenges: [
          "Premium price points mean buyers compare and return several times before purchasing.",
          "Broad category searches such as formal shoes are dominated by marketplaces and large retailers.",
          "Automated campaign types can drift toward cheap, low-value traffic without close supervision.",
        ],
        strategy: [
          "Split the account by intent: brand protection, high-intent category and product searches, and product-feed-led Shopping and Performance Max.",
          "Use keyword research to find specific, purchase-ready queries (material, style, occasion) instead of competing head-on for the broadest terms.",
          "Give Performance Max strong audience signals and organised asset groups so its automation works from good inputs.",
        ],
        execution: [
          "Researched and grouped keywords by product line and intent, then built Search ad groups around them.",
          "Optimised Shopping and Performance Max around product groups, with regular review of which products earned their spend.",
          "Mined search term reports weekly to add negatives and promote converting queries.",
          "Checked conversion tracking so bidding optimised against real purchases.",
          "Raised budgets gradually where ROAS stayed above target.",
        ],
        performance:
          "ROAS has been maintained above 5x: each rupee of ad spend returns more than five rupees in tracked conversion value, while the account continues to scale.",
        learnings: [
          "Efficiency in a premium category comes from precision: fewer, better-matched searches beat broad reach.",
          "Automation performs only as well as its inputs. Feed quality and audience signals matter as much as budget.",
        ],
      },
      extraMetrics: [],
    },
  },
  {
    id: "jaiman-toys",
    name: "Jaiman Toys",
    initials: "JT",
    category: "Kids' toys & gifting",
    model: "D2C e-commerce store",
    role: "Freelance Google Ads manager",
    roas: 10,
    campaigns: ["Search", "Shopping", "Performance Max"],
    responsibilities: [
      "Managing the Google Ads account end to end",
      "Campaign structure design",
      "Keyword research and keyword planning",
      "Performance optimisation focused on purchases",
      "Protecting advertising efficiency while driving sales",
    ],
    approach: [
      "Build structure around how parents and gift-buyers actually search: by toy type, age and occasion.",
      "Lean on Shopping and product-level visibility, since toy buyers decide visually and on price.",
      "Trim wasted spend continuously through search term reviews and negatives.",
    ],
    learnings: [
      "The buyer is rarely the user. Searches mention age, occasion and gifting, so ads and structure should too.",
      "Tight keyword control and steady negative keyword work are what keep a double-digit ROAS stable over time.",
    ],
    caseStudy: {
      title: "Scaling E-commerce Performance With 10x+ ROAS",
      chapters: {
        overview:
          "Jaiman Toys is an Indian toy brand selling a wide catalogue of kids' toys and gifts through its own e-commerce store.",
        objective:
          "Drive purchases from Google Ads at a very high level of efficiency, with a ROAS floor of 10x, and grow from there.",
        challenges: [
          "A large catalogue across many toy types and age groups makes structure and product prioritisation harder.",
          "Toy searches mix many intents: browsing for ideas, comparing prices and buying a specific item.",
          "Demand shifts around birthdays, festivals and seasonal gifting moments.",
        ],
        strategy: [
          "Use Keyword Planner research to map the catalogue to search demand by category, age group and occasion.",
          "Run Search for high-intent queries and Shopping for product-led discovery, with Performance Max extending reach where it stays efficient.",
          "Keep the account biased toward purchase intent so spend follows buyers, not browsers.",
        ],
        execution: [
          "Planned keyword lists by toy category and intent, and structured campaigns and ad groups to match.",
          "Wrote ads that reflect the search: age suitability, gifting and product specifics.",
          "Reviewed search terms regularly, adding negatives for irrelevant and low-intent queries.",
          "Optimised product groups and Performance Max toward converting products.",
          "Monitored efficiency closely through demand peaks and adjusted budgets accordingly.",
        ],
        performance:
          "ROAS has been maintained above 10x: each rupee of ad spend returns more than ten rupees in tracked conversion value.",
        learnings: [
          "Intent categorisation done early pays off for as long as the account runs.",
          "High ROAS is not set once. It is protected weekly through search term and product-level decisions.",
        ],
      },
      extraMetrics: [],
    },
  },
];
