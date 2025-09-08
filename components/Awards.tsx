import Image from "next/image";
import { AWARD_CATEGORIES } from "@/constants/awards";

export default function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="reveal">
        <h2 className="text-2xl font-semibold mb-8">Roles, Awards & Achievements</h2>
        
        {AWARD_CATEGORIES.map((category, categoryIndex) => (
          <div key={category.title} className={categoryIndex > 0 ? "mt-10" : ""}>
            <h3 className="text-xl font-medium text-gray-200 mb-4">{category.title}</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.awards.map((award) => (
                <div
                  key={award.name}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white/5 relative overflow-hidden">
                    <Image
                      src={award.icon}
                      alt={`${award.type} icon`}
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm leading-tight">{award.name}</p>
                    
                    {/* ✅ Show term if available */}
                    {award.term && (
                      <p className="text-xs text-gray-400 mt-0.5">{award.term}</p>
                    )}

                    <p className="text-xs text-gray-300 capitalize mt-1">{award.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
