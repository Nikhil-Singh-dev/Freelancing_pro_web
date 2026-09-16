import { useState } from "react";
import { MapPin, User } from "lucide-react";
import profile from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="bg-ink py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
        <div>
          <div className="relative w-full max-w-xs mx-auto lg:mx-0">
            <div className="aspect-[4/5] rounded-lg bg-ink-2 border border-white/10 overflow-hidden">
              {!imgError ? (
                <img
                  src={profile.profileImage}
                  alt={`Portrait of ${profile.fullName}`}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-paper/30">
                  <User size={32} strokeWidth={1.5} />
                  <span className="text-xs">Add profile photo</span>
                </div>
              )}
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-paper/60 justify-center lg:justify-start">
              <MapPin size={15} />
              {profile.location}
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            kicker="About"
            title={`Hi, I'm ${profile.fullName}`}
            light
          />
          <div className="space-y-4 text-paper/70 leading-relaxed max-w-2xl -mt-8">
            <p>
              I'm a full stack web developer based in {profile.location}. I build websites and
              web applications for businesses that want a professional presence online — from
              small shops and coaching institutes to startups and service providers.
            </p>
            <p>
              I work across the full stack: I design the interface, build the frontend with
              React and Tailwind CSS, and connect it to backend services using Node.js, Express, Java, and Python
              and databases like MongoDB and MySQL when a project needs it. I've also worked on
              enterprise systems, including an internship building screens and business logic
              for insurance software on IBM i (AS/400) using COBOL and RPG.
            </p>
            <p>
              I'm currently pursuing my Master of Computer Applications (MCA) while continuing
              to take on freelance projects and build my own products, including a live
              translator tool and a real-time chat application.
            </p>
            <p>
              What I care about most when building a website is that it's fast, easy to use, and
              actually works for the person visiting it — not just impressive to look at.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-xl">
            {[
              { label: "Focus", value: "Full Stack" },
              { label: "Based in", value: "Bhopal" },
              { label: "Education", value: "MCA (Ongoing)" },
              { label: "Availability", value: "Freelance" },
            ].map((item) => (
              <div key={item.label} className="border-t border-white/15 pt-3">
                <p className="text-xs text-paper/50 mb-1">{item.label}</p>
                <p className="text-sm font-medium text-paper">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
