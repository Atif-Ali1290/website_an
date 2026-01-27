'use client';

import { useEffect } from 'react';

// Performance monitoring component
export const PerformanceMonitor = () => {
  useEffect(() => {
    // Track page load performance
    if ('performance' in window) {
      // Log performance metrics when page loads
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          if (perfData) {
            console.log('Page Load Time:', (perfData as PerformanceNavigationTiming).loadEventEnd - (perfData as PerformanceNavigationTiming).fetchStart, 'ms');
            console.log('DOM Content Loaded:', (perfData as PerformanceNavigationTiming).domContentLoadedEventEnd - (perfData as PerformanceNavigationTiming).fetchStart, 'ms');
            console.log('First Contentful Paint:', (window.performance.getEntriesByName('first-contentful-paint')[0] as PerformancePaintTiming)?.startTime);
          }
        }, 0);
      });
    }

    // Track resource loading
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name.includes('.js') || entry.name.includes('.css')) {
            console.log(`Resource loaded: ${entry.name} in ${entry.duration.toFixed(2)}ms`);
          }
        });
      });
      observer.observe({ entryTypes: ['resource', 'paint'] });
    }
  }, []);

  return null; // This component doesn't render anything
};