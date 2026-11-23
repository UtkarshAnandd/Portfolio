import Section from "@/components/Section";
import { skills } from "@/data/site";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.group}
            className="rounded-2xl border border-border bg-card p-6"
            data-reveal
          >
            <h3 className="mb-4 font-mono text-sm text-muted">{group.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
