export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  techStack: string[];
  link?: string;
}

export interface Project {
  name: string;
  role: string;
  description: string;
  techStack: string[];
  link?: string;
  image?: string;
  stats?: string;
}

export interface Skill {
  category: string;
  items: string[];
  level: number; // 0-100 for chart
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model',
  SYSTEM = 'system'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
  id: string;
  timestamp: Date;
}

export interface GlobalState {
    hasApiKey: boolean;
}