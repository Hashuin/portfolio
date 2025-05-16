import React from 'react';
import type { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const percentage = (skill.level / 5) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}/5</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-blue-600 transition-all duration-1000 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};