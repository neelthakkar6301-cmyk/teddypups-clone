import { imageFocus } from "../data/imageFocus";
/**
 * All imagery and video resolve here, so files can be swapped in ONE place.
 * Media live in public/: images/media/<name>.webp (1200px), <name>-sm.webp (640px), videos/<name>.mp4.
 * `path` is the reference media path stored in src/data (e.g. "Z0ToauDx7Eve/5fffe4d022/b942a5_….webp");
 * its first two segments name the local file.
 */
const localName = (path: string) => path.split("/").slice(0, 2).join("-");

/** Photo URL; requests up to 640px wide get the small file. */
export function mediaUrl(path: string, width = 1080): string {
  return `/images/media/${localName(path)}${width <= 640 ? "-sm" : ""}.webp`;
}

/** Video URL. */
export function mediaFileUrl(path: string): string {
  return `/videos/${localName(path)}.mp4`;
}

export const LOGO_URL = "/images/brand/logo.png";

/** Where a cover-cropped photo should be anchored (CSS object-position). */
export function focusOf(path: string): string | undefined {
  return imageFocus[path.split("/").slice(0, 2).join("/")];
}
