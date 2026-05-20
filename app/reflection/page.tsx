import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { ChapterNav } from "@/components/ChapterNav";

export default function ReflectionPage() {
  return (
    <PageTransition>
      <div
        className="min-h-screen"
        style={{
          background:
            "linear-gradient(180deg, var(--color-canvas) 0%, #1a1714 100%)",
        }}
      >
        <article className="max-w-[720px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
          <Reveal>
            <span className="eyebrow mb-6" style={{ color: "var(--color-gold)" }}>
              Personal
            </span>
            <h1 className="page-title mb-12">
              <em>Reflection</em>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="prose-lit">
              <p
                className="dropcap"
                style={
                  {
                    ["--dropcap-color" as string]: "var(--color-gold)",
                  } as React.CSSProperties
                }
              >
                At Crescent, success is what you&rsquo;re supposed to want.
                For four years, I worked hard, made plans, kept aiming
                forward. I didn&rsquo;t stop to ask whether what I was
                chasing was good for me.
              </p>

              <p>
                <em>Frankenstein</em> gave me a name for it. Victor chases one
                goal so hard, in such isolation, that everyone around him is
                gone before he sees what he&rsquo;s done. But Shelley also
                writes Walton, the explorer who hears Victor&rsquo;s story and
                turns his ship back. Both pulls feel real to me. I&rsquo;ve
                felt them in myself this year.
              </p>

              <p>
                Going to school for business means walking into the same
                environment with the volume turned up. Everyone there will be
                driven. Everyone will have a plan. I&rsquo;m not going to
                promise I&rsquo;ll be a Walton. I&rsquo;d be lying. But
                I&rsquo;m leaving Crescent with a question I didn&rsquo;t have
                when I got here. When does drive stop helping me and start
                eating me alive? I don&rsquo;t have the answer yet. I just know
                to watch for it.
              </p>
            </div>
          </Reveal>
        </article>
        <ChapterNav current="/reflection" />
      </div>
    </PageTransition>
  );
}
