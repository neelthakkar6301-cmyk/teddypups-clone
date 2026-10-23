/**
 * All imagery is referenced through this helper so it can be swapped for local files
 * (public/images/...) in ONE place. Currently points at the reference site's media.
 */
const IMAGE_ORIGIN = "https://puppy.instabizweb.com";

export function mediaUrl(path: string, width = 1080): string {
  return `${IMAGE_ORIGIN}/_next/image?url=${encodeURIComponent(`/media/${path}`)}&w=${width}&q=75`;
}
/** Direct URL for non-image media (video). */
export function mediaFileUrl(path: string): string {
  return `${IMAGE_ORIGIN}/media/${path}`;
}
export const LOGO_URL = `${IMAGE_ORIGIN}/_next/image?url=${encodeURIComponent("/brand/logo.png")}&w=256&q=75`;
