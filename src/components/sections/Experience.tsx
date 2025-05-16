import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { experienceData } from '../../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="A glimpse into my professional journey and the skills I've developed along the way."
        />
        
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 md:mt-0">
                  {experience.period}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                  {experience.company}
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
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