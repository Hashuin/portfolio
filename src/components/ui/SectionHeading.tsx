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
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-px w-24 bg-gradient-to-r from-transparent via-blue-600 to-transparent ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};