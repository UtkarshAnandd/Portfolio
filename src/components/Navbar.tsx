import { navLinks, site } from "@/data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-semibold">
          {site.shortName}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden gap-8 text-sm text-muted sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent sm:hidden"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
