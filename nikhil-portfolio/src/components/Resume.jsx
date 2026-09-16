import { useEffect, useState } from "react";
import { Download, Eye, FileText } from "lucide-react";
import profile from "../data/profile";
import skills from "../data/skills";
import experience from "../data/experience";
import education from "../data/education";
import certifications from "../data/certifications";

export default function Resume() {
  const [resumeExists, setResumeExists] = useState(null);

  useEffect(() => {
    let active = true;
    if (!profile.resumeFile) {
      setResumeExists(false);
      return;
    }

    fetch(profile.resumeFile, { method: "HEAD" })
      .then((res) => active && setResumeExists(res.ok))
      .catch(() => active && setResumeExists(false));

    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="resume" className="bg-paper py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14">
          <div>
            <p className="text-sm font-medium mb-3 text-accent-dark">Resume</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight text-ink mb-5">
              Everything in one document
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8 max-w-md">
              A short summary of my skills, education, experience and projects — useful if
              you're hiring, collaborating, or just want the full picture in one place.
            </p>

            <div className="flex flex-col xs:flex-row gap-3">
              <a
                href={profile.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-ink-2 transition-colors duration-200"
              >
                <Eye size={16} /> View resume
              </a>
              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-ink hover:border-ink/40 transition-colors duration-200"
              >
                <Download size={16} /> Download PDF
              </a>
            </div>

            {resumeExists === false && (
              <p className="mt-4 text-xs text-muted/80 flex items-start gap-1.5">
                <FileText size={14} className="mt-0.5 shrink-0" />
                Resume file not added yet — place Nikhil_Singh.pdf inside the /public folder.
              </p>
            )}
          </div>

          <div className="bg-paper-2 rounded-lg border border-line p-6 sm:p-8 space-y-7">
            <div>
              <h3 className="font-display font-semibold text-ink text-sm uppercase tracking-wide mb-3">
                Summary
              </h3>
              <p className="text-sm text-muted leading-relaxed">{profile.tagline}</p>
            </div>

            <div>
              <h3 className="font-display font-semibold text-ink text-sm uppercase tracking-wide mb-3">
                Skills
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {skills.map((g) => g.group).join(", ")}
              </p>
            </div>

            <div>
              <h3 className="font-display font-semibold text-ink text-sm uppercase tracking-wide mb-3">
                Experience
              </h3>
              {experience.map((e) => (
                <p key={e.role} className="text-sm text-muted leading-relaxed">
                  {e.role} — {e.company} ({e.duration})
                </p>
              ))}
            </div>

            <div>
              <h3 className="font-display font-semibold text-ink text-sm uppercase tracking-wide mb-3">
                Education
              </h3>
              {education.map((ed) => (
                <p key={ed.degree} className="text-sm text-muted leading-relaxed">
                  {ed.degree} — {ed.institution} ({ed.duration})
                </p>
              ))}
            </div>

            <div>
              <h3 className="font-display font-semibold text-ink text-sm uppercase tracking-wide mb-3">
                Certifications
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {certifications.length} certifications completed, including {certifications[0]?.name}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
