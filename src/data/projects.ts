import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'ServiceApp',
    description: 'Mobile application that allows individuals to offer services related to home maintenance at home (using facial and fingerprint recognition factors). Allows people to apply to offer home services to favor competent people in different areas without having previous studies.',
    tags: ['Flutter', 'MariaDB', 'Dart', 'Git'],
    imageUrl: 'https://i.ibb.co/4cP19SG/service-App.png',
    githubUrl: 'https://github.com/RairyuR/ServiceApp',
  },
  {
    id: 2,
    title: 'Ateneo UPB',
    description: 'Multi-platform UPB system for undergraduate student guidance and accompaniment',
    tags: ['React','NextJS','Flutter','.NET','Docker','IaC','Kubernetes','Terraform','PostgreSQL','Git'],
    imageUrl: 'https://i.ibb.co/VWXRdkDS/ateneo.png',
    githubUrl: 'https://github.com/username/travelblog',
  },
  {
    id: 3,
    title: 'Sistema Gestor de Archivos (SOAP)',
    description: 'Project carried out during the Systems and Computer Engineering course at UPB, on a file management system with service-oriented architecture (SOAP).',
    tags: ['Java', 'Spring Boot', 'MySQL', 'SOAP', 'XML', 'Docker','Git'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png',
    githubUrl: 'https://github.com/Team-Chicago-Bulls',
  },
  {
    id: 4,
    title: 'Movie Crawler',
    description: 'Web-based movie recommendation application based on users taste using recommendation functions.',
    tags: ['HTML', 'Python', 'Javascript', 'CSS', 'MongoDB'],
    imageUrl: 'https://i.ibb.co/zVtxpMg6/Movie-Binge.png',
    githubUrl: 'https://github.com/SantiagoGaonaC/Movie-Binge-Assistant',
  },
    {
    id: 5,
    title: 'PartsCO',
    description: 'Development of an academic project of a CRM/ERP system, focused on inventory management, user privileges, invoicing systems, etc. I took the role as part of the front-end development, interface design, databases, management and configuration of data networks for the project and documentation of the project (I played the role of Product Owner of the project).',
    tags: ['CSS', 'Javascript', 'mySQL'],
    imageUrl: 'https://i.ibb.co/JR7jWzW1/Logo-Parts-Co.png',
    githubUrl: 'https://github.com/SantiagoGaonaC/PartsCO',
  },
];