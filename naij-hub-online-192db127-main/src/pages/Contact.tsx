import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Youtube, Instagram, Twitter, Facebook } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";
import TallyForm from "@/components/TallyForm";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact = () => {
  useScrollToTop();

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-semibold uppercase tracking-widest text-sm mb-4">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Have questions, suggestions, or want to collaborate? 
              We'd love to hear from you.
            </p>
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
              <TallyForm />
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
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+234 811 083 4786"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +234 123 456 7890
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

              {/* Newsletter Signup */}
              <div className="mt-10 p-6 bg-secondary">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Get updates on conferences, resources, and community news.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    toast({
                      title: "Subscribed!",
                      description: "You'll receive our newsletter soon.",
                    });
                  }}
                  className="flex gap-3"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="h-11 bg-background"
                  />
                  <Button type="submit" size="default">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
