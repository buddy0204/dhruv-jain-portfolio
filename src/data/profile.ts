// Personal details used across the whole site. Edit here, not in components.
export const profile = {
  name: "Dhruv Jain",
  role: "Performance Marketer",
  location: "Ahmedabad, India",
  email: "dhruvjaindp03@gmail.com",
  linkedin: "https://linkedin.com/in/dhruv-jain-analyst",
  github: "https://github.com/buddy0204",
  resumeFile: "Dhruv_Jain_Resume.pdf",

  headline: "Turning Ad Spend Into Measurable Growth.",
  intro:
    "I'm Dhruv Jain, a Performance Marketer who runs paid acquisition for D2C brands and mobile apps: Google Ads for e-commerce sales, and app install campaigns across Google, Meta and Apple Search Ads. Every campaign is built on research and judged on what it returns.",
  availability: "Taking on new freelance projects",

  about: [
    "I work on two kinds of growth problems. For D2C brands, it's Google Ads that has to come back as profitable revenue: ROAS held above 5x for Louis Stitch and above 10x for Jaiman Toys. For mobile apps, it's installs and in-app actions at a cost that makes sense, across a 30-app portfolio on Google, Meta and Apple Search Ads.",
    "The common thread is research before budget. I start with the product and the behaviour around it: what people search for, what they mean by it, and which audiences, keywords and markets are worth paying for. Structure, bidding and creative follow from that, and weekly data keeps it honest afterwards.",
    "Running a large app portfolio trained the habit I bring to every freelance account: track weekly, catch drift early, and let the data decide what gets cut and what gets scaled. You get one person who plans, builds, optimises and reports, with no hand-offs in between.",
  ],

  toolkit: [
    "Google Ads",
    "Google App campaigns",
    "Meta Ads",
    "Apple Search Ads",
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
    { role: "Freelance performance marketer", org: "D2C brands and apps", period: "Ongoing" },
    { role: "Data Analyst / Growth Marketer", org: "Pixster Studio", period: "Oct 2025 – present" },
    { role: "Market Researcher", org: "OHSM", period: "May – Oct 2025" },
    { role: "Bachelor of Computer Applications", org: "Christ University, Bengaluru", period: "2022 – 2025" },
  ],
};

export const navSections = [
  { id: "services", label: "Services" },
  { id: "brands", label: "D2C brands" },
  { id: "app-campaigns", label: "App campaigns" },
  { id: "expertise", label: "Expertise" },
  { id: "keyword-research", label: "Keyword research" },
  { id: "process", label: "Process" },
  { id: "about", label: "About" },
] as const;
