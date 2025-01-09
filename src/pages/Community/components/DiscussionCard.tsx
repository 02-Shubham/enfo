import React from 'react';
import { MessageSquare, ThumbsUp } from 'lucide-react';
import TiltCard from '../../../components/TiltCard';

interface DiscussionCardProps {
  discussion: {
    title: string;
    preview: string;
    author: {
      name: string;
      avatar: string;
    };
    likes: number;
    replies: number;
    tags: string[];
    timeAgo: string;
  };
}

const DiscussionCard: React.FC<DiscussionCardProps> = ({ discussion }) => {
  return (
    <TiltCard className="rounded-xl p-6">
      <div className="flex items-start gap-4">
        <img
          src={discussion.author.avatar}
          alt={discussion.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <h3 className="font-medium mb-2">{discussion.title}</h3>
          <p className="text-gray-400 text-sm mb-3">{discussion.preview}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {discussion.tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <ThumbsUp size={14} />
                <span>{discussion.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare size={14} />
                <span>{discussion.replies}</span>
              </div>
            </div>
            <span>{discussion.timeAgo}</span>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

export default DiscussionCard;