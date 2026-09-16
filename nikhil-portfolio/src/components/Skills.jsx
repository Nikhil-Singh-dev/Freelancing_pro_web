import SectionHeading from "./SectionHeading";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-paper py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Skills"
          title="Technologies I work with"
          description="Tools and languages I use to plan, design, build and ship a website or application."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group) => (
            <div key={group.group} className="bg-paper-2 rounded-lg border border-line p-6">
              <h3 className="font-display font-semibold text-ink text-base mb-4">{group.group}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-md bg-ink/[0.04] text-body border border-line"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
