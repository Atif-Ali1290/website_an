import { BlogPost } from '../types';

export const mockBlogPosts: BlogPost[] = [
  {
    id: 'introduction-to-saas',
    title: 'Introduction to SaaS Solutions for Pakistani Businesses',
    content: 'Learn how Software as a Service is transforming businesses in Pakistan...',
    publicationDate: new Date('2026-01-15'),
    author: 'ANtech Editorial Team',
    tags: ['SaaS', 'Business Transformation', 'Digitalization'],
    excerpt: 'Understanding the fundamentals of SaaS and its impact on Pakistani businesses.',
    isPublished: true
  },
  {
    id: 'fbr-compliance-guide',
    title: 'Complete Guide to FBR Compliance with Digital Solutions',
    content: 'Navigating FBR regulations with our compliant invoicing solutions...',
    publicationDate: new Date('2026-01-10'),
    author: 'ANtech Editorial Team',
    tags: ['FBR', 'Compliance', 'Tax Solutions'],
    excerpt: 'How digital solutions can help businesses stay compliant with FBR regulations.',
    isPublished: true
  },
  {
    id: 'erp-benefits',
    title: 'Top Benefits of ERP Systems for Manufacturing',
    content: 'Exploring how ERP systems revolutionize manufacturing processes...',
    publicationDate: new Date('2026-01-05'),
    author: 'ANtech Editorial Team',
    tags: ['ERP', 'Manufacturing', 'Efficiency'],
    excerpt: 'Key advantages of implementing ERP systems in the manufacturing sector.',
    isPublished: true
  }
];