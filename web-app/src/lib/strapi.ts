// import { StrapiCollectionResponse, StrapiSingleResponse, BlogPost } from '@/lib/types';
// import qs from 'qs';

// export const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
// async function fetchAPI<T>(path: string, urlParamsObject = {}, options = {}): Promise<T> {
//   try {
//     const mergedOptions = {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
//       },
//       ...options,
//     };

//     const queryString = qs.stringify(urlParamsObject);
//     const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

//     const response = await fetch(requestUrl, mergedOptions);

//     if (!response.ok) {
//       const errorBody = await response.json();
//       const errorMessage = errorBody.error?.message || response.statusText;
//       console.error(`API Error (${response.status} on ${requestUrl}): ${errorMessage}`);
//       throw new Error(`Failed to fetch API: ${errorMessage}`);
//     }

//     const data = await response.json();
//     return data as T;
//   } catch (error) {
//     // Log the full error for server-side debugging
//     console.error("An error occurred in fetchAPI:", error);
//     // Re-throw a more informative error for Next.js to handle
//     throw new Error(
//       `An error occurred while communicating with the API. Please check the server logs.`
//     );
//   }
// }

// export async function getBlogPosts(){
//   return fetchAPI('/blog-posts', {
//     populate: ['coverImage'],
//     sort: ['publishedAt:desc'],
//   });
// }

// export async function getBlogPostBySlug(slug: string){
//     return fetchAPI(`/blog-posts`, {
//         filters: { slug: { $eq: slug } },
//         populate: ['coverImage'],
//     });
// }

// /**
//  * Fetches a single blog post by its ID.
//  * @param id The ID of the blog post.
//  * @returns A promise that resolves to the blog post data.
//  */
// export async function getBlogPostById(id: number | string){
//     return fetchAPI(`/blog-posts/${id}`, { populate: ['coverImage'] });
// }