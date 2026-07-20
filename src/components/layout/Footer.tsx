import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import type { FooterContent } from "@/content/types";

interface FooterProps {
  content: FooterContent;
}

export function Footer({ content }: FooterProps) {
  return (
    <footer className="relative z-10 bg-ink text-white">
      <Container className="pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-md">
            <Logo
              primary={content.logo.primary}
              secondary={content.logo.secondary}
              inverted
            />
            <p className="mt-5 text-sm leading-relaxed text-white/55 md:text-[15px]">
              {content.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {content.columns.map((column) => (
              <div key={column.title}>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white/40">
                  {column.title}
                </p>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/75 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 text-xs text-white/40 md:mt-16">
          {content.copyright}
        </p>

        <div className="mt-8 overflow-hidden border-t border-white/10 pt-8 md:mt-10 md:pt-10">
          <p
            className="font-display text-[12vw] leading-[0.85] tracking-[-0.04em] text-white/90 md:text-[9.5vw] lg:text-[7.5rem]"
            aria-hidden
          >
            {content.wordmark}
          </p>
        </div>
      </Container>
    </footer>
  );
}
