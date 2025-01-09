import React from 'react';
import { Trophy } from 'lucide-react';
import TiltCard from '../../../components/TiltCard';

const AchievementsWidget = () => {
  const achievements = [
    {
      title: '7 Day Streak',
      description: 'Completed lessons for 7 days in a row',
      date: '2 days ago',
    },
    {
      title: 'Code Master',
      description: 'Solved 50 coding challenges',
      date: '1 week ago',
    },
    {
      title: 'Team Player',
      description: 'Helped 10 community members',
      date: '2 weeks ago',
    },
  ];

  return (
    <TiltCard className="rounded-xl p-6 mt-6">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="text-secondary" size={24} />
        <h3 className="text-lg font-semibold">Recent Achievements</h3>
      </div>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-surface p-4 rounded-lg border border-gray-800"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Trophy size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-medium">{achievement.title}</h4>
              <p className="text-sm text-gray-400">{achievement.description}</p>
              <span className="text-xs text-gray-500 mt-1">{achievement.date}</span>
            </div>
          </div>
        ))}
      </div>
    </TiltCard>
  );
};

export default AchievementsWidget;