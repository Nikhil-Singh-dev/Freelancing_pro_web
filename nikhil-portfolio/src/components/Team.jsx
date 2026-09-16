import { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import team from "../data/team";

function SocialLink({ href, label, children }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} profile`}
      className="w-9 h-9 rounded-md border border-line flex items-center justify-center text-muted hover:text-ink hover:border-ink/30 transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function TeamCard({ member, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="group bg-paper-2 border border-line rounded-lg overflow-hidden shadow-card animate-rise"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] bg-ink overflow-hidden">
        {member.image && !imageError ? (
          <img
            src={member.image}
            alt={`${member.name} portrait`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#25314A,#101826_68%)]">
            <span className="font-display text-5xl font-semibold text-accent/90">{member.initials}</span>
          </div>
        )}
        <span className="absolute left-4 bottom-4 rounded-full bg-paper/95 px-3 py-1 text-[11px] font-medium text-ink">
          {member.role}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display font-semibold text-xl text-ink">{member.name}</h3>
            <p className="mt-1 text-sm text-accent-dark">{member.role}</p>
          </div>
          <ArrowUpRight size={18} className="text-muted/60 shrink-0" aria-hidden="true" />
        </div>

        <p className="mt-4 text-sm text-muted leading-relaxed min-h-[4.5rem]">{member.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-5">
          {member.tags.map((tag) => (
            <span key={tag} className="text-[11px] font-mono px-2 py-1 rounded bg-ink/[0.04] text-ink/70 border border-line">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-line">
          <SocialLink href={member.github} label="GitHub"><GithubIcon size={16} /></SocialLink>
          <SocialLink href={member.linkedin} label="LinkedIn"><LinkedinIcon size={16} /></SocialLink>
          <SocialLink href={member.x} label="X">X</SocialLink>
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="w-9 h-9 rounded-md border border-line flex items-center justify-center text-muted hover:text-ink hover:border-ink/30 transition-colors duration-200"
            >
              <Mail size={16} />
            </a>
          )}
          {member.email && <span className="ml-auto text-xs text-muted truncate max-w-[11rem]">{member.email}</span>}
        </div>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section id="team" className="bg-paper-2 py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="The people behind the work"
          title="Meet the team"
          description="A small, focused team combining engineering and design to turn good ideas into useful digital products."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => <TeamCard key={member.name} member={member} index={index} />)}
        </div>
      </div>
    </section>
  );
}