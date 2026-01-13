import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useEffect } from "react";

const NewsletterSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => {
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="section-padding bg-secondary">
      <div className="container-narrow text-center">
        <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Stay Connected
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter for updates on conferences, resources, 
          and the latest from the Naijá community.
        </p>

        <iframe
          data-tally-src="https://tally.so/r/KYxxP8?dynamicStylesheet=tally"
          loading="lazy"
          width="100%"
          height="300"
          title="Newsletter Subscription"
          className="mx-auto"
          style={{ border: "none", width: "100%", height: "300px" }}
        ></iframe>

        <p className="mt-6 text-sm text-muted-foreground">
          Or{" "}
          <Link to="/contact" className="text-primary hover:underline">
            contact us directly
          </Link>
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
