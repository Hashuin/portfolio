import React from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { copy } from '../../data/copy';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language } = useLanguage();
  const text = copy[language].projects;
  const uiText = copy[language].ui;
  const accent = project.accent ?? '#2563eb';
  const categoryLabel = project.category ? project.category[language] : 'Project';
  const highlights = project.highlights?.[language] ?? [];

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 shadow-[0_12px_40px_-24px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_-24px_rgba(15,23,42,0.65)] dark:border-slate-800 dark:bg-slate-950/70"
      style={{ '--accent': accent } as React.CSSProperties}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-slate-950/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            {categoryLabel}
          </span>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  aria-label={uiText.projectActions.github.replace('{title}', project.title)}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  aria-label={uiText.projectActions.liveDemo.replace('{title}', project.title)}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 h-1 rounded-full bg-white/15">
          <div className="h-full w-2/5 rounded-full bg-[var(--accent)]" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            {project.description[language]}
          </p>
        </div>

        {highlights.length > 0 ? (
          <ul className="mb-5 space-y-2 border-t border-slate-200/70 pt-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
            {highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-6 flex items-center gap-3 border-t border-slate-200/70 pt-4 dark:border-slate-800">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-cyan-300"
              >
                {text.source}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
              >
                {text.liveDemo}
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};