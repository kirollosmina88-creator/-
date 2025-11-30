export type Tab = 'home' | 'history' | 'gods' | 'pharaohs' | 'oracle';
export type Language = 'ar' | 'en';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BilingualText {
  ar: string;
  en: string;
}

export interface God {
  name: BilingualText;
  title: BilingualText;
  description: BilingualText;
  imageUrl: string;
}

export interface Pharaoh {
  name: BilingualText;
  period: BilingualText;
  description: BilingualText;
  imageUrl: string;
}

export interface TimelineEvent {
  year: BilingualText;
  title: BilingualText;
  description: BilingualText;
}