import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-[color:var(--win-border)] bg-[color:var(--win-surface)] px-2.5 py-1 text-xs font-medium text-[color:var(--win-muted)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

