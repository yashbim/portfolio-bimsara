import { WORK_EXPERIENCE } from "@/constants/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="reveal">
        <h2 className="text-2xl font-semibold">Work Experience</h2>
        <div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
          {WORK_EXPERIENCE.map((item) => (
            <div
              key={item.role + item.company}
              className="grid gap-2 p-5 sm:grid-cols-[1fr_auto] sm:gap-4"
            >
              <div>
                <p className="text-base font-medium">
                  {item.role} · {item.company}
                </p>
                <p className="mt-1 text-gray-300">{item.summary}</p>
              </div>
              <div className="sm:text-right text-gray-300">{item.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
