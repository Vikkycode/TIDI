// app/blog/page.tsx
import { fetchAPI } from "@/lib/api";
import BlogListClient from "@/components/blog/BlogListClient";

export const revalidate = 60; // ✅ Regenerate page every 60 seconds

export async function generateMetadata() {
  return {
    title: "Blog - TIDI",
    description:
      "Latest news, stories, and updates from the Tech Inclusion for the Deaf Initiative.",
  };
}

export default async function BlogPage() {
  // Server-side fetch (ISR)
  const response = await fetchAPI("/blog-posts?populate=*");
  const posts = response?.data || [];

  return (
    <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 tracking-tight">
          News & Updates
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Latest news, stories, and updates from the Tech Inclusion for the Deaf Initiative.
        </p>
      </header>

      {/* Client component handles live updates */}
      <BlogListClient initialPosts={posts} />
    </main>
  );
}
