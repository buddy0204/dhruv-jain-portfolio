import { useState, useRef, type MouseEvent } from "react";
import {
  ArrowDown,
  Mail,
  Linkedin,
  FileText,
  Check,
} from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [copied, setCopied] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();

    if (!rect) return;

    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  async function handleCopyEmail(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-32 md:pl-28 md:pr-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500 motion-reduce:hidden"
        style={{
          background: `radial-gradient(
            600px circle at ${glow.x}% ${glow.y}%,
            rgba(216,168,87,0.07),
            transparent 45%
          )`,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-4xl">
        <p className="animate-fade-up font-mono text-sm tracking-tight text-paper-muted">
          {profile.role} — {profile.location}
        </p>

        <h1
          className="animate-fade-up mt-6 font-display text-5xl leading-[1.05] text-paper sm:text-6xl md:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          {profile.name}
        </h1>

        <p
          className="animate-fade-up mt-8 max-w-2xl text-lg leading-relaxed text-paper/90 md:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          {profile.positioning}
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm"
          style={{ animationDelay: "240ms" }}
        >
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 text-paper-muted transition-colors hover:text-gold"
            aria-label="Copy email address"
          >
            {copied ? (
              <Check className="h-4 w-4 text-signal-up" />
            ) : (
              <Mail className="h-4 w-4" />
            )}

            {copied ? "Copied!" : profile.email}
          </button>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-paper-muted transition-colors hover:text-gold"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>

          <a
            href={`./${profile.resumeFile}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-paper-muted transition-colors hover:text-gold"
          >
            <FileText className="h-4 w-4" />
            Resume
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


