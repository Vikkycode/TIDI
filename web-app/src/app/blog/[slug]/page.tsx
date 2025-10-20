import { fetchAPI } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/media";

export const revalidate = 60; // ✅ Regenerate every minute

interface BlogPostPageProps {
  params: { slug: string };
}

// ✅ Generate metadata dynamically for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = params;
  const response = await fetchAPI(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
  const post = response?.data?.[0]?.attributes;

  return {
    title: post?.Title || post?.title || "Blog Post - TIDI",
    description: post?.excerpt || post?.Content?.slice(0, 150) || "",
  };
}

// ✅ Generate static paths for ISR pre-rendering
export async function generateStaticParams() {
  const response = await fetchAPI("/blog-posts");
  const posts = response?.data || [];

  return posts.map((post: any) => ({
    slug: post.attributes?.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // Fetch single post by slug
  const response = await fetchAPI(`/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
  const post = response?.data?.[0];

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  const attrs = post;
  const title = attrs?.Title || attrs?.title;
  const content = attrs?.Content || attrs?.content;
  const imageUrl = getStrapiMedia(
          attrs.CoverImage?.url
          );

  return (
    <article className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-3xl">
        <Link href="/blog" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Blog
        </Link>

        {imageUrl && (
          <Image
          src={imageUrl}
          alt={attrs.CoverImage?.data?.attributes?.alternativeText || title}
          width={600}
          height={400}
          className="rounded-md object-cover w-full h-96 mb-8"
          placeholder="blur"
          blurDataURL="/placeholder.png"  // low-res fallback while loading
          loading="lazy"                  // loads only when visible
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"                    // responsive sizing
        />
        )}

        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">{title}</h1>
        {/* <p>{attrs.excerpt}</p>
        <p>{attrs.date}</p> */}

        <div className="text-gray-700 leading-relaxed prose prose-blue max-w-none">
          {/* Render Strapi content safely */}
          <div>{content}</div>
        </div>
      </div>
    </article>
  );
}
