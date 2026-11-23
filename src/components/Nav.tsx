import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navSections, profile } from "../data/profile";
import { useScrollSpy } from "../hooks/useScrollSpy";

const ids = navSections.map((s) => s.id);

export function Nav() {
  const active = useScrollSpy(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-rule bg-canvas/85 backdrop-blur-md" : "border-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <nav aria-label="Primary" className="page flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight text-chalk">
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <rect width="64" height="64" rx="14" fill="#141C2C" />
            <path d="M14 44 L26 32 L34 38 L50 20" fill="none" stroke="#F0B45B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="20" r="5" fill="#5ED3A1" />
          </svg>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navSections.map((s) => {
            const isActive = active === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-chalk" : "text-haze hover:text-chalk"
                  }`}
                >
                  {s.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brass transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden !px-5 !py-2 text-sm sm:inline-flex">
            Let's work together
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-rule text-chalk lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-rule bg-canvas lg:hidden"
      >
        <ul className="page flex flex-col py-6">
          {navSections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`block border-b border-rule py-4 text-2xl font-semibold tracking-tight ${
                  active === s.id ? "text-brass" : "text-chalk"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
          <li className="pt-8">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              Let's work together
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
