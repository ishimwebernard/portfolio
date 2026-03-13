import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IconLink } from "@/components/IconLink";
import { Section } from "@/components/Section";
import { cv } from "@/data/cv";
import { blogPosts } from "@/data/blog";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const github = cv.contact.socials.find((s) => s.label.toLowerCase() === "github");
  const linkedin = cv.contact.socials.find(
    (s) => s.label.toLowerCase() === "linkedin",
  );
  const githubIsPlaceholder = !github?.href || github.href === "#";
  const linkedinIsPlaceholder = !linkedin?.href || linkedin.href === "#";

  return (
    <div className="min-h-screen">
      <Header name={cv.name} />

      <main>
        <div className="border-b border-[color:var(--win-border)] bg-[color:var(--win-bg)]">
          <Container className="py-14">
            <div className="grid gap-8 md:grid-cols-3 md:items-start">
              <div className="md:col-span-2">
                <div className="mb-6 flex items-center gap-4 md:hidden">
                  <div className="border border-[color:var(--win-border)] bg-[color:var(--win-surface)] p-1">
                    <Image
                      src="/bernard.png"
                      alt="Portrait of Bernard Ishimwe"
                      width={88}
                      height={88}
                      className="h-[88px] w-[88px] object-cover"
                      priority
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium tracking-widest text-[color:var(--win-muted)] uppercase">
                      Profile
                    </div>
                    <div className="mt-1 text-sm font-medium text-[color:var(--win-fg)]">
                      Bernard Ishimwe
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 border border-[color:var(--win-border)] bg-[color:var(--win-surface)] px-4 py-2 text-xs font-medium text-[color:var(--win-muted)]">
                  Transportation and Machine Learning Engineer
                </div>
                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[color:var(--win-fg)] sm:text-5xl">
                  {cv.name}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--win-muted)]">
                  The goal is to bring as much tech as possible to the transportation engineering industry! Neural Networks, Data Clustering, Robotics, Computer Vision: These are my Avengers.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <IconLink
                    href={`mailto:${cv.contact.email}`}
                    label={cv.contact.email}
                    icon={Mail}
                  />
                  <IconLink
                    href={`tel:${cv.contact.phone}`}
                    label={cv.contact.phone}
                    icon={Phone}
                  />
                  <IconLink
                    href={github?.href ?? "#"}
                    label={github?.label ?? "GitHub"}
                    icon={Github}
                    className={githubIsPlaceholder ? "opacity-70" : undefined}
                  />
                  <IconLink
                    href={linkedin?.href ?? "#"}
                    label={linkedin?.label ?? "LinkedIn"}
                    icon={Linkedin}
                    className={linkedinIsPlaceholder ? "opacity-70" : undefined}
                  />
                </div>
              </div>

              <Card className="md:sticky md:top-24 p-4">
                <div className="hidden md:block">
                  <div className="border border-[color:var(--win-border)] bg-[color:var(--win-surface)] p-1">
                    <Image
                      src="/bernard.png"
                      alt="Portrait of Bernard Ishimwe"
                      width={420}
                      height={420}
                      className="h-auto w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </Card>
            </div>
          </Container>
        </div>

        <Container>
          <Section id="experience" eyebrow="Professional" title="Experience">
            <div className="space-y-5">
              {cv.experience.map((role) => (
                <Card key={`${role.title}-${role.organization}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="text-base font-semibold text-[color:var(--win-fg)]">
                      {role.title} ·{" "}
                      <span className="font-medium">{role.organization}</span>
                    </div>
                    <div className="text-sm text-[color:var(--win-muted)]">
                      {role.dates}
                    </div>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[color:var(--win-muted)]">
                    {role.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>

          <Section eyebrow="Writing" title="Blog">
            <Card>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="text-base font-semibold text-[color:var(--win-fg)]">
                  Latest post
                </div>
                <div className="text-sm text-[color:var(--win-muted)]">
                  {blogPosts[0]?.updatedLabel ?? ""}
                </div>
              </div>

              <div className="mt-3 text-sm font-semibold text-[color:var(--win-fg)]">
                {blogPosts[0]?.title ?? "Blog"}
              </div>
              <div className="mt-2 text-sm leading-6 text-[color:var(--win-muted)]">
                {blogPosts[0]?.summary ??
                  "Read the latest writing and notes on ML and transportation engineering."}
              </div>

              <div className="mt-5">
                <Link
                  href="/blog"
                  className="inline-flex border border-[color:var(--win-border)] bg-[color:var(--win-bg)] px-4 py-2 text-sm font-medium text-[color:var(--win-fg)] transition hover:bg-[color:var(--win-surface)]"
                >
                  Read the blog
                </Link>
              </div>
            </Card>
          </Section>

          <Section id="skills" eyebrow="Capabilities" title="Skills">
            <div className="grid gap-5 md:grid-cols-2">
              {cv.skills.map((group) => (
                <Card key={group.title}>
                  <div className="text-sm font-semibold text-[color:var(--win-fg)]">
                    {group.title}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          <Section id="education" eyebrow="Background" title="Education">
            <div className="space-y-5">
              {cv.education.map((e) => (
                <Card key={`${e.school}-${e.dates}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="text-base font-semibold text-[color:var(--win-fg)]">
                      {e.school}
                    </div>
                    <div className="text-sm text-[color:var(--win-muted)]">
                      {e.dates}
                    </div>
                  </div>
                  <div className="mt-2 text-sm font-medium text-[color:var(--win-fg)]">
                    {e.degreeOrProgram}
                  </div>
                  {e.details?.length ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[color:var(--win-muted)]">
                      {e.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  ) : null}
                </Card>
              ))}
            </div>
          </Section>


          <Section id="contact" eyebrow="Get in touch" title="Contact">
            <Card>
              <div className="grid gap-5 md:grid-cols-2 md:items-center">
                <div>
                  <div className="text-base font-semibold text-[color:var(--win-fg)]">
                    Email
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--win-muted)]">
                    <a
                      className="font-medium text-[color:var(--win-fg)] underline decoration-[color:var(--win-border)] underline-offset-4 transition hover:decoration-[color:var(--win-accent)]"
                      href={`mailto:${cv.contact.email}`}
                    >
                      {cv.contact.email}
                    </a>
                  </div>
                </div>
                <div>
                  <div className="text-base font-semibold text-[color:var(--win-fg)]">
                    Phone
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--win-muted)]">
                    <a
                      className="font-medium text-[color:var(--win-fg)] underline decoration-[color:var(--win-border)] underline-offset-4 transition hover:decoration-[color:var(--win-accent)]"
                      href={`tel:${cv.contact.phone}`}
                    >
                      {cv.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

            </Card>
          </Section>
        </Container>
      </main>

      <Footer name={cv.name} />
    </div>
  );
}
