import React from 'react';
import { Play, Save, Share2 } from 'lucide-react';
import CodeEditor from './components/CodeEditor';

const Build = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="font-display text-4xl mb-4">Code Playground</h1>
        <p className="text-gray-400 max-w-2xl">
          Write, test, and share your code in real-time. Perfect for experimenting with new ideas.
        </p>
      </div>

      <div className="flex gap-4 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg transition-colors">
          <Play size={20} />
          <span>Run Code</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-gray-800 rounded-lg transition-colors">
          <Save size={20} />
          <span>Save</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-gray-800 rounded-lg transition-colors">
          <Share2 size={20} />
          <span>Share</span>
        </button>
      </div>

      <CodeEditor />
    </div>
  );
};

export default Build;