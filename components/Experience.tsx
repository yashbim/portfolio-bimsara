import Image from "next/image";
import { WORK_EXPERIENCE } from "@/constants/experience";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6"
    >
      <div className="reveal">
        <h2 className="text-4xl font-semibold">Work Experience</h2>

        <div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-static">
          {WORK_EXPERIENCE.map((item) => (
            <div
              key={item.role + item.company}
              className="grid gap-4 p-5 sm:grid-cols-[1fr_auto]"
            >
              {/* LEFT CONTENT */}
              <div className="flex gap-4">
                {/* Logo */}
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-white/5">
                  <Image
                    src={item.icon}
                    alt={`${item.company} logo`}
                    fill
                    className="object-cover  bg-white"
                  />
                </div>

                {/* Text Content */}
                <div>
                  <p className="text-lg font-bold">{item.role}</p>
                  <p className="text-lg font-thin">{item.company}</p>
                  <p className="mt-1 text-gray-300">{item.summary}</p>
                </div>
              </div>

              {/* PERIOD */}
              <div
                className={`text-gray-300 sm:text-right ${raleway.className}`}
              >
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}