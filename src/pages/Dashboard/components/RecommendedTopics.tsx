import React from 'react';
import { Lightbulb } from 'lucide-react';
import TiltCard from '../../../components/TiltCard';

const RecommendedTopics = () => {
  const topics = [
    {
      title: 'Machine Learning Fundamentals',
      description: 'Based on your interest in Data Structures',
      difficulty: 'Intermediate',
      estimatedHours: 20,
    },
    {
      title: 'System Design Patterns',
      description: 'Recommended for your current level',
      difficulty: 'Advanced',
      estimatedHours: 15,
    },
    {
      title: 'Cloud Computing Basics',
      description: 'Trending in the community',
      difficulty: 'Beginner',
      estimatedHours: 10,
    },
  ];

  return (
    <TiltCard className="rounded-xl p-6 mt-6">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="text-primary" size={24} />
        <h3 className="text-lg font-semibold">Recommended Topics</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-surface p-4 rounded-lg border border-gray-800 hover:border-primary transition-colors cursor-pointer"
          >
            <h4 className="font-medium mb-2">{topic.title}</h4>
            <p className="text-sm text-gray-400 mb-3">{topic.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-primary">{topic.difficulty}</span>
              <span className="text-gray-400">{topic.estimatedHours} hours</span>
            </div>
          </div>
        ))}
      </div>
    </TiltCard>
  );
};

export default RecommendedTopics;