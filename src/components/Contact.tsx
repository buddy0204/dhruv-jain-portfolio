import { Mail, Linkedin, FileText } from "lucide-react";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section id="contact" className="border-t border-ink-border px-6 py-32 md:pl-28 md:pr-16">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="font-display text-3xl leading-tight text-paper md:text-5xl">
          Let's build and scale better acquisition.
        </h2>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 font-mono text-sm">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-paper transition-colors hover:text-gold">
            <Mail className="h-4 w-4" /> {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-paper transition-colors hover:text-gold">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={`./${profile.resumeFile}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-paper transition-colors hover:text-gold">
            <FileText className="h-4 w-4" /> Resume
          </a>
        </div>

        <p className="mt-24 font-mono text-xs text-paper-faint">
          {profile.name} — {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
