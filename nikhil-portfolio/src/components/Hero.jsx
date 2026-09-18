import { ArrowRight, CheckCircle2 } from "lucide-react";
import profile from "../data/profile";

export default function Hero() {
  return (
    <section id="home" className="bg-ink pt-24 pb-14 md:pt-36 md:pb-28 overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-10 items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs text-paper/70">{profile.availability}</span>
          </div>

          <h1 className="font-display font-semibold text-paper text-[2rem] leading-[1.12] sm:text-5xl sm:leading-[1.1] md:text-[3.25rem] md:leading-[1.08] tracking-tight max-w-xl">
            Websites and web apps that help your business grow online
          </h1>

          <p className="mt-5 text-sm sm:text-lg text-paper/70 max-w-lg leading-relaxed">
            I'm {profile.fullName}, a full stack web developer. I design and build websites
            for shops, startups, coaching institutes and local businesses — simple to use,
            fast to load, and built to work on every device.
          </p>

          <div className="mt-7 flex flex-col xs:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-ink hover:bg-accent-light transition-colors duration-200"
            >
              Get a website built
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-paper hover:bg-white/5 transition-colors duration-200"
            >
              See my work
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5">
            {["Free first consultation", "Mobile-first builds", "Direct communication"].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-xs sm:text-sm text-paper/65">
                <CheckCircle2 size={14} className="text-accent shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right: personal profile preview */}
        <div className="relative mx-auto hidden w-full max-w-md sm:block lg:max-w-none">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-2 shadow-2xl">
            <img
              src={profile.profileImage}
              alt={`Portrait of ${profile.fullName}`}
              className="aspect-[4/3] w-full object-cover object-center"
            />
            <div className="border-t border-white/10 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-accent-light">Full stack developer</p>
                <p className="mt-1 font-display text-sm font-medium text-paper">{profile.fullName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
