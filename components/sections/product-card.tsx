import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Product } from '../../types';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-1">
      {product.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
          <span className={`ml-2 px-3 py-1 text-xs rounded-full font-medium ${
            product.category === 'in-house'
              ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800'
              : 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800'
          }`}>
            {product.category === 'in-house' ? 'In-House' : 'Vision Plus'}
          </span>
        </div>

        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-green-500">✓</span>
                {feature}
              </li>
            ))}
            {product.features.length > 3 && (
              <li className="text-sm text-gray-500">+ {product.features.length - 3} more features</li>
            )}
          </ul>
        </div>

        {product.maintenanceCharges && (
          <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-700">
              <strong>Note:</strong> This product includes ongoing maintenance and support charges.
            </p>
          </div>
        )}

        <div className="mt-auto pt-4">
          <Link href={`/products/${product.id}`}>
            <Button variant="demo" className="w-full">
              {product.ctaText}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};