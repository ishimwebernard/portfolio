import { Container } from "@/components/Container";
import Link from "next/link";

const nav = [
  { href: "/blog", label: "Blog" },

];

export function Header({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--win-border)] bg-[color:var(--win-bg)]">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-[color:var(--win-fg)]"
        >
          {name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-[color:var(--win-muted)] sm:flex">
          {nav.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[color:var(--win-fg)]"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[color:var(--win-fg)]"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/publications"
            className="transition hover:text-[color:var(--win-fg)]"
          >
            Publications
          </Link>
        </nav>
      </Container>
    </header>
  );
}

