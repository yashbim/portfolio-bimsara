import { useState } from "react";
import { CONTACTS } from "@/constants/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus(result.message || "Something went wrong.");
    }
  } catch (error) {
    console.error(error);
    setStatus("Failed to send message.");
  } finally {
    setIsSending(false);
  }
};


  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="reveal">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4 max-w-prose text-gray-200">
          Let&apos;s connect. I&apos;m open to interesting engineering and product challenges.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4 bg-white/5 p-6 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md bg-white/10 p-3 text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md bg-white/10 p-3 text-white focus:outline-none"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full rounded-md bg-white/10 p-3 text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-md bg-white/10 p-3 text-white focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSending}
            className="bg-[#00BFA6] text-white px-6 py-3 rounded-md hover:bg-[#00a58e] disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
          {status && <p className="mt-2 text-sm text-gray-300">{status}</p>}
        </form>

        {/* Social Links */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
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
