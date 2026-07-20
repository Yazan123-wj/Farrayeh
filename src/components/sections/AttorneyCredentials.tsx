import { Container } from "@/components/ui/Container";
import { Reveal, StaggerReveal } from "@/components/animations/Reveal";
import type { AttorneyPageContent } from "@/content/types";

interface AttorneyCredentialsProps {
  content: AttorneyPageContent["credentials"];
}

export function AttorneyCredentials({ content }: AttorneyCredentialsProps) {
  return (
    <section
      id="credentials"
      className="bg-[#FBFBF9] py-16 md:py-24 lg:py-28"
      aria-labelledby="credentials-heading"
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
              id="credentials-heading"
              className="font-display text-4xl leading-[1.12] tracking-[-0.02em] text-ink md:text-5xl lg:text-[3.25rem]"
            >
              {content.title}
            </h2>
          </Reveal>
        </div>

        <StaggerReveal
          className="grid overflow-hidden rounded-[2px] border border-[#e5e5e5] sm:grid-cols-2 lg:grid-cols-3"
          as="ul"
          stagger={0.06}
          variant="up"
          y={28}
        >
          {content.items.map((item, i) => (
            <li
              key={item.id}
              className={[
                "border-[#e5e5e5] p-6 md:p-7 lg:p-8",
                i > 0 ? "border-t sm:border-t-0" : "",
                i % 2 === 1 ? "sm:border-l" : "",
                i >= 2 ? "sm:border-t" : "",
                i > 0 ? "lg:border-t-0 lg:border-l" : "",
                i >= 3 ? "lg:border-t" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
                {item.label}
              </p>
              <p className="font-display mt-3 text-xl leading-snug tracking-tight text-ink md:text-[1.35rem]">
                {item.value}
              </p>
            </li>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
