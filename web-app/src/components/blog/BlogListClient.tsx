"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchAPI } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";
interface BlogListClientProps {
  initialPosts: any[];
}

export default function BlogListClient({ initialPosts }: BlogListClientProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);

  // 👇 Refetch from Strapi every 60 seconds
  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        const response = await fetchAPI("/blog-posts?populate=*");
        setPosts(response?.data || []);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    }

    // Run on mount
    loadPosts();

    // Auto-refresh every 60 seconds
    const interval = setInterval(loadPosts, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!posts?.length) {
    return (
      <p className="text-center text-gray-600 text-lg mt-20">
        No posts found. Check back later!
      </p>
    );
  }
// console.log("Rendering posts:", posts);
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts?.map((post) => {
        const attrs = post || {};
        const title = attrs.Title || attrs.title;
        const content = attrs.Content || attrs.content;
        const slug = attrs.slug;
        const imageUrl = getStrapiMedia(
        attrs.CoverImage?.url
        );

        return (
          <Link
            href={`/blog/${slug}`}
            key={post.id}
            className="block p-6 md:pb-8 bg-white rounded-lg  shadow hover:shadow-md transition-shadow duration-300"
          >
            {imageUrl && (
              <div className="mb-4">
                <Image
                src={imageUrl}
                alt={attrs.CoverImage?.data?.attributes?.alternativeText || title}
                width={600}
                height={400}
                className="rounded-md object-cover w-full h-48"
                placeholder="blur"
                blurDataURL="/placeholder.png"  // low-res fallback while loading
                loading="lazy"                  // loads only when visible
                sizes="(max-width: 568px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"                    // responsive sizing
                />              </div>
            )}
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{title}</h2>
            <p className="text-gray-700 line-clamp-3">{content}</p>
          </Link>
        );
      })}

      {loading && (
        <p className="text-center text-gray-500 col-span-full mt-6">
          Refreshing posts...
        </p>
      )}
    </div>
  );
}
