import React, { useEffect, useRef } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { useLanguage } from './context/LanguageContext';
import { copy } from './data/copy';

function App() {
  const { language } = useLanguage();
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      aboutRef.current,
      experienceRef.current,
      certificationsRef.current,
      projectsRef.current,
      contactRef.current
    ];

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) {
        section.classList.add('reveal-hidden');
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Update document title
  useEffect(() => {
    document.title = copy[language].metaTitle;
  }, [language]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div ref={aboutRef}>
          <About />
        </div>

        <div ref={experienceRef}>
          <Experience />
        </div>

        <div ref={certificationsRef}>
          <Certifications />
        </div>
        
        <div ref={projectsRef}>
          <Projects />
        </div>
        
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;