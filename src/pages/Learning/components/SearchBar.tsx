import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <input
        type="text"
        placeholder="Search for topics, courses, or resources..."
        className="w-full px-6 py-4 bg-surface rounded-xl border border-gray-800 focus:border-primary focus:outline-none pl-14 text-lg"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors">
        Search
      </button>
    </div>
  );
};

export default SearchBar;