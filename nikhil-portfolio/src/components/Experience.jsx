import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-paper py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading kicker="Experience" title="Work experience" />
        <div className="max-w-2xl">
          {experience.map((item) => (
            <ExperienceCard key={item.role} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
