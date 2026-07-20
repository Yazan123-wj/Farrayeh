import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal, StaggerReveal } from "@/components/animations/Reveal";
import type { ServicesContent } from "@/content/types";

interface ServicesProps {
  content: ServicesContent;
}

export function Services({ content }: ServicesProps) {
  const [imgA, imgB] = content.images;
  const [life, health, home, travel] = content.items;

  return (
    <section
      id="services"
      className="bg-[#FBFBF9] py-16 md:py-24"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="mb-12 max-w-2xl md:mb-16">
          <Reveal variant="up">
            <SectionLabel>{content.label}</SectionLabel>
            <h2
              id="services-heading"
              className="font-display whitespace-pre-line text-3xl leading-[1.15] tracking-[-0.02em] text-ink md:text-4xl lg:text-[2.75rem]"
            >
              {content.title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-muted md:mt-6 md:text-base md:leading-[1.75]">
              {content.description}
            </p>
          </Reveal>
          <div className="mt-8 md:mt-10">
            <Button
              href={content.viewAll.href}
              variant="dark"
              size="md"
              className="px-7 py-3 text-[14px]"
            >
              {content.viewAll.label}
            </Button>
          </div>
        </div>

        {/* Asymmetric 3-col grid matching reference:
            [image] [life] [health]
            [home]  [travel] [image] */}
        <StaggerReveal
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          stagger={0.09}
          variant="clip"
          y={42}
        >
          <div
            className="relative aspect-square overflow-hidden rounded-[10px]"
            title={imgA.label}
          >
            <Image
              src={imgA.src}
              alt={imgA.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <ServiceCard item={life} />
          <ServiceCard item={health} />
          <ServiceCard item={home} />
          <ServiceCard item={travel} />

          <div
            className="relative aspect-square overflow-hidden rounded-[10px]"
            title={imgB.label}
          >
            <Image
              src={imgB.src}
              alt={imgB.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </StaggerReveal>
      </Container>
    </section>
  );
}

function ServiceCard({
  item,
}: {
  item: ServicesContent["items"][number];
}) {
  return (
    <Card
      reveal={false}
      className="flex aspect-square h-full min-h-[300px] flex-col justify-between rounded-[10px] p-7 md:min-h-0 md:p-8"
    >
      <div>
        <ServiceIcon name={item.icon} />
        <h3 className="font-display mt-5 text-[1.35rem] leading-snug tracking-tight text-ink md:mt-6 md:text-2xl">
          {item.title}
        </h3>
      </div>

      <div>
        <p className="text-[15px] leading-relaxed text-muted">
          {item.description}
        </p>
        <TextLink
          href={item.href}
          className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] md:mt-6 md:text-[15px]"
        >
          Learn more
        </TextLink>
      </div>
    </Card>
  );
}
