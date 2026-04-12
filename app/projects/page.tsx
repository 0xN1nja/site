import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "0xN1nja // projects",
  description: "A showcase of my projects and work.",
  openGraph: {
    title: "0xN1nja // projects",
    description: "A showcase of my projects and work.",
    images: ["https://0xn1nja.dev/api/og?title=Projects"],
  },
  twitter: {
    card: "summary_large_image",
    title: "0xN1nja // projects",
    description: "A showcase of my projects and work.",
    images: ["https://0xn1nja.dev/api/og?title=Projects"],
  },
};

type Project = {
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  techStack: string[];
  year: string;
};

const projects: Project[] = [
  {
    title: "lmc_emulator",
    description:
      "A Little Man Computer (LMC) emulator built in Rust, providing a virtual environment to execute and debug LMC assembly programs.",
    liveLink: "",
    githubLink: "https://github.com/0xN1nja/lmc_emulator",
    techStack: ["Rust"],
    year: "2023",
  },
  {
    title: "dotfiles",
    description:
      "My personal Arch Linux configuration files and system setup. Includes my window manager (bspwm) configurations, shell scripts, terminal themes, and productivity tools for a streamlined development environment. Features automated installation scripts for quick system setup.",
    liveLink: "",
    githubLink: "https://github.com/0xN1nja/dotfiles",
    techStack: ["Arch Linux", "Shell"],
    year: "2024",
  },
  {
    title: "urban-dictionary-api",
    description:
      "A robust Python API for scraping and retrieving definitions from Urban Dictionary. Provides programmatic access to slang definitions, examples, and metadata.",
    liveLink: "",
    githubLink: "https://github.com/0xN1nja/urban-dictionary-api",
    techStack: ["Python", "Flask", "Beautiful Soup"],
    year: "2021",
  },
  {
    title: "rusty-os",
    description: "An x86 kernel written in Rust.",
    liveLink: "",
    githubLink: "https://github.com/0xN1nja/rusty-os",
    techStack: ["Rust"],
    year: "2024",
  },
  {
    title: "dockexclude",
    description:
      "A Docker Compose tool that provides selective service execution capabilities. Allows users to exclude specific services from their Docker Compose stack, making it easier to manage complex multi-service applications and optimize development workflows.",
    liveLink: "",
    githubLink: "https://github.com/0xN1nja/dockexclude",
    techStack: ["Go"],
    year: "2026",
  },
  {
    title: "gdav",
    description: "A CalDAV and CardDAV client for Gleam.",
    liveLink: "",
    githubLink: "https://github.com/0xN1nja/gdav",
    techStack: ["Gleam"],
    year: "2026",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group p-6 rounded-lg border border-text/10 hover:border-text/20 transition-all hover:bg-text/5 relative">
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold link hover:underline"
          >
            {project.title}
          </a>
        ) : (
          <span className="text-lg font-semibold">{project.title}</span>
        )}
        <span className="text-sm text-text/60">{project.year}</span>
      </div>
      <p className="text-text/80">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full bg-text/10 text-text/70"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    {project.githubLink && (
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 text-text/40 hover:text-text/80 transition-colors"
        aria-label="View on GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    )}
  </div>
);

const ProjectsPage = () => {
  return (
    <section>
      <div className="md:mt-8 lg:mt-10 pt-8 pb-16">
        <div className="pb-10">
          <h1 className="text-2xl font-bold pb-8">Projects</h1>
          <p>
            Here are some of the projects I&apos;ve worked on. Most are written
            either to solve my own problems or just for the fun of building
            things. Check out my{" "}
            <a
              href="https://github.com/0xN1nja"
              target="_blank"
              className="link"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            for more.
          </p>
        </div>

        <div className="grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
