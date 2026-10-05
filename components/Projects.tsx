"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const linkClass =
  "inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-xs font-semibold text-foreground transition hover:border-accent/50 hover:text-accent-soft";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="reveal">
        <SectionHeading eyebrow="Projects" title="Selected work." />

        <div className="grid gap-5 md:grid-cols-3">
          {projectsToShow.map((project) => (
            <article
              key={project.title}
              className="card card-hover group flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-video w-full overflow-hidden border-b border-line bg-surface-2">
                <Image
                  src={project.img}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-bold leading-snug tracking-tight">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{project.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.github && (
                    <Link href={project.github} target="_blank" className={linkClass}>
                      <FaGithub className="h-3.5 w-3.5" />
                      Code
                    </Link>
                  )}
                  {project.demo && (
                    <Link href={project.demo} target="_blank" className={linkClass}>
                      <FaYoutube className="h-3.5 w-3.5" />
                      Demo
                    </Link>
                  )}
                  {project.website && (
                    <Link href={project.website} target="_blank" className={linkClass}>
                      <FaExternalLinkAlt className="h-3 w-3" />
                      Live
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {PROJECTS.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              className="rounded-full border border-line bg-surface px-6 py-2.5 text-sm font-semibold transition hover:border-accent/50 hover:text-accent-soft"
            >
              {showAll ? "Show less" : `Show all ${PROJECTS.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
