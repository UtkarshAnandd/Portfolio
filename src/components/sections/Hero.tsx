import { site, socials } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" data-section="hero" className="py-28 sm:py-40">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-4 font-mono text-sm text-accent" data-reveal>
          Hi, I&apos;m
        </p>
        <h1
          className="text-5xl font-semibold tracking-tight sm:text-7xl"
          data-reveal
        >
          {site.name}
        </h1>
        <p className="mt-4 text-xl text-muted sm:text-2xl" data-reveal>
          {site.role}
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted" data-reveal>
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4" data-reveal>
          <a
            href="#projects"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Resume
            </a>
          )}
        </div>

        <ul className="mt-12 flex gap-6 text-sm text-muted" data-reveal>
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {s.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
