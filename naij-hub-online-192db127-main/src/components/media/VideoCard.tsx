import { Play } from "lucide-react";

interface VideoCardProps {
  videoId: string;
  title: string;
  description?: string;
  onClick?: () => void;
}

const VideoCard = ({ videoId, title, description, onClick }: VideoCardProps) => {
  return (
    <div
      className="group cursor-pointer hover-lift"
      onClick={onClick}
    >
      <div className="relative aspect-video bg-muted overflow-hidden mb-4 rounded-xl">
        <img
          src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback to hqdefault if sddefault doesn't exist
            e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }}
        />
        <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-full">
            <Play className="w-8 h-8 text-primary-foreground fill-current" />
          </div>
        </div>
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
        {title}
      </h3>
      {description && (
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      )}
    </div>
  );
};

export default VideoCard;
