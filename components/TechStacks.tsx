"use client";

import Image from "next/image";
import { Button } from "./ui/buttons";
import { FaDiscord } from "react-icons/fa6";
import Link from "next/link";

const techStack = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", link: "https://react.dev" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", link: "https://nextjs.org" },
  { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain-wordmark.svg", link: "https://tailwindcss.com" },
  { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", link: "https://www.typescriptlang.org" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", link: "https://nodejs.org" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", link: "https://expressjs.com" },
  { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", link: "https://www.npmjs.com" },
  { name: "PNPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg", link: "https://pnpm.io" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", link: "https://git-scm.com" },
  { name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", link: "https://github.com" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", link: "https://figma.com" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", link: "https://www.postman.com/" },
  { name: "Deno", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg", link: "https://deno.com" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", link: "https://www.postgresql.org" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", link: "https://www.mysql.com" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", link: "https://www.mongodb.com" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", link: "https://code.visualstudio.com/" },
  { name: "Rollup", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rollup/rollup-original.svg", link: "https://rollupjs.org" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", link: "https://www.docker.com" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", link: "https://vercel.com" },
  { name: "Astro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg", link: "https://astro.build" },
  { name: "ESLint", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg", link: "https://eslint.org" },
];

export default function TechStacks() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-5xl">
        <h2 className="text-left text-3xl md:text-4xl font-bold mb-4">
          Technologies <span className="text-blue-600">I use.</span>
        </h2>
        <p className="text-lg text-left text-slate-600 dark:text-slate-300 mb-10">
          Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <Link
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" key={tech.name} className="h-auto px-4 py-2">
                <div className="flex items-center gap-2">
                  <Image src={tech.icon} alt={tech.name} width={20} height={20} />
                  <span className="text-sm">{tech.name}</span>
                </div>
              </Button>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-slate-500 dark:text-slate-400 italic text-center">...and many more!</p>
      </div>
    </section>
  );
}
