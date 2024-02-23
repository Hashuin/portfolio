import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const Project = ({ title, description, technologies, imageUrl, link }: any) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
      <Card className="flex flex-row items-center p-4 mb-4">
        <div className="mr-4">
          <Image src={imageUrl} width={80} height={80} alt={title} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="flex flex-wrap mt-2">
            {technologies.map((tech: string, index: number) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full mr-2 mb-2">{tech}</span>
            ))}
          </div>
        </div>
      </Card>
    </a>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Ateneo',
      description: 'Sistema multiplataforma UPB para la orientación y acompañamiento a estudiantes de pregrado',
      technologies: ['React','NextJS','Flutter','.NET','Docker','IaC','Kubernetes','Terraform','PostgreSQL','Git'],
      imageUrl: '/147451316.png',
      link: 'https://github.com/ateneo-upb',
    },
    {
      title: 'Sistema Gestor de Archivos (SOAP)',
      description: 'Proyecto realizado durante la carrera de Ingeniería de Sistemas e Informática en la UPB, sobre un sistema gestor de archivos con arquitectura orientada a servicios (SOAP)',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'SOAP', 'XML', 'Docker','Git',],
      imageUrl: '/142844733.jpg',
      link: 'https://github.com/Team-Chicago-Bulls/Main-Server',
    },
    {
      title: 'ServiceApp',
      description: 'Aplicación móvil que permite a particulares ofrecer servicios relacionados a mantenimiento del hogar a domicilio. (Dando uso de factores de reconocimientos facial y dactilar). Permite a las personas aplicar a ofrecer servicios del hogar para favorecer a personas competentes en diferentes áreas sin tener estudios previos.',
      technologies: ['Flutter', 'MariaDB', 'Dart', 'Git'],
      imageUrl: '/serviceapp.png',
      link: 'https://www.example.com/project3',
    },
    // Agregar más proyectos aquí
  ];

  return (
    <div className="container mx-auto">
      <Card className="w-full max-w-screen-md mt-8">
        <CardHeader className="bg-gray-100">
          <h1 className="text-2xl font-semibold py-4 px-6">Proyectos destacados</h1>
        </CardHeader>
        <CardContent>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Projects;
