import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { socialLinks } from '../../data/social';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { copy } from '../../data/copy';

type LucideIconComponent = React.ComponentType<{ className?: string }>;

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const text = copy[language].contact;

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-100/70 to-transparent dark:from-slate-900/50 dark:to-transparent" />
      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeading 
          title={text.title} 
          subtitle={text.subtitle}
          centered
        />
        
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-[0_24px_80px_-36px_rgba(15,23,42,0.35)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/75">
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{text.contactInfo}</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{text.email}</h4>
                    <p className="text-base text-slate-700 dark:text-slate-200">jossyrpin@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{text.phone}</h4>
                    <p className="text-base text-slate-700 dark:text-slate-200">+57 3244627633</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{text.location}</h4>
                    <p className="text-base text-slate-700 dark:text-slate-200">Floridablanca, CO</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{text.connect}</h3>
              <div className="mt-6 flex flex-wrap gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = LucideIcons[social.icon as keyof typeof LucideIcons] as LucideIconComponent | undefined;
                  
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300"
                      aria-label={social.platform}
                    >
                      {IconComponent ? <IconComponent className="h-6 w-6" /> : null}
                      <span className="text-sm font-medium">{social.platform}</span>
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