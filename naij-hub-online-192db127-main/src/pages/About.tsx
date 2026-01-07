import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { BookOpen, Users, Globe, Award, Target, Heart } from "lucide-react";
import MissionSection from "@/components/home/MissionSection";
import missionImage from "@/assets/our-mission.jpg";
import visionImage from "@/assets/our-vision.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-semibold uppercase tracking-widest text-sm mb-4">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Celebrating the Voice of Nigeria Pidgin
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              To initiate and facilitate sustainable the linguistic praxis and practice of Naijá, other Pidgins and Creoles, hybrid languages, borderline languages, buffer and exo languages

            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:hidden">
              <img src={missionImage} alt="Who We Are" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-3xl font-semibold">Who We Are</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
             The Naijá Studies Association is the arm of the Network that carries out scholarly research in Naijá. In 2025, the maiden edition of the Interdisciplinary Journal of Pidgin and Creoles was published and presented at the Naijá na Selense Conference. Scholarly articles on the aspects of the Naijá grammar, orthography, pragmatics and others are featured therein.

            Before this, it has achieved a milestone in facilitating the first major Exhibition of book and video materials of Naijá translations produced by the Jehovah's Witnesses organisation. This Exhibition was complemented by the Panel presentation entitled "Impacting Lives with a Language of the Heart: The Translation Work of Jehovah's Witnesses in Nigeria

              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Naijá Language Network is an umbrella body that has created a community of users, researchers, students who interact under its purely academic forum, the Naijá Studies Association. Beginning with about two dozen members in 2024, the community now embraces language enthusiasts, practitioners and industry experts from all over Nigeria and beyond.

                The New Naijá Anthem Challenge was spearheaded by the Naijá Language Network as part of the Naijá Festival. One of the primary objectives was to create an awareness amongst the youth population in the reception of the New Nigerian Anthem and test the translation skills of the contestants. Multiple-Blessing got the 1st prize; Submissions of poems, and short narratives were received and a publication is underway to curate these identity cum artifact
              </p>
            </div>
            <div className="hidden lg:block">
              <img src={missionImage} alt="Who We Are" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <MissionSection />

      {/* Our Vision */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:hidden">
              <img src={visionImage} alt="Our Vision" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gold flex items-center justify-center">
                  <Heart className="w-7 h-7 text-accent-foreground" />
                </div>
                <h2 className="font-serif text-3xl font-semibold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                To sustain the Mother tongue education as provided for in the UN conventions on Education, the Naijá Language Network collaborated with the Department of Linguistics and African Languages, University of Ibadan, the Linguistics Association of Nigeria and prominent language advocates in hosting the first Nigerian Languages Summit 2025. A communiqué was one of the major deliverables in this National and Global language preservation Advocacy presented as a Webinar.

              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                In conjunction with the Department of Linguistics, the Naijá Language Network successfully conducts proficiency tests in Naijá Language in the areas of Writing, Compression, Grammar and Speaking. The first recipients reside in The Netherlands and were awarded their proficiency certificates during the 2024 Naijá na Helele Conference (pix available).

                In 2025, the Naijá Language Network staged the adaptation of George Orwell's Animal Farm translated into Naijá by Francis Egbokhare. The novel entitled "Eshobe" was released during the 2025 Naijá na Selense Conference.

                 For 2026, the Naijá Language Network will begin a Podcast Series which will provide live content in Naijá on various topics and from various disciplines in promotion of the teaching, translation and content dissemination in Nigerian Pidgin.

              </p>
            </div>
            <div className="hidden lg:block">
              <img src={visionImage} alt="Our Vision" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* History of Naijá */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeader
            title="The Story of Naijá"
            subtitle="Institutionalising Naijá together with indigenous Nigerian/African languages as global generational artifacts from the past, to the present, and the future."
          />

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed">
          The language is traceable to the early efforts of the Dutch and then the Portuguese in the 14th Century. Around the 18th -19th century, the trade relations between the British and hinterland areas of the West Africa Coast gave birth to the form and forms that gradually began to spread and creolise in areas of present day Niger Delta region of Nigeria. Naijá represents a form of that early language which today is commonly spoken across Nigeria, parts of West and Central Africa and in many parts where the diaspora populations thrive in Europe.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
            From the point of its creolisation in the Niger Delta to its current spread and use in domains as religion, subculture, politics, sports and entertainment, conservatively, its evolution spans nearly five decades. But its history to the present evolution spans more than four centuries

              
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, Naijá is a language of music, film, literature, and everyday communication. 
                It features prominently in Nollywood films, Afrobeats music, and Nigerian social 
                media. As a symbol of Nigerian identity and unity, Naijá continues to grow in 
                prestige and formal recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Info */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
              The Naijá Language Network Conference
            </h2>
            <p className="text-primary-foreground/80 text-xl leading-relaxed mb-12">
              Our flagship annual event brings together the global Naijá community for 
              collaboration, networking, interactive forums, and capacity building.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border border-primary-foreground/20">
                <Users className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Networking</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Connect with scholars, creators, and enthusiasts from around the world.
                </p>
              </div>

              <div className="p-6 border border-primary-foreground/20">
                <BookOpen className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Workshops</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Participate in interactive sessions on research, writing, and advocacy.
                </p>
              </div>

              <div className="p-6 border border-primary-foreground/20">
                <Award className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Capacity Building</h3>
                <p className="text-primary-foreground/70 text-sm">
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
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
