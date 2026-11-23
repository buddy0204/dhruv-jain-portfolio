import type { Brand } from "../../data/brands";

// Logo placeholder: a monogram until a logo file is supplied via `logoSrc`.
export function BrandMark({ brand, size = "md" }: { brand: Brand; size?: "md" | "lg" }) {
  const dims = size === "lg" ? "h-16 w-16 text-xl" : "h-12 w-12 text-base";
  if (brand.logoSrc) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${brand.logoSrc}`}
        alt={`${brand.name} logo`}
        className={`${dims} rounded-xl bg-chalk object-contain p-2`}
        loading="lazy"
        width={64}
        height={64}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className={`${dims} grid shrink-0 place-items-center rounded-xl border border-rule bg-well font-bold tracking-tight text-chalk`}
    >
      {brand.initials}
    </span>
  );
}
