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
              personal reflection were developed by Rohan Agarwal. Claude, an
              AI assistant, was used to support drafting, edit prose for
              clarity, design and build the website front-end, source and tint
              collage imagery, and deploy the site. All analytical claims are
              the author&rsquo;s own.
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
                "Film stills used under fair use for educational purposes: Frankenstein (1994, dir. Kenneth Branagh), Hamlet (1996, dir. Kenneth Branagh), The Tragedy of Macbeth (2021, dir. Joel Coen).",
                "Additional public-domain imagery sourced from Wikimedia Commons.",
                "Select compositional elements generated with AI (Midjourney / DALL·E) where specific imagery was not available.",
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
