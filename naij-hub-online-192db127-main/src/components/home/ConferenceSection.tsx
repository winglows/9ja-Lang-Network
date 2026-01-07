import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const ConferenceSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-gold font-semibold uppercase tracking-widest text-sm mb-4">
              Annual Conference
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
             About Naijá Language Network Conferences
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
              The Naijá na Hẹlẹlẹ Conference is a vibrant gathering that brings together 
              scholars, writers, musicians, filmmakers, and Pidgin enthusiasts from around 
              the world. Our conference features collaborative workshops, networking 
              opportunities, interactive forums, and capacity building sessions.
            </p>
            <div className="text-primary-foreground/80 text-lg leading-relaxed mb-8 space-y-4">
              <p>
                In conjunction with the Department of Linguistics, the Naijá Language Network successfully conducts proficiency tests in Naijá Language in the areas of Writing, Compression, Grammar and Speaking. The first recipients reside in The Netherlands and were awarded their proficiency certificates during the 2024 Naijá na Helele Conference (pix available).
              </p>
              <p>
                In 2025, the Naijá Language Network staged the adaptation of George Orwell's Animal Farm translated into Naijá by Francis Egbokhare. The novel entitled "Eshobe" was released during the 2025 Naijá na Selense Conference.
              </p>
              <p>
                For 2026, the Naijá Language Network will begin a Podcast Series which will provide live content in Naijá on various topics and from various disciplines in promotion of the teaching, translation and content dissemination in Nigerian Pidgin.
              </p>
              <div>
                <p className="font-semibold">Conferences:</p>
                <p>1. Theme - Naijá na Helele (Naijá is Incredible) - Nigerian Pidgin in the global, local and in-between contexts (Ibadan 2024).</p>
                <p>2. Theme - Naijá na Selense (Naijá is Classy) - Nigerian Pidgin in Sociocultural and Technological Looms (Ibadan 2025).</p>
              </div>
              <p className="font-semibold">Forum: Naijá Studies Association</p>
            </div>

         

            <Button asChild variant="gold" size="lg">
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-green-dark/50 p-8 lg:p-12">
              <div className="h-full border-2 border-primary-foreground/30 p-6 lg:p-8 flex flex-col justify-center">
                <blockquote className="font-serif text-xl lg:text-2xl italic leading-relaxed mb-6">
                  "Naijá na di language wey dey join all Nigeria people togeda. 
                  E dey carry our culture, our history, and our future."
                </blockquote>
                <cite className="text-primary-foreground/70 text-sm uppercase tracking-wide">
                  —Naijá Language Network Community
                </cite>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;
