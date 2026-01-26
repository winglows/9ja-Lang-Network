import useScrollToTop from "@/hooks/useScrollToTop";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen, Users, Globe, Award, Target, Heart } from "lucide-react";
import missionImage from "@/assets/our-mission.jpg";
import visionImage from "@/assets/our-vision.jpg";
import logo from "@/assets/Logo.png";

const About = () => {
  useScrollToTop();
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-green-800">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block font-semibold uppercase tracking-widest text-base mb-4 text-white/80">
              About Us
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Celebrating the Voice of Naijá
            </h1>
            <p className="text-white/90 text-2xl leading-relaxed">
              To initiate and facilitate sustainable linguistic praxis and practice of Naijá, other Pidgins and Creoles, hybrid languages, borderline languages, buffer and exo languages.

            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:hidden">
              <img src={missionImage} alt="Who We Are" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={logo} alt="Naijá Logo" className="w-full h-full object-contain" />
                </div>
                <h2 className="font-serif text-4xl font-semibold">Who We Are</h2>
              </div>
              <p className="text-muted-foreground text-xl leading-relaxed mb-6">
                The Naijá Language Network (NLN) is the parent body of the Naijá Studies Association (NSA) instituted October 4, 2024 during the Naijá na Hélélé Conference to carry out academic research in Naijá and other Pidgins and Creoles for their sustainable use in driving development across all strata of society. The nominated EXCO members went on to host the Naijá na Selense Conference 2025, where the maiden edition of the Interdisciplinary Journal of Pidgin and Creoles was presented along with "Eshobe" the Naijá translation of George Orwell's "Animal Farm" by Francis Egbokhare.
              </p>
            </div>
            <div className="hidden lg:block">
              <img src={missionImage} alt="Who We Are" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>



      {/* Our Vision */}
      <section className="section-padding bg-secondary/20">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={logo} alt="Naijá Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground text-xl leading-relaxed mb-10">
              To create the enabling environment for low-resource language development through mass mobilization, technology innovation, creatives participation and inclusive education practices.
            </p>
            <div className="w-full max-w-3xl">
              <img src={visionImage} alt="Our Vision" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>



      {/* Our Goals */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10 justify-center">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={logo} alt="Naijá Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center">Our Goals</h2>
            </div>

            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
              <p className="text-muted-foreground text-xl leading-relaxed mb-6 text-center">
                To facilitate the documentation, teaching and research of:
              </p>
              <ul className="list-disc pl-5 space-y-5 text-muted-foreground text-xl leading-relaxed">
                <li className="pl-2">English-based West African Pidgins and Creoles (EWAPAC)</li>
                <li className="pl-2">Hybrid languages</li>
                <li className="pl-2">Borderline languages</li>
                <li className="pl-2">Buffer and Exo languages and others</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10 justify-center">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={logo} alt="Naijá Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center">Our Services</h2>
            </div>

            <div className="bg-background rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
              <ul className="list-disc pl-5 space-y-5 text-muted-foreground text-xl leading-relaxed">
                <li className="pl-2">Translation to Naijá and other Nigerian Languages</li>
                <li className="pl-2">Teaching facilitation in Naijá and other Nigerian Languages</li>
                <li className="pl-2">Proficiency testing in Naijá and other Nigerian languages</li>
                <li className="pl-2">Curriculum Development in Naijá and other Nigerian languages</li>
                <li className="pl-2">Vocational training in Naijá and other Nigerian Languages etc</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Conference Info */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
              The Naijá Language Network Conference
            </h2>
            <p className="text-primary-foreground/80 text-2xl leading-relaxed mb-12">
              Our flagship annual event brings together the global Naijá community for
              collaboration, networking, interactive forums, and capacity building.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-primary-foreground/20">
                <Users className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-2">Networking</h3>
                <p className="text-primary-foreground/70 text-base">
                  Connect with scholars, creators, and enthusiasts from around the world.
                </p>
              </div>

              <div className="p-6 border border-primary-foreground/20">
                <BookOpen className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-2">Workshops</h3>
                <p className="text-primary-foreground/70 text-base">
                  Participate in interactive sessions on research, writing, and advocacy.
                </p>
              </div>

              <div className="p-6 border border-primary-foreground/20">
                <Award className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-semibold mb-2">Capacity Building</h3>
                <p className="text-primary-foreground/70 text-base">
                  Develop skills and knowledge to advance Naijá in your community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide our work in celebrating and advancing Naijá."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Inclusivity",
                description: "We welcome all who share our passion for Naijá, regardless of background or expertise level.",
              },
              {
                icon: BookOpen,
                title: "Education",
                description: "We believe in the power of knowledge to elevate Naijá and its speakers.",
              },
              {
                icon: Users,
                title: "Community",
                description: "We build bridges between individuals, institutions, and communities.",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We pursue the highest standards in research, education, and cultural expression.",
              },
              {
                icon: Heart,
                title: "Passion",
                description: "We are driven by genuine love for Naijá and its role in Nigerian identity.",
              },
              {
                icon: Target,
                title: "Impact",
                description: "We focus on initiatives that create lasting positive change for Naijá speakers.",
              },
            ].map((value) => (
              <div key={value.title} className="p-6 border border-border hover:border-primary transition-colors">
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
