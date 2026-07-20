import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { StaggerReveal } from "@/components/animations/Reveal";
import type { ServicePageItem } from "@/content/types";

interface ServicesGridProps {
  items: ServicePageItem[];
}

export function ServicesGrid({ items }: ServicesGridProps) {
  return (
    <section
      id="services-grid"
      className="bg-[#FBFBF9] py-16 md:py-24 lg:py-28"
      aria-label="Our services"
    >
      <Container>
        <StaggerReveal
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          stagger={0.09}
          variant="up"
          y={36}
          as="ul"
        >
          {items.map((item) => (
            <li key={item.id} className="h-full">
              <Card
                reveal={false}
                hoverable={false}
                className="group relative flex aspect-square h-full min-h-[320px] flex-col rounded-[2px] p-7 md:min-h-0 md:p-8"
              >
                <Link
                  href={item.href}
                  className="absolute inset-0 z-10 rounded-[2px]"
                  aria-label={`Discuss this matter — ${item.title}`}
                />
                <div className="relative z-0">
                  <ServiceIcon name={item.icon} className="rounded-[2px]" />
                  <h3 className="font-display mt-5 text-[1.35rem] leading-snug tracking-tight text-ink md:mt-6 md:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <div className="relative z-0 mt-auto">
                  <p className="text-[15px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <span className="link-underline mt-5 text-sm font-semibold uppercase tracking-[0.16em] md:mt-6 md:text-[15px]">
                    Discuss this matter
                  </span>
                </div>
              </Card>
            </li>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
