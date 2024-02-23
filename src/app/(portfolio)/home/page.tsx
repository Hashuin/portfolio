"use client";
import React, { useState, useEffect } from 'react';
import Footer from '@/app/components/home/footer';
import Header from '@/app/components/home/header';
import ProjectsHomePage from '@/app/components/home/projects';
import Navigation from '@/app/components/home/navigation';
import AboutMe from '@/app/components/home/aboutme';
import useHomeStore from '@/app/stores/homeStore';
import Experience from '@/app/components/home/experience';
import CursorLight from '@/app/components/home/cursor';

const HomePage = () => {
  const selectedItem = useHomeStore((state) => state.selectedItem);
  
  return (
    <div className="bg-cinder-950 min-h-screen">
      <div className="container grid grid-cols-3">
        <div className="col-span-1 px-4">
          <Header />
          <Navigation />
        </div>
        
        <div className="col-span-2 overflow-y-auto">
          <main>

            {selectedItem === 'Acerca de mí' && <AboutMe />}
            {selectedItem === 'Proyectos' && <ProjectsHomePage />}
          </main>
        </div>

        {/* Pie de página */}
        <footer className="col-span-3 py-6 text-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
