import React from 'react';
import { BookOpen, Code2 } from 'lucide-react';
import TiltCard from '../../../components/TiltCard';

const CurrentProgress = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <TiltCard className="rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-primary" size={24} />
          <h3 className="text-lg font-semibold">Currently Learning</h3>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Advanced Data Structures</h4>
            <div className="w-full bg-surface rounded-full h-2">
              <div className="bg-primary rounded-full h-2 w-[75%]"></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">75% Complete</p>
          </div>
        </div>
      </TiltCard>

      <TiltCard className="rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Code2 className="text-secondary" size={24} />
          <h3 className="text-lg font-semibold">Active Project</h3>
        </div>
        <div>
          <h4 className="font-medium mb-2">Real-time Chat Application</h4>
          <p className="text-sm text-gray-400">Using WebSocket and React</p>
          <div className="w-full bg-surface rounded-full h-2 mt-3">
            <div className="bg-secondary rounded-full h-2 w-[40%]"></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">40% Complete</p>
        </div>
      </TiltCard>
    </div>
  );
};

export default CurrentProgress;