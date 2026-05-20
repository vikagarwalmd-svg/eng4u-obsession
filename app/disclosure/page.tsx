import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { ChapterNav } from "@/components/ChapterNav";

export default function DisclosurePage() {
  return (
    <PageTransition>
      <article className="max-w-[720px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
        <Reveal>
          <span className="eyebrow mb-6">AI Use &amp; Attributions</span>
          <h1 className="page-title mb-12">
            Disclosure <em>&amp; Credits</em>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="prose-lit mb-12">
            <p>
              This project was developed in accordance with the ENG4U
              Culminating Activity&rsquo;s AI use policy, which permits the use
              of AI tools. The thematic argument, foil-character framework, and
              personal reflection are Rohan Agarwal&rsquo;s own. Claude, an AI
              assistant from Anthropic, was used to refine prose for clarity,
              design and build the website front-end (HTML, CSS, React
              components, deployment), and source the imagery from public-domain
              archives. All analytical claims and the literary argument are the
              author&rsquo;s own.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="pt-8 border-t border-rule space-y-8">
            <Credit
              title="Texts Cited"
              items={[
                "Shelley, Mary. Frankenstein. 1818.",
                "Shakespeare, William. Hamlet. c. 1601.",
                "Shakespeare, William. Macbeth. 1606.",
              ]}
            />
            <Credit
              title="Imagery"
              items={[
                "All imagery sourced from Wikimedia Commons (public domain).",
                "Paintings: Caspar David Friedrich The Sea of Ice (1824) and Wanderer above the Sea of Fog (1818); Henry Fuseli The Nightmare (1781); Francisco Goya Saturn Devouring His Son (1819–23) and The Sleep of Reason Produces Monsters (1799); John Everett Millais Ophelia (1851); Caravaggio Narcissus (1597–99); Pieter Claesz Vanitas Still Life (1630).",
                "Photography: Kronborg Castle (the historical Elsinore); moorland; candle; ghost; bloody hands; daggers; memento mori. All Wikimedia Commons.",
              ]}
            />
            <Credit
              title="Typography"
              items={[
                "EB Garamond (body) — Georg Duffner, SIL Open Font License.",
                "Inter (UI) — Rasmus Andersson, SIL Open Font License.",
              ]}
            />
            <Credit
              title="Build"
              items={[
                "Next.js 16, React 19, Tailwind CSS 4, Framer Motion. Hosted on Vercel.",
              ]}
            />
          </div>
        </Reveal>
      </article>
      <ChapterNav current="/disclosure" />
    </PageTransition>
  );
}

function Credit({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="font-sans text-[12px] tracking-[0.18em] uppercase text-gold mb-3">
        {title}
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-cream-dim text-[15px] leading-[1.55]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
