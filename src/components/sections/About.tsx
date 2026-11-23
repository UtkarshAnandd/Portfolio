import Section from "@/components/Section";
import { about, site } from "@/data/site";

export default function About() {
  return (
    <Section id="about" eyebrow="01" title="About">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.map((para) => (
            <p key={para} data-reveal>
              {para}
            </p>
          ))}
        </div>
        <dl className="space-y-4 text-sm" data-reveal>
          <div>
            <dt className="font-mono text-muted">Based in</dt>
            <dd className="mt-1">{site.location}</dd>
          </div>
          <div>
            <dt className="font-mono text-muted">Studying</dt>
            <dd className="mt-1">B.Tech CSE, LNCT Bhopal (2028)</dd>
          </div>
          <div>
            <dt className="font-mono text-muted">Looking for</dt>
            <dd className="mt-1">Remote full-stack and AI engineering roles</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
