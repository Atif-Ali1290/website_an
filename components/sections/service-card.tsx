import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Service } from '../../types';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      {service.imageUrl && (
        <div className="relative h-48 w-full">
          <Image 
            src={service.imageUrl} 
            alt={service.name} 
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-green-500">✓</span>
                {feature}
              </li>
            ))}
            {service.features.length > 3 && (
              <li className="text-sm text-gray-500">+ {service.features.length - 3} more features</li>
            )}
          </ul>
        </div>
        
        <div className="mt-auto pt-4">
          <Link href={`/contact?service=${service.id}`}>
            <Button variant="outline" className="w-full">
              {service.ctaText}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};