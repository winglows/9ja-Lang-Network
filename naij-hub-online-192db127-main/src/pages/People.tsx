import { Globe, User } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";
import Egbokhare from "@/assets/Professor-Egbokhare.jpg";
import Akinmade from "@/assets/Professor-Akinmade.jpg";
import Christine from "@/assets/People-pics/Christine Ofulue.jfif";
import Odirin from "@/assets/Dr-Odirin.jpg";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import bannerImage from "@/assets/about-us-pics/about-us-pics5.jpeg";
import Emmett from "@/assets/People-pics/Emmett Strickland.png";
import Christian from "@/assets/People-pics/Christian Mair.jfif";


const teamMembers = [
  {
    name: "Francis Egbokhare",
    role: "President, (FNAL, FLAN)",
    bio: "Francis Egbokhare is a distinguished Nigerian scholar and Professor of Linguistics at the University of Ibadan, where he made history in 1999 as one of the institution’s youngest full professors at the age of 37. A former President and Fellow of the Nigerian Academy of Letters (NAL), he is globally recognized for his extensive work in African linguistics, specifically for the codification of the Emai language and his pioneering advocacy for Nigerian Pidgin (Naija) studies. Throughout his career, he has held pivotal leadership roles, including serving as the Director of the University of Ibadan's Distance Learning Centre, where he led transformative reforms in e-learning and expanded educational access to thousands of students. Beyond his academic achievements, Professor Egbokhare is a prolific poet, social critic, and public intellectual. He authored the long-running column \"Preying Mantis\" in the Sunday Tribune, where he addressed critical issues of national integrity, education, and social justice. His literary works, such as the acclaimed poetry anthology Echoes and Chimes (2020), offer poignant critiques of postcolonial conditions and institutional corruption. As a consultant and thought leader, he remains a vocal advocate for qualitative education and systems reform, consistently contributing to national discourse through platforms like BusinessDay NG.",
    image: Egbokhare,
  },
  {
    name: "Christine Ofulue",
    role: "Board of Trustee Member",
    bio: "Christine Ofulue is a Professor of Linguistics and Distance Learning at the National Open University of Nigeria. She holds a PhD in Linguistics from Indiana University and a Postgraduate Diploma in Open and Distance Learning from Indira Gandhi Open University. A U.S. Fulbright Visiting Scholar, she has led numerous initiatives on research and quality assurance in eLearning in Africa and has spoken at international conferences, including as a keynote speaker at the 2023 SPCL Summer conference. Her research focuses on sociolinguistics, contact languages, and multilingualism, with particular interest in Nigerian Pidgin, Gullah, and African American Vernacular English. She has contributed to the NaijaSynCor project and is involved in a study on multilingualism in education.",
    image: Christine,
  },
  {
    name: "Akinmade T. Akande",
    role: "Editor-in-chief",
    bio: "Professor Akinmade Timothy Akande is a distinguished Professor of English Language at Obafemi Awolowo University (OAU), recognized as a trailblazer who achieved the first First Class degree in English from the institution in over 21 years. He earned his PhD from the University of Leeds, UK, and has since established himself as a leading authority in Sociolinguistics and African Englishes. His research is highly regarded for its focus on the morpho-syntax of Nigerian Pidgin (Naijá), multilingualism in unique social contexts, and the linguistic dynamics of global hip-hop culture. A prolific scholar with over 25 years of academic experience, Professor Akande has received prestigious international honors, including the African Humanities Program (AHP) Fellowship and a research fellowship from the Alexander von Humboldt Foundation. His work is featured in major global platforms, such as the Wiley Blackwell Encyclopedia of World Englishes, reflecting his significant contributions to understanding language variation and evolution in West Africa.",
    image: Akinmade,
  },
  {
    name: "Odirin V. Abonyi",
    role: "Secretary",
    bio: "Odirin V. Abonyi holds a PhD in Linguistics, MPhil and M.A. in English (University of Ibadan) and a B.A. in English and Literary studies (DELSU). He is a Fellow of the National African Language Resource Centre (NALRC), the Ife Institute of Advanced Studies (IIAS) and an Affiliate Fellow of the Tsikinya-Chaka Centre, University of Wits. He currently serves as a Member of the Editorial Board of the Journal of Pidgin and Creole Languages and the Secretary of the Naija Studies Association and Naija Language Network. He is a grant awardee of various institutions including the Universities of Warwick and Edinburgh.",
    image: Odirin,
  },
  {
    name: "Emmett Strickland",
    role: "Team Member",
    bio: "Emmett Strickland is a third-year PhD student at Paris Nanterre University, where he employs a corpus-driven approach to study the relationship between prosody and syntax in Naijá. His main contributions to Nigerian Pidgin linguistics include developing the NaijaSynCor-Prosody treebank, which provides a single interface to study prosodic and syntactic phenomena, and overseeing the creation of NaijaTTS, the first speech synthesis platform developed for the language. He has worked closely with the language since 2019, when he joined the French National Research Agency project, NaijaSynCor.",
    image: Emmett,
  },
  {
    name: "Christian Mair",
    role: "Team Member",
    bio: "Christian Mair is a professor of English linguistics at Albert-Ludwigs-Universität Freiburg. While his major research interest is the corpus-based study of change and variation in present- day English, he has always made a point of placing his linguistic activities in a wider context. He is the author of two widely used introductory handbooks (Englisch für Anglisten, 1995; Das heutige Englisch, with Emst Leisi, 1999) and has championed a linguistically based approach to Caribbean cultural studies in numerous articles in journals and contributions to books.",
    image: Christian,
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
              <div key={member.name} className="group bg-background border border-border p-6 rounded-xl flex flex-col md:flex-row gap-8 items-start md:items-center transform transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden w-full md:w-48 h-48 flex-shrink-0 rounded-xl">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
                  <p className="text-muted-foreground text-base leading-relaxed">
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
            className="inline-flex items-center justify-center gap-2 h-14 px-10 text-base font-semibold uppercase tracking-wider bg-gold text-accent-foreground hover:bg-gold/90 transition-colors rounded-full"
          >
            Get Involved
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default People;
