import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cinder-950 text-white py-6">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
