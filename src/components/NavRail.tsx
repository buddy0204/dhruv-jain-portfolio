import { useScrollSpy } from "../hooks/useScrollSpy";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "work", label: "Case Studies" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
];

export function NavRail() {
  const active = useScrollSpy(sections.map((s) => s.id));

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-0 top-0 z-40 hidden h-screen w-16 flex-col items-center justify-center gap-6 border-r border-ink-border md:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group relative flex items-center"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`h-2 w-2 rounded-full transition-colors ${
                isActive ? "bg-gold" : "bg-ink-border group-hover:bg-paper-muted"
              }`}
            />
            <span className="pointer-events-none absolute left-6 whitespace-nowrap rounded bg-ink-800 px-2 py-1 font-mono text-[11px] text-paper opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
