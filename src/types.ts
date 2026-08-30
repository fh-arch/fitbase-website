export type StudioTypeKey = 
  | 'fitness' 
  | 'yoga' 
  | 'pilates' 
  | 'personal_training' 
  | 'boutique_gym' 
  | 'wellness'
  | 'dance'
  | 'gymnastics'
  | 'padel'
  | 'sports_course';

export interface StudioTypeInfo {
  id: StudioTypeKey;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export type FeatureTabKey = 
  | 'crm'
  | 'payments'
  | 'marketing'
  | 'team'
  | 'booking'
  | 'scheduling'
  | 'reporting'
  | 'branded_app';

export interface FeatureTabData {
  id: FeatureTabKey;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  mockupData: {
    badge: string;
    metrics: { label: string; value: string; trend?: string }[];
    listTitle: string;
    listItems: { primary: string; secondary: string; tag: string; tagColor: string }[];
  };
}

export interface CoreFeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface AutomationStep {
  trigger: string;
  action: string;
  iconName: string;
  time: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  recommended?: boolean;
  ctaText: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  studioName: string;
  location: string;
  metrics?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: 'Stüdyo Yönetimi' | 'Retention' | 'Pazarlama' | 'Finans';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  imageBg: string;
  featured?: boolean;
}

export interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultStudioType?: string;
}

export interface StaffLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface AskUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}
