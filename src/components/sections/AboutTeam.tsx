import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, StaggerReveal } from "@/components/animations/Reveal";
import type { TeamContent } from "@/content/types";

interface AboutTeamProps {
  content: TeamContent;
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function AboutTeam({ content }: AboutTeamProps) {
  return (
    <section
      id="team"
      className="bg-[#FBFBF9] py-16 md:py-24 lg:py-28"
      aria-labelledby="about-team-heading"
    >
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16 lg:mb-20">
          <Reveal>
            <SectionLabel className="mb-5 text-accent md:mb-6">
              {content.label}
            </SectionLabel>
            <h2
              id="about-team-heading"
              className="font-display text-4xl leading-[1.12] tracking-[-0.02em] text-ink md:text-5xl lg:text-[3.25rem]"
            >
              {content.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-[15px] leading-[1.7] text-muted md:mt-6 md:text-base md:leading-[1.75]">
              {content.description}
            </p>
            <span
              className="mx-auto mt-6 block h-0.5 w-12 bg-accent md:mt-7"
              aria-hidden
            />
          </Reveal>
        </div>

        <StaggerReveal
          className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-6 md:gap-y-12 lg:gap-x-8"
          as="ul"
        >
          {content.members.map((member) => (
            <li key={member.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image.src}
                  alt={member.image.alt}
                  fill
                  sizes="(max-width: 768px) 45vw, 22vw"
                  className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-xl text-ink md:text-2xl">
                    {member.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">{member.role}</p>
                </div>
                <Link
                  href={member.href}
                  className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center text-accent transition-colors hover:text-accent-hover"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <LinkedInIcon className="h-4 w-4" />
                </Link>
              </div>
            </li>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
