import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string | null;
  secondaryCtaText?: string;
  secondaryCtaLink?: string | null;
  backgroundImage?: string;
  hasDemoButton?: boolean;
}

// Helper function to ensure valid URL
const getValidUrl = (url: string | null | undefined, fallback: string = '/'): string => {
  if (typeof url === 'string' && url.length > 0) {
    return url;
  }
  return fallback;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  hasDemoButton = false,
}) => {
  const style = backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};

  return (
    <section
      className="relative bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20"
      style={style}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-200 font-semibold text-lg">{subtitle}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">{title}</h1>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">{description}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {ctaLink && (
              <Link href={getValidUrl(ctaLink, '/contact') as any}>
                <Button variant="secondary" size="lg">
                  {ctaText}
                </Button>
              </Link>
            )}

            {(hasDemoButton || secondaryCtaLink) && (
              <Link href={getValidUrl(secondaryCtaLink, '/contact') as any}>
                <Button variant="demo" size="lg">
                  {secondaryCtaText || 'Request Demo'}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};