import { useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { mediaUrl } from "../../utils/images";

interface Props { images: string[]; alt: string; hasVideo?: boolean }

export default function PuppyGallery({ images, alt, hasVideo }: Props) {
  const [active, setActive] = useState(0);
  const count = images.length;
  const go = (delta: number) => setActive((i) => (i + delta + count) % count);
  // The reference shows a play badge on the final thumbnail when a puppy has a video.
  const isVideoThumb = (i: number) => Boolean(hasVideo) && count > 1 && i === count - 1;

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  return (
    <div className="gallery" tabIndex={0} onKeyDown={onKey} aria-label="Photo gallery. Use arrow keys to browse.">
      <div className="gallery__stage">
        <img key={active} src={mediaUrl(images[active], 1080)} alt={`${alt}, photo ${active + 1} of ${count}`} width="720" height="960" />
        {isVideoThumb(active) && (
          <span className="gallery__video-note"><Play size={14} aria-hidden="true" /> Video available — ask us on WhatsApp</span>
        )}
        {count > 1 && (
          <div className="gallery__controls">
            <button type="button" onClick={() => go(-1)} aria-label="Previous photo"><ChevronLeft size={20} aria-hidden="true" /></button>
            <span aria-live="polite">{active + 1} / {count}</span>
            <button type="button" onClick={() => go(1)} aria-label="Next photo"><ChevronRight size={20} aria-hidden="true" /></button>
          </div>
        )}
      </div>
      {count > 1 && (
        <ul className="gallery__thumbs">
          {images.map((img, i) => (
            <li key={img}>
              <button type="button" className={i === active ? "is-active" : ""} onClick={() => setActive(i)} aria-label={`Show photo ${i + 1}`} aria-current={i === active}>
                <img src={mediaUrl(img, 256)} alt="" loading="lazy" width="96" height="128" />
                {isVideoThumb(i) && <span className="gallery__play" aria-hidden="true"><Play size={14} /></span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
