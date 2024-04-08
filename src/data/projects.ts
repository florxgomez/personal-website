import { Project } from "../types";

export const projects: Project[] = [
  {
    repoUrl: "https://github.com/florxgomez/discuss-app",
    title: "discuss",
    description: "A social media discussion website with authentication.",
    stack:
      "NextJS, TypeScript, TailwindCSS, nextui, Github OAuth, zod, next-auth, Prisma, Vercel Postgres",
  },
  {
    repoUrl: "https://github.com/florxgomez/swipe",
    title: "swipe",
    description: "Responsive payments website.",
    stack: "HTML, CSS, JavaScript",
  },
  {
    repoUrl: "https://github.com/florxgomez/personal-website",
    title: "personal-website",
    description: "My personal website.",
    stack: "NextJS, TypeScript, TailwindCSS, shadcn/ui",
  },
];
