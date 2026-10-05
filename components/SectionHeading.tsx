export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
