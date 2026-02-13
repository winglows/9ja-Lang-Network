import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "../../assets/Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "People", path: "/people" },
  { name: "Media", path: "/media" },
  { name: "Resources", path: "/resources" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="9ja Language Network logo"
              className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
            />
            <div className="hidden sm:block">
              <span
                className={cn(
                  "font-serif text-xl font-semibold",
                  scrolled ? "text-black" : "text-gray-300"
                )}
              >
                Naijá Language Network
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors link-underline",
                  location.pathname === link.path
                    ? "text-primary"
                    : scrolled
                      ? "text-black hover:text-foreground"
                      : "text-gray-300 hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden p-0 h-auto w-auto hover:bg-transparent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-12 w-12 text-gray-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
            ) : (
              <Menu className="h-12 w-12 text-gray-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t border-border">
            <div className="container-wide py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-base font-medium tracking-wide uppercase transition-colors py-3 px-4 rounded-md hover:bg-muted",
                    location.pathname === link.path
                      ? "text-primary bg-primary/5"
                      : "text-black hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
