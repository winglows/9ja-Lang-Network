import { useState } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  videoId: string;
  title: string;
  description?: string;
  onClick?: () => void;
}

const VideoCard = ({ videoId, title, description, onClick }: VideoCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = description && description.length > 100;

  return (
    <div className="group flex flex-col h-full">
      {/* Thumbnail Container - Clickable */}
      <div
        className="relative aspect-video bg-muted overflow-hidden mb-4 rounded-xl cursor-pointer hover-lift shadow-sm hover:shadow-md transition-all"
        onClick={onClick}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/sddefault.jpg`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
          }}
        />
        {/* Persistent Play Icon with Green Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-green-600/90 backdrop-blur-sm flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-current ml-1" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3
          className="font-serif text-lg font-semibold text-foreground hover:text-primary transition-colors mb-2 line-clamp-2 cursor-pointer"
          onClick={onClick}
        >
          {title}
        </h3>
        {description && (
          <div className="mt-auto">
            <p className={`text-muted-foreground text-sm ${isExpanded ? "" : "line-clamp-2"}`}>
              {description}
            </p>
            {isLongDescription && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="text-primary text-sm font-medium mt-1 hover:underline focus:outline-none"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
