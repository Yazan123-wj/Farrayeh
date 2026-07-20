import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  primary?: string;
  secondary?: string;
  className?: string;
  /** Use white transparent logo on dark / blue surfaces */
  inverted?: boolean;
}

export function Logo({
  primary = "Farrayeh",
  secondary = "Law",
  className,
  inverted = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${primary} ${secondary} home`}
    >
      <Image
        src={inverted ? "/farrayeh-logo-on-dark.png" : "/farrayeh-logo-nav.png"}
        alt={`${primary} — ${secondary}`}
        width={480}
        height={160}
        className="h-8 w-auto bg-transparent object-contain md:h-9"
        priority={!inverted}
      />
    </Link>
  );
}

/** Compact logo — pass `onDark` for blue/black panels (no CSS invert hacks) */
export function LogoMark({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Image
      src={onDark ? "/farrayeh-logo-on-dark.png" : "/farrayeh-logo-nav.png"}
      alt=""
      width={480}
      height={160}
      className={cn("h-9 w-auto bg-transparent object-contain", className)}
      aria-hidden
    />
  );
}
