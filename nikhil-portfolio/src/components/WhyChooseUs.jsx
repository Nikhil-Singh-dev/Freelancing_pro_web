import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import whyChooseUs from "../data/whyChooseUs";
import iconMap from "../data/iconMap";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-ink py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading kicker="Why work with me" title="What you can expect" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div key={item.title} className="flex gap-4">
                <Icon size={20} className="text-accent-light shrink-0 mt-0.5" strokeWidth={1.75} />
                <div>
                  <h3 className="font-display font-medium text-paper text-base mb-1.5">{item.title}</h3>
                  <p className="text-sm text-paper/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
