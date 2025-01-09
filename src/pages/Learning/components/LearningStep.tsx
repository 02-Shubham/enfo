import React, { useEffect, useRef, useState } from 'react';
import { LucideIcon, CheckCircle2 } from 'lucide-react';
import TiltCard from '../../../components/TiltCard';

interface StepProps {
  step: {
    icon: LucideIcon;
    title: string;
    description: string;
    completed: boolean;
    topics: string[];
  };
  index: number;
  totalSteps: number;
}

const LearningStep: React.FC<StepProps> = ({ step, index, totalSteps }) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  const Icon = step.icon;

  return (
    <div
      ref={stepRef}
      className={`relative transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {/* Connection Line */}
      {index < totalSteps - 1 && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
      )}

      <TiltCard className="relative z-10 rounded-xl p-4 mb-4 hover:scale-105 transition-transform">
        <div className="flex gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
            step.completed ? 'bg-green-500/20' : 'bg-primary/20'
          }`}>
            {step.completed ? (
              <CheckCircle2 className="text-green-500" size={24} />
            ) : (
              <Icon className="text-primary" size={24} />
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{step.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {step.topics.map((topic, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-surface border border-gray-800"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
};

export default LearningStep;