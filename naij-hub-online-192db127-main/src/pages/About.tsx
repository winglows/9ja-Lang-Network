import useScrollToTop from "@/hooks/useScrollToTop";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen, Users, Globe, Award, Target, Heart } from "lucide-react";
import missionImage from "@/assets/our-mission.jpg";
import visionImage from "@/assets/our-vision.jpg";
import logo from "@/assets/Logo.png";
import bannerImage from "@/assets/people-in-conference/people-in-conference5.jpeg";

// About Us Folder Images
import pic1 from "@/assets/about-us-pics/about-us-pics.jpeg";
import pic2 from "@/assets/about-us-pics/about-us-pics2.jpeg";
import pic3 from "@/assets/about-us-pics/about-us-pics3.jpeg";
import pic4 from "@/assets/about-us-pics/about-us-pics4.jpeg";
import pic5 from "@/assets/about-us-pics/about-us-pics5.jpeg";

// Extra Images
import award1 from "@/assets/awards-in-conference/awards-in-conference.jpeg";
import award2 from "@/assets/awards-in-conference/awards-in-conference2.jpeg";
import award3 from "@/assets/awards-in-conference/awards-in-conference3.jpeg";
import award4 from "@/assets/awards-in-conference/awards-in-conference4.jpeg";
import student1 from "@/assets/student-in-conference/student-in-conference.jpeg";
import student2 from "@/assets/student-in-conference/student-in-conference2.jpeg";
import people1 from "@/assets/people-in-conference/people-in-conference.jpeg";

const About = () => {
  useScrollToTop();
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bannerImage} alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Celebrating the Voice of Naijá and other Languages
            </h1>
            <p className="text-white/90 text-2xl leading-relaxed">
              To initiate and facilitate sustainable linguistic praxis and practice of Naijá, other Pidgins and Creoles, hybrid languages, borderline languages, buffer and exo languages.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-32 bg-background overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-secondary/30 p-2 rounded-xl">
                  <img src={logo} alt="Naijá Logo" className="w-full h-full object-contain" />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Who We Are</h2>
              </div>
              <p className="text-muted-foreground text-xl leading-relaxed">
                The Naijá Language Network (NLN) is the parent body of the Naijá Studies Association (NSA) instituted October 4, 2024 during the Naijá na Hélélé Conference to carry out academic research in Naijá and other Pidgins and Creoles for their sustainable use in driving development across all strata of society.
              </p>
              <p className="text-muted-foreground text-xl leading-relaxed">
                The nominated EXCO members went on to host the Naijá na Selense Conference 2025, where the maiden edition of the Interdisciplinary Journal of Pidgin and Creoles was presented along with "Eshobe" the Naijá translation of George Orwell's "Animal Farm" by Francis Egbokhare.
              </p>
            </div>
            <div className="relative h-[500px] w-full">
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10 transform hover:scale-[1.02] transition-transform duration-500">
                <img src={pic1} alt="Team Meeting" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-background transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={pic2} alt="Collaborators" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1/4 -left-10 w-1/3 h-1/3 rounded-2xl overflow-hidden shadow-xl z-0 bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center p-4">
                <img src={logo} alt="Watermark" className="w-full h-full object-contain opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 md:py-32 bg-[#fffcf5] border-y border-amber-100/50 overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] w-full order-2 lg:order-1">
              <div className="absolute top-10 left-0 w-3/4 h-3/4 rounded-full overflow-hidden shadow-2xl z-10 border-4 border-primary/20">
                <img src={pic3} alt="Visionary Community" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute bottom-10 right-0 w-1/2 h-1/2 rounded-3xl overflow-hidden shadow-2xl z-20 transform rotate-6 hover:rotate-0 transition-all duration-500">
                <img src={pic4} alt="Educational Practice" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 right-1/4 w-24 h-24 bg-gold rounded-full z-0 animate-pulse opacity-20"></div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-white shadow-md p-2 rounded-xl">
                  <img src={logo} alt="Naijá Logo" className="w-full h-full object-contain" />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground text-xl leading-relaxed italic border-l-4 border-primary pl-6 py-2">
                "To create the enabling environment for low-resource language development through mass mobilization, technology innovation, creatives participation and inclusive education practices."
              </p>
              <div className="flex gap-4">
                <div className="w-full h-48 rounded-2xl overflow-hidden shadow-lg">
                  <img src={pic5} alt="Community Pulse" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="py-20 md:py-32 bg-cream overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gold/10 p-2 rounded-xl">
                  <img src={logo} alt="Naijá Logo" className="w-full h-full object-contain" />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our Goals</h2>
              </div>
              <p className="text-muted-foreground text-xl leading-relaxed">
                To facilitate the documentation, teaching and research of key linguistic structures:
              </p>
              <div className="grid gap-4">
                {[
                  "English-based West African Pidgins and Creoles (EWAPAC)",
                  "Hybrid languages",
                  "Borderline languages",
                  "Buffer and Exo languages and others"
                ].map((goal, i) => (
                  <div key={i} className="bg-background/50 backdrop-blur-sm p-4 rounded-lg border border-border flex items-center gap-4 hover:border-primary transition-colors cursor-default group">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0 group-hover:scale-110 transition-transform">
                      {i + 1}
                    </div>
                    <span className="text-lg font-medium text-foreground">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] w-full flex flex-col gap-4">
              <div className="h-1/2 rounded-3xl overflow-hidden shadow-xl group">
                <img src={missionImage} alt="Mission" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="flex gap-4 h-1/2">
                <div className="w-2/3 rounded-3xl overflow-hidden shadow-xl group">
                  <img src={student1} alt="Students" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="w-1/3 rounded-3xl overflow-hidden shadow-xl group">
                  <img src={student2} alt="Collaborative Study" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 md:py-32 bg-background overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] w-full grid grid-cols-2 grid-rows-2 gap-4 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-lg transform rotate-2">
                <img src={award1} alt="Award 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg mt-12 transform -rotate-1">
                <img src={award2} alt="Award 2" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg mb-12 transform -rotate-2">
                <img src={award3} alt="Award 3" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg transform rotate-1">
                <img src={award4} alt="Award 4" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center bg-white p-3 rounded-full shadow-lg border border-border">
                  <img src={logo} alt="Naijá Logo" className="w-full h-full object-contain" />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground font-semibold">Our Services</h2>
              </div>
              <div className="space-y-6">
                {[
                  "Translation to Naijá and other Nigerian Languages",
                  "Teaching facilitation in Naijá and other Nigerian Languages",
                  "Proficiency testing in Naijá and other Nigerian languages",
                  "Curriculum Development in Naijá and other Nigerian languages",
                  "Vocational training in Naijá and other Nigerian Languages etc"
                ].map((service, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1.5 shrink-0">
                      <img src={logo} alt="bullet" className="w-5 h-5 object-contain" />
                    </div>
                    <p className="text-xl text-muted-foreground leading-snug">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
