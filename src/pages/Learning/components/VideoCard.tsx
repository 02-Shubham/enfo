import React from 'react';
import { Play } from 'lucide-react';
import TiltCard from '../../../components/TiltCard';

interface VideoCardProps {
  video: {
    title: string;
    channel: string;
    thumbnail: string;
    duration: string;
    url: string;
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <TiltCard className="rounded-xl overflow-hidden cursor-pointer" onClick={() => window.open(video.url, '_blank')}>
      <div className="relative">
        <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Play className="text-white" size={48} />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-1 line-clamp-2">{video.title}</h3>
        <p className="text-sm text-gray-400">{video.channel}</p>
      </div>
    </TiltCard>
  );
};

export default VideoCard;