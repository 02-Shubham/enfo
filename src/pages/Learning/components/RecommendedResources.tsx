import React, { useState } from 'react';
import { BookOpen, Video } from 'lucide-react';
import CourseCard from './CourseCard';
import VideoCard from './VideoCard';

const RecommendedResources = () => {
  const [activeTab, setActiveTab] = useState<'courses' | 'videos'>('courses');

  const courses = [
    {
      title: 'Advanced React Patterns',
      platform: 'Frontend Masters',
      duration: '6 hours',
      level: 'Advanced',
      url: 'https://frontendmasters.com',
    },
    {
      title: 'System Design Interview Guide',
      platform: 'educative.io',
      duration: '8 hours',
      level: 'Intermediate',
      url: 'https://educative.io',
    },
  ];

  const videos = [
    {
      title: 'Understanding TypeScript Generics',
      channel: 'Tech Primers',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80',
      duration: '15:24',
      url: 'https://youtube.com',
    },
    {
      title: 'React Performance Optimization',
      channel: 'Web Dev Simplified',
      thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1600&q=80',
      duration: '12:45',
      url: 'https://youtube.com',
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="font-display text-2xl mb-6">Learning Resources</h2>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('courses')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'courses' ? 'bg-primary text-white' : 'bg-surface text-gray-400'
          }`}
        >
          <BookOpen size={20} />
          <span>Online Courses</span>
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'videos' ? 'bg-primary text-white' : 'bg-surface text-gray-400'
          }`}
        >
          <Video size={20} />
          <span>Video Tutorials</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activeTab === 'courses' && courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
        {activeTab === 'videos' && videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedResources;