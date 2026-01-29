import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Unique images for conference
import award1 from "@/assets/awards-in-conference/awards-in-conference.jpeg";
import award2 from "@/assets/awards-in-conference/awards-in-conference2.jpeg";
import award3 from "@/assets/awards-in-conference/awards-in-conference3.jpeg";
import people1 from "@/assets/people-in-conference/people-in-conference5.jpeg";
import people2 from "@/assets/people-in-conference/people-in-conference.jpeg";

const ConferenceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Our Conferences
              </h2>
              <div className="space-y-6 text-primary-foreground/90 text-xl leading-relaxed">
                <p>
                  The Naijá na Hẹlẹlẹ Conference is a vibrant gathering that brings together
                  scholars, writers, musicians, filmmakers, and Pidgin enthusiasts from around
                  the world.
                </p>
                <p className="text-lg opacity-80 border-l-2 border-gold/50 pl-6">
                  In conjunction with the Department of Linguistics, the Naijá Language Network conducts proficiency tests in Writing, Compression, Grammar and Speaking.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-base font-medium">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <p className="text-gold text-sm font-bold mb-1">2024 Theme</p>
                    <p>Naijá na Helele (Ibadan)</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <p className="text-gold text-sm font-bold mb-1">2025 Theme</p>
                    <p>Naijá na Selense (Ibadan)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button asChild variant="gold" size="lg" className="rounded-full px-10">
                <Link to="/about">
                  Explore Highlights
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Section - Conference Exclusive Imagery Grid */}
          <div className="relative h-[700px] w-full">
            {/* Master Image - People */}
            <div className="absolute top-10 right-0 w-[80%] h-[55%] rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white/20 group">
              <img src={people1} alt="Naija na Helele" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

            {/* Award Showcase - Top Left */}
            <div className="absolute top-0 left-0 w-[45%] h-[35%] rounded-3xl overflow-hidden shadow-2xl z-30 border-8 border-primary group transform -rotate-6 hover:rotate-0 transition-all duration-500">
              <img src={award1} alt="Award Proficiency" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

            {/* Diversity - Bottom Left */}
            <div className="absolute bottom-10 left-4 w-[50%] h-[40%] rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white/20 group transform rotate-3 hover:rotate-0 transition-all duration-500">
              <img src={people2} alt="Attendees" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

            {/* Proficiency - Bottom Right */}
            <div className="absolute bottom-0 right-10 w-[40%] h-[30%] rounded-3xl overflow-hidden shadow-2xl z-30 border-4 border-gold/50 group">
              <img src={award2} alt="Ceremony" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>

            {/* Floating Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gold rounded-full z-40 flex items-center justify-center shadow-2xl animate-pulse">
              <span className="text-primary font-black text-2xl">2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;
