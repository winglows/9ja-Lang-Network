import { Linkedin, Twitter, Globe, User } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";
import Egbokhare from "@/assets/Professor-Egbokhare.jpg";
import Akinmade from "@/assets/Professor-Akinmade.jpg";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";

const teamMembers = [
  {
    name: "Francis Oisaghaede Egbokhare",
    role: "President, (FNAL, FLAN)",
    bio: "Professor of Phonology in the department of Linguistics and African Languages University of Ibadan. He serves on the Board of many Associations and as the ODeLAN President and member of Council on the Edo State University, Iyamho.",
    image: Egbokhare,
  },
  {
    name: "Roselyn Oludedewa Osewa",
    role: "Vice President",
    bio: "She holds a PhD in Linguistics and has been teaching phonology at the university of Benin for several decades.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Professor Akinmade Timothy Akande",
    role: "Editor-in-chief",
    bio: ".",
    image: Akinmade,
  },
  {
    name: "Name",
    role: "Role",
    bio: "Description",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h_400&fit=crop&crop=face",
  },
];

const contributors = [
  {
    name: "Name",
    role: "Role",
    description: "Description",
  },
  {
    name: "Name",
    role: "Role",
    description: "Description",
  },
  {
    name: "Name",
    role: "Role",
    description: "Description",
  },
  {
    name: "Name",
    role: "Role",
    description: "Description",
  },
  {
    name: "Name",
    role: "Role",
    description: "Description",
  },
  {
    name: "Name",
    role: "Role",
    description: "Description",
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
            subtitle="Meet the dedicated individuals leading Naijá Language Network's mission."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden aspect-square">
                  {index === 1 || index === 3 ? (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <User className="w-1/2 h-1/2 text-muted-foreground" />
                    </div>
                  ) : (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  )}
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
            {contributors.map((contributor, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-background border border-border hover:border-primary transition-colors"
              >
                <div className="w-16 h-16 bg-muted flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {contributor.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">{contributor.role}</p>
                  <p className="text-muted-foreground text-xs">{contributor.description}</p>
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