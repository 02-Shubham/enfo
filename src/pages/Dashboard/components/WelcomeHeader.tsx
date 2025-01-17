import { Sparkles } from 'lucide-react';
import { useAuthStore } from '../../../store/authStore';

const WelcomeHeader = () => {
   const user = useAuthStore((state) => state.user);
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Shubham 👋</h1>
        <p className="text-gray-400">Ready to continue your engineering journey?</p>
      </div>
      <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg border border-gray-800">
        <Sparkles className="text-primary" size={20} />
        <span className="font-medium">2,450 XP</span>
      </div>
    </div>
  );
};

export default WelcomeHeader;