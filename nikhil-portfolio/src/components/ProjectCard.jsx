import { useState } from "react";
import { ExternalLink, ImageOff } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export default function ProjectCard({ project }) {
  const { title, description, image, technologies, category, liveUrl, githubUrl, isLive } = project;
  const [imgError, setImgError] = useState(false);
  const hasLinks = liveUrl || githubUrl;

  return (
    <div className="project-card group flex flex-col bg-paper-2 rounded-lg border border-line overflow-hidden hover:shadow-card transition-shadow duration-200">
      <div className="project-card-image relative aspect-[16/10] bg-ink-2 overflow-hidden">
        {!imgError ? (
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-paper/30">
            <ImageOff size={28} strokeWidth={1.5} />
            <span className="text-xs">Screenshot coming soon</span>
          </div>
        )}
        {isLive && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ink/90 backdrop-blur px-2.5 py-1 text-[11px] font-medium text-paper">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Live project
          </span>
        )}
        <span className="absolute top-3 right-3 rounded-full bg-paper/95 px-2.5 py-1 text-[11px] font-medium text-ink">
          {category}
        </span>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-ink mb-1.5">{title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-1 rounded bg-ink/[0.04] text-ink/70 border border-line"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasLinks ? (
          <div className="flex gap-3 pt-4 border-t border-line">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent-dark transition-colors duration-200"
              >
                View project <ExternalLink size={14} />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink transition-colors duration-200"
              >
                <GithubIcon size={14} /> Code
              </a>
            )}
          </div>
        ) : (
          <div className="pt-4 border-t border-line">
            <span className="text-sm text-muted/70">Link coming soon</span>
          </div>
        )}
      </div>
    </div>
  );
}
