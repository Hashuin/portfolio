import React from 'react';
import { skills } from '../../data/skills';
import { SkillBar } from '../ui/SkillBar';
import { SectionHeading } from '../ui/SectionHeading';
import { useLanguage } from '../../context/LanguageContext';
import { copy } from '../../data/copy';

export const About: React.FC = () => {
  const { language } = useLanguage();
  const text = copy[language].about;
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const otherSkills = skills.filter(skill => skill.category === 'design' || skill.category === 'other');

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title={text.title} 
          subtitle={text.subtitle}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{text.introTitle}</h3>
            
            {text.introParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-700 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{text.skillsTitle}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{text.frontend}</h4>
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">{text.backend}</h4>
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
                
                <h4 className="text-lg font-medium mb-4 mt-8 text-gray-800 dark:text-gray-200">{text.other}</h4>
                {otherSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};