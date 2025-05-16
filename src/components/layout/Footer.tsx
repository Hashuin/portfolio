import React from 'react';
import { socialLinks } from '../../data/social';
import * as LucideIcons from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} Jossyr Pinto. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              // Dynamically get the icon component from Lucide
              const IconComponent = LucideIcons[social.icon as keyof typeof LucideIcons];
              
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={social.platform}
                >
                  {IconComponent && <IconComponent className="h-5 w-5" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};