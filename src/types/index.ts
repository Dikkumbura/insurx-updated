// Core application types
export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features?: string[];
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
}

export interface AnimationVariants {
  hidden: { opacity: number; y: number; scale?: number };
  visible: { opacity: number; y: number; scale?: number };
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// Component Props Types
export interface ServiceCardProps {
  service: ServiceFeature;
  index: number;
  isVisible?: boolean;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
}

export interface VirtualizedListProps<T> {
  items: T[];
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}