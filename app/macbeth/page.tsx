import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { Collage, CollageLayer } from "@/components/Collage";
import { PullQuote } from "@/components/PullQuote";

export default function MacbethPage() {
  return (
    <PageTransition>
      <article className="max-w-[1100px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
        <Reveal>
          <span className="eyebrow mb-4">William Shakespeare · 1606</span>
          <h1 className="page-title mb-12">
            <em>Macbeth</em>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <Collage className="mb-16">
            <CollageLayer
              src="/images/macbeth/heath.jpg"
              cover
              opacity={0.7}
            />
            <CollageLayer
              src="/images/macbeth/witches.jpg"
              top="8%"
              left="5%"
              width="45%"
              height="60%"
              opacity={0.5}
              z={2}
            />
            <CollageLayer
              src="/images/macbeth/dagger.jpg"
              top="15%"
              right="12%"
              width="26%"
              height="55%"
              opacity={0.6}
              rotate={8}
              z={3}
            />
            <CollageLayer
              src="/images/macbeth/bloody-hands.jpg"
              bottom="5%"
              right="22%"
              width="32%"
              height="45%"
              opacity={0.58}
              z={4}
            />
            <CollageLayer
              src="/images/macbeth/candle.jpg"
              bottom="8%"
              left="15%"
              width="22%"
              height="40%"
              opacity={0.65}
              z={5}
            />
          </Collage>
        </Reveal>

        <Reveal delay={0.2}>
          <PullQuote>
            I am in blood stepped in so far that, should I wade no more,
            returning were as tedious as go o&rsquo;er.
          </PullQuote>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="prose-lit max-w-[680px] mx-auto">
            <p className="dropcap">
              Macbeth&rsquo;s obsession is not with power but with the prophecy
              itself, the need to force its promises into reality on his own
              terms. Unlike Hamlet&rsquo;s paralysis or Victor&rsquo;s
              isolation, Macbeth&rsquo;s fixation produces immediate action:
              obsession transforms almost instantly into violence. The
              witches&rsquo; prophecy plants the obsession in Act 1. Lady
              Macbeth accelerates it, attacking his masculinity and pushing
              him toward Duncan&rsquo;s murder. Before the killing, the
              floating dagger hallucination reveals the fixation already
              leaking into perception.
            </p>

            <p>
              Once Duncan is dead, the obsession consumes him fully.
              Banquo&rsquo;s ghost at the feast exposes his guilt publicly.
              After arranging Banquo&rsquo;s death, Macbeth recognizes the
              trap he has built: &ldquo;I am in blood stepped in so far that,
              should I wade no more, returning were as tedious as go
              o&rsquo;er.&rdquo; Obsession can no longer be escaped, only
              continued. He returns to the witches for more prophecy, seeking
              certainty from the supernatural forces that first corrupted him.
            </p>

            <p>
              By ordering the slaughter of Macduff&rsquo;s wife and children,
              Macbeth abandons any remaining moral restraint. Lady
              Macbeth&rsquo;s sleepwalking reveals the collapse that unchecked
              guilt produces, the blood imagery becoming inseparable from her
              conscience. By Act 5, the obsession has hollowed Macbeth into
              nihilism. In the &ldquo;tomorrow and tomorrow&rdquo; soliloquy,
              even Lady Macbeth&rsquo;s death barely registers; life itself
              has become meaningless. He dies at Macduff&rsquo;s hands,
              completing the destruction the prophecy unleashed. Through
              hallucinations, blood imagery, and supernatural framing,
              Shakespeare presents obsession as a force that distorts
              perception, erodes morality, and consumes the self entirely.
            </p>
          </div>
        </Reveal>
      </article>
    </PageTransition>
  );
}
