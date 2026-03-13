import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { blogPosts } from "@/data/blog";
import { cv } from "@/data/cv";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header name={cv.name} />
      <main>
        <Container className="py-10">
          <div className="mb-6">
            <div className="text-xs font-medium tracking-widest text-[color:var(--win-muted)] uppercase">
              Blog
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[color:var(--win-fg)]">
              Blog
            </h1>
            <div className="mt-2 text-sm text-[color:var(--win-muted)]">
              Notes and write-ups.
            </div>
          </div>

          <div className="space-y-5">
            {blogPosts.map((post) => (
              <Card key={post.slug}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="text-base font-semibold text-[color:var(--win-fg)]">
                    {post.title}
                  </div>
                  <div className="text-sm text-[color:var(--win-muted)]">
                    {post.updatedLabel}
                  </div>
                </div>
                <div className="mt-2 text-sm text-[color:var(--win-muted)]">
                  By <span className="font-medium">{post.author}</span>
                </div>

                {post.disclaimer ? (
                  <div className="mt-4 border border-[color:var(--win-border)] bg-[color:var(--win-surface)] p-4 text-sm leading-6 text-[color:var(--win-muted)]">
                    <div className="text-xs font-medium tracking-widest uppercase">
                      Disclaimer
                    </div>
                    <div className="mt-2">{post.disclaimer}</div>
                  </div>
                ) : null}

                <div className="mt-5 space-y-5">
                  {post.sections.map((s) => (
                    <div key={s.heading}>
                      <div className="text-sm font-semibold text-[color:var(--win-fg)]">
                        {s.heading}
                      </div>
                      <div className="mt-2 space-y-3 text-sm leading-6 text-[color:var(--win-muted)]">
                        {s.paragraphs.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {post.references?.length ? (
                  <div className="mt-6">
                    <div className="text-sm font-semibold text-[color:var(--win-fg)]">
                      References
                    </div>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-[color:var(--win-muted)]">
                      {post.references.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Footer name={cv.name} />
    </div>
  );
}

