import Section from "@/components/Section";
import { site, socials } from "@/data/site";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="05" title="Get in touch">
      <p className="max-w-xl text-lg leading-relaxed text-muted" data-reveal>
        I&apos;m open to internships and remote engineering roles, and I&apos;m
        always happy to talk about open source. The fastest way to reach me is
        by email.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="mt-8 inline-block text-2xl font-semibold underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-3xl"
        data-reveal
      >
        {site.email}
      </a>
      <ul className="mt-10 flex gap-6 text-sm text-muted" data-reveal>
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
    </Section>
  );
}
