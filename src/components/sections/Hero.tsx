import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight, Code2, Layers3, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { copy } from '../../data/copy';

export const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const { language } = useLanguage();
  const text = copy[language].hero;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl dark:bg-cyan-400/10" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl dark:bg-sky-400/10" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
      </div>
      
      <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 md:px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-cyan-300" />
            {text.badge}
          </div>

          <h1 
            ref={textRef}
            className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 opacity-0 transition-all duration-1000 translate-y-10 md:text-6xl lg:text-7xl dark:text-white"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="block">{text.title}</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 opacity-0 transition-all duration-1000 translate-y-10 animate-in md:text-xl dark:text-slate-300" style={{ animationDelay: '0.4s' }}>
            {text.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 opacity-0 transition-all duration-1000 translate-y-10 animate-in" style={{ animationDelay: '0.5s' }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
              <Code2 className="h-4 w-4 text-blue-600 dark:text-cyan-300" />
              {text.badges[0]}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
              <Layers3 className="h-4 w-4 text-blue-600 dark:text-cyan-300" />
              {text.badges[1]}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-cyan-300" />
              {text.badges[2]}
            </span>
          </div>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row opacity-0 transition-all duration-1000 translate-y-10 animate-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="primary" 
              size="lg" 
              className="shadow-lg shadow-blue-600/20"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {text.primaryAction}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {text.secondaryAction}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          <div className="mt-12 grid w-full max-w-3xl gap-4 text-left sm:grid-cols-3 opacity-0 transition-all duration-1000 translate-y-10 animate-in" style={{ animationDelay: '0.8s' }}>
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm text-slate-500 dark:text-slate-400">{text.stats.focusLabel}</p>
              <p className="mt-1 text-base font-semibold text-slate-950 dark:text-white">{text.stats.focusValue}</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm text-slate-500 dark:text-slate-400">{text.stats.stackLabel}</p>
              <p className="mt-1 text-base font-semibold text-slate-950 dark:text-white">{text.stats.stackValue}</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm text-slate-500 dark:text-slate-400">{text.stats.styleLabel}</p>
              <p className="mt-1 text-base font-semibold text-slate-950 dark:text-white">{text.stats.styleValue}</p>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce rounded-full border border-slate-200 bg-white/90 p-2 shadow-md opacity-0 transition-opacity duration-1000 delay-1000 animate-in backdrop-blur dark:border-slate-800 dark:bg-slate-900/90"
        onClick={scrollToAbout}
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 text-slate-700 dark:text-slate-200" />
      </button>
    </section>
  );
};