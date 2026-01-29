import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import Logo from '../../assets/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground border-t border-white/5">
      <div className="container-wide py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src={Logo} alt="Naijá Language Network Logo" className="w-12 h-12" />
              <span className="font-serif text-xl font-bold tracking-tight">Naijá Language Network</span>
            </div>
            <p className="text-primary-foreground/80 text-base leading-relaxed max-w-sm">
              Celebrating Naijá — Nigeria's Pidgin Language & Culture. Connecting scholars,
              writers, creators, and community members worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="font-serif text-xl font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {["About", "Media", "Resources", "Contact", "People"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary transition-colors text-base font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:pl-8">
            <h4 className="font-serif text-xl font-bold mb-4 text-primary">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Youtube, href: "https://www.youtube.com/@9jaLanguageNetwork", label: "YouTube" },
                { icon: Instagram, href: "https://www.instagram.com/9jalanguagenetwork/", label: "Instagram" },
                { icon: Twitter, href: "https://x.com/Naija_na_Helele", label: "Twitter" },
                { icon: Facebook, href: "https://web.facebook.com/profile.php?id=61564386710628", label: "Facebook" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/80 text-base font-medium">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:naijalanguagenetwork@gmail.com" className="hover:text-primary transition-colors">
                naijalanguagenetwork@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-base">
            © {currentYear} Naijá Language Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
