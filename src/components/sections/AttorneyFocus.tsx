import { Container } from "@/components/ui/Container";
import { Reveal, StaggerReveal } from "@/components/animations/Reveal";
import type { AttorneyPageContent } from "@/content/types";

interface AttorneyFocusProps {
  content: AttorneyPageContent["focus"];
}

export function AttorneyFocus({ content }: AttorneyFocusProps) {
  return (
    <section
      id="focus"
      className="relative z-10 -mb-[100svh] min-h-[100svh] bg-[#FBFBF9] py-16 md:py-24 lg:py-28"
      aria-labelledby="focus-heading"
    >
      <Container>
        <div className="mb-12 grid gap-6 md:mb-16 lg:mb-20 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-16">
          <Reveal>
            <p className="text-[16px] font-medium uppercase tracking-[0.22em] text-accent">
              {content.number} — {content.label}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              id="focus-heading"
              className="font-display text-4xl leading-[1.12] tracking-[-0.02em] text-ink md:text-5xl lg:text-[3.25rem]"
            >
              {content.title}
            </h2>
          </Reveal>
        </div>

        <StaggerReveal
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4"
          as="ul"
          stagger={0.07}
          variant="up"
          y={32}
        >
          {content.items.map((item, i) => (
            <li key={item.id}>
              <article className="flex h-full min-h-[140px] flex-col justify-between rounded-[2px] border border-[#e5e5e5] bg-[#FBFBF9] p-6 md:min-h-[160px] md:p-7">
                <span className="text-sm tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-8 text-2xl tracking-tight text-ink md:text-[1.65rem]">
                  {item.title}
                </h3>
              </article>
            </li>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
