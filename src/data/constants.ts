import type { NavItem, Service, Solution, ContactInfo } from '../types/index.js';

export const navigationItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    subItems: [
      { label: 'IT Consultancy', path: '/services/it-consultancy' },
      { label: 'IT Support', path: '/services/it-support' },
      { label: 'IT Audit', path: '/services/it-audit' },
      { label: 'Managed IT', path: '/services/managed-it' },
    ],
  },
  {
    label: 'Solutions',
    path: '/solutions',
    subItems: [
      { label: 'Infrastructure Solutions', path: '/solutions/infrastructure' },
      { label: 'Cloud & AI', path: '/solutions/cloud-ai' },
      { label: 'Cyber Security', path: '/solutions/cybersecurity' },
      { label: 'CAD & Engineering', path: '/solutions/cad-engineering' },
      { label: 'Hospitality Technology', path: '/solutions/hospitality' },
      { label: 'Networking & Security', path: '/solutions/networking' },
      { label: 'Business Process Automation', path: '/solutions/automation' },
      { label: 'Building / Home Automation', path: '/solutions/smart-building' },
    ],
  },
  {
    label: 'Digital Marketing',
    path: '/digital-marketing',
    subItems: [
      { label: 'SEO Services', path: '/digital-marketing/seo' },
      { label: 'Social Media Marketing', path: '/digital-marketing/social-media' },
      { label: 'Web Development', path: '/digital-marketing/web-development' },
      { label: 'Mobile App Development', path: '/digital-marketing/app-development' },
    ],
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'IT Consultancy',
    description: 'Expert IT consulting services to help your business grow and succeed with the right technology strategies.',
    icon: 'chart-bar',
    link: '/services/it-consultancy',
  },
  {
    id: '2',
    title: 'IT Support',
    description: '24/7 technical support to keep your systems running smoothly and resolve issues quickly.',
    icon: 'support',
    link: '/services/it-support',
  },
  {
    id: '3',
    title: 'Complete IT Audit',
    description: 'Comprehensive IT infrastructure audits to identify vulnerabilities and optimize performance.',
    icon: 'shield-check',
    link: '/services/it-audit',
  },
  {
    id: '4',
    title: 'Managed IT Services',
    description: 'Full-service IT management to handle all your technology needs so you can focus on your business.',
    icon: 'cog',
    link: '/services/managed-it',
  },
  {
    id: '5',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    icon: 'cloud',
    link: '/solutions/cloud',
  },
  {
    id: '6',
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business from cyber threats.',
    icon: 'lock-closed',
    link: '/solutions/cybersecurity',
  },
];

export const solutions: Solution[] = [
  {
    id: '1',
    title: 'Infrastructure Solutions',
    description: 'Complete IT infrastructure design, implementation, and management for modern enterprises.',
    icon: 'server',
    link: '/solutions/infrastructure',
  },
  {
    id: '2',
    title: 'Cloud & AI',
    description: 'Cloud migration, AI integration, and intelligent automation solutions.',
    icon: 'cloud',
    link: '/solutions/cloud-ai',
  },
  {
    id: '3',
    title: 'Cyber Security',
    description: 'Advanced security solutions to protect your business from evolving threats.',
    icon: 'shield-check',
    link: '/solutions/cybersecurity',
  },
  {
    id: '4',
    title: 'CAD & Engineering',
    description: 'Professional CAD software, engineering design tools, and technical solutions.',
    icon: 'cube',
    link: '/solutions/cad-engineering',
  },
  {
    id: '5',
    title: 'Hospitality Technology',
    description: 'Specialized technology solutions for hotels, restaurants, and hospitality businesses.',
    icon: 'building',
    link: '/solutions/hospitality',
  },
  {
    id: '6',
    title: 'Networking & Security',
    description: 'Enterprise network infrastructure, routers, switches, and security systems.',
    icon: 'network',
    link: '/solutions/networking',
  },
  {
    id: '7',
    title: 'Business Process Automation',
    description: 'Streamline operations with intelligent automation and workflow solutions.',
    icon: 'cog',
    link: '/solutions/automation',
  },
  {
    id: '8',
    title: 'Building / Home Automation',
    description: 'Smart building and home automation systems for enhanced comfort and efficiency.',
    icon: 'home',
    link: '/solutions/smart-building',
  },
  {
    id: '9',
    title: 'Advertising & Marketing',
    description: 'Digital marketing, advertising solutions, and brand growth strategies.',
    icon: 'trending-up',
    link: '/digital-marketing',
  },
];

export const contactInfo: ContactInfo = {
  address: 'Suite#605-67, Building no. PR1005, Port Saeed | DUBAI – UAE',
  phone: '+971 50 736 4139',
  email: 'sales@nslogix-it.com',
};
