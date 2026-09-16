import { useState } from "react";
import { Mail, Phone, Globe, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./BrandIcons";
import profile from "../data/profile";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:+91${profile.phone}`,
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: "Chat directly",
    href: `https://wa.me/${profile.whatsappNumber}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "View my code",
    href: profile.github,
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "See my personal site",
    href: profile.portfolio,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Project inquiry from ${form.name || "your website"}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;

  return (
    <section id="contact" className="bg-paper py-14 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Contact"
          title="Let's talk about your project"
          description="Tell me a little about what you need, or reach out directly using any of the options below."
        />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-7 lg:gap-10">
          {/* Contact form (mailto-based, no backend) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailtoHref;
            }}
            className="bg-paper-2 border border-line rounded-lg p-5 sm:p-8 space-y-4 sm:space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-line bg-paper px-3.5 py-2.5 text-sm text-ink focus:border-accent outline-none transition-colors duration-200"
                placeholder="Ramesh Sharma"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-line bg-paper px-3.5 py-2.5 text-sm text-ink focus:border-accent outline-none transition-colors duration-200"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
                What do you need?
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md border border-line bg-paper px-3.5 py-2.5 text-sm text-ink focus:border-accent outline-none transition-colors duration-200 resize-none"
                placeholder="I run a small shop and need a simple website with..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-ink hover:bg-accent-light transition-colors duration-200"
            >
              <Send size={16} /> Send message
            </button>
            <p className="text-xs text-muted/70 text-center">
              This opens your email app with the message filled in — no data is stored anywhere.
            </p>
          </form>

          {/* Direct contact options */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 content-start">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col gap-2.5 rounded-lg border border-line bg-paper-2 p-4 sm:p-5 hover:border-accent/40 transition-colors duration-200"
              >
                <Icon size={20} className="text-accent-dark" strokeWidth={1.75} />
                <div>
                  <p className="text-xs text-muted mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-ink break-words">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
