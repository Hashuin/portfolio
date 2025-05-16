import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

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
      className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-100/40 to-transparent dark:from-blue-900/20 dark:to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-100/40 to-transparent dark:from-blue-900/20 dark:to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <h1 
          ref={textRef}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 opacity-0 transition-all duration-1000 translate-y-10"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="block">Hi, I'm <span className="text-blue-600">Jossyr Pinto</span></span>
          <span className="block mt-2">I build things for the web and mobile apps</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 opacity-0 transition-all duration-1000 translate-y-10 animate-in" style={{ animationDelay: '0.4s' }}>
          A passionate front-end developer specializing in creating exceptional digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 transition-all duration-1000 translate-y-10 animate-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get in Touch
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => {
              const projectsSection = document.querySelector('#projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View My Work
          </Button>
        </div>
      </div>
      
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white dark:bg-gray-800 rounded-full p-2 shadow-md opacity-0 transition-opacity duration-1000 delay-1000 animate-in"
        onClick={scrollToAbout}
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 text-gray-700 dark:text-gray-200" />
      </button>
    </section>
  );
};