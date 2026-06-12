export type Language = 'es' | 'en';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface LocalizedList {
  es: string[];
  en: string[];
}

export interface Project {
  id: number;
  title: string;
  description: LocalizedText;
  tags: string[];
  imageUrl: string;
  category?: LocalizedText;
  highlights?: LocalizedList;
  accent?: string;
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
  location: string;
  period: string;
  skills: string[];
  bullets: LocalizedList;
}

export interface Certification {
  title: LocalizedText;
  issuer: string;
  location: string;
  year: string;
  expedition?: string;
  credentialId?: string;
  note?: LocalizedText;
}

export type Theme = 'light' | 'dark';