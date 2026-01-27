import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: 'pos-system',
    name: 'POS System',
    description: 'Advanced Point of Sale system for retail businesses with inventory management and reporting.',
    category: 'in-house',
    features: [
      'Inventory Management',
      'Sales Reporting',
      'Customer Database',
      'Multi-location Support'
    ],
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
    features: [
      'FBR Compliance',
      'Automated Tax Calculation',
      'Invoice Tracking',
      'Financial Reports'
    ],
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
    features: [
      'Finance Management',
      'HR Module',
      'Supply Chain',
      'Business Intelligence'
    ],
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
    features: [
      'Recruitment',
      'Payroll',
      'Performance Reviews',
      'Training Management'
    ],
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
    features: [
      'Patient Records',
      'Appointment Scheduling',
      'Billing',
      'Medical Inventory'
    ],
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
    features: [
      'Property Listings',
      'Tenant Management',
      'Lease Tracking',
      'Maintenance Requests'
    ],
    pricingModel: 'saas',
    maintenanceCharges: true,
    isFeatured: false,
    imageUrl: '/images/rems.jpg',
    ctaText: 'Request Demo'
  }
];