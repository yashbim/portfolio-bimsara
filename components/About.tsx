import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="reveal">
        <SectionHeading
          eyebrow="About"
          title="Engineer by training, analyst by focus."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <p className="leading-relaxed text-muted">
            I&apos;m Bimsara, a Software Engineering graduate of the University
            of Westminster. I&apos;ve been a devoted fan of computing since a
            very young age, and I bring energy, leadership, and communication
            skills in multiple languages to everything I work on.
          </p>
          <p className="leading-relaxed text-muted">
            Now my focus is business analytics, bridging technology and
            business strategy. I enjoy gathering and analysing data to uncover
            actionable insights, improving decision-making, and turning complex
            requirements into clear, impactful outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
