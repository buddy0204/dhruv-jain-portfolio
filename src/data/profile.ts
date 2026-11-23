// Personal details used across the whole site. Edit here, not in components.
export const profile = {
  name: "Dhruv Jain",
  role: "Performance Marketer, Google Ads",
  location: "Ahmedabad, India",
  email: "dhruvjaindp03@gmail.com",
  linkedin: "https://linkedin.com/in/dhruv-jain-analyst",
  github: "https://github.com/buddy0204",
  resumeFile: "Dhruv_Jain_Resume.pdf",

  headline: "Turning Ad Spend Into Measurable Growth.",
  intro:
    "I'm Dhruv Jain, a Performance Marketer specializing in Google Ads, D2C growth, and data-driven customer acquisition. I build and optimize advertising strategies focused on measurable business outcomes.",

  about: [
    "I run Google Ads for D2C brands with one question in mind: does this spend come back as profitable revenue? For Louis Stitch that has meant holding ROAS above 5x, and for Jaiman Toys above 10x.",
    "Most of the work happens before a budget goes up. I start with the product and the search behaviour around it: what people type, what they mean by it, and which of those searches a brand can win profitably. Campaign structure, bidding and creative follow from that research, and search term reports keep it honest afterwards.",
    "Alongside freelance work, I run paid acquisition in-house at Pixster Studio across Google Ads, Meta Ads and Apple Search Ads for a portfolio of 30 apps (more on that in the in-house section above). That role trained the habit I bring to every account: track weekly, catch drift early, and let the data decide what gets cut and what gets scaled.",
  ],

  toolkit: [
    "Google Ads",
    "Google Keyword Planner",
    "Google Merchant Center",
    "GA4",
    "Conversion tags & UTMs",
    "Looker Studio",
    "Power BI",
    "SQL & Python for analysis",
  ],

  // Shown in the About section. Source: resume (public/Dhruv_Jain_Resume.pdf).
  experience: [
    { role: "Freelance Google Ads & performance marketing", org: "D2C brands", period: "Ongoing" },
    { role: "Data Analyst / Growth Marketer", org: "Pixster Studio", period: "Oct 2025 – present" },
    { role: "Market Researcher", org: "OHSM", period: "May – Oct 2025" },
    { role: "Bachelor of Computer Applications", org: "Christ University, Bengaluru", period: "2022 – 2025" },
  ],
};

export const navSections = [
  { id: "results", label: "Results" },
  { id: "brands", label: "Brands" },
  { id: "case-studies", label: "Case studies" },
  { id: "in-house", label: "In-house" },
  { id: "expertise", label: "Expertise" },
  { id: "keyword-research", label: "Keyword research" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
] as const;
