// Type definitions for the application

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}
