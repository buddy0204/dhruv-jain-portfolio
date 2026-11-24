import { useState } from "react";
import { Check, Copy, FileText, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";

const subject = encodeURIComponent("Freelance performance marketing enquiry");
const body = encodeURIComponent(
  "Hi Dhruv,\n\nBrand or app (with link):\nWhat we need help with (Google Ads / app installs / audit):\nChannels currently running and rough monthly budget:\nWhat we'd like to achieve:\n\n"
);

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-rule">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="page relative py-28 md:py-40">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-rule bg-surface/60 px-4 py-2 text-sm text-chalk">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-intent-buy opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-intent-buy" />
          </span>
          {profile.availability}
        </p>
        <h2 id="contact-title" className="mt-8 max-w-[12ch] text-[clamp(3rem,9vw,7rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-chalk">
          Let's Work Together
        </h2>
        <p className="mt-8 max-w-[52ch] text-xl leading-relaxed text-haze">
          Whether you're a D2C brand that needs Google Ads to answer to revenue, or an app that needs installs at a
          sensible cost, tell me what you're working on and where your ads stand today. I'll reply with what I'd look
          at first.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}?subject=${subject}&body=${body}`} className="btn-primary !px-7 !py-4 text-base">
            Email me about your project
          </a>
          <button type="button" onClick={copyEmail} className="btn-ghost !py-4">
            {copied ? <Check className="h-4 w-4 text-intent-buy" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            <span aria-live="polite">{copied ? "Email copied" : profile.email}</span>
          </button>
        </div>

        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-rule pt-8 text-haze">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-chalk">
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-chalk">
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </li>
          <li>
            <a
              href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-chalk"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Resume (PDF)
            </a>
          </li>
        </ul>
      </div>

      <footer className="relative border-t border-rule">
        <div className="page flex flex-col justify-between gap-2 py-8 text-sm text-dim sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}, {profile.role}
          </p>
          <a href="#top" className="transition-colors hover:text-chalk">
            Back to top
          </a>
        </div>
      </footer>
    </section>
  );
}
