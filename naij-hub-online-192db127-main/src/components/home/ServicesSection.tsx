import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Languages, Presentation, ClipboardCheck, BookOpenCheck, FilePenLine, Lightbulb } from "lucide-react";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slideWebp from "@/assets/slide.webp";

const services = [
  { icon: Languages, title: "Naijá translation", description: "Professional translation services to and from Nigerian Pidgin." },
  { icon: Presentation, title: "Naijá teaching facilitation", description: "Expert facilitation for teaching and learning Nigerian Pidgin." },
  { icon: ClipboardCheck, title: "Naijá Proficiency testing", description: "Standardized proficiency tests to assess your Naijá skills." },
  { icon: BookOpenCheck, title: "Naijá Curriculum Development", description: "Development of curriculum for Naijá language instruction." },
  { icon: FilePenLine, title: "Naijá Script writing", description: "Creative and accurate scriptwriting services in Nigerian Pidgin." },
  { icon: Lightbulb, title: "Naijá Content creation", description: "Engaging content creation in Naijá for various platforms." },
];

const ServicesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#f4faf4] overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Right Section - Image Collage FIRST for visual variety */}
          <div className="relative h-[650px] order-2 lg:order-1">
            <div className="absolute top-0 left-0 w-[70%] h-[60%] rounded-[3rem] overflow-hidden shadow-2xl z-10 border-4 border-white/50 group">
              <img src={slide2} alt="Facilitation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute top-20 right-0 w-[60%] h-[50%] rounded-[3rem] overflow-hidden shadow-2xl z-20 border-4 border-white/50 group transform rotate-3 hover:rotate-0 transition-all duration-500">
              <img src={slide3} alt="Culture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute bottom-0 left-1/4 w-[65%] h-[45%] rounded-[3rem] overflow-hidden shadow-2xl z-30 border-8 border-background group transform -rotate-2 hover:rotate-0 transition-all duration-500">
              <img src={slideWebp} alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>

          {/* Left Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-left">
                Our Services
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed">
                We offer a range of professional services to promote the use of Nigerian Pidgin in global domains.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {services.slice(0, 4).map((service) => (
                <div key={service.title} className="group relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-16">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
                <Link to="/contact">Request a Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
