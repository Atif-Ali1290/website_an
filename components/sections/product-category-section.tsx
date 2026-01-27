import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './product-card';

interface ProductCategorySectionProps {
  title: string;
  subtitle: string;
  products: Product[];
  description: string;
}

export const ProductCategorySection: React.FC<ProductCategorySectionProps> = ({
  title,
  subtitle,
  products,
  description,
}) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-blue-800 font-semibold">{subtitle}</span>
        <h2 className="text-3xl font-bold mt-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-4">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};