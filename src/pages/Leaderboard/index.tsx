import React from 'react';
import LeaderCard from './components/LeaderCard';

const Leaderboard = () => {
  const leaders = [
    {
      rank: 1,
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      points: 15420,
      badges: ['Problem Solver', 'Mentor'],
      streak: 45,
    },
    {
      rank: 2,
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      points: 14250,
      badges: ['Code Master'],
      streak: 32,
    },
    {
      rank: 3,
      name: 'Alex Kumar',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      points: 13800,
      badges: ['Top Contributor'],
      streak: 28,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="font-display text-4xl mb-4">Leaderboard</h1>
        <p className="text-gray-400 max-w-2xl">
          Top performers in our community. Keep learning and climbing the ranks!
        </p>
      </div>

      <div className="space-y-4">
        {leaders.map((leader, index) => (
          <LeaderCard key={index} user={leader} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;