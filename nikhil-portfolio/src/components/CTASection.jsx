import { ArrowRight } from "lucide-react";

const audiences = [
  "Shop owners",
  "Startups",
  "Coaching institutes",
  "Restaurants",
  "Local businesses",
  "Service providers",
];

export default function CTASection() {
  return (
    <section className="bg-ink-2 py-20 md:py-24">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div className="rounded-2xl bg-ink border border-white/10 p-8 sm:p-12 md:p-16 text-center">
          <p className="text-sm text-accent-light font-medium mb-4">For businesses without a website yet</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-[2.75rem] leading-tight text-paper max-w-2xl mx-auto">
            Have a business but no website that represents it well?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-paper/65 max-w-xl mx-auto leading-relaxed">
            Let's build something simple, professional and easy for your customers to use —
            so people take your business seriously the moment they find you online.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {audiences.map((a) => (
              <span
                key={a}
                className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-paper/70"
              >
                {a}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-medium text-ink hover:bg-accent-light transition-colors duration-200"
          >
            Start your project
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
