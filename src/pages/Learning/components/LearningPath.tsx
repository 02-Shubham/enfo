import React from 'react';
import { BookOpen, Code, Database, Cloud, Shield, Cpu } from 'lucide-react';
import LearningStep from './LearningStep';

const LearningPath = () => {
  const steps = [
    {
      icon: BookOpen,
      title: 'Programming Fundamentals',
      description: 'Master the basics of programming with Python and JavaScript',
      completed: true,
      topics: ['Variables & Data Types', 'Control Flow', 'Functions', 'OOP'],
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Learn modern web development with React and TypeScript',
      completed: false,
      topics: ['HTML & CSS', 'JavaScript', 'React', 'TypeScript'],
    },
    {
      icon: Database,
      title: 'Databases & Backend',
      description: 'Understand database design and backend development',
      completed: false,
      topics: ['SQL', 'Node.js', 'REST APIs', 'GraphQL'],
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Deploy and scale applications in the cloud',
      completed: false,
      topics: ['AWS', 'Docker', 'Kubernetes', 'Serverless'],
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Learn cybersecurity fundamentals and best practices',
      completed: false,
      topics: ['Web Security', 'Auth', 'Encryption', 'Best Practices'],
    },
    {
      icon: Cpu,
      title: 'System Design',
      description: 'Design scalable and reliable systems',
      completed: false,
      topics: ['Architecture', 'Scalability', 'Load Balancing', 'Microservices'],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {steps.map((step, index) => (
        <LearningStep 
          key={index} 
          step={step} 
          index={index} 
          totalSteps={steps.length}
        />
      ))}
    </div>
  );
};

export default LearningPath;