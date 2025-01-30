import { BlogCard } from '@/components/BlogCard';
import { getBlogPosts } from '@/lib/getBlogPosts'


export default async function BlogIndexPage() {
  const blogPosts = await getBlogPosts();

 return ( 
    <section className="py-16" aria-labelledby="blog-section-title">
        <div className="container mx-auto px-4 md:px-0">
        <h2 id="blog-section-title" className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"> From Our Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogPosts.map((post:any) => (
            <BlogCard key={post.slug} {...post} />
            ))}
        </div>
        </div>
    </section>
 );
}


