import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal, StaggerReveal } from "@/components/animations/Reveal";
import type { BlogPost } from "@/content/types";

interface BlogFeedProps {
  featured: BlogPost;
  posts: BlogPost[];
}

export function BlogFeed({ featured, posts }: BlogFeedProps) {
  return (
    <section
      className="bg-[#FBFBF9] pb-16 md:pb-24 lg:pb-28"
      aria-label="Articles"
    >
      <Container>
        {/* Featured post — large horizontal layout */}
        <Reveal variant="up" y={40}>
          <article className="group grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] md:aspect-auto md:min-h-[340px] lg:min-h-[400px]">
              <Image
                src={featured.image.src}
                alt={featured.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                {featured.date ? <time>{featured.date}</time> : null}
                {featured.date && featured.categories[0] ? (
                  <span aria-hidden>·</span>
                ) : null}
                {featured.categories[0] ? (
                  <span>{featured.categories[0]}</span>
                ) : null}
              </div>
              <h2 className="font-display mt-4 text-3xl leading-[1.15] tracking-[-0.02em] text-ink md:mt-5 md:text-4xl lg:text-[2.75rem]">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-muted md:mt-5 md:text-base">
                {featured.excerpt}
              </p>
              <TextLink
                href={featured.href}
                className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] md:mt-10 md:text-[15px]"
              >
                Learn more
              </TextLink>
            </div>
          </article>
        </Reveal>

        {/* Remaining posts grid */}
        <StaggerReveal
          className="mt-14 grid gap-10 border-t border-ink/10 pt-14 sm:grid-cols-2 md:mt-16 md:gap-8 md:pt-16 lg:mt-20 lg:grid-cols-3 lg:gap-7 lg:pt-20"
          stagger={0.1}
          variant="up"
          y={36}
        >
          {posts.map((post) => (
            <article key={post.id} className="group flex h-full flex-col">
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-[2px]">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                {post.date ? <time>{post.date}</time> : null}
                {post.date && post.categories[0] ? <span aria-hidden>·</span> : null}
                {post.categories[0] ? <span>{post.categories[0]}</span> : null}
              </div>

              <h3 className="font-display text-xl tracking-tight text-ink md:text-[1.35rem] lg:text-2xl">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <TextLink
                href={post.href}
                className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] md:mt-8 md:text-[15px]"
              >
                Learn more
              </TextLink>
            </article>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
