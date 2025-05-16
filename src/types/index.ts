export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  skills: string[];
}

export type Theme = 'light' | 'dark';