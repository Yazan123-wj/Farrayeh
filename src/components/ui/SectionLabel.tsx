import { cn } from "@/lib/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "mb-4 text-[16px] font-medium uppercase tracking-[0.22em] text-black md:mb-5",
        className,
      )}
    >
      {children}
    </p>
  );
}
