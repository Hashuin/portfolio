import React from 'react';
import useHomeStore from '@/app/stores/homeStore';

const Navigation = () => {
  const selectedItem = useHomeStore((state) => state.selectedItem);
  const setSelectedItem = useHomeStore((state) => state.setSelectedItem);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <nav className="navigation">
      <ul>
        <li 
          className={selectedItem === 'Acerca de mí' ? 'selected' : ''}
          onClick={() => handleItemClick('Acerca de mí')}
        >
          <span className="nav-item">Acerca de mí</span>
        </li>
        <li 
          className={selectedItem === 'Proyectos' ? 'selected' : ''}
          onClick={() => handleItemClick('Proyectos')}
        >
          <span className="nav-item">Proyectos</span>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jossyr-pinto/" className="nav-item" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
