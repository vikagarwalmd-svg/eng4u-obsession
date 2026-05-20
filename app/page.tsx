import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";

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
    </PageTransition>
  );
}
