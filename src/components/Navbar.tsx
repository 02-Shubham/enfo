import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <nav className="h-16 glassmorphism flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search anything..."
            className="pl-10 pr-4 py-2 bg-surface rounded-lg border border-gray-700 focus:outline-none focus:border-primary"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell size={24} className="text-gray-400 hover:text-primary transition-colors" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full text-xs flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">{user?.email}</span>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <User size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;