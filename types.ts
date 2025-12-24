
export interface Solution {
  title: string;
  description: string;
  icon: string;
  id: string;
}

export interface Industry {
  name: string;
  icon: string;
  points: string[];
}

export interface Recognition {
  type: 'Keynote' | 'Award' | 'Panel';
  title: string;
  subtitle: string;
  image?: string;
  id: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  id: string;
}

export interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  id: string;
}
