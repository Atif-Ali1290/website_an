import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Product } from '../../../types';
import { generateProductMetadata } from '../../../lib/page-metadata';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { HeroSection } from '../../../components/sections/hero';
import { mockProducts } from '../../../data/mock-products'; // This will be replaced with actual data fetching
import Link from 'next/link';

// In a real application, this would fetch from an API or database
// For now, we're using mock data
const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const product = getProductById(params.id);
  
  if (!product) {
    return {};
  }
  
  return generateProductMetadata(product.name, product.description);
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <HeroSection 
        title={product.name} 
        subtitle={product.category === 'in-house' ? 'In-House Product' : 'Vision Plus Solution'}
        description={product.description}
        ctaText="Request Demo"
        ctaLink={`/contact?product=${product.id}`}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/5">
                  {product.imageUrl ? (
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                      Product Image
                    </div>
                  ) : (
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      product.category === 'in-house' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {product.category === 'in-house' ? 'In-House' : 'Vision Plus Solution'}
                    </span>
                    
                    {product.maintenanceCharges && (
                      <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                        <p className="text-sm text-yellow-700">
                          <strong>Maintenance Charges:</strong> This product includes ongoing maintenance and support charges.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="md:w-3/5">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Key Features</h2>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Pricing Model</h2>
                    <p className="text-gray-600">
                      This is a <strong>{product.pricingModel.toUpperCase()}</strong> solution with recurring subscription fees.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link href={`/contact?product=${product.id}`}>
                      <Button size="lg">
                        Request Demo
                      </Button>
                    </Link>
                    <Link href="/products">
                      <Button variant="outline" size="lg">
                        View All Products
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProducts
                .filter(p => p.id !== product.id && p.category === product.category)
                .slice(0, 3)
                .map(relatedProduct => (
                  <Card key={relatedProduct.id} className="overflow-hidden h-full flex flex-col">
                    <div className="p-5 flex-grow">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{relatedProduct.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                      
                      <div className="mt-auto">
                        <Link href={`/products/${relatedProduct.id}`}>
                          <Button variant="outline" className="w-full">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}