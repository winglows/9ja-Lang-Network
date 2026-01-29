import Layout from "@/components/layout/Layout";
import { Mail, MapPin, Youtube, Instagram, Twitter, Facebook } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <iframe
                src="https://tally.so/r/pby5aP?transparentBackground=1"
                width="100%"
                height="500"
                frameBorder="0"
                title="Contact Form"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:naijalanguagenetwork@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      naijalanguagenetwork@gmail.com
                    </a>
                  </div>
                </div>



                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Ibadan, Nigeria<br />
                      & Virtual (Worldwide)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.youtube.com/@9jaLanguageNetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center hover:bg-green-dark transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/9jalanguagenetwork/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center hover:bg-green-dark transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://x.com/Naija_na_Helele"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center hover:bg-green-dark transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://web.facebook.com/profile.php?id=61564386710628"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center hover:bg-green-dark transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
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
