import '../styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Navigation } from '../components/ui/navigation';
import { PAGE_METADATA } from '../lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: PAGE_METADATA.home.title,
  description: PAGE_METADATA.home.description,
  keywords: ['SaaS Pakistan', 'FBR Invoicing Software', 'ERP Solutions', 'Custom Software Development'].join(', '),
  openGraph: {
    title: PAGE_METADATA.home.title,
    description: PAGE_METADATA.home.description,
    type: 'website',
    url: 'https://www.antech.com.pk/',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_METADATA.home.title,
    description: PAGE_METADATA.home.description,
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-4 shadow-md" role="banner">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="text-xl font-bold focus:outline-none focus:ring-2 focus:ring-white focus:rounded flex items-center" aria-label="ANtech Home">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text font-extrabold">AN</span>
                  <span className="font-bold">tech</span>
                </Link>
                <Navigation />
              </div>
            </div>
          </header>

          <main className="flex-grow" role="main">
            {children}
          </main>

          <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12" role="contentinfo">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text font-extrabold">AN</span>
                    <span className="font-bold">tech</span>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Providing innovative SaaS solutions, ERP systems, and digital services for businesses in Pakistan.
                  </p>
                  <p className="text-gray-400">
                    Strategic Partner: <a
                      href="https://www.visionplus.com.pk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-300 hover:text-white hover:underline"
                      aria-label="Visit Vision Plus website (opens in new tab)"
                    >
                      Vision Plus
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                    <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                    <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                    <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Email: info@antech.com.pk</li>
                    <li>Phone: +92-xxx-xxxxxxx</li>
                    <li>Location: Karachi, Pakistan</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} ANtech. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}