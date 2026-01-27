import { Metadata } from 'next';
import { generatePageMetadata } from '../../lib/page-metadata';
import { BlogPost } from '../../types';
import { Card, CardContent } from '../../components/ui/card';
import { HeroSection } from '../../components/sections/hero';
import { formatDate } from '../../lib/utils';
import Link from 'next/link';

// Mock blog data
const mockBlogPosts: BlogPost[] = [
  {
    id: 'introduction-to-saas',
    title: 'Introduction to SaaS Solutions for Pakistani Businesses',
    content: 'Learn how Software as a Service is transforming businesses in Pakistan...',
    publicationDate: new Date('2026-01-15'),
    author: 'ANtech Editorial Team',
    tags: ['SaaS', 'Business Transformation', 'Digitalization'],
    excerpt: 'Understanding the fundamentals of SaaS and its impact on Pakistani businesses.',
    isPublished: true
  },
  {
    id: 'fbr-compliance-guide',
    title: 'Complete Guide to FBR Compliance with Digital Solutions',
    content: 'Navigating FBR regulations with our compliant invoicing solutions...',
    publicationDate: new Date('2026-01-10'),
    author: 'ANtech Editorial Team',
    tags: ['FBR', 'Compliance', 'Tax Solutions'],
    excerpt: 'How digital solutions can help businesses stay compliant with FBR regulations.',
    isPublished: true
  },
  {
    id: 'erp-benefits',
    title: 'Top Benefits of ERP Systems for Manufacturing',
    content: 'Exploring how ERP systems revolutionize manufacturing processes...',
    publicationDate: new Date('2026-01-05'),
    author: 'ANtech Editorial Team',
    tags: ['ERP', 'Manufacturing', 'Efficiency'],
    excerpt: 'Key advantages of implementing ERP systems in the manufacturing sector.',
    isPublished: true
  }
];

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('blog');
}

export default function BlogPage() {
  return (
    <div>
      <HeroSection 
        title="Tech Insights & Company Updates" 
        subtitle="Latest Articles"
        description="Stay updated with the latest technology insights and company news from ANtech."
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {mockBlogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{formatDate(post.publicationDate)}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="inline-block text-blue-600 hover:underline font-medium"
                  >
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}