import Image from "next/image";
import { AWARD_CATEGORIES } from "@/constants/awards";
import SectionHeading from "./SectionHeading";

export default function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="reveal">
        <SectionHeading
          eyebrow="Leadership & recognition"
          title="Roles, awards & achievements."
        />

        <div className="space-y-12">
          {AWARD_CATEGORIES.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-soft">
                {category.title}
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.awards.map((award) => (
                  <div
                    key={award.name + (award.term ?? "")}
                    className="card card-hover flex items-start gap-4 p-5"
                  >
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-line bg-surface-2">
                      <Image
                        src={award.icon}
                        alt=""
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold leading-snug">{award.name}</p>
                      <p className="mt-1 text-xs text-muted">{award.type}</p>
                      {award.term && (
                        <p className="mt-2 font-mono text-[11px] text-accent-2">{award.term}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
