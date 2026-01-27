import React from 'react';
import { Card } from '../ui/card';

interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  title,
  subtitle,
  features,
}) => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          {subtitle && <span className="text-blue-800 font-semibold text-lg">{subtitle}</span>}
          <h2 className="text-3xl font-bold mt-2 text-gray-800">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 flex justify-center">
                {feature.icon || (
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 text-indigo-700 w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold shadow-md">
                    {index + 1}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};