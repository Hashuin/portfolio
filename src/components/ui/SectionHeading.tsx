import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-blue-600 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};