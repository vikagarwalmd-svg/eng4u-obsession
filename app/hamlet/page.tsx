import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { Collage, CollageLayer } from "@/components/Collage";
import { PullQuote } from "@/components/PullQuote";
import { ChapterNav } from "@/components/ChapterNav";

export default function HamletPage() {
  return (
    <PageTransition>
      <article className="max-w-[1100px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
        <Reveal>
          <span className="eyebrow mb-4">William Shakespeare · c. 1601</span>
          <h1 className="page-title mb-12">
            <em>Hamlet</em>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <Collage className="mb-16">
            <CollageLayer
              src="/images/hamlet/castle.jpg"
              cover
              opacity={0.72}
            />
            <CollageLayer
              src="/images/hamlet/ghost.jpg"
              top="5%"
              left="8%"
              width="40%"
              height="70%"
              opacity={0.45}
              z={2}
            />
            <CollageLayer
              src="/images/hamlet/skull.jpg"
              bottom="10%"
              right="8%"
              width="35%"
              height="50%"
              opacity={0.7}
              rotate={-3}
              z={3}
            />
            <CollageLayer
              src="/images/hamlet/dagger.jpg"
              top="32%"
              right="36%"
              width="22%"
              height="32%"
              opacity={0.55}
              rotate={45}
              z={4}
            />
          </Collage>
        </Reveal>

        <Reveal delay={0.2}>
          <PullQuote>
            O, from this time forth, my thoughts be bloody, or be nothing
            worth!
          </PullQuote>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="prose-lit max-w-[680px] mx-auto">
            <p className="dropcap">
              Hamlet&rsquo;s obsession is not with killing Claudius but with
              the demand placed on him by his father&rsquo;s ghost. The
              fixation manifests as paralysis: he ruminates, philosophizes, and
              performs his &ldquo;antic disposition&rdquo; instead of acting.
              Shakespeare exposes obsessive thought through soliloquy. In
              &ldquo;To be or not to be,&rdquo; the question of whether to
              avenge his father transforms into the question of whether life
              is worth enduring.
            </p>

            <p>
              The inability to resolve the fixation causes devastating
              collateral damage. Hamlet impulsively kills Polonius on
              suspicion, and Ophelia descends into madness and drowns. The
              play-within-a-play is his attempt to externalize his doubt and
              confirm Claudius&rsquo;s guilt. Yet even after receiving proof,
              he still delays. His declaration, &ldquo;O, from this time forth,
              my thoughts be bloody, or be nothing worth!&rdquo; marks the
              pivot where obsessive paralysis turns toward violence.
            </p>

            <p>
              By the gravedigger scene, his fixation has narrowed almost
              entirely to mortality, symbolized in his contemplation of
              Yorick&rsquo;s skull. The duel resolves the obsession not through
              controlled revenge but through complete destruction. Gertrude,
              Laertes, Claudius, and Hamlet die in rapid succession, the guilty
              and the innocent consumed together. Through soliloquies that
              expose his obsessive interiority and an antic disposition that
              blurs performance with reality, Shakespeare presents revenge not
              as justice but as a force of total collapse.
            </p>
          </div>
        </Reveal>
      </article>
      <ChapterNav current="/hamlet" />
    </PageTransition>
  );
}
