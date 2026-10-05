import { SKILLS } from "@/constants/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="reveal">
        <SectionHeading eyebrow="Skills" title="The toolkit I work with." />
        <div className="grid gap-5 md:grid-cols-3">
          {SKILLS.map((category) => (
            <div key={category.title} className="card p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent-soft">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="chip">
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
