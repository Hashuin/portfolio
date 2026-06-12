import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'ServiceApp',
    category: { es: 'Aplicación móvil', en: 'Mobile app' },
    description: {
      es: 'Mercado móvil de servicios para el hogar con flujos de autenticación biométrica y enfoque en conectar trabajadores capacitados con clientes que necesitan apoyo confiable.',
      en: 'Mobile marketplace for home services with biometric authentication flows and a focus on connecting skilled workers with clients who need reliable help.',
    },
    highlights: {
      es: ['Flujos de acceso biométrico', 'Marketplace de servicios del hogar', 'Construido con Flutter y MariaDB'],
      en: ['Biometric access flows', 'Home services marketplace', 'Built with Flutter and MariaDB'],
    },
    tags: ['Flutter', 'MariaDB', 'Dart', 'Git'],
    imageUrl: 'https://i.ibb.co/4cP19SG/service-App.png',
    accent: '#0f766e',
    githubUrl: 'https://github.com/RairyuR/ServiceApp',
  },
  {
    id: 2,
    title: 'Ateneo UPB',
    category: { es: 'Plataforma', en: 'Platform' },
    description: {
      es: 'Sistema multiplataforma de acompañamiento para estudiantes de la UPB, pensado para brindar soporte académico y una experiencia consistente entre web y móvil.',
      en: 'Multi-platform guidance system for UPB students, built to support academic accompaniment and a consistent experience across web and mobile surfaces.',
    },
    highlights: {
      es: ['Soporte estudiantil multiplataforma', 'Entrega web y móvil', 'Trabajo con arquitectura cloud-native'],
      en: ['Cross-platform student support', 'Web and mobile delivery', 'Cloud-native architecture work'],
    },
    tags: ['React', 'Next.js', 'Flutter', '.NET', 'Docker', 'IaC', 'Kubernetes', 'Terraform', 'PostgreSQL', 'Git'],
    imageUrl: 'https://i.ibb.co/VWXRdkDS/ateneo.png',
    accent: '#2563eb',
    githubUrl: 'https://github.com/username/travelblog',
  },
  {
    id: 3,
    title: 'Sistema Gestor de Archivos (SOAP)',
    category: { es: 'Backend', en: 'Backend' },
    description: {
      es: 'Sistema académico de gestión de archivos implementado con arquitectura orientada a servicios y contratos SOAP, enfocado en integración estructurada e intercambio limpio de datos.',
      en: 'Academic file management system implemented with service-oriented architecture and SOAP contracts, focused on structured integration and clean data exchange.',
    },
    highlights: {
      es: ['Integración de servicios SOAP', 'Manejo de contratos XML', 'Backend en Spring Boot'],
      en: ['SOAP-based service integration', 'XML contract handling', 'Spring Boot backend'],
    },
    tags: ['Java', 'Spring Boot', 'MySQL', 'SOAP', 'XML', 'Docker', 'Git'],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png',
    accent: '#b91c1c',
    githubUrl: 'https://github.com/Team-Chicago-Bulls',
  },
  {
    id: 4,
    title: 'Movie Crawler',
    category: { es: 'Aplicación web', en: 'Web app' },
    description: {
      es: 'Experiencia de recomendación de películas que usa las preferencias del usuario para mostrar sugerencias a través de una interfaz web ligera.',
      en: 'Movie recommendation experience that uses user preferences to surface suggestions through a lightweight web interface.',
    },
    highlights: {
      es: ['Recomendaciones basadas en gustos', 'Interfaz web-first', 'Stack Python y MongoDB'],
      en: ['Taste-based recommendations', 'Web-first interface', 'Python and MongoDB stack'],
    },
    tags: ['HTML', 'Python', 'JavaScript', 'CSS', 'MongoDB'],
    imageUrl: 'https://i.ibb.co/zVtxpMg6/Movie-Binge.png',
    accent: '#7c3aed',
    githubUrl: 'https://github.com/SantiagoGaonaC/Movie-Binge-Assistant',
  },
  {
    id: 5,
    title: 'PartsCO',
    category: { es: 'Sistema de negocio', en: 'Business system' },
    description: {
      es: 'Proyecto académico de CRM y ERP centrado en inventario, facturación, roles de usuario y las piezas operativas necesarias para un flujo de negocio pequeño.',
      en: 'Academic CRM and ERP project centered on inventory, invoicing, user roles, and the operational pieces needed to run a small business workflow.',
    },
    highlights: {
      es: ['Flujos de inventario y facturación', 'Acceso por roles', 'Responsable de frontend y documentación'],
      en: ['Inventory and invoicing flows', 'Role-based access', 'Frontend and documentation ownership'],
    },
    tags: ['CSS', 'JavaScript', 'MySQL'],
    imageUrl: 'https://i.ibb.co/JR7jWzW1/Logo-Parts-Co.png',
    accent: '#ea580c',
    githubUrl: 'https://github.com/SantiagoGaonaC/PartsCO',
  },
  {
    id: 6,
    title: 'Habbo WBL – Liga de Baseball',
    category: { es: 'SPA administrativa', en: 'Admin SPA' },
    description: {
      es: 'Sitio oficial de la liga WBL en Hobbaz, con contenido público, estadísticas estructuradas y un panel administrativo protegido para las operaciones diarias.',
      en: 'Official league site for WBL in Hobbaz, combining public content, structured statistics, and a protected admin panel for daily operations.',
    },
    highlights: {
      es: ['SPA pública para contenido de la liga', 'Firebase Auth y Firestore', 'Herramientas admin para noticias, equipos y calendario'],
      en: ['Public SPA for league content', 'Firebase Auth and Firestore', 'Admin tools for news, teams and schedules'],
    },
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Firebase', 'Firestore', 'Storage'],
    imageUrl: '/projects/WBL.png',
    accent: '#0ea5e9',
    githubUrl: 'https://github.com/Hashuin/ProyectoWBL',
  },
  {
    id: 7,
    title: 'Wakfu Guild Endgame Boost',
    category: { es: 'Landing page', en: 'Landing page' },
    description: {
      es: 'Landing page bilingüe para un programa de incentivo de gremio en Wakfu, con una estética oscura, galería de bosses y formulario de interés con soporte opcional de Supabase.',
      en: 'Bilingual landing page for a Wakfu guild incentive program, with a dark visual language, boss gallery, and an optional Supabase-backed interest form.',
    },
    highlights: {
      es: ['Gestión de contenido bilingüe', 'Auth y storage con Supabase', 'Formulario de interés con controles admin'],
      en: ['Bilingual content management', 'Supabase auth and storage', 'Interest form with admin controls'],
    },
    tags: ['React', 'Vite', 'TypeScript', 'Supabase', 'Tailwind', 'Forms'],
    imageUrl: '/projects/TBB.png',
    accent: '#14b8a6',
    githubUrl: 'https://github.com/Hashuin/tbb',
  },
];