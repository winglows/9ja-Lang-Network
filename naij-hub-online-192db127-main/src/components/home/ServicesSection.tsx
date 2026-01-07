import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import { Languages, Presentation, ClipboardCheck, BookOpenCheck, FilePenLine, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Languages,
    title: "Naijá translation",
    description: "Professional translation services to and from Nigerian Pidgin.",
  },
  {
    icon: Presentation,
    title: "Naijá teaching facilitation",
    description: "Expert facilitation for teaching and learning Nigerian Pidgin.",
  },
  {
    icon: ClipboardCheck,
    title: "Naijá Proficiency testing",
    description: "Standardized proficiency tests to assess your Naijá language skills.",
  },
  {
    icon: BookOpenCheck,
    title: "Naijá Curriculum Development",
    description: "Development of curriculum for Naijá language instruction.",
  },
  {
    icon: FilePenLine,
    title: "Naijá Script writing",
    description: "Creative and accurate scriptwriting services in Nigerian Pidgin.",
  },
  {
    icon: Lightbulb,
    title: "Naijá Content creation",
    description: "Engaging content creation in Nigerian Pidgin for various platforms.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeader
          title="Services"
          subtitle="We offer a range of services to promote the use of Nigerian Pidgin in various domains."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-secondary/50 hover:bg-secondary transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
