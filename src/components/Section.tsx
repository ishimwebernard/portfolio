import { cn } from "@/lib/cn";

export function Section({
  id,
  title,
  eyebrow,
  children,
  className,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-10", className)}>
      <div className="mb-6">
        {eyebrow ? (
          <div className="text-xs font-medium tracking-widest text-zinc-500 uppercase">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

