import Section from "@/components/Section";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="04" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6"
            data-reveal
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <span className="shrink-0 font-mono text-xs text-muted">{p.status}</span>
            </div>
            <p className="flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="font-mono text-xs text-accent">
                  {t}
                </li>
              ))}
            </ul>
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-sm font-medium transition-colors hover:text-accent"
              >
                View project ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
