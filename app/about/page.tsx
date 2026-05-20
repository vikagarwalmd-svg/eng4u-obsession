import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";

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
              This project takes the form of a website because obsession is
              fundamentally an internal architecture, a structure of thought
              you walk through deliberately. A multi-page digital format lets
              the viewer move through each protagonist&rsquo;s collapse one
              stage at a time rather than seeing it all at once. The near-black
              palette and deep crimson accents reflect the secretive, violent
              character of obsession as the texts depict it. The classical
              serif typography places this site in dialogue with the literary
              canon these texts belong to. The multi-page structure also forces
              the viewer to sit with each protagonist the way the protagonists
              sit with their own fixations: slowly, page by page, with no
              shortcut to the end.
            </p>
          </div>
        </Reveal>
      </article>
    </PageTransition>
  );
}
