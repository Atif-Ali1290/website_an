import { Metadata } from 'next';
import { generatePageMetadata } from '../../lib/page-metadata';
import { ContactForm } from '../../components/forms/contact-form';
import { HeroSection } from '../../components/sections/hero';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('contact');
}

export default function ContactPage() {
  return (
    <div>
      <HeroSection
        title="Get in Touch"
        subtitle="Contact ANtech"
        description="Have questions about our products or services? Reach out to us and our team will get back to you promptly."
        secondaryCtaText="Request Demo"
        secondaryCtaLink="/contact?demo=true"
        hasDemoButton={true}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">info@antech.com.pk</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
                <p className="text-gray-600">+92-xxx-xxxxxxx</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                <p className="text-gray-600">Karachi, Pakistan</p>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Our Location</h3>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.787631559724!2d67.0863213149946!3d24.9079772840061174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjPCsDA1JzEwLjgiRyAzNMKwNTQnMjguNyJO!5e0!3m2!1sen!2s!4v1612345678901"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ANtech Office Location"
                ></iframe>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Need a Demo?</h3>
              <p className="text-gray-600 mb-4">Schedule a personalized demo to see our solutions in action.</p>
              <Link href="/contact?demo=true">
                <Button variant="demo" className="w-full">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}