import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

// Shared wrapper for every page section.
// `data-section` is a stable hook for adding scroll/reveal animations later.
export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      data-section={id}
      className="scroll-mt-24 border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-10" data-reveal>
          {eyebrow && (
            <p className="mb-2 font-mono text-sm text-accent">{eyebrow}</p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
