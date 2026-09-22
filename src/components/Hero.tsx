import { ArrowDown, Mail, Linkedin, FileText } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section id="hero" className="flex min-h-screen flex-col justify-center px-6 py-32 md:pl-28 md:pr-16">
      <div className="mx-auto w-full max-w-4xl">
        <p className="animate-fade-up font-mono text-sm tracking-tight text-paper-muted">
          {profile.role} — {profile.location}
        </p>

        <h1 className="animate-fade-up mt-6 font-display text-5xl leading-[1.05] text-paper sm:text-6xl md:text-7xl" style={{ animationDelay: "80ms" }}>
          {profile.name}
        </h1>

        <p className="animate-fade-up mt-8 max-w-2xl text-lg leading-relaxed text-paper/90 md:text-xl" style={{ animationDelay: "160ms" }}>
          {profile.positioning}
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm" style={{ animationDelay: "240ms" }}>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-paper-muted transition-colors hover:text-gold">
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-paper-muted transition-colors hover:text-gold">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`./${profile.resumeFile}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-paper-muted transition-colors hover:text-gold">
            <FileText className="h-4 w-4" /> Resume
          </a>
        </div>

        <a
          href="#work"
          className="animate-fade-up group mt-14 inline-flex items-center gap-2 border border-ink-border px-5 py-3 font-mono text-sm text-paper transition-colors hover:border-gold hover:text-gold"
          style={{ animationDelay: "320ms" }}
        >
          View my work
          <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
