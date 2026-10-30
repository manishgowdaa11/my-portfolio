export interface Project {
  id: string;
  projectNumber: string;
  category: string;
  status: string;
  title: string;
  tagline: string;
  image: string;
  description: string;
  learnings: string;
  features: string[];
  tags: string[];
  academicContext: string;
  stack: {
    label: string;
    value: string;
    role: string;
  }[];
  githubLink: string;
  liveLink?: string;
  hasInteractiveDemo?: boolean;
}

export interface SkillItem {
  name: string;
  status: 'Active' | 'Learning' | 'Focus';
  level: number; // 1 - 100
  description: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  accentColor: 'primary' | 'secondary' | 'tertiary';
  skills: SkillItem[];
}

export interface RoadmapMilestone {
  number: string;
  title: string;
  status: 'Practicing' | 'Coursework' | 'Exploring' | 'Daily Habit';
  statusColor: 'primary' | 'secondary' | 'tertiary';
  description: string;
  detailedTopics: string[];
}
