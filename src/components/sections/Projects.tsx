import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const Projects: React.FC = () => {
  // Extract unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const filteredProjects = activeFilter
    ? projects.filter(project => project.tags.includes(activeFilter))
    : projects;

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Check out some of my recent work that showcases my skills and experience."
          centered
        />
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button 
            variant={activeFilter === null ? 'primary' : 'outline'} 
            size="sm"
            onClick={() => setActiveFilter(null)}
          >
            All
          </Button>
          
          {allTags.map(tag => (
            <Button 
              key={tag} 
              variant={activeFilter === tag ? 'primary' : 'outline'} 
              size="sm"
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};