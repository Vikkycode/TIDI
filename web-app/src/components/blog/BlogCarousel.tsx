"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { getStrapiMedia } from "@/lib/media";

interface BlogCarouselProps {
  posts: any[];
}

export default function BlogCarousel({ posts }: BlogCarouselProps) {
  if (!posts?.length) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Latest from Our Blog
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {posts?.map((post) => {
            const attrs = post.attributes || {};
            const title = attrs?.Title || attrs?.title;
            const content = attrs?.Content || attrs?.content;
            const slug = attrs?.slug;
            const imageUrl = getStrapiMedia(
              attrs?.CoverImage?.url || attrs?.coverImage?.url
            );

            return (
              <SwiperSlide key={post.id}>
                <Link
                  href={`/blog/${slug}`}
                  className="block bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
                >
                  {imageUrl && (
                    <div className="relative w-full h-56">
                      <Image
                        src={imageUrl}
                        alt={attrs.CoverImage?.data?.attributes?.alternativeText || title}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="/placeholder.png"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2 line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {content}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
