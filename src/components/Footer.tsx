import { site, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
