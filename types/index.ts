// Product type definition
export type Product = {
  id: string;
  name: string;
  description: string;
  category: 'in-house' | 'vision-plus';
  features: string[];
  pricingModel: 'saas';
  maintenanceCharges: boolean;
  isFeatured: boolean;
  imageUrl: string;
  ctaText: string;
};

// Service type definition
export type Service = {
  id: string;
  name: string;
  description: string;
  features: string[];
  targetAudience: string[];
  isFeatured: boolean;
  imageUrl: string;
  ctaText: string;
};

// Contact form submission type
export type ContactFormSubmission = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  interest: 'product' | 'service' | 'general';
  productInterest?: string;
  serviceInterest?: string;
  submissionDate: Date;
  status: 'new' | 'contacted' | 'closed';
};

// Blog post type
export type BlogPost = {
  id: string;
  title: string;
  content: string;
  publicationDate: Date;
  author: string;
  tags: string[];
  excerpt: string;
  isPublished: boolean;
};

// Page metadata type
export type PageMetadata = {
  pageName: 'home' | 'about' | 'services' | 'products' | 'blog' | 'contact';
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
};