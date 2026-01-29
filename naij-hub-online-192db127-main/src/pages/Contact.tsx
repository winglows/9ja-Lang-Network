import Layout from "@/components/layout/Layout";
import { Mail, MapPin, Youtube, Instagram, Twitter, Facebook } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";
import bannerImage from "@/assets/about-us-pics/about-us-pics2.jpeg";

const Contact = () => {
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
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16 bg-background relative overflow-hidden">
        {/* Subtle Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />

        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Contact Details Card - Creative Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                {/* Glossy Overlay Effect */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-8 relative z-10">
                  <div className="flex items-center gap-6 group/item">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover/item:bg-white/20 transition-colors shrink-0">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-1">Email Us</p>
                      <a
                        href="mailto:naijalanguagenetwork@gmail.com"
                        className="text-lg md:text-xl font-medium hover:text-gold transition-colors break-all"
                      >
                        naijalanguagenetwork@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group/item">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover/item:bg-white/20 transition-colors shrink-0">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-1">Our Office</p>
                      <p className="text-lg md:text-xl font-medium">
                        Ibadan, Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                  <p className="text-white/60 text-sm uppercase tracking-wider font-semibold mb-6 text-center lg:text-left">Connect Socially</p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {[
                      { icon: Youtube, href: "https://www.youtube.com/@9jaLanguageNetwork", label: "YouTube" },
                      { icon: Instagram, href: "https://www.instagram.com/9jalanguagenetwork/", label: "Instagram" },
                      { icon: Twitter, href: "https://x.com/Naija_na_Helele", label: "Twitter" },
                      { icon: Facebook, href: "https://web.facebook.com/profile.php?id=61564386710628", label: "Facebook" }
                    ].map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-gold hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form Container - Creative Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-border/50 rounded-3xl p-1 md:p-6 shadow-sm">
                <div className="overflow-hidden rounded-2xl">
                  <iframe
                    src="https://tally.so/r/pby5aP?transparentBackground=1"
                    width="100%"
                    height="550"
                    frameBorder="0"
                    title="Contact Form"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
