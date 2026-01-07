import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";
import VideoCard from "@/components/media/VideoCard";
import YouTubeEmbed from "@/components/media/YouTubeEmbed";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useScrollToTop from "@/hooks/useScrollToTop";

const videoCategories = {
  featured: [
    { id: "pGG3z-eXgGw", title: "In Memoriam PROFESSOR BEN ELUGBE", description: "A tribute to Professor Ben Elugbe." },
    { id: "9pLpDpAKn3Q", title: "Eshobe", description: "Enjoy all the scenes of Eshobe ('apes obey' in full), a translation of George Orwell's Classical fable 'Animal Farm'." },
    { id: "qld3TC0CfBM", title: "Prof Francis Egbokhare on his translating Animal Farm to Eshobe",  description: "Professor Francis Egbokhare of the Department of Linguistics and African Languages translated George Orwell's political satire presented as the fable 'Animal Farm' to Naija a.k.a Nigerian Pidgin." },
  ],
  conferences: [
    { id: "rpDEtBAIkjI", title: "Naijá na Hẹlẹlẹ Ibadan Conference Jingle", description: "Highlights from our conference." },
    { id: "jBV6w30PFTo", title: "On your mark, get set for Naijá na Hẹlẹlẹ Conference 2024", description: "About the 2024 conference." },
    { id: "AqR4-wEyZD0", title: "2024 Conference Invitation", description: "An Open Invitation from Professor Francis Egbokhare to the Naijá na Hẹlẹlẹ Conference." },
  ],
  workshops: [
    { id: "DxiY1vhATSk", title: " Prize Winner", description: "Recital/Singing of translation of New National Anthem in Nigerian Pidgin." },
    { id: "0ysB5kgZ7Q0", title: "First Nigerian Pidgin Dictionary", description: "Learn Nigerian Pidgin the easy way." },
    { id: "xOZm579isR8", title: "Naijá na Hẹlẹlẹ", description: "A special feature video from the Naija Language Network." },
  ],};

const Media = () => {
  useScrollToTop();
  const [selectedVideo, setSelectedVideo] = useState<{ id: string; title: string } | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-semibold uppercase tracking-widest text-sm mb-4">
              Media Gallery
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Watch & Listen
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Explore videos from the Naija Language Network featuring conferences, 
              workshops, conversations, and cultural content celebrating Naijá.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="section-padding bg-foreground">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center font-serif text-2xl text-primary-foreground mb-8">
              Latest from Naija Language Network
            </h2>
            <div className="aspect-video">
              <YouTubeEmbed videoId="pGG3z-eXgGw" title="Latest Video" />
            </div>
            <div className="mt-6 text-center">
              <Button
                asChild
                variant="hero-outline"
                size="lg"
              >
                <a
                  href="https://www.youtube.com/@9jaLanguageNetwork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Our YouTube Channel
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            title="Video Library"
            subtitle="Browse our collection of videos organized by category."
          />

          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="w-full justify-start mb-8 bg-transparent border-b border-border rounded-none h-auto p-0 gap-0">
              {Object.keys(videoCategories).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize px-6 py-4 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(videoCategories).map(([category, videos]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {videos.map((video, index) => (
                    <VideoCard
                      key={`${video.id}-${index}`}
                      videoId={video.id}
                      title={video.title}
                      description={video.description}
                      onClick={() => setSelectedVideo(video)}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 bg-foreground overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedVideo?.title || "Video"}
          </DialogTitle>
          {selectedVideo && (
            <YouTubeEmbed
              videoId={selectedVideo.id}
              title={selectedVideo.title}
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Media;
