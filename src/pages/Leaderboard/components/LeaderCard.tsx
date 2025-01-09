import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';
import TiltCard from '../../../components/TiltCard';

interface LeaderCardProps {
  user: {
    rank: number;
    name: string;
    avatar: string;
    points: number;
    badges: string[];
    streak: number;
  };
}

const LeaderCard: React.FC<LeaderCardProps> = ({ user }) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="text-yellow-500" size={24} />;
      case 2: return <Award className="text-gray-400" size={24} />;
      case 3: return <Award className="text-amber-700" size={24} />;
      default: return <span className="text-lg font-bold">#{rank}</span>;
    }
  };

  return (
    <TiltCard className="rounded-xl p-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center">
          {getRankIcon(user.rank)}
        </div>
        <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <h3 className="font-medium">{user.name}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Star size={14} className="text-primary" />
            <span>{user.points} XP</span>
            <span>•</span>
            <span>{user.streak} day streak</span>
          </div>
        </div>
        <div className="flex gap-2">
          {user.badges.map((badge, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </TiltCard>
  );
};

export default LeaderCard;