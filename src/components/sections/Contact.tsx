import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { socialLinks } from '../../data/social';
import * as LucideIcons from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or just want to chat? Feel free to reach out."
          centered
        />
        
        <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
          <div className="space-y-10">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white inline-block relative">
                Contact Information
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-start space-x-3 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-medium text-gray-800 dark:text-gray-200">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">jossyrpin@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-start space-x-3 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-medium text-gray-800 dark:text-gray-200">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+57 3244627633</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-start space-x-3 group">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-medium text-gray-800 dark:text-gray-200">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Floridablanca, CO</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Connect With Me</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = LucideIcons[social.icon as keyof typeof LucideIcons];
                  
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-700 p-4 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-600 dark:hover:text-blue-400 transform hover:scale-110 transition-all duration-300 shadow-md"
                      aria-label={social.platform}
                    >
                      {IconComponent && <IconComponent className="h-6 w-6" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};