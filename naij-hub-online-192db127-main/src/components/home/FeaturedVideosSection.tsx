import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import VideoCard from "@/components/media/VideoCard";
import YouTubeEmbed from "@/components/media/YouTubeEmbed";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const featuredVideos = [
  // First card removed per request. Using provided YouTube links for the remaining two cards.
  {
    id: "rpDEtBAIkjI", // https://youtu.be/rpDEtBAIkjI
    title: "Naijá Na Helele Conference Highlights",
    description: "Key moments from our annual conference celebrating Naijá.",
  },
  {
    id: "UH54Ffe7rO4", // https://youtu.be/UH54Ffe7rO4
    title: "The History of Nigerian Pidgin",
    description:
      "Exploring the origins and evolution of Naijá across West Africa.",
  },
  {
    id: "jBV6w30PFTo", // https://youtu.be/jBV6w30PFTo?si=9QNNlclJjTouUTZ0
    title: "Naija Language Network — Spotlight",
    description: "A special feature video from the Naija Language Network.",
  },
];

const FeaturedVideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<
    (typeof featuredVideos)[0] | null
  >(null);

  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <SectionHeader
          title="Featured Videos"
          subtitle="Explore talks, conferences, and conversations from the Naija Language Network."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredVideos.map((video) => (
            <VideoCard
              key={video.id + video.title}
              videoId={video.id}
              title={video.title}
              description={video.description}
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="default" size="lg">
            <Link to="/media">View All Videos</Link>
          </Button>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
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
    </section>
  );
};

export default FeaturedVideosSection;
