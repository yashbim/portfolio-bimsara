import Image from "next/image";
import { WORK_EXPERIENCE } from "@/constants/experience";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="reveal">
        <SectionHeading
          eyebrow="Professional experience"
          title="Where I've built and analysed."
        />

        <ol className="relative space-y-5 border-l border-line pl-6 sm:pl-8">
          {WORK_EXPERIENCE.map((item, i) => (
            <li key={item.role + item.company} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-background sm:-left-[39px] ${
                  i === 0 ? "bg-accent" : "bg-line"
                }`}
              />
              <div className="card card-hover flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
                <div className="flex gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.icon}
                      alt={`${item.company} logo`}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{item.role}</h3>
                    <p className="text-sm font-medium text-accent-2">{item.company}</p>
                    {item.summary && (
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.summary}
                      </p>
                    )}
                  </div>
                </div>
                <span
                  className={`w-fit shrink-0 rounded-full border px-3 py-1 font-mono text-xs ${
                    i === 0
                      ? "border-accent/30 bg-accent/10 text-accent-soft"
                      : "border-line bg-surface-2 text-muted"
                  }`}
                >
                  {item.period}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
