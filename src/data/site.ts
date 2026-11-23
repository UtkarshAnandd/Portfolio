// Single source of truth for all portfolio content.
// Edit this file to update the site — components only render what is here.

export const site = {
  name: "Utkarsh Anand",
  shortName: "Utkarsh",
  role: "Full-stack engineer · Open source contributor",
  location: "Indore, India",
  tagline:
    "I build with TypeScript, React and Node, and I contribute to open source projects like Meshery (CNCF) and Sugar Labs Music Blocks.",
  email: "utkarsha137@gmail.com",
  domain: "utarx.in",
  resumeUrl: "", // TODO: add a link to your resume PDF, then the Resume button appears.
};

export const socials = [
  { label: "GitHub", href: "https://github.com/UtkarshAnandd" },
  { label: "X", href: "https://x.com/anand369903" },
  { label: "Instagram", href: "https://instagram.com/anand369903" },
  // TODO: add LinkedIn, e.g. { label: "LinkedIn", href: "https://linkedin.com/in/..." },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Open Source", href: "#open-source" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = [
  "I'm a third-year B.Tech Computer Science student at LNCT Bhopal (graduating May 2028), working towards full-stack and AI engineering roles.",
  "Most of my learning happens in public codebases. I contribute to Meshery and Layer5 under the CNCF, and to Sugar Labs Music Blocks, where I have worked on bug fixes, test coverage and CI tooling such as the DCO sign-off check.",
  "I also document my progress in public on X.",
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python (learning)", "Go (learning)"],
  },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Backend & Data", items: ["Node.js", "PostgreSQL"] },
  {
    group: "Testing & Tooling",
    items: ["Playwright", "Jest", "GitHub Actions", "Git"],
  },
];

export type Contribution = {
  org: string;
  repo: string;
  title: string;
  number: number;
  status: "Merged" | "Open";
  href: string;
};

export const contributions: Contribution[] = [
  {
    org: "Sugar Labs",
    repo: "sugarlabs/musicblocks",
    title: "CI: DCO sign-off check workflow",
    number: 8092,
    status: "Merged",
    href: "https://github.com/sugarlabs/musicblocks/pull/8092",
  },
  {
    org: "Sugar Labs",
    repo: "sugarlabs/musicblocks",
    title: "CI: replace hard-coded coverage thresholds with a base-branch delta check",
    number: 8153,
    status: "Merged",
    href: "https://github.com/sugarlabs/musicblocks/pull/8153",
  },
  {
    org: "Sugar Labs",
    repo: "sugarlabs/musicblocks",
    title: "Test coverage for turtle-painter.js",
    number: 8123,
    status: "Merged",
    href: "https://github.com/sugarlabs/musicblocks/pull/8123",
  },
  {
    org: "Sugar Labs",
    repo: "sugarlabs/musicblocks",
    title: "Auto-follow OS theme changes via matchMedia listener",
    number: 7480,
    status: "Merged",
    href: "https://github.com/sugarlabs/musicblocks/pull/7480",
  },
  {
    org: "Sugar Labs",
    repo: "sugarlabs/musicblocks",
    title: "Docs: add REVIEW_GUIDELINES.md",
    number: 7506,
    status: "Merged",
    href: "https://github.com/sugarlabs/musicblocks/pull/7506",
  },
  {
    org: "Meshery (CNCF)",
    repo: "meshery/meshery",
    title: "Migrate Playwright E2E tests from JavaScript to TypeScript",
    number: 19454,
    status: "Merged",
    href: "https://github.com/meshery/meshery/pull/19454",
  },
  {
    org: "Layer5",
    repo: "layer5io/sistent",
    title: "ChevronRight icon component (icon consolidation)",
    number: 1428,
    status: "Merged",
    href: "https://github.com/layer5io/sistent/pull/1428",
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  status: "In progress" | "Shipped";
  href?: string; // repo or live link; leave empty until it exists
};

export const projects: Project[] = [
  {
    name: "EnvSync Guard",
    description:
      "A CLI and VS Code extension that detects drift between local .env files and remote platforms such as Vercel, GitHub Secrets, Cloudflare and Railway. It never stores secrets itself.",
    tech: ["TypeScript", "Node.js", "VS Code API"],
    status: "In progress",
  },
  {
    name: "PocketDesk",
    description:
      "A free personal tool to control my MacBook from my phone, so I can keep working away from the laptop. I am building it in public on X.",
    tech: ["TypeScript"],
    status: "In progress",
  },
  {
    name: "Portfolio",
    description: "This site, built with Next.js 16, React 19 and Tailwind CSS v4.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    status: "Shipped",
    href: "https://github.com/UtkarshAnandd/Portfolio",
  },
];
