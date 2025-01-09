import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Rocket, 
  Users, 
  Code2, 
  Trophy,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuthStore();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: BookOpen, label: 'Learning', path: '/learning' },
    { icon: Rocket, label: 'Projects', path: '/projects' },
    { icon: Users, label: 'Community', path: '/community' },
    { icon: Code2, label: 'Build', path: '/build' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-surface rounded-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 glassmorphism border-r border-gray-800 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Zap size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-white">Enfo</h1>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-400 hover:bg-surface hover:text-white'
                  }`
                }
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            ))}
            <button
              onClick={signOut}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-400 hover:bg-surface hover:text-white"
            >
              <span>Sign Out</span>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;