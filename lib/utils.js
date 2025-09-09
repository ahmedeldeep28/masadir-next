export function getStrapiMedia(url) {
  if (!url) return "/placeholder.png";
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`;
}
