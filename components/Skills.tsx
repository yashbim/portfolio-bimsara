import { SKILLS } from "@/constants/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="reveal">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {SKILLS.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#00BFA6]">
                {category.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-sm text-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
