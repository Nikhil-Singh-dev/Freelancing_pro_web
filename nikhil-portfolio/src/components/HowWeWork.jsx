import SectionHeading from "./SectionHeading";
import process from "../data/process";

export default function HowWeWork() {
  return (
    <section id="process" className="bg-paper py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="How I work"
          title="From first message to a live website"
          description="A simple, predictable process so you always know what's happening with your project."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {process.map((item) => (
            <div key={item.step} className="process-item flex gap-4">
              <span className="font-display font-semibold text-2xl text-accent-dark/70 leading-none shrink-0 w-9">
                {item.step}
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink text-base mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
