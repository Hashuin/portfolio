import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../types';
import { Button } from './Button';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full max-h-48 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <div className="flex gap-2">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                <Github className="h-5 w-5 text-white" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                <ExternalLink className="h-5 w-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};