import Image from "next/image";
import { AWARDS } from "@/constants/awards";

export default function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="reveal">
        <h2 className="text-2xl font-semibold">Roles, Awards & Achievements</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {AWARDS.map((award) => (
            <div
              key={award.name}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 relative">
                <Image
                  src={award.icon}
                  alt="award icon"
                  fill
                  className="object-contain p-2 opacity-80"
                />
              </div>

              <div>
                <p className="font-medium">{award.name}</p>
                <p className="text-sm text-gray-300 capitalize">{award.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
