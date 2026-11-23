# Portfolio

Personal portfolio of Utkarsh Anand, built with Next.js 16, React 19 and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
  app/
    layout.tsx        # fonts, metadata
    page.tsx          # assembles the sections
    globals.css       # design tokens (colours) + animation hooks
  components/
    Navbar.tsx
    Footer.tsx
    Section.tsx       # shared section wrapper
    sections/         # Hero, About, Skills, OpenSource, Projects, Contact
  data/
    site.ts           # ALL content lives here
```

## Editing content

Everything shown on the site comes from `src/data/site.ts`: name, links, about text, skills, open source PRs and projects. Components only render that data.

## Adding animations later

- Every section has a `data-section="<id>"` attribute.
- Elements meant to animate in on scroll carry `data-reveal`.
- All components are server components today. To animate, add a client component (for example with `motion` or GSAP) that targets those attributes, or wrap individual sections.
