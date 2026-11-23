import Section from "@/components/Section";
import { contributions } from "@/data/site";

export default function OpenSource() {
  return (
    <Section id="open-source" eyebrow="03" title="Open Source">
      <p className="mb-8 max-w-2xl text-lg text-muted" data-reveal>
        Selected merged pull requests across Sugar Labs and the Meshery / Layer5
        (CNCF) ecosystem.
      </p>
      <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
        {contributions.map((c) => (
          <li key={c.href} data-reveal>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 p-5 transition-colors hover:bg-foreground/[0.03] sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div>
                <p className="font-medium group-hover:text-accent">{c.title}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {c.repo} #{c.number}
                </p>
              </div>
              <span className="shrink-0 self-start rounded-full border border-accent/40 px-3 py-0.5 font-mono text-xs text-accent sm:self-center">
                {c.status}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <a
        href="https://github.com/UtkarshAnandd"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm text-muted transition-colors hover:text-foreground"
      >
        More on GitHub ↗
      </a>
    </Section>
  );
}
