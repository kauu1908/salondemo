import { Service, Testimonial, Feature, GalleryItem } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Precision Haircut & Styling',
    description: 'Bespoke cuts tailored to your face shape and lifestyle by master stylists. Includes consultation and wash.',
    price: 'From ₹800',
    duration: '45 mins',
  },
  {
    id: '2',
    title: 'Signature Beard Grooming',
    description: 'Sculpting, trimming, and hot towel treatment for the modern gentleman. Finished with premium oils.',
    price: 'From ₹450',
    duration: '30 mins',
  },
  {
    id: '3',
    title: 'Rejuvenating Hair Spa',
    description: 'Deep conditioning therapies to restore health and shine to your hair. Includes head massage.',
    price: 'From ₹1,500',
    duration: '60 mins',
  },
  {
    id: '4',
    title: 'Premium Facials',
    description: 'Skin-specific treatments designed to cleanse, exfoliate, and revitalize. Uses dermatologically tested products.',
    price: 'From ₹2,200',
    duration: '60 mins',
  },
  {
    id: '5',
    title: 'Hair Coloring',
    description: 'Ammonia-free organic colors for subtle coverage or bold transformations. Global color or highlights.',
    price: 'Consultation',
    duration: '120+ mins',
  },
  {
    id: '6',
    title: 'Bridal & Groom Packages',
    description: 'Comprehensive grooming packages for your most special occasions. tailored to your specific needs.',
    price: 'Consultation',
    duration: 'Multiple Sessions',
  },
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Master Stylists',
    description: 'Our team comprises industry veterans with years of experience in high-end fashion styling.',
    iconName: 'Scissors',
  },
  {
    id: '2',
    title: 'Hygiene First',
    description: 'We adhere to hospital-grade sterilization protocols. Your safety is our absolute priority.',
    iconName: 'ShieldCheck',
  },
  {
    id: '3',
    title: 'Premium Products',
    description: 'We exclusively use top-tier global brands like Kérastase, Moroccanoil, and L\'Oréal Professionnel.',
    iconName: 'Sparkles',
  },
  {
    id: '4',
    title: 'Private Ambience',
    description: 'A calm, noise-free environment designed for relaxation and personal attention.',
    iconName: 'Armchair',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rohan Mehta',
    role: 'Entrepreneur',
    content: "The attention to detail at Kaushik is unmatched. It's not just a haircut; it's a complete reset. Highly recommended for anyone who values quality.",
  },
  {
    id: '2',
    name: 'Aditi Rao',
    role: 'Fashion Designer',
    content: "Finally, a salon in the city that understands subtlety. The ambiance is serene, and the stylists actually listen to what you want.",
  },
  {
    id: '3',
    name: 'Vikram Singh',
    content: "Impeccable hygiene standards. I've never felt safer or more comfortable in a grooming studio. The hot towel shave is a must-try.",
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: '1', url: 'https://picsum.photos/seed/salon1/800/600?grayscale', alt: 'Salon Interior', category: 'Interior' },
  { id: '2', url: 'https://picsum.photos/seed/barber2/600/800?grayscale', alt: 'Stylist at work', category: 'Hair' },
  { id: '3', url: 'https://picsum.photos/seed/haircut3/800/800?grayscale', alt: 'Haircut detail', category: 'Hair' },
  { id: '4', url: 'https://picsum.photos/seed/tools4/800/600?grayscale', alt: 'Premium Tools', category: 'Grooming' },
  { id: '5', url: 'https://picsum.photos/seed/wash5/600/800?grayscale', alt: 'Hair Wash Station', category: 'Interior' },
  { id: '6', url: 'https://picsum.photos/seed/lobby6/800/600?grayscale', alt: 'Waiting Area', category: 'Interior' },
  { id: '7', url: 'https://picsum.photos/seed/shave7/800/600?grayscale', alt: 'Beard Grooming', category: 'Grooming' },
  { id: '8', url: 'https://picsum.photos/seed/product8/600/800?grayscale', alt: 'Product Lineup', category: 'Grooming' },
];