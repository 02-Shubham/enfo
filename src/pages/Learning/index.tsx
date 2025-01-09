import React from 'react';
import SearchBar from './components/SearchBar';
import LearningPath from './components/LearningPath';
import RecommendedResources from './components/RecommendedResources';

const Learning = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="font-display text-4xl mb-4">Your Learning Journey</h1>
        <p className="text-gray-400 max-w-2xl">
          Follow your personalized learning path, track your progress, and discover new resources
          tailored to your interests and skill level.
        </p>
      </div>

      <SearchBar />
      <LearningPath />
      <RecommendedResources />
    </div>
  );
};

export default Learning;