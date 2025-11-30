export type Tab = 'home' | 'history' | 'gods' | 'oracle';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface God {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Pharaoh {
  name: string;
  period: string;
  description: string;
  imageUrl: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}