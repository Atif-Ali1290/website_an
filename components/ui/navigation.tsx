'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from '../../lib/constants';
import { Button } from './button';

export const Navigation = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center">
      <ul className="hidden md:flex space-x-6">
        {NAVIGATION_LINKS.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path as any}
              className={`hover:text-blue-300 transition-colors ${
                pathname === link.path ? 'font-bold underline' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <div className="md:hidden relative">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Main menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {mobileMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path as any}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  pathname === link.path ? 'font-bold bg-gray-100' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="ml-4 md:ml-6">
        <Link href="/contact?demo=true">
          <Button variant="demo" size="sm">
            Request Demo
          </Button>
        </Link>
      </div>
    </nav>
  );
};