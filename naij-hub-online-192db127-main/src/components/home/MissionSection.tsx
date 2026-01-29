import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Globe, Mic } from "lucide-react";
import logo from "@/assets/Logo.png";
import mission1 from "@/assets/our-mission.jpg";
import mission2 from "@/assets/slide-1.jpg";

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
    <section className="py-24 md:py-32 bg-[#fdfcfb] overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-primary font-bold uppercase tracking-widest text-sm">
                Our Foundation
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-xl">
                To further cement the use of Naijá as well as indigenous languages as global language brand for education, entertainment, advertisement, science and technology, sports, religion, subculture and mass mobilisation among others.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature) => (
                <div key={feature.title} className="space-y-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Right Images - Asymmetrical Composition */}
          <div className="relative h-[600px] w-full">
            <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl z-10 group">
              <img src={mission1} alt="Mission" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-8 border-background group transform -rotate-3 hover:rotate-0 transition-all duration-500">
              <img src={mission2} alt="Focus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

            {/* Decorative Element */}
            <div className="absolute top-1/4 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-0" />
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl z-30 flex items-center justify-center p-3 animate-bounce shadow-primary/20">
              <img src={logo} alt="Naija Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
