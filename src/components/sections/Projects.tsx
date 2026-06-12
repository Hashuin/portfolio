import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Code2, Layers3, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { copy } from '../../data/copy';

export const Projects: React.FC = () => {
  const { language } = useLanguage();
  const text = copy[language].projects;
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags))).sort((left, right) => left.localeCompare(right));
  
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const filteredProjects = activeFilter
    ? projects.filter((project) => project.tags.includes(activeFilter))
    : projects;

  const visibleCount = filteredProjects.length;

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-100/70 via-sky-50/30 to-transparent dark:from-sky-950/20 dark:via-slate-950/10 dark:to-transparent" />
      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeading 
          title={text.title} 
          subtitle={text.subtitle}
          centered
        />

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-300">
              <Layers3 className="h-5 w-5" />
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{text.currentPortfolio}</p>
            <p className="text-2xl font-semibold text-slate-950 dark:text-white">{projects.length} {text.projectsCountLabel}</p>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{text.personalBuilds}</p>
            <p className="text-2xl font-semibold text-slate-950 dark:text-white">{text.personalBuildsValue}</p>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-300">
              <Code2 className="h-5 w-5" />
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{text.stackCoverage}</p>
            <p className="text-2xl font-semibold text-slate-950 dark:text-white">{text.stackCoverageValue}</p>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {text.showing} <span className="font-semibold text-slate-950 dark:text-white">{visibleCount}</span> {text.of} <span className="font-semibold text-slate-950 dark:text-white">{projects.length}</span> {text.projectsCountLabel}.
          </p>

          <div className="flex flex-wrap gap-2">
            <Button 
              variant={activeFilter === null ? 'primary' : 'outline'} 
              size="sm"
              onClick={() => setActiveFilter(null)}
            >
              {text.all}
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
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};