import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { experienceData } from '../../data/experience';
import { useLanguage } from '../../context/LanguageContext';
import { copy } from '../../data/copy';

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const text = copy[language].experience;

  return (
    <section id="experience" className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={text.title} 
          subtitle={text.subtitle}
        />
        
        <div className="space-y-6">
          {experienceData.map((experience, index) => (
            <div 
              key={index}
              className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/75"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                    {experience.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-cyan-300">
                    {experience.company} · {experience.location}
                  </p>
                </div>
                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
                  {experience.period}
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {experience.bullets[language].map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600 dark:bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};