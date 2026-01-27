import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { BlogPost } from '../../../types';
import { generateBlogPostMetadata } from '../../../lib/page-metadata';
import { Card, CardContent } from '../../../components/ui/card';
import { formatDate } from '../../../lib/utils';
import { mockBlogPosts } from '../../../data/mock-blog-posts'; // This will be replaced with actual data fetching
import Link from 'next/link';

// In a real application, this would fetch from an API or database
// For now, we're using mock data
const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return mockBlogPosts.find(post => post.id === slug);
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }
  
  return generateBlogPostMetadata(post.title, post.excerpt, post.publicationDate);
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-6">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(post.publicationDate)}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        
        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700 mb-6">{post.content}</p>
          
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
            nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, 
            nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Key Takeaways</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Takeaway one from the article</li>
            <li>Takeaway two from the article</li>
            <li>Takeaway three from the article</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Conclusion</h2>
          <p className="text-gray-700">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut 
            aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
            quam nihil molestiae consequatur.
          </p>
        </div>
        
        <footer className="border-t pt-6 mt-8">
          <div className="flex flex-wrap justify-between items-center">
            <Link href="/blog" className="text-blue-600 hover:underline">
              ← Back to Blog
            </Link>
            
            <div className="mt-4 sm:mt-0">
              <h3 className="font-semibold text-gray-700 mb-2">Share this article</h3>
              <div className="flex space-x-3">
                <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
                <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
                <a href="#" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </article>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockBlogPosts
            .filter(blogPost => blogPost.id !== post.id)
            .slice(0, 2)
            .map(relatedPost => (
              <Card key={relatedPost.id}>
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-800 mb-2 hover:text-blue-600">
                    <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{relatedPost.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{formatDate(relatedPost.publicationDate)}</span>
                    <span className="mx-2">•</span>
                    <span>By {relatedPost.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>
    </div>
  );
}