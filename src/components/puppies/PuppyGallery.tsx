import { useState, type KeyboardEvent } from "react";
import type { PuppyVideo } from "../../types/puppy";
import { focusOf, mediaFileUrl, mediaUrl } from "../../utils/images";
import PhotoViewer from "../common/PhotoViewer";

interface Props { images: string[]; name: string; alt: string; videos?: PuppyVideo[] }

/** Storybook photo page: big photo or looping video (opens full screen), arrows, counter and thumbnails. */
export default function PuppyGallery({ images, name, alt, videos = [] }: Props) {
  const [active, setActive] = useState(0);
  const [viewing, setViewing] = useState<number | null>(null);
  const count = images.length;
  const go = (delta: number) => setActive((i) => (i + delta + count) % count);
  const videoAt = (i: number) => videos.find((v) => v.index === i)?.src;
  const kind = (i: number) => (videoAt(i) ? "video" : "photo");
  const activeVideo = videoAt(active);

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  return (
    <div className="gallery" onKeyDown={onKey}>
      <div className="storypage">
        <button type="button" className="storypage__open" onClick={() => setViewing(active)} aria-label={`Open ${name}, ${kind(active)} ${active + 1} of ${count} full screen`}>
          {activeVideo ? (
            <video key={activeVideo} src={mediaFileUrl(activeVideo)} poster={mediaUrl(images[active], 1080)} aria-label={`Video of ${alt}`} autoPlay muted loop playsInline />
          ) : (
            <img key={images[active]} src={mediaUrl(images[active], 1080)} alt={`${alt}, photo ${active + 1} of ${count}`} width="720" height="900" style={{ objectPosition: focusOf(images[active]) }} />
          )}
        </button>
        {count > 1 && (
          <div className="storypage__controls">
            <button type="button" className="storypage__arrow" onClick={() => go(-1)} aria-label="Previous photo">‹</button>
            <span className="storypage__count" aria-live="polite">{active + 1} / {count}</span>
            <button type="button" className="storypage__arrow" onClick={() => go(1)} aria-label="Next photo">›</button>
          </div>
        )}
      </div>
      {count > 1 && (
        <ul className="gallery__thumbs" aria-label={`All photos of ${name}`}>
          {images.map((img, i) => (
            <li key={`${img}-${i}`}>
              <button type="button" className={i === active ? "is-active" : ""} onClick={() => setActive(i)} aria-label={`${name}, ${kind(i)} ${i + 1} of ${count}`} aria-current={i === active}>
                <img src={mediaUrl(img, 256)} alt="" loading="lazy" width="96" height="112" style={{ objectPosition: focusOf(img) }} />
                {videoAt(i) && <span className="gallery__play" aria-hidden="true">▶</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
      <PhotoViewer photos={images.map((path, i) => ({ path, video: videoAt(i) }))} index={viewing} onChange={setViewing} label={`${name} photos`}
        altFor={(i) => `${alt}, ${kind(i)} ${i + 1} of ${count}`} />
    </div>
  );
}
