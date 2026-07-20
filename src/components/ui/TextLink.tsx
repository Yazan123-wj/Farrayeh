import Link from "next/link";
import { cn } from "@/lib/cn";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/** Borderless text link — underline draws in from the left on hover. */
export function TextLink({ href, children, className }: TextLinkProps) {
  return (
    <Link href={href} className={cn("link-underline", className)}>
      {children}
    </Link>
  );
}
