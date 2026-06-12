import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle';
import { useLanguage } from '../../context/LanguageContext';
import { copy } from '../../data/copy';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const text = copy[language];

  const navItems = [
    { label: text.nav.home, href: '#home' },
    { label: text.nav.about, href: '#about' },
    { label: text.nav.experience, href: '#experience' },
    { label: text.nav.certifications, href: '#certifications' },
    { label: text.nav.projects, href: '#projects' },
    { label: text.nav.contact, href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 border-b border-transparent transition-all duration-300 ${
      isScrolled 
        ? 'border-slate-200/70 bg-white/85 backdrop-blur-xl shadow-sm dark:border-slate-800/70 dark:bg-slate-950/80' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="#home" 
            className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-950 dark:text-white md:text-xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">JP</span>
            <span className="hidden sm:block">Jossyr Pinto</span>
            <span className="text-slate-400 dark:text-slate-500">/</span>
            <span className="hidden text-slate-500 dark:text-slate-400 sm:block">{text.ui.brandLabel}</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3 py-2 shadow-sm backdrop-blur md:flex dark:border-slate-800 dark:bg-slate-900/70">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="ml-2 flex items-center gap-2 pl-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="rounded-full p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? text.ui.menuClose : text.ui.menuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 border-t border-slate-200 bg-white/95 px-2 pb-3 pt-2 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-xl px-3 py-2 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="px-2 pt-2 flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};