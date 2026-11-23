// Google Ads expertise, keyword research process and working process.

export type Intent = "buy" | "compare" | "learn" | "block";

export const intentMeta: Record<Intent, { label: string; description: string }> = {
  buy: { label: "Transactional", description: "Ready to purchase" },
  compare: { label: "Commercial", description: "Comparing options" },
  learn: { label: "Informational", description: "Looking for information" },
  block: { label: "Negative", description: "Excluded from spend" },
};

// Illustrative queries for the hero panel. Not taken from client accounts.
export const sampleQueries: { query: string; intent: Intent; route: string }[] = [
  { query: "leather loafers for men buy online", intent: "buy", route: "Search, product ad group" },
  { query: "birthday gift for 5 year old boy", intent: "compare", route: "Search, gifting ad group" },
  { query: "toy shop jobs near me", intent: "block", route: "Added as negative" },
  { query: "kids doctor set toy price", intent: "buy", route: "Shopping, product group" },
  { query: "best formal shoes for office", intent: "compare", route: "Search, category ad group" },
  { query: "how to polish leather shoes", intent: "learn", route: "Kept out of purchase campaigns" },
  { query: "wooden toys for 3 year old", intent: "buy", route: "Shopping, age-group listing" },
  { query: "free colouring pages printable", intent: "block", route: "Added as negative" },
];

export type FunnelStage = 0 | 1 | 2;
export const funnelStages = ["Awareness", "Consideration", "Purchase"] as const;

export interface CampaignExpertise {
  id: string;
  name: string;
  short: string;
  stages: [FunnelStage, FunnelStage];
  what: string;
  approach: string;
  techniques: string[];
  fit: string;
}

export const campaignTypes: CampaignExpertise[] = [
  {
    id: "pmax",
    name: "Performance Max",
    short: "One campaign across all of Google's inventory",
    stages: [0, 2],
    what:
      "Performance Max uses Google's automation to show ads across Search, Shopping, YouTube, Display, Discover, Gmail and Maps from a single campaign, bidding toward your conversion goals.",
    approach:
      "I treat Performance Max as a system that is only as good as its inputs. Clean product feeds, well-organised asset groups and meaningful audience signals come first, and branded traffic is watched so the campaign earns its results rather than claiming existing demand.",
    techniques: [
      "Asset groups organised by product category or theme",
      "Audience signals built from customer lists and high-intent search themes",
      "Product feed hygiene: titles, attributes and images",
      "Listing-group splits to separate best sellers from long-tail products",
      "Value-based bidding toward a target ROAS",
    ],
    fit: "The scaling engine for an established D2C catalogue, once tracking is reliable and there's enough conversion history.",
  },
  {
    id: "search",
    name: "Search",
    short: "Ads on the queries people type",
    stages: [1, 2],
    what:
      "Search campaigns show text ads when people search on Google for terms related to your keywords. It's the most direct way to reach someone who is actively looking.",
    approach:
      "Search is where keyword research pays off most. I structure campaigns by intent, write ads that answer the exact search, and review search terms constantly so spend stays on queries that convert.",
    techniques: [
      "Tightly themed ad groups built from intent-sorted keyword lists",
      "Match type strategy that balances reach and control",
      "Responsive search ads matched to the query's wording",
      "Negative keyword lists at account and campaign level",
      "Separate brand and non-brand campaigns",
    ],
    fit: "Captures high-intent demand and protects the brand name. Usually the most efficient spend in a D2C account.",
  },
  {
    id: "shopping",
    name: "Shopping",
    short: "Product listings with image and price",
    stages: [1, 2],
    what:
      "Shopping campaigns show your products, with image, price and store name, directly in search results, powered by your Merchant Center product feed.",
    approach:
      "In Shopping, the product feed is the targeting. I optimise titles and attributes for how people search, segment products by performance, and use negatives to stop products showing on the wrong queries.",
    techniques: [
      "Feed title optimisation using search-term language",
      "Product groups split by category, margin or performance",
      "Bid priority between best sellers and the long tail",
      "Search term mining for negatives and new keyword ideas",
      "Price and competitiveness checks",
    ],
    fit: "Essential for visual, price-compared products like fashion and toys, where buyers decide from the listing.",
  },
  {
    id: "demand-gen",
    name: "Demand Gen",
    short: "Visual ads on YouTube, Discover and Gmail",
    stages: [0, 1],
    what:
      "Demand Gen campaigns run image and video ads across YouTube (including Shorts), Discover and Gmail, reaching people before they start searching.",
    approach:
      "I use Demand Gen to create and re-engage interest, not to chase last-click sales. Lookalike segments and remarketing lists do the targeting, and success is judged on its contribution to the wider account.",
    techniques: [
      "Lookalike segments seeded from customer lists",
      "Remarketing to site visitors and past buyers",
      "Creative testing across image and video formats",
      "Separating prospecting from remarketing budgets",
      "Assessing impact on branded search and assisted conversions",
    ],
    fit: "Fills the top of the funnel so Search and Shopping have more demand to capture.",
  },
  {
    id: "sales",
    name: "Sales campaigns",
    short: "Campaigns built around the sales objective",
    stages: [1, 2],
    what:
      "In Google Ads, Sales is a campaign objective rather than a separate campaign type. It points Search, Shopping, Performance Max or Demand Gen campaigns at purchases, using conversion value to guide bidding.",
    approach:
      "A sales objective only works when the purchase signal is right. I verify that purchase conversions fire correctly with accurate values before moving to value-based bidding, so automation optimises toward real revenue.",
    techniques: [
      "Purchase conversion actions set as primary goals",
      "Accurate, dynamic conversion values",
      "Maximise conversion value and target ROAS bidding",
      "Budget pacing against ROAS targets",
      "Gradual target changes to avoid resetting learning",
    ],
    fit: "The objective behind every revenue-focused D2C campaign. It ties ad spend directly to sales.",
  },
];

// Supporting capabilities shown under the campaign explorer.
export const capabilities = [
  {
    title: "Conversion tracking & measurement",
    detail: "Purchase tracking, conversion values and GA4 checks, verified before any optimisation starts.",
  },
  {
    title: "Scaling & optimisation",
    detail: "Budgets raised in measured steps, only where return holds above target.",
  },
  {
    title: "Audience research & targeting",
    detail: "Customer lists, remarketing and audience signals that reflect who actually buys.",
  },
  {
    title: "Search intent analysis",
    detail: "Every query judged by what the searcher wants, then routed, bid or excluded accordingly.",
  },
];

export interface KeywordStep {
  title: string;
  summary: string;
  actions: string[];
  output: string;
  examples?: { term: string; intent: Intent }[];
}

export const keywordProcess: KeywordStep[] = [
  {
    title: "Business and product understanding",
    summary: "Research starts with the business: what sells, to whom, and at what margin.",
    actions: [
      "Map product lines, best sellers and margins",
      "Understand the customer and why they buy",
      "Note price points, seasonality and stock",
    ],
    output: "A brief of priority products and the customers searching for them.",
  },
  {
    title: "Competitor research",
    summary: "See who already competes for the same searches and how.",
    actions: [
      "Identify competitors in the paid results",
      "Review their ad messaging, offers and landing pages",
      "Find the keywords and themes they target",
    ],
    output: "Competitive gaps and terms worth contesting or avoiding.",
  },
  {
    title: "Google Keyword Planner research",
    summary: "Expand seed terms into a full list of how people actually search.",
    actions: [
      "Generate ideas from seed keywords, competitor URLs and the brand's own site",
      "Collect variations, synonyms and long-tail phrasing",
      "Filter by location and language",
    ],
    output: "A raw keyword universe for the account.",
  },
  {
    title: "Search volume and competition analysis",
    summary: "Weigh each keyword's demand against what it costs to win.",
    actions: [
      "Compare average monthly searches and trends",
      "Review competition level and top-of-page bid ranges",
      "Prioritise terms where demand and cost make sense",
    ],
    output: "A prioritised list with realistic cost expectations.",
  },
  {
    title: "Keyword intent categorisation",
    summary: "Sort every keyword by what the searcher wants to do.",
    actions: [
      "Separate transactional, commercial and informational searches",
      "Focus budget on commercial and transactional terms",
      "Flag queries that should never trigger ads",
    ],
    output: "Intent-sorted keyword groups that shape the campaign structure.",
    examples: [
      { term: "buy kids kitchen set", intent: "buy" },
      { term: "leather derby shoes price", intent: "buy" },
      { term: "best toys for 4 year olds", intent: "compare" },
      { term: "loafers vs derby shoes", intent: "compare" },
      { term: "how to clean suede shoes", intent: "learn" },
      { term: "diy toy ideas", intent: "block" },
    ],
  },
  {
    title: "Campaign and ad group structuring",
    summary: "Turn intent groups into a structure that's easy to control.",
    actions: [
      "Build campaigns by intent and product line",
      "Keep ad groups tightly themed",
      "Write ads that echo each group's search language",
    ],
    output: "A campaign structure where every ad matches the search behind it.",
  },
  {
    title: "Negative keyword planning",
    summary: "Decide upfront what the account should never pay for.",
    actions: [
      "Build negative lists for jobs, free, DIY and other irrelevant intent",
      "Prevent overlap between campaigns and ad groups",
      "Apply lists at the right level",
    ],
    output: "Negative keyword lists in place before launch.",
    examples: [
      { term: "jobs", intent: "block" },
      { term: "free", intent: "block" },
      { term: "second hand", intent: "block" },
      { term: "how to make", intent: "block" },
    ],
  },
  {
    title: "Continuous search term optimisation",
    summary: "Research doesn't stop at launch. Real queries keep refining it.",
    actions: [
      "Review search term reports on a regular cadence",
      "Promote converting queries to keywords",
      "Add new negatives as wasteful queries appear",
    ],
    output: "An account that gets more precise every week it runs.",
  },
];

export const workingProcess: { title: string; detail: string }[] = [
  { title: "Business understanding", detail: "Products, margins, customers and goals, so targets reflect real economics." },
  { title: "Account and campaign audit", detail: "Structure, tracking, spend and search terms reviewed to find what's working and what's leaking." },
  { title: "Market and competitor research", detail: "Search demand, competitor positioning and keyword opportunities mapped." },
  { title: "Strategy development", detail: "Campaign mix, structure, budgets and ROAS targets agreed in writing." },
  { title: "Campaign setup", detail: "Campaigns, ad groups, feeds, assets and negative lists built to the plan." },
  { title: "Conversion tracking verification", detail: "Purchases and values confirmed to fire correctly before spend goes live." },
  { title: "Launch and monitoring", detail: "Close daily checks while campaigns learn: spend pacing, queries and early signals." },
  { title: "Continuous optimisation", detail: "Search terms, bids, products and ads refined on a steady weekly rhythm." },
  { title: "Scaling and growth", detail: "Budget moves toward what holds its return, one measured step at a time." },
];
