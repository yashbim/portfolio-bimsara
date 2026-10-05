"use client";

import { useState } from "react";
import { CONTACTS } from "@/constants/contact";
import SectionHeading from "./SectionHeading";

const fieldClass =
  "w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-subtle transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";
const labelClass = "mb-1.5 block text-xs font-medium text-muted";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.success) {
        setStatus({ ok: true, text: "Message sent successfully!" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ ok: false, text: result.message || "Something went wrong." });
      }
    } catch (error) {
      console.error(error);
      setStatus({ ok: false, text: "Failed to send message." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="reveal">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
        />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <form onSubmit={handleSubmit} className="card space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className={labelClass}>Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me a bit about your project or idea…"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={fieldClass}
                required
              />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={isSending}
                className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-on-accent transition hover:bg-accent-deep hover:text-white disabled:opacity-50"
              >
                {isSending ? "Sending…" : "Send message"}
              </button>
              {status && (
                <p
                  role="status"
                  className={`text-sm ${status.ok ? "text-accent-soft" : "text-red-400"}`}
                >
                  {status.text}
                </p>
              )}
            </div>
          </form>

          <div>
            <p className="leading-relaxed text-muted">
              I&apos;m open to interesting engineering and product challenges.
              Send a message, or find me on any of these.
            </p>
            <ul className="mt-6 space-y-2">
              {CONTACTS.map(({ name, href, icon: Icon }) => (
                <li key={name}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="card card-hover flex items-center gap-3 px-4 py-3 text-sm font-medium"
                  >
                    <Icon className="h-4 w-4 text-accent-soft" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
