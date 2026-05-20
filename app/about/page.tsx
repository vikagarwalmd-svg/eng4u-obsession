import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { ChapterNav } from "@/components/ChapterNav";

export default function AboutPage() {
  return (
    <PageTransition>
      <article className="max-w-[720px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24">
        <Reveal>
          <span className="eyebrow mb-6">Artist&rsquo;s Statement</span>
          <h1 className="page-title mb-12">
            About this <em>Project</em>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="prose-lit">
            <p className="dropcap">
              This project takes the form of a website because obsession is a
              structure of thought, something you walk through one stage at a
              time. A multi-page site lets the viewer move through each
              protagonist&rsquo;s collapse the way the texts actually unfold,
              slowly, instead of seeing it all at once. The near-black palette
              and deep crimson accents reflect the secretive, violent character
              the texts give obsession. The classical serif typography puts
              this site in conversation with the literary tradition these works
              belong to. The multi-page structure forces the viewer to sit with
              each protagonist the way the protagonists sit with their own
              fixations: slowly, page by page, with no shortcut to the end.
            </p>
          </div>
        </Reveal>
      </article>
      <ChapterNav current="/about" />
    </PageTransition>
  );
}
