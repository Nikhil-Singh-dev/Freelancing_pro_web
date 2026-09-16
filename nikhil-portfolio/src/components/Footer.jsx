import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import profile from "../data/profile";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const servicesList = [
  "Business Websites",
  "Landing Pages",
  "E-commerce Websites",
  "Custom Web Apps",
  "Website Maintenance",
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 pt-16 pb-8">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-md bg-accent text-ink font-display font-bold text-sm flex items-center justify-center">
                NS
              </span>
              <span className="font-display font-semibold text-paper text-[15px]">
                {profile.brandName}
              </span>
            </a>
            <p className="text-sm text-paper/55 leading-relaxed max-w-xs">
              Full stack web developer building websites and web apps for small businesses,
              startups and individuals.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-paper mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-paper/55 hover:text-paper transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-paper mb-4">Services</h4>
            <ul className="space-y-2.5">
              {servicesList.map((item) => (
                <li key={item} className="text-sm text-paper/55">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-paper mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-paper/55">
              <li>{profile.location}</li>
              <li className="break-all">{profile.email}</li>
              <li>{profile.phone}</li>
            </ul>
            <div className="flex gap-3 mt-5">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center text-paper/70 hover:text-paper hover:bg-white/10 transition-colors duration-200"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center text-paper/70 hover:text-paper hover:bg-white/10 transition-colors duration-200"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center text-paper/70 hover:text-paper hover:bg-white/10 transition-colors duration-200"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-paper/40">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-paper/40">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
