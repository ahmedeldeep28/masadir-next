export function getStrapiMedia(url) {
  if (!url) return "/placeholder.png";
  if (url.startsWith("https")) return url;
  return `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`;
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("ar-EG").format(new Date(date));
}
