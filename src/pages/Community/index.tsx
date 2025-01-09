import React from 'react';
import DiscussionCard from './components/DiscussionCard';

const Community = () => {
  const discussions = [
    {
      title: 'Best practices for React performance optimization',
      preview: 'I\'ve been working on optimizing my React app and wanted to share some tips...',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      },
      likes: 42,
      replies: 15,
      tags: ['React', 'Performance', 'JavaScript'],
      timeAgo: '2 hours ago',
    },
    {
      title: 'Understanding TypeScript generics',
      preview: 'Can someone explain how to properly use generics in TypeScript?',
      author: {
        name: 'Mike Johnson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
      },
      likes: 28,
      replies: 23,
      tags: ['TypeScript', 'Programming'],
      timeAgo: '4 hours ago',
    },
    {
      title: 'Building scalable microservices',
      preview: 'Let\'s discuss strategies for building maintainable microservices...',
      author: {
        name: 'Alex Kumar',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      },
      likes: 35,
      replies: 18,
      tags: ['Architecture', 'Microservices', 'Backend'],
      timeAgo: '6 hours ago',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="font-display text-4xl mb-4">Community Discussions</h1>
        <p className="text-gray-400 max-w-2xl">
          Join the conversation, share your knowledge, and learn from fellow developers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {discussions.map((discussion, index) => (
          <DiscussionCard key={index} discussion={discussion} />
        ))}
      </div>
    </div>
  );
};

export default Community;