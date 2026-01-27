// Navigation links
export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

// Social media links
export const SOCIAL_MEDIA = {
  facebook: '#',
  twitter: '#',
  linkedin: '#',
  youtube: '#',
};

// Contact information
export const CONTACT_INFO = {
  email: 'info@antech.com.pk',
  phone: '+92-xxx-xxxxxxx',
  address: 'Karachi, Pakistan',
};

// API endpoints
export const API_ENDPOINTS = {
  CONTACT_SUBMIT: '/api/contact/submit',
  HEALTH_CHECK: '/api/health',
};

// Page titles and descriptions
export const PAGE_METADATA = {
  home: {
    title: 'ANtech - Leading Technology Solutions in Pakistan',
    description: 'Providing innovative SaaS solutions, ERP systems, and digital services for businesses in Pakistan.',
  },
  about: {
    title: 'About ANtech - Our Story & Partnership with Vision Plus',
    description: 'Learn about ANtech and our strategic partnership with Vision Plus to deliver enterprise solutions.',
  },
  services: {
    title: 'Digital Services - Web Development, SEO, Hosting & SMM',
    description: 'Comprehensive digital services including web development, SEO, hosting, and social media marketing.',
  },
  products: {
    title: 'Software Products - POS, FBR Invoicing, ERP & More',
    description: 'Explore our range of software products including POS, FBR invoicing, ERP, HCM, HMIS, and REMS.',
  },
  blog: {
    title: 'Tech Insights & Company Updates',
    description: 'Stay updated with the latest technology insights and company news from ANtech.',
  },
  contact: {
    title: 'Contact ANtech - Get in Touch',
    description: 'Reach out to us for inquiries, demos, or quotes on our products and services.',
  },
};

// Product categories
export const PRODUCT_CATEGORIES = {
  IN_HOUSE: 'in-house',
  VISION_PLUS: 'vision-plus',
};

// Service categories
export const SERVICE_CATEGORIES = {
  WEB_DEVELOPMENT: 'web-development',
  SEO: 'seo',
  HOSTING: 'hosting',
  SMM: 'smm',
};

// Form validation limits
export const FORM_VALIDATION = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
  MAX_EMAIL_LENGTH: 254,
};