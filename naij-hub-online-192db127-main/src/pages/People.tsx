import { Globe, User } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";
import Egbokhare from "@/assets/Professor-Egbokhare.jpg";
import Akinmade from "@/assets/Professor-Akinmade.jpg";
import Roselyn from "@/assets/Roselyn.jpg";
import Odirin from "@/assets/Dr-Odirin.jpg";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import bannerImage from "@/assets/about-us-pics/about-us-pics5.jpeg";


const teamMembers = [
  {
    name: "Francis Egbokhare",
    role: "President, (FNAL, FLAN)",
    bio: "Professor of Phonology in the department of Linguistics and African Languages University of Ibadan. He serves on the Board of many Associations and as the ODeLAN President and member of Council on the Edo State University, Iyamho.",
    image: Egbokhare,
  },
  {
    name: "Christine Ofulue",
    role: "Board of Trustee Member",
    bio: "She holds a PhD in Linguistics and has been teaching phonology at the university of Benin for several decades.",
    image: Roselyn,
  },
  {
    name: "Akinmade Timothy Akande",
    role: "Editor-in-chief",
    bio: ".",
    image: Akinmade,
  },
  {
    name: "Odirin V. Abonyi",
    role: "Secretary",
    bio: "Odirin V. Abonyi holds a PhD in Linguistics, MPhil and M.A. in English (University of Ibadan) and a B.A. in English and Literary studies (DELSU). He is a Fellow of the National African Language Resource Centre (NALRC), the Ife Institute of Advanced Studies (IIAS) and an Affiliate Fellow of the Tsikinya-Chaka Centre, University of Wits. He currently serves as a Member of the Editorial Board of the Journal of Pidgin and Creole Languages and the Secretary of the Naija Studies Association and Naija Language Network. He is a grant awardee of various institutions including the Universities of Warwick and Edinburgh.",
    image: Odirin,
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
      <section className="relative h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bannerImage} alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Meet Our People
            </h1>

          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">

          <div className="flex flex-col gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="group bg-background border border-border p-6 flex flex-col md:flex-row gap-6 items-start">
                <div className="relative overflow-hidden w-full md:w-48 h-48 flex-shrink-0">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <User className="w-1/2 h-1/2 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
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
