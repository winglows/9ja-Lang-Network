import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Linkedin, Twitter, Globe } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";

const teamMembers = [
  {
    name: "Dr. Esther Ajiboye",
    role: "Conference Director",
    bio: "Linguist and advocate for Nigerian Pidgin standardization with over 15 years of research experience.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Prof. Chidi Okonkwo",
    role: "Academic Coordinator",
    bio: "Professor of African Languages at University of Lagos, specializing in creole linguistics.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Amara Nwosu",
    role: "Community Engagement Lead",
    bio: "Cultural advocate connecting Naijá communities across Nigeria and the diaspora.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emeka Obi",
    role: "Media & Content Director",
    bio: "Filmmaker and content creator producing educational and cultural Naijá content.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

const contributors = [
  {
    name: "Dr. Funke Adeyemi",
    role: "Research Contributor",
    affiliation: "University of Ibadan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Tunde Bakare",
    role: "Translation Specialist",
    affiliation: "Naijá Language Network",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ngozi Eze",
    role: "Educational Content Creator",
    affiliation: "Pidgin Stew Podcast",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Kola Afolabi",
    role: "Music & Cultural Consultant",
    affiliation: "Independent Artist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Dr. Grace Okoro",
    role: "Lexicography Advisor",
    affiliation: "Nigerian Institute of Languages",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ibrahim Hassan",
    role: "Northern Region Coordinator",
    affiliation: "Ahmadu Bello University",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
];

const People = () => {
  useScrollToTop();
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-semibold uppercase tracking-widest text-sm mb-4">
              Our People
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet the Team
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              The passionate scholars, creators, and advocates driving the 
              celebration and advancement of Naijá.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet the dedicated individuals leading Naijá Na Helele's mission."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="w-10 h-10 bg-primary-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-primary-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <SectionHeader
            title="Contributors & Collaborators"
            subtitle="Scholars, artists, and advocates who contribute to our mission."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((contributor) => (
              <div
                key={contributor.name}
                className="flex items-center gap-4 p-4 bg-background border border-border hover:border-primary transition-colors"
              >
                <img
                  src={contributor.image}
                  alt={contributor.name}
                  className="w-16 h-16 object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {contributor.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">{contributor.role}</p>
                  <p className="text-muted-foreground text-xs">{contributor.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <Globe className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Join Our Community
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Whether you're a scholar, creator, or simply passionate about Naijá, 
            there's a place for you in our community.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 h-14 px-10 text-base font-semibold uppercase tracking-wider bg-gold text-accent-foreground hover:bg-gold/90 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default People;
