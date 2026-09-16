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
    <footer className="bg-ink border-t border-white/10 pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 pb-9 md:gap-10 md:pb-12">
          <div className="col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-md bg-accent text-ink font-display font-bold text-sm flex items-center justify-center">
                NS
              </span>
              <span className="font-display font-semibold text-paper text-[15px]">
                {profile.brandName}
              </span>
            </a>
            <p className="text-xs sm:text-sm text-paper/55 leading-relaxed max-w-xs">
              Full stack web developer building websites and web apps for small businesses,
              startups and individuals.
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-medium text-paper mb-3">Navigation</h4>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-xs sm:text-sm text-paper/55 hover:text-paper transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-medium text-paper mb-3">Services</h4>
            <ul className="space-y-2.5">
              {servicesList.map((item) => (
                <li key={item} className="text-xs sm:text-sm text-paper/55">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs sm:text-sm font-medium text-paper mb-3">Contact</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-paper/55">
              <li>{profile.location}</li>
              <li className="break-all">{profile.email}</li>
              <li>{profile.phone}</li>
            </ul>
            <div className="flex gap-2.5 mt-4">
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

        <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[11px] text-center sm:text-left text-paper/40">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
          <p className="text-[11px] text-paper/40">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
