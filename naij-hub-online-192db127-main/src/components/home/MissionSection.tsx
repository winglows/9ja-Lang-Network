import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import { Users, BookOpen, Globe, Mic } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Lingua Franca",
    description: "Naijá serves as Nigeria's most widely spoken language, bridging ethnic and cultural divides across the nation.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "We connect scholars, writers, creators, and community members to celebrate and advance Naijá.",
  },
  {
    icon: BookOpen,
    title: "Research & Education",
    description: "Supporting academic research, language documentation, and educational resources for Naijá.",
  },
  {
    icon: Mic,
    title: "Cultural Expression",
    description: "Celebrating Naijá in music, literature, film, and everyday communication across Nigeria and beyond.",
  },
];

const MissionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <SectionHeader
          title="Our Mission"
          subtitle="To further cement the use of Naijá as well as indigenous languages as global language brand for education, entertainment, advertisement, science and technology, sports, religion, subculture and mass mobilisation among others."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-secondary/50 hover:bg-secondary transition-colors duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
