import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Download, ExternalLink, Newspaper, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    category: "Dictionaries & References",
    icon: BookOpen,
    items: [
      {
        title: "Naijá-English Dictionary",
        description: "Comprehensive dictionary with over 5,000 Naijá words and phrases with English translations.",
        type: "Online",
        link: "#",
      },
      {
        title: "Naijá Grammar Guide",
        description: "A complete guide to Nigerian Pidgin grammar, syntax, and usage patterns.",
        type: "PDF",
        link: "#",
      },
      {
        title: "Common Expressions in Naijá",
        description: "A collection of everyday expressions and idioms used in Nigerian Pidgin.",
        type: "Online",
        link: "#",
      },
    ],
  },
  {
    category: "Research & Publications",
    icon: GraduationCap,
    items: [
      {
        title: "The Sociolinguistics of Nigerian Pidgin",
        description: "Academic paper exploring the social factors influencing Naijá usage and development.",
        type: "PDF",
        link: "#",
      },
      {
        title: "Naijá in Nigerian Media",
        description: "Research on the representation and use of Pidgin in Nollywood and Nigerian music.",
        type: "PDF",
        link: "#",
      },
      {
        title: "Language Policy and Naijá",
        description: "Analysis of policy implications for recognizing Naijá as an official language.",
        type: "PDF",
        link: "#",
      },
    ],
  },
  {
    category: "Pidgin Stew Resources",
    icon: Newspaper,
    items: [
      {
        title: "Pidgin Stew Podcast Archive",
        description: "Complete archive of our popular podcast series featuring conversations in Naijá.",
        type: "Online",
        link: "#",
      },
      {
        title: "Naijá Story Collection",
        description: "Short stories and folktales written entirely in Nigerian Pidgin.",
        type: "PDF",
        link: "#",
      },
      {
        title: "Learn Naijá Course Materials",
        description: "Self-study materials for learning Nigerian Pidgin from scratch.",
        type: "PDF",
        link: "#",
      },
    ],
  },
  {
    category: "Conference Materials",
    icon: FileText,
    items: [
      {
        title: "Conference Proceedings 2024",
        description: "Papers and presentations from the Naijá na Hẹlẹlẹ Conference 2024.",
        type: "PDF",
        link: "#",
      },
      {
        title: "Workshop Handouts",
        description: "Materials from writing, translation, and advocacy workshops.",
        type: "PDF",
        link: "#",
      },
      {
        title: "Presentation Slides Archive",
        description: "Slide decks from keynote speakers and panel discussions.",
        type: "PDF",
        link: "#",
      },
    ],
  },
];

const Resources = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-semibold uppercase tracking-widest text-sm mb-4">
              Resources
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Learn & Explore
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Access dictionaries, scholarly materials, course resources, and more 
              to deepen your understanding and appreciation of Nigerian Pidgin.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {resources.map((category, categoryIndex) => (
            <div key={category.category} className={categoryIndex > 0 ? "mt-16" : ""}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  {category.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 border border-border hover:border-primary transition-all hover-lift bg-background"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-secondary text-secondary-foreground">
                        {item.type}
                      </span>
                      {item.type === "PDF" ? (
                        <Download className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ExternalLink className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>
                    <Link to="/materials-unavailable" className="w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        {item.type === "PDF" ? "Download" : "Access Resource"}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Contribute to Our Resources
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Have research, translations, or educational materials to share? 
            We welcome contributions from the Naijá community.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
