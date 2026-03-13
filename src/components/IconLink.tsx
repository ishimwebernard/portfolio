import Link from "next/link";
import { cn } from "@/lib/cn";

export function IconLink({
  href,
  label,
  icon: Icon,
  className,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 border border-[color:var(--win-border)] bg-[color:var(--win-bg)] px-4 py-2 text-sm font-medium text-[color:var(--win-fg)] transition hover:bg-[color:var(--win-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--win-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--win-surface)]",
        className,
      )}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <Icon className="h-4 w-4 text-[color:var(--win-accent)]" />
      <span>{label}</span>
    </Link>
  );
}

