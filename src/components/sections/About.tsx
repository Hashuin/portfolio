import React from 'react';
import { skills } from '../../data/skills';
import { SkillBar } from '../ui/SkillBar';
import { SectionHeading } from '../ui/SectionHeading';

export const About: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const otherSkills = skills.filter(skill => skill.category === 'design' || skill.category === 'other');

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Here you'll find more information about me, my current skills, and what I'm passionate about."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Get to know me!</h3>
            
            <p className="text-gray-700 dark:text-gray-300">
              Systems and Computer Engineer, with experience in Front-End, Back-End. Skills in the use of frameworks such as Angular, Django and Data Analysis. Knowledge in languages like JavaScript, Python, Java, Flutter. I have worked in different projects under different frameworks and Agile methodologies.
            </p>
                        
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies. I'm always open to new opportunities and challenges that allow me to grow as a developer.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">My Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">Frontend</h4>
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">Backend</h4>
                {backendSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
                
                <h4 className="text-lg font-medium mb-4 mt-8 text-gray-800 dark:text-gray-200">Design & Others</h4>
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