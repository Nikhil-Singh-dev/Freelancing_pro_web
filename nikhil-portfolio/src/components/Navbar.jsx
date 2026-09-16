import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import profile from "../data/profile";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur shadow-[0_1px_0_rgba(255,255,255,0.08)]" : "bg-ink"
      }`}
    >
      <nav className="max-w-content mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 rounded-md bg-accent text-ink font-display font-bold text-sm flex items-center justify-center">
            NS
          </span>
          <span className="font-display font-semibold text-paper text-[15px] leading-tight hidden xs:block">
            {profile.brandName}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-paper/75 hover:text-paper transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-ink hover:bg-accent-light transition-colors duration-200"
          >
            Start a project
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-paper p-2 -mr-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 bg-ink transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col px-6 pt-6 gap-1">
          {links.map((link) => (
            <li key={link.href} className="border-b border-white/10">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg text-paper/90 font-display font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-6 pt-6">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center w-full rounded-md bg-accent px-4 py-3 text-base font-medium text-ink"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}
