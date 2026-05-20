import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";

const chapters = [
  { href: "/about", label: "About", img: "/images/home/candle.jpg" },
  { href: "/frankenstein", label: "Frankenstein", img: "/images/frankenstein/lightning.jpg" },
  { href: "/hamlet", label: "Hamlet", img: "/images/hamlet/castle.jpg" },
  { href: "/macbeth", label: "Macbeth", img: "/images/macbeth/heath.jpg" },
  { href: "/synthesis", label: "Synthesis", img: "/images/synthesis/mirror.jpg" },
  { href: "/reflection", label: "Reflection", img: "/images/synthesis/victor.jpg" },
];

export default function HomePage() {
  return (
    <PageTransition>
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/home/candle.jpg)",
            filter: "saturate(0.5) brightness(0.4) contrast(1.15)",
          }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(122,31,31,0.28) 0%, rgba(10,10,10,0.92) 70%)",
          }}
        />

        <div className="relative max-w-[1200px] mx-auto w-full px-6 md:px-10 py-32 md:py-40">
          <div className="max-w-[820px]">
            <span className="eyebrow mb-8">ENG4U Culminating Project</span>
            <h1 className="display mb-8">
              The Destructive Power of <em>Obsession</em>
            </h1>
            <p className="hook mb-12">
              Three protagonists chose obsession. Three foils chose otherwise.
            </p>

            <Reveal delay={0.3}>
              <p className="prose-lit max-w-[640px] mb-12">
                Obsession in these texts isolates the protagonist, distorts
                judgment, and turns desire into destruction. Across{" "}
                <em>Hamlet</em>, <em>Macbeth</em>, and <em>Frankenstein</em>,
                separated by more than two centuries and three genres, the same
                psychological pattern emerges. This site traces how each
                protagonist collapses under obsession and how each text quietly
                plants an alternative in its foils. The choice between fixation
                and restraint is still in front of every reader.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <Link href="/frankenstein" className="cta">
                Begin
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28 border-t border-rule">
        <Reveal>
          <div className="flex items-baseline justify-between mb-10 md:mb-12">
            <span className="eyebrow">The Pieces</span>
            <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-cream-dim">
              Six chapters
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {chapters.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.06}>
              <Link
                href={c.href}
                className="group relative block aspect-[4/3] overflow-hidden border border-rule"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  style={{
                    backgroundImage: `url(${c.img})`,
                    filter: "saturate(0.5) brightness(0.55) contrast(1.08)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 35%, rgba(10,10,10,0.92) 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-crimson opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-gold mb-2 block">
                    Chapter {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif italic text-[24px] md:text-[28px] text-cream group-hover:text-gold transition-colors duration-300">
                    {c.label}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
