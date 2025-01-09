import React from 'react';
import ProjectCard from './components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Real-time Chat Application',
      description: 'A modern chat app built with WebSocket and React',
      tags: ['React', 'WebSocket', 'TypeScript', 'Tailwind'],
      progress: 75,
      imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      progress: 40,
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80',
      githubUrl: '#',
    },
    {
      title: 'AI Code Assistant',
      description: 'VS Code extension for AI-powered code completion',
      tags: ['TypeScript', 'OpenAI', 'VS Code API'],
      progress: 25,
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80',
      githubUrl: '#',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <h1 className="font-display text-4xl mb-4">Your Projects</h1>
        <p className="text-gray-400 max-w-2xl">
          Track your ongoing projects, collaborate with others, and showcase your work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;