export default function EducationCard({ degree, institution, duration, status, detail }) {
  return (
    <div className="relative pl-8 sm:pl-10 pb-10 last:pb-0 border-l border-line last:border-transparent">
      <span className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-accent border-4 border-paper" />
      <p className="text-sm text-muted mb-1">{duration}</p>
      <h3 className="font-display font-semibold text-lg text-ink">{degree}</h3>
      <p className="text-sm text-ink/70 mt-1">{institution}</p>
      {status && <p className="text-sm text-accent-dark font-medium mt-1">{status}</p>}
      {detail && <p className="text-sm text-muted leading-relaxed mt-2">{detail}</p>}
    </div>
  );
}
