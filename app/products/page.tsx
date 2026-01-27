import { Metadata } from 'next';
import { generatePageMetadata } from '../../lib/page-metadata';
import { Product } from '../../types';
import { ProductCard } from '../../components/sections/product-card';
import { ProductCategorySection } from '../../components/sections/product-category-section';
import { HeroSection } from '../../components/sections/hero';

// Mock product data
const mockProducts: Product[] = [
  {
    id: 'pos-system',
    name: 'POS System',
    description: 'Advanced Point of Sale system for retail businesses with inventory management and reporting.',
    category: 'in-house',
    features: ['Inventory Management', 'Sales Reporting', 'Customer Database', 'Multi-location Support'],
    pricingModel: 'saas',
    maintenanceCharges: true,
    isFeatured: true,
    imageUrl: '/images/pos-system.jpg',
    ctaText: 'Request Demo'
  },
  {
    id: 'fbr-invoicing',
    name: 'FBR Invoicing',
    description: 'Compliant invoicing solution that integrates with Federal Board of Revenue systems.',
    category: 'in-house',
    features: ['FBR Compliance', 'Automated Tax Calculation', 'Invoice Tracking', 'Financial Reports'],
    pricingModel: 'saas',
    maintenanceCharges: true,
    isFeatured: true,
    imageUrl: '/images/fbr-invoicing.jpg',
    ctaText: 'Request Demo'
  },
  {
    id: 'erp-suite',
    name: 'ERP Suite',
    description: 'Enterprise Resource Planning solution for managing business processes.',
    category: 'vision-plus',
    features: ['Finance Management', 'HR Module', 'Supply Chain', 'Business Intelligence'],
    pricingModel: 'saas',
    maintenanceCharges: true,
    isFeatured: true,
    imageUrl: '/images/erp-suite.jpg',
    ctaText: 'Request Demo'
  },
  {
    id: 'hcm-system',
    name: 'Human Capital Management',
    description: 'Complete HR solution for managing employees and human resources.',
    category: 'vision-plus',
    features: ['Recruitment', 'Payroll', 'Performance Reviews', 'Training Management'],
    pricingModel: 'saas',
    maintenanceCharges: true,
    isFeatured: false,
    imageUrl: '/images/hcm-system.jpg',
    ctaText: 'Request Demo'
  },
  {
    id: 'hmis',
    name: 'HMIS',
    description: 'Hospital Management Information System for healthcare providers.',
    category: 'vision-plus',
    features: ['Patient Records', 'Appointment Scheduling', 'Billing', 'Medical Inventory'],
    pricingModel: 'saas',
    maintenanceCharges: true,
    isFeatured: false,
    imageUrl: '/images/hmis.jpg',
    ctaText: 'Request Demo'
  },
  {
    id: 'rems',
    name: 'REMS',
    description: 'Real Estate Management System for property management companies.',
    category: 'vision-plus',
    features: ['Property Listings', 'Tenant Management', 'Lease Tracking', 'Maintenance Requests'],
    pricingModel: 'saas',
    maintenanceCharges: true,
    isFeatured: false,
    imageUrl: '/images/rems.jpg',
    ctaText: 'Request Demo'
  }
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('products');
}

export default function ProductsPage() {
  // Group products by category
  const inHouseProducts = mockProducts.filter(p => p.category === 'in-house');
  const visionPlusProducts = mockProducts.filter(p => p.category === 'vision-plus');

  return (
    <div>
      <HeroSection
        title="Our Product Portfolio"
        subtitle="Solutions for Modern Businesses"
        description="Discover our range of software solutions designed to help your business grow and thrive in the digital age."
        secondaryCtaText="Schedule a Demo"
        secondaryCtaLink="/contact"
        hasDemoButton={true}
      />

      <div className="container mx-auto px-4 py-12">
        <ProductCategorySection
          title="In-House Products"
          subtitle="Built by ANtech"
          products={inHouseProducts}
          description="Our proprietary solutions developed in-house to address specific market needs."
        />

        <ProductCategorySection
          title="Vision Plus Solutions"
          subtitle="Strategic Partnership"
          products={visionPlusProducts}
          description="Enterprise-grade solutions through our strategic partnership with Vision Plus."
        />
      </div>
    </div>
  );
}