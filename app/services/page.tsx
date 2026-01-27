import { Metadata } from 'next';
import { generatePageMetadata } from '../../lib/page-metadata';
import { Service } from '../../types';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { HeroSection } from '../../components/sections/hero';
import Link from 'next/link';

// Mock service data
const mockServices: Service[] = [
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Custom web applications tailored to your business needs using modern technologies.',
    features: ['Responsive Design', 'Cloud Deployment', 'API Integration', 'Ongoing Support'],
    targetAudience: ['Small Businesses', 'Enterprises', 'Startups'],
    isFeatured: true,
    imageUrl: '/images/web-development.jpg',
    ctaText: 'Get Quote'
  },
  {
    id: 'seo',
    name: 'SEO Services',
    description: 'Improve your online visibility and drive organic traffic to your website.',
    features: ['Keyword Research', 'On-page Optimization', 'Link Building', 'Performance Tracking'],
    targetAudience: ['E-commerce', 'Local Businesses', 'B2B Companies'],
    isFeatured: true,
    imageUrl: '/images/seo-services.jpg',
    ctaText: 'Get Quote'
  },
  {
    id: 'hosting',
    name: 'Web Hosting',
    description: 'Reliable and secure hosting solutions for your websites and applications.',
    features: ['99.9% Uptime', '24/7 Support', 'SSL Certificates', 'Daily Backups'],
    targetAudience: ['Startups', 'Agencies', 'Enterprises'],
    isFeatured: true,
    imageUrl: '/images/web-hosting.jpg',
    ctaText: 'Get Quote'
  },
  {
    id: 'smm',
    name: 'Social Media Marketing',
    description: 'Engage your audience and grow your brand presence on social platforms.',
    features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics'],
    targetAudience: ['Brands', 'E-commerce', 'Service Providers'],
    isFeatured: true,
    imageUrl: '/images/smm.jpg',
    ctaText: 'Get Quote'
  }
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('services');
}

export default function ServicesPage() {
  return (
    <div>
      <HeroSection
        title="Our Digital Services"
        subtitle="Comprehensive Solutions"
        description="We offer a wide range of digital services to help your business thrive in the online world."
        secondaryCtaText="Request Demo"
        secondaryCtaLink="/contact"
        hasDemoButton={true}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mockServices.map((service) => (
            <Card key={service.id} className="overflow-hidden h-full flex flex-col">
              {service.imageUrl && (
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">{service.name}</span>
                </div>
              )}
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>

                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="mr-2 text-green-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4">
                  <Link href={`/contact?service=${service.id}`}>
                    <Button variant="outline" className="w-full">
                      {service.ctaText}
                    </Button>
                  </Link>
                  <Link href="/contact" className="mt-2">
                    <Button variant="demo" className="w-full">
                      Request Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}