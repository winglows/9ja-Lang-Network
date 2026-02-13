import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { ExternalLink, X, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import bannerImage from "@/assets/banners/Banner4Resources.jpeg";

// Import images from 9ja-Resources
import res0 from "@/assets/9ja-Resources/resources0.jpeg";
import res1 from "@/assets/9ja-Resources/Resources1.jpeg";
import res2 from "@/assets/9ja-Resources/Resources2.jpeg";
import res4 from "@/assets/9ja-Resources/Resources4.jpeg";
import res5 from "@/assets/9ja-Resources/Resources5.jpeg";
import res6 from "@/assets/9ja-Resources/Resources6.jpeg";
import res7 from "@/assets/9ja-Resources/Resources7.jpeg";
import res8 from "@/assets/9ja-Resources/Resources8.jpeg";
import res10 from "@/assets/9ja-Resources/Resources10.jpeg";
import res11 from "@/assets/9ja-Resources/Resources11.jpeg";
import res12 from "@/assets/9ja-Resources/Resources12.jpeg";

// Import images from Emai Resources
import emai1 from "@/assets/Emai Resources/Screenshot 2026-01-29 174000.png";
import emai2 from "@/assets/Emai Resources/Screenshot 2026-01-29 174105.png";
import emai3 from "@/assets/Emai Resources/Screenshot 2026-01-29 174151.png";

const naijaGallery = [
  res1, res2, res4, res5, res6, res7, res8, res10, res11, res12, res0
];

const EmaiLinks = [
  {
    title: "Emai Language Resources",
    desc: "Comprehensive collection of Emai language materials available on Google Books.",
    link: "https://share.google/ZR3Koan7bXcXTSDWL",
    img: emai1
  },
  {
    title: "Emai Study Materials",
    desc: "Academic materials and publications on Emai language from Blackwell's.",
    link: "https://share.google/EtC46ijwORx2KXNeG",
    img: emai2
  },
  {
    title: "Edoid Studies Perspectives",
    desc: "Research by Ronald P. Schaefer, Ohioma Ifounu Pogoson, and Francis O. Egbokhare.",
    link: "https://openlibrary.org/works/OL23830644W/New_perspectives_in_Edoid_studies",
    img: emai3
  }
];

const Resources = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center pt-20 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img
            src={bannerImage}
            alt="Hero Background"
            className="w-full h-full object-cover object-center transition-transform duration-[10000ms] group-hover:scale-110"
          />
          {/* Desktop Gradient */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          {/* Mobile Gradient */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
        </div>
        <div className="container-wide relative z-10 px-6 md:px-0">
          <div className="max-w-3xl animate-in slide-in-from-bottom duration-1000">
            <span className="inline-block font-semibold uppercase tracking-widest text-sm mb-4 text-white/80 drop-shadow-md">
              Resources
            </span>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
              Learn & Explore
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed drop-shadow-md">
              Featuring Naijá together with indigenous Nigerian/African languages as global generational artifacts from the past, to the present, and the future.
            </p>
          </div>
        </div>
      </section>

      {/* Naijá Language History */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container-wide">
          <SectionHeader
            title="Naijá Language"
            subtitle="The Story of Naijá"
          />
          <div className="max-w-4xl mx-auto mb-16 space-y-6">
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              The language is traceable to the early efforts of the Dutch and then the Portuguese in the 14th Century. Around the 18th -19th century, the trade relations between the British and hinterland areas of the West Africa Coast gave birth to the form and forms that gradually began to spread and creolise in areas of present day Niger Delta region of Nigeria. Naijá represents a form of that early language which today is commonly spoken across Nigeria, parts of West and Central Africa and in many parts where the diaspora populations thrive in Europe.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              From the point of its creolisation in the Niger Delta to its current spread and use in domains as religion, subculture, politics, sports and entertainment, conservatively, its evolution spans nearly five decades. But its history to the present evolution spans more than four centuries.
            </p>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed border-l-4 border-primary pl-6 font-medium italic">
              Today, Naijá is a language of music, film, literature, and everyday communication. It features prominently in Nollywood films, Afrobeats music, and Nigerian social media. As a symbol of Nigerian identity and unity, Naijá continues to grow in prestige and formal recognition.
            </p>
          </div>

          <div className="mb-10 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground inline-block border-b-2 border-primary pb-2">
              Featured Resources
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {naijaGallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImg(img)}
                className="group relative aspect-[3/4] bg-secondary/10 rounded-2xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2"
              >
                <img
                  src={img}
                  alt={`Resource ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                  <Search className="w-4 h-4" /> Click to View
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal View */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={selectedImg}
            alt="Resource Full View"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Emai Language */}
      <section className="py-20 md:py-32 bg-[#fffcf5] border-t border-amber-100/50 overflow-hidden">
        <div className="container-wide">
          <SectionHeader
            title="Emai Language"
            subtitle="Origin & Legacy"
          />

          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-background/80 backdrop-blur-md p-10 rounded-3xl border border-primary/10 shadow-sm">
              <p className="text-muted-foreground text-xl leading-relaxed text-center font-medium italic">
                "Emai (Emai-Iuleha-Ora) is a stable indigenous language of Nigeria. It belongs to the Niger-Congo language family. The language is used as a first language by all in the ethnic community. It is not known to be taught in schools."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {EmaiLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background aspect-square overflow-hidden rounded-3xl shadow-lg border border-border/50 hover:border-primary transition-all duration-500 relative flex flex-col"
              >
                <div className="h-2/3 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="h-1/3 p-6 flex flex-col justify-center">
                  <h3 className="font-serif text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mt-2">{item.desc}</p>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="container-narrow text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Contribute to Our Resources
          </h2>
          <p className="text-primary-foreground/90 text-xl mb-10 max-w-xl mx-auto">
            Have research, translations, or educational materials to share?
            We welcome contributions from the community.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full px-10 py-7 text-lg shadow-xl hover:shadow-primary/20 transition-all">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
