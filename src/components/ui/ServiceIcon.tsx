import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import type { ServiceIconName } from "@/content/types";

interface ServiceIconProps {
  name: ServiceIconName;
  className?: string;
  /** Smaller icon box for benefit rows */
  size?: "md" | "sm";
}

export function ServiceIcon({
  name,
  className,
  size = "md",
}: ServiceIconProps) {
  const common = size === "sm" ? "h-5 w-5" : "h-6 w-6";

  const icons: Record<ServiceIconName, ReactNode> = {
    life: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
    health: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M12 4v16M4 12h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    home: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
    travel: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M10.5 19.5 3 21l1.5-7.5L14.5 3.5a3.2 3.2 0 0 1 4.5 4.5L10.5 19.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M13 7.5 16.5 11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    scale: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M12 3v18M8 21h8M5 7h14M5 7l-2.5 5.5a3.5 3.5 0 1 0 7 0L7 7M19 7l-2.5 5.5a3.5 3.5 0 1 0 7 0L19 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    brief: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M4 12h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    doc: (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden>
        <path
          d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M14 3v5h5M9 13h6M9 17h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[6px] bg-accent text-white",
        size === "sm" ? "h-11 w-11" : "h-14 w-14",
        className,
      )}
    >
      {icons[name]}
    </span>
  );
}
