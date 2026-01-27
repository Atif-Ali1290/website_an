import React from 'react';
import { Card, CardContent } from '../ui/card';

export const PartnershipSection: React.FC = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 border-2 border-dashed border-indigo-300 rounded-2xl w-40 h-40 flex items-center justify-center text-indigo-700 font-bold text-lg">
              ANtech Logo
            </div>
          </div>

          <div className="md:w-2/3 md:pl-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mr-4">Strategic Partnership</h2>
              <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                With Vision Plus
              </span>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              ANtech has formed a strategic partnership with <a
                href="https://www.visionplus.com.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium"
              >
                Vision Plus
              </a>, a renowned technology solutions provider, to bring enterprise-grade solutions to the Pakistani market.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This partnership enables us to offer a comprehensive portfolio of products including ERP, HCM, HMIS, and REMS,
              leveraging Vision Plus's proven expertise and technology while maintaining ANtech's focus on local market needs
              and customer service excellence.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};