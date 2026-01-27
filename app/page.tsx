import { Metadata } from 'next';
import { PAGE_METADATA } from '../lib/constants';
import { HeroSection } from '../components/sections/hero';
import { FeaturesSection } from '../components/sections/features';
import { Button } from '../components/ui/button';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const homeData = PAGE_METADATA.home;

  return {
    title: homeData.title,
    description: homeData.description,
    openGraph: {
      title: homeData.title,
      description: homeData.description,
      type: 'website',
      url: 'https://www.antech.com.pk/',
    },
    twitter: {
      card: 'summary_large_image',
      title: homeData.title,
      description: homeData.description,
    },
  };
}

export default function HomePage() {
  const features = [
    {
      title: "Innovative Solutions",
      description: "Cutting-edge technology solutions tailored to the Pakistani market needs."
    },
    {
      title: "Local Expertise",
      description: "Deep understanding of local business challenges and regulatory requirements."
    },
    {
      title: "Strategic Partnership",
      description: "Access to enterprise-grade solutions through our partnership with Vision Plus."
    },
    {
      title: "Ongoing Support",
      description: "Comprehensive maintenance and support for all our products and services."
    },
    {
      title: "SaaS Excellence",
      description: "Cloud-based solutions that scale with your business needs."
    },
    {
      title: "Industry Focus",
      description: "Specialized solutions for retail, healthcare, real estate, and manufacturing."
    }
  ];

  return (
    <div>
      <HeroSection
        title="Transform Your Business with ANtech"
        subtitle="Leading Technology Solutions in Pakistan"
        description="We provide innovative SaaS products, ERP systems, and digital services to help your business thrive in the digital economy."
        ctaText="Explore Our Products"
        ctaLink="/products"
        secondaryCtaText="Request Demo"
        secondaryCtaLink="/contact"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose ANtech?</h2>
            <p className="text-gray-600 mt-4">
              We combine local market expertise with global technology standards to deliver solutions that drive real business value.
            </p>
          </div>

          <FeaturesSection
            title="Our Strengths"
            features={features}
          />

          <div className="text-center mt-12">
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of businesses in Pakistan that trust ANtech for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/products">
                <Button size="lg">View Products</Button>
              </Link>
              <Link href="/contact">
                <Button variant="demo" size="lg">Request Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}