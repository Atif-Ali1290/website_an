import React from 'react';
import Head from 'next/head';
import { PageMetadata } from '../../types';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({
  title = 'ANtech - Technology Solutions for Modern Businesses',
  description = 'Leading provider of SaaS solutions, ERP systems, and digital services in Pakistan',
  keywords = ['SaaS Pakistan', 'FBR Invoicing Software', 'ERP Solutions', 'Custom Software Development'],
  ogImage = '/og-image-default.jpg',
  canonicalUrl,
}) => {
  const keywordsString = keywords.join(', ');

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || typeof window !== 'undefined' ? window.location.href : ''} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};