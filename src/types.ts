export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  detail: string;
  iconName: string;
  tag: string;
}

export interface ClientLogo {
  name: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  event: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Birthdays' | 'Corporate Events';
  imageUrl: string;
  type: '4R Print' | 'Thermal Receipt' | 'Digital Frame';
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
