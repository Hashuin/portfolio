import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const addSectionRef = (ref: HTMLElement | null) => {
    if (ref && !sectionRefs.current.includes(ref)) {
      sectionRefs.current.push(ref);
    }
  };

  useEffect(() => {
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

    sectionRefs.current.forEach((section) => {
      if (section) {
        section.classList.add('reveal-hidden');
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return { addSectionRef };
}