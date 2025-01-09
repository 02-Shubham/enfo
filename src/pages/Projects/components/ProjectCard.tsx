import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import TiltCard from '../../../components/TiltCard';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    progress: number;
    imageUrl: string;
    githubUrl?: string;
    liveUrl?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <TiltCard className="rounded-xl overflow-hidden">
      <div className="relative h-48">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Progress</span>
            <span className="text-primary">{project.progress}%</span>
          </div>
          <div className="w-full bg-surface rounded-full h-2">
            <div
              className="bg-primary rounded-full h-2 transition-all"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        <div className="flex gap-3">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <Github size={16} />
              <span>View Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </TiltCard>
  );
};

export default ProjectCard;