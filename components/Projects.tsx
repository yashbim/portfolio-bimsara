import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";
import { FaGithub, FaYoutube } from "react-icons/fa";

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
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-transform hover:-translate-y-1 h-full"
            >
              {/* Image */}
<div className="aspect-video w-full relative">
  <Image
    src={project.img}
    alt="Project preview"
    fill
    className="object-cover"
  />
</div>


              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-medium">{project.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{project.desc}</p>

                {/* Tech stack */}
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

                {/* Buttons */}
                <div className="mt-auto pt-4 flex gap-2 flex-wrap">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-md border border-[#00BFA6] px-3 py-1 text-xs font-medium text-[#00BFA6] hover:bg-[#00BFA6] hover:text-black transition"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </Link>

                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-md border border-red-500 px-3 py-1 text-xs font-medium text-red-500 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaYoutube className="w-4 h-4" />
                      Watch Demo
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
