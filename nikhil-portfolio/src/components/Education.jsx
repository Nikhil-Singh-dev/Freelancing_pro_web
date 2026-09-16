import { Award, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import education from "../data/education";
import certifications from "../data/certifications";

export default function Education() {
  return (
    <section id="education" className="bg-ink py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHeading kicker="Education" title="Academic background" light />
          <div className="max-w-md -mt-2">
            {education.map((item) => (
              <div key={item.degree} className="relative pl-8 sm:pl-10 pb-10 last:pb-0 border-l border-white/15 last:border-transparent">
                <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-accent border-4 border-ink" />
                <p className="text-sm text-paper/50 mb-1">{item.duration}</p>
                <h3 className="font-display font-semibold text-lg text-paper">{item.degree}</h3>
                <p className="text-sm text-paper/70 mt-1">{item.institution}</p>
                {item.status && <p className="text-sm text-accent-light font-medium mt-1">{item.status}</p>}
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading kicker="Certifications" title="Courses & certifications" light />
          <div className="grid xs:grid-cols-2 gap-3.5 -mt-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-lg border border-white/12 bg-white/[0.03] p-4 flex flex-col"
              >
                <Award size={18} className="text-accent-light mb-3" />
                <h4 className="text-sm font-medium text-paper leading-snug mb-1.5">{cert.name}</h4>
                <p className="text-xs text-paper/50 mt-auto">
                  {cert.organization}
                  {cert.date ? ` (${cert.date})` : ""}
                </p>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-accent-light mt-2"
                  >
                    <BadgeCheck size={13} /> Verify
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
