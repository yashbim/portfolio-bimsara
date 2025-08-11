import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="reveal">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-[#00BFA6] hover:opacity-90"
          >
            See All Projects →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-transform hover:-translate-y-1"
            >
              <div className="aspect-video w-full bg-white/5">
                <div className="flex h-full items-center justify-center">
                  <Image
                    src={project.img}
                    alt="Project preview"
                    width={56}
                    height={56}
                    className="h-14 w-14 opacity-80 transition-transform group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-medium">{project.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{project.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
