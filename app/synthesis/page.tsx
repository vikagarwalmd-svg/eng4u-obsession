import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { Collage, CollageLayer } from "@/components/Collage";
import { ChapterNav } from "@/components/ChapterNav";

const pillars = [
  {
    text: "Frankenstein",
    foil: "Walton",
    body: "Started as an Arctic obsessive like Victor. Heard Victor's warning. Turned his ship around rather than dying for the obsession.",
  },
  {
    text: "Hamlet",
    foil: "Laertes",
    body: "Same situation as Hamlet: murdered father, devastated sister. Hamlet collapses into rumination. Laertes acts.",
  },
  {
    text: "Macbeth",
    foil: "Macduff",
    body: "After Macbeth murders his family, Macduff insists “I must also feel it as a man.” He feels the loss openly and turns it into action against the tyrant.",
  },
];

export default function SynthesisPage() {
  return (
    <PageTransition>
      <article className="max-w-[1100px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
        <Reveal>
          <span className="eyebrow mb-4">The Argument</span>
          <h1 className="page-title mb-12">
            <em>Synthesis:</em> Three Centuries, One Pattern
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <Collage aspect="16/9" className="mb-16">
            <CollageLayer
              src="/images/synthesis/mirror.jpg"
              cover
              opacity={0.82}
            />
            <CollageLayer
              src="/images/synthesis/victor.jpg"
              top="12%"
              left="8%"
              width="26%"
              height="65%"
              opacity={0.58}
              z={2}
              filter="saturate(0.25) brightness(0.65) contrast(1.25)"
            />
            <CollageLayer
              src="/images/synthesis/hamlet.jpg"
              top="12%"
              left="37%"
              width="26%"
              height="65%"
              opacity={0.58}
              z={2}
              filter="saturate(0.25) brightness(0.65) contrast(1.25)"
            />
            <CollageLayer
              src="/images/synthesis/macbeth.jpg"
              top="12%"
              right="8%"
              width="26%"
              height="65%"
              opacity={0.58}
              z={2}
              filter="saturate(0.25) brightness(0.65) contrast(1.25)"
            />
          </Collage>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 my-16 py-12 border-y border-rule">
            {pillars.map((p) => (
              <div
                key={p.text}
                className="group transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-3 block">
                  {p.text} &middot; Foil
                </span>
                <h3 className="font-serif italic text-[26px] text-crimson mb-3">
                  {p.foil}
                </h3>
                <p className="text-cream-dim text-[15px] leading-[1.65]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="prose-lit max-w-[680px] mx-auto">
            <p className="dropcap">
              <em>Macbeth</em> comes out of Jacobean England after James I took
              the throne. <em>Hamlet</em> sits in the late-Elizabethan revenge
              tradition. <em>Frankenstein</em> responds to Enlightenment
              science and the Romantic backlash against it. Despite emerging
              from these different contexts, all three texts describe obsession
              the same way: it isolates the protagonist, distorts perception,
              and destroys. The convergence itself is the question. Why do
              three authors separated by over two centuries and three genres
              describe obsession identically?
            </p>

            <p>
              The answer is in the foil characters each text places next to its
              tragic protagonist. In <em>Frankenstein</em>, Walton is not just
              Victor&rsquo;s parallel but the audience inside the novel. He
              starts the book as an Arctic obsessive like Victor.
              Shelley&rsquo;s frame narrative hands Victor&rsquo;s story to him
              as a direct warning, and Walton turns his ship around rather than
              dying for the obsession. In <em>Hamlet</em>, Laertes is the
              structural mirror. Same situation as Hamlet: murdered father,
              devastated sister. Shakespeare puts them in physical opposition
              during the final duel so the contrast is unavoidable. Hamlet
              collapses into rumination. Laertes acts. In <em>Macbeth</em>,
              Macduff is the alternative to repression and nihilism. After
              Macbeth murders his family, Macduff insists &ldquo;I must also
              feel it as a man.&rdquo; He feels the loss openly and turns it
              into action against the tyrant.
            </p>

            <p>
              Notice that these foils are minor characters. The protagonists
              get the spotlight because tragic collapse is dramatically
              compelling. The healthier alternatives exist quietly in the
              margins. The texts teach by negative example. Victor could have
              retreated like Walton. Hamlet could have acted like Laertes.
              Macbeth could have grieved like Macduff. Across centuries and
              genres, the works converge because they describe a human
              capacity, not a historical condition. All three ask the same
              question: what happens when an idea begins demanding your entire
              life?
            </p>
          </div>
        </Reveal>
      </article>
      <ChapterNav current="/synthesis" />
    </PageTransition>
  );
}
