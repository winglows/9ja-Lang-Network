import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import HistorySection from "@/components/home/HistorySection";
import FeaturedVideosSection from "@/components/home/FeaturedVideosSection";
import ConferenceSection from "@/components/home/ConferenceSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <HistorySection />
      <FeaturedVideosSection />
      <ConferenceSection />
      {/* Instagram Widget Section - Ready for integration */}
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
