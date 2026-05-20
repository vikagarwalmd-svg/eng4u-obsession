import Link from "next/link";

const chapters = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/frankenstein", label: "Frankenstein" },
  { href: "/hamlet", label: "Hamlet" },
  { href: "/macbeth", label: "Macbeth" },
  { href: "/synthesis", label: "Synthesis" },
  { href: "/reflection", label: "Reflection" },
  { href: "/disclosure", label: "Disclosure" },
];

export function ChapterNav({ current }: { current: string }) {
  const idx = chapters.findIndex((c) => c.href === current);
  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx >= 0 && idx < chapters.length - 1 ? chapters[idx + 1] : null;

  return (
    <nav className="max-w-[1100px] mx-auto px-6 md:px-10 mt-20 pt-12 border-t border-rule">
      <div className="grid grid-cols-2 gap-6">
        <div>
          {prev && (
            <Link
              href={prev.href}
              className="group block transition-opacity hover:opacity-100 opacity-80"
            >
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-dim block mb-2">
                &larr; Previous
              </span>
              <span className="font-serif italic text-[22px] md:text-[26px] text-cream group-hover:text-gold transition-colors">
                {prev.label}
              </span>
            </Link>
          )}
        </div>
        <div className="text-right">
          {next && (
            <Link
              href={next.href}
              className="group block transition-opacity hover:opacity-100 opacity-80"
            >
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream-dim block mb-2">
                Next &rarr;
              </span>
              <span className="font-serif italic text-[22px] md:text-[26px] text-cream group-hover:text-gold transition-colors">
                {next.label}
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
