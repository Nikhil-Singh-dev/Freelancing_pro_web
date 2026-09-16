import { Code2 } from "lucide-react";
import iconMap from "../data/iconMap";

export default function ServiceCard({ icon, title, description }) {
  const Icon = iconMap[icon] || Code2;
  return (
    <div className="group relative bg-paper-2 rounded-lg border border-line p-6 sm:p-7 hover:border-accent/40 transition-colors duration-200">
      <div className="w-11 h-11 rounded-md bg-ink flex items-center justify-center mb-5">
        <Icon size={20} className="text-accent-light" strokeWidth={1.75} />
      </div>
      <h3 className="font-display font-semibold text-lg text-ink mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
