export default function SectionHeading({ kicker, title, description, light = false, align = "left" }) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass} mb-12 md:mb-16`}>
      {kicker && (
        <p className={`text-sm font-medium mb-3 ${light ? "text-accent-light" : "text-accent-dark"}`}>
          {kicker}
        </p>
      )}
      <h2
        className={`font-display font-semibold text-3xl sm:text-4xl leading-tight tracking-tight ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-paper/70" : "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
