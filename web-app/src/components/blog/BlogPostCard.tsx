'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/types';
import { STRAPI_URL } from '@/lib/strapi';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}


const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function BlogPostCard({ post, index }: BlogPostCardProps) {
  const coverImageUrl = post.coverImage?.data?.[0]?.attributes?.formats?.small?.url
    ? `${STRAPI_URL}${post.coverImage.data[0].attributes.formats.small.url}`
    : 'https://res.cloudinary.com/dr1qigl4z/image/upload/v1709897949/placeholder_tidi_i7c5s1.png'; // A placeholder

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg">
        <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl border-gray-200">
          <CardHeader className="p-0">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={coverImageUrl}
                alt={post.coverImage?.data?.[0]?.attributes?.alternativeText || `Cover image for ${post.title}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-grow">
            <CardTitle className="text-xl font-bold text-blue-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
              {post.title}
            </CardTitle>
            <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex justify-between items-center text-xs text-gray-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <Badge variant="secondary">Read More →</Badge>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}