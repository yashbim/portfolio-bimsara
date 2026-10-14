import SectionHeading from "./SectionHeading";

const FACTS = [
  { label: "Education", value: "Software Engineering, University of Westminster" },
  { label: "Currently", value: "Associate Business Analyst at hSenid Mobile Solutions" },
  { label: "Focus", value: "Business analytics, data-driven decision-making" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="reveal">
        <SectionHeading
          eyebrow="About"
          title="Engineer by training, analyst by focus."
        />

        <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:gap-14">
          <div className="max-w-prose">
            <p className="border-l-2 border-accent/50 pl-5 text-lg leading-relaxed text-foreground sm:text-xl">
              I&apos;m Bimsara, a Software Engineering graduate of the University
              of Westminster. I&apos;ve been a devoted fan of computing since a
              very young age, and I bring energy, leadership, and communication
              skills in multiple languages to everything I work on.
            </p>
            <p className="mt-6 pl-5 leading-relaxed text-muted">
              Now my focus is business analytics, bridging technology and
              business strategy. I enjoy gathering and analysing data to uncover
              actionable insights, improving decision-making, and turning complex
              requirements into clear, impactful outcomes.
            </p>
          </div>

          <dl className="card h-fit divide-y divide-line p-6 sm:p-7">
            {FACTS.map((fact) => (
              <div key={fact.label} className="py-4 first:pt-0 last:pb-0">
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
