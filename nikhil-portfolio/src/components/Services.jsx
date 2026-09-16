import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import services from "../data/services";

export default function Services() {
  return (
    <section id="services" className="bg-paper py-20 md:py-28">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          kicker="Services"
          title="What I can build for your business"
          description="Straightforward web development services, priced and planned around what your business actually needs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
