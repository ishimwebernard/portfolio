import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "border border-[color:var(--win-border)] bg-[color:var(--win-bg)] p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

