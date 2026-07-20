import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import type { AttorneyPageContent } from "@/content/types";

interface AttorneyPerspectiveProps {
  content: AttorneyPageContent["perspective"];
}

export function AttorneyPerspective({ content }: AttorneyPerspectiveProps) {
  return (
    <section
      id="perspective"
      className="bg-[#FBFBF9] py-16 md:py-24 lg:py-28"
      aria-labelledby="perspective-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-16">
          <Reveal>
            <p className="text-[16px] font-medium uppercase tracking-[0.22em] text-accent">
              {content.number} — {content.label}
            </p>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <h2
                id="perspective-heading"
                className="sr-only"
              >
                {content.label}
              </h2>
              <div className="max-w-2xl space-y-6">
                {content.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-[17px] leading-[1.75] text-ink md:text-lg md:leading-[1.8]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
