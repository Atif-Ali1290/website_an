import { Metadata } from 'next';
import { PAGE_METADATA } from './constants';

/**
 * Generates metadata for a specific page based on the page name
 * @param pageName - The name of the page to generate metadata for
 * @returns Metadata object for the page
 */
export function generatePageMetadata(pageName: keyof typeof PAGE_METADATA): Metadata {
  const pageData = PAGE_METADATA[pageName];
  
  if (!pageData) {
    // Fallback to default metadata if page name is not found
    return {
      title: 'ANtech - Technology Solutions for Modern Businesses',
      description: 'Leading provider of SaaS solutions, ERP systems, and digital services in Pakistan',
    };
  }
  
  return {
    title: pageData.title,
    description: pageData.description,
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      type: 'website',
      url: `https://www.antech.com.pk/${pageName === 'home' ? '' : pageName}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.description,
    },
  };
}

/**
 * Generates metadata for a specific product page
 * @param productName - The name of the product
 * @param productDescription - The description of the product
 * @returns Metadata object for the product page
 */
export function generateProductMetadata(productName: string, productDescription: string): Metadata {
  return {
    title: `${productName} - ANtech`,
    description: productDescription,
    openGraph: {
      title: `${productName} - ANtech`,
      description: productDescription,
      type: 'article',
      url: `https://www.antech.com.pk/products/${encodeURIComponent(productName.toLowerCase().replace(/\s+/g, '-'))}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${productName} - ANtech`,
      description: productDescription,
    },
  };
}

/**
 * Generates metadata for a specific service page
 * @param serviceName - The name of the service
 * @param serviceDescription - The description of the service
 * @returns Metadata object for the service page
 */
export function generateServiceMetadata(serviceName: string, serviceDescription: string): Metadata {
  return {
    title: `${serviceName} - ANtech`,
    description: serviceDescription,
    openGraph: {
      title: `${serviceName} - ANtech`,
      description: serviceDescription,
      type: 'article',
      url: `https://www.antech.com.pk/services/${encodeURIComponent(serviceName.toLowerCase().replace(/\s+/g, '-'))}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${serviceName} - ANtech`,
      description: serviceDescription,
    },
  };
}

/**
 * Generates metadata for a specific blog post
 * @param title - The title of the blog post
 * @param excerpt - The excerpt of the blog post
 * @param publishDate - The publication date of the blog post
 * @returns Metadata object for the blog post
 */
export function generateBlogPostMetadata(title: string, excerpt: string, publishDate: Date): Metadata {
  return {
    title: `${title} - ANtech Blog`,
    description: excerpt,
    openGraph: {
      title: `${title} - ANtech Blog`,
      description: excerpt,
      type: 'article',
      publishedTime: publishDate.toISOString(),
      url: `https://www.antech.com.pk/blog/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'))}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - ANtech Blog`,
      description: excerpt,
    },
  };
}