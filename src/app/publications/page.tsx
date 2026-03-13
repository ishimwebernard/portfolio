import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { cv } from "@/data/cv";
import Link from "next/link";

export default function PublicationsPage() {
  return (
    <div className="min-h-screen">
      <Header name={cv.name} />
      <main>
        <Container className="py-10">
          <div className="mb-6">
            <div className="text-xs font-medium tracking-widest text-[color:var(--win-muted)] uppercase">
              Publications
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[color:var(--win-fg)]">
              Publications
            </h1>
            <div className="mt-2 text-sm text-[color:var(--win-muted)]">
              Content is yet to be added.
            </div>
          </div>

          <Card>
            <div className="text-sm font-semibold text-[color:var(--win-fg)]">
              Coming soon
            </div>
            <div className="mt-3 text-sm leading-6 text-[color:var(--win-muted)]">
              This page will list publications, reports, and write-ups. For now,
              you can review the Research Products section on the homepage.
            </div>
            <div className="mt-5">
              <Link
                href="/#research"
                className="inline-flex border border-[color:var(--win-border)] bg-[color:var(--win-bg)] px-4 py-2 text-sm font-medium text-[color:var(--win-fg)] transition hover:bg-[color:var(--win-surface)]"
              >
                Back to Research
              </Link>
            </div>
          </Card>
        </Container>
      </main>
      <Footer name={cv.name} />
    </div>
  );
}

