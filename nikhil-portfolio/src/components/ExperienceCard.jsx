export default function ExperienceCard({ role, company, domain, duration, points, technologies }) {
  return (
    <div className="relative pl-8 sm:pl-10 pb-10 last:pb-0 border-l border-line last:border-transparent">
      <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-accent border-4 border-paper" />
      <p className="text-sm text-muted mb-1">{duration}</p>
      <h3 className="font-display font-semibold text-lg text-ink">{role}</h3>
      <p className="text-sm text-ink/70 mb-4">
        {company}
        {domain ? ` — ${domain}` : ""}
      </p>
      <ul className="space-y-2 mb-4">
        {points.map((point, i) => (
          <li key={i} className="text-sm text-muted leading-relaxed flex gap-2.5">
            <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
            {point}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono px-2 py-1 rounded bg-ink/[0.04] text-ink/70 border border-line"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
