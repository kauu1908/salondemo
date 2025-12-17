export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export type GalleryCategory = 'All' | 'Interior' | 'Hair' | 'Grooming';

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  category: GalleryCategory;
}