import React from 'react';
import { socialLinks } from '../../data/social';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { copy } from '../../data/copy';

type LucideIconComponent = React.ComponentType<{ className?: string }>;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const text = copy[language].footer;

  return (
    <footer className="border-t border-slate-200/70 bg-slate-50/80 py-8 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-600 dark:text-slate-300">
              © {currentYear} Jossyr Pinto. {text.rights}
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = LucideIcons[social.icon as keyof typeof LucideIcons] as LucideIconComponent | undefined;
              
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                  aria-label={social.platform}
                >
                  {IconComponent ? <IconComponent className="h-5 w-5" /> : null}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};