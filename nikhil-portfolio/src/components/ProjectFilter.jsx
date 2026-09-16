export default function ProjectFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onChange(cat)}
          className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors duration-200 ${
            active === cat
              ? "bg-ink text-paper border-ink"
              : "bg-transparent text-muted border-line hover:border-ink/30 hover:text-ink"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
