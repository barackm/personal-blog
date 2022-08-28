const ROOT =
  (process && process.env.NEXT_PUBLIC_API_ROOT) ||
  'googleapis.com/blogger/v3/blogs';
export const DOMAIN = `https://www.${ROOT}`;
export const API_URL = `${DOMAIN}/`;
export const BLOG_ID = '33354389532821275';
