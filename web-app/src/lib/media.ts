
export function getStrapiMedia(url: string | undefined | null): string {
  if (!url) return "/placeholder.png"; // fallback if no image
  if (url.startsWith("http")) return url; // already absolute

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
  return `${baseUrl}${url}`;
}
