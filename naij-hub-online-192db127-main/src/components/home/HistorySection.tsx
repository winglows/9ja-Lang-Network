import { BookOpen, Globe, Users, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const historyPoints = [
  {
    icon: Globe,
    title: "Origins & Evolution",
    description:
      "Naijá (Nigerian Pidgin) emerged from centuries of contact between Nigerian languages and English, evolving into a vibrant creole spoken by over 75 million people across Nigeria and the diaspora.",
  },
  {
    icon: Users,
    title: "A Lingua Franca",
    description:
      "As Nigeria's most widely spoken language, Naijá bridges ethnic and linguistic divides, serving as a unifying force across the nation's 500+ indigenous languages.",
  },
  {
    icon: MessageCircle,
    title: "Cultural Expression",
    description:
      "From Nollywood films to Afrobeats music, Naijá has become the voice of Nigerian popular culture, expressing identity, humor, and social commentary with unique flair.",
  },
  {
    icon: BookOpen,
    title: "Growing Recognition",
    description:
      "Today, Naijá is gaining academic recognition with dictionaries, grammars, and scholarly research affirming its status as a legitimate and dynamic language system.",
  },
];

const HistorySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container-wide">
        <div className="text-center mb-4">
          <span className="inline-block text-primary font-semibold uppercase tracking-widest text-sm">
            Our Heritage
          </span>
        </div>
        <SectionHeader
          title="History of Naijá"
          subtitle="The language is traceable to the early efforts of the Dutch and then the Portuguese in the 14th Century. Around the 18th -19th century, the trade relations between the British and hinterland areas of the West Africa Coast gave birth to the form and forms that gradually began to spread and creolise in areas of present day Niger Delta region of Nigeria. Naijá represents a form of that early language which today is commonly spoken across Nigeria, parts of West and Central Africa and in many parts where the diaspora populations thrive in Europe."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {historyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-background p-8 rounded-lg border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-lg">
          <blockquote className="text-lg md:text-xl text-foreground italic font-serif text-center">
            "Naijá no be broken English — na language wey get im own grammar, vocabulary, and soul."
          </blockquote>
          <p className="text-center text-muted-foreground mt-4">
            — Celebrating Nigerian Pidgin as a complete language system
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
