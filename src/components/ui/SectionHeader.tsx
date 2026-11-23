import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

interface Props {
  id: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
}

// Section heading with a one-time reveal as it enters the viewport.
export function SectionHeader({ id, title, lede, className = "" }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${inView ? "is-in" : ""} ${className}`}>
      <h2 id={`${id}-title`} className="h2 max-w-[18ch]">
        {title}
      </h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  );
}
