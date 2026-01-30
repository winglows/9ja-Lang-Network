import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useScrollToTop from "@/hooks/useScrollToTop";
import Layout from "@/components/layout/Layout";
import bannerImage from "@/assets/slide-3.jpg";

const NotFound = () => {
  useScrollToTop();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bannerImage} alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container-wide relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              404
            </h1>
            <p className="text-white/90 text-2xl leading-relaxed mb-8">
              Oops! The page you're looking for doesn't exist.
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
