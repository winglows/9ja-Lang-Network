import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about Naijá Na Helele.",
      });
      setEmail("");
    }
  };

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

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow h-12 bg-background border-border"
            required
          />
          <Button type="submit" size="lg">
            Subscribe
          </Button>
        </form>

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
