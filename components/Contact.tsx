import { CONTACTS } from "@/constants/contact";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="reveal">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 max-w-prose text-gray-200">
          Let&apos;s connect. I&apos;m open to interesting engineering and product
          challenges.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          {CONTACTS.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
            >
              <Icon className="w-5 h-5 text-[#00BFA6]" />
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
