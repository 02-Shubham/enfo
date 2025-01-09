import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [transition, setTransition] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setTransition('none');
    setTransform(`
      perspective(1000px)
      scale(1.02)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `);
  };

  const handleMouseLeave = () => {
    setTransition('all 0.5s ease-in-out');
    setTransform('perspective(1000px) scale(1) rotateX(0) rotateY(0)');
  };

  return (
    <div
      ref={cardRef}
      className={`${className} bg-[#1A1A1A] hover:shadow-lg`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="transform-style-preserve-3d relative">
        {children}
      </div>
    </div>
  );
};

export default TiltCard;