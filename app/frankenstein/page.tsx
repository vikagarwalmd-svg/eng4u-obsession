import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { Collage, CollageLayer } from "@/components/Collage";
import { PullQuote } from "@/components/PullQuote";

export default function FrankensteinPage() {
  return (
    <PageTransition>
      <article className="max-w-[1100px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
        <Reveal>
          <span className="eyebrow mb-4">Mary Shelley · 1818</span>
          <h1 className="page-title mb-12">
            <em>Frankenstein</em>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <Collage className="mb-16">
            <CollageLayer
              src="/images/frankenstein/lightning.jpg"
              cover
              opacity={0.72}
            />
            <CollageLayer
              src="/images/frankenstein/creature.jpg"
              top="10%"
              right="5%"
              width="45%"
              height="70%"
              opacity={0.55}
              rotate={-2}
              z={2}
            />
            <CollageLayer
              src="/images/frankenstein/door.jpg"
              bottom="8%"
              left="6%"
              width="35%"
              height="50%"
              opacity={0.5}
              z={3}
            />
            <CollageLayer
              src="/images/frankenstein/journal.jpg"
              top="22%"
              left="32%"
              width="28%"
              height="38%"
              opacity={0.6}
              rotate={3}
              z={4}
            />
          </Collage>
        </Reveal>

        <Reveal delay={0.2}>
          <PullQuote>
            Learn from me, if not by my precepts, at least by my example, how
            dangerous is the acquirement of knowledge.
          </PullQuote>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="prose-lit max-w-[680px] mx-auto">
            <p className="dropcap">
              Victor Frankenstein&rsquo;s obsession is not with creating life
              but with conquering death and transcending mortal limits. The
              fixation isolates him from the start, pulling him away from
              Elizabeth and his family during his years at Ingolstadt, where he
              works in secret. The turning point comes in Chapter 5. Victor
              succeeds in animating the creature, then immediately recoils in
              horror and abandons it. The fulfillment of his obsession is also
              its collapse. But the fixation does not end. It only changes
              target.
            </p>

            <p>
              The consequences spread outward through a chain of deaths Victor
              can neither stop nor escape. William, his younger brother, is the
              first victim. Justine, entirely innocent, is executed for
              William&rsquo;s death while Victor stays silent, unable to reveal
              a truth no one would believe. Then Henry Clerval. Then Elizabeth,
              on their wedding night. With each death, Victor&rsquo;s obsession
              only shifts: from creating the creature to destroying it. The
              pursuit is identical in shape, only the object has changed.
            </p>

            <p>
              By the Arctic ending, Victor is still pursuing the creature even
              as he dies on Walton&rsquo;s ship. The frame narrative transforms
              his story into a warning Walton receives directly. The Arctic
              landscape reflects Victor&rsquo;s interior ruin, and the doubling
              between creator and creature shows how obsession produces its own
              mirror image.
            </p>
          </div>
        </Reveal>
      </article>
    </PageTransition>
  );
}
