import { CONTACT_EMAIL, LINKEDIN_URL, GITHUB_URL } from "@/constants/contact";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="reveal">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 max-w-prose text-gray-200">
          Let's connect. I'm open to interesting engineering and product
          challenges.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[#00BFA6]"
            >
              <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" />
              <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" />
            </svg>
            Email
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#00BFA6]"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.1 3.4 6.1 7.8V24h-5v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8z" />
            </svg>
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#00BFA6]"
            >
              <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.71-1.3-3.71-1.3-.5-1.26-1.23-1.6-1.23-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.58 1.19 3.21.91.1-.71.38-1.19.69-1.47-2.44-.28-5-1.22-5-5.42 0-1.2.43-2.19 1.13-2.96-.12-.28-.49-1.42.11-2.96 0 0 .92-.29 3.02 1.13a10.4 10.4 0 0 1 2.75-.37c.93 0 1.87.13 2.75.37 2.1-1.42 3.02-1.13 3.02-1.13.6 1.54.23 2.68.11 2.96.7.77 1.13 1.76 1.13 2.96 0 4.21-2.56 5.13-5 5.41.4.34.74 1.01.74 2.05 0 1.48-.01 2.67-.01 3.04 0 .29.2.63.76.52A10.53 10.53 0 0 0 23 11.5C23 5.24 18.27.5 12 .5Z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
