import { Metadata } from 'next';
import { generatePageMetadata } from '../../lib/page-metadata';
import { HeroSection } from '../../components/sections/hero';
import { PartnershipSection } from '../../components/sections/partnership-section';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('about');
}

export default function AboutPage() {
  return (
    <div>
      <HeroSection
        title="About ANtech"
        subtitle="Our Story & Vision"
        description="Learn about our journey, mission, and our strategic partnership with Vision Plus."
        secondaryCtaText="Request Demo"
        secondaryCtaLink="/contact"
        hasDemoButton={true}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Company</h2>
            <p className="text-gray-600 mb-4">
              ANtech is a leading technology solutions provider based in Pakistan, specializing in SaaS products,
              ERP systems, and comprehensive digital services. Founded with the vision of bridging the technology
              gap for businesses in Pakistan, we have grown to become a trusted partner for organizations seeking
              digital transformation.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to innovation, quality, and customer satisfaction has enabled us to serve diverse
              sectors including retail, healthcare, real estate, and manufacturing. We pride ourselves on
              delivering solutions that are not only technologically advanced but also culturally and
              economically relevant to the Pakistani market.
            </p>
          </section>

          <PartnershipSection />

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To empower businesses in Pakistan with cutting-edge technology solutions that enhance operational
              efficiency, improve customer experiences, and drive sustainable growth.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the premier technology partner for businesses in Pakistan, recognized for our innovation,
              reliability, and commitment to helping our clients succeed in the digital economy.
            </p>
          </section>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to learn more about our solutions?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/products">
                <Button variant="outline" size="lg">
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="demo" size="lg">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}