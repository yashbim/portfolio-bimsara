import Image from "next/image";
import SectionHeading from "./SectionHeading";

const POSTS = [
  {
    title:
      "The Impossible Free VPS — How to Get Oracle’s 24GB RAM Monster Without Paying a Dime",
    desc: "A complete guide to legitimately obtaining Oracle’s surprisingly powerful free-tier ARM instance with 24GB RAM, including setup steps, troubleshooting, and activation tips.",
    img: "/blog_thumbnail_1.png",
    alt: "Oracle Free VPS Blog",
    href: "https://medium.com/@ybimsara03/the-impossible-free-vps-how-to-get-oracles-24gb-ram-monster-without-paying-a-dime-47fb4fb9536e",
  },
  {
    title:
      "How a Sarcastic AI That I Tried For Fun Actually Saved My Research Project",
    desc: "What started as a bit of fun with a snarky AI turned into an unexpected lifeline for my research project — here’s how it happened.",
    img: "/blog_thumbnail_2.jpeg",
    alt: "Sarcastic AI Research Project Blog",
    href: "https://medium.com/@ybimsara03/how-a-sarcastic-ai-that-i-tried-for-fun-actually-saved-my-research-project-b6728bf2f0bb",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="reveal">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Writing" title="Notes from things I've tried." />
          <a
            href="https://medium.com/@ybimsara03"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-10 text-sm font-semibold text-accent-2 hover:underline sm:mb-12"
          >
            View on Medium →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {POSTS.map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-line">
                <Image
                  src={post.img}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.desc}</p>
                <span className="mt-auto pt-5 text-sm font-semibold text-accent-soft">
                  Read article →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
