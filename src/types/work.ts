export interface WorkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  platform: string;
  category: 'writing' | 'content' | 'social' | 'portfolio';
  imageUrl?: string;
  date?: string;
  tags: string[];
}

export interface WorkCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}