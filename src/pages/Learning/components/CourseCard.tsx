import React from 'react';
import { BookOpen, Clock } from 'lucide-react';
import TiltCard from '../../../components/TiltCard';

interface CourseCardProps {
  course: {
    title: string;
    platform: string;
    duration: string;
    level: string;
    url: string;
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <TiltCard className="rounded-xl p-6 cursor-pointer" onClick={() => window.open(course.url, '_blank')}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
          <BookOpen className="text-primary" size={24} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
              {course.level}
            </span>
          </div>
          <h3 className="font-medium mb-1">{course.title}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{course.platform}</span>
            <span>•</span>
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

export default CourseCard;