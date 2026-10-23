import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { FamilyPhoto } from "../../data/testimonials";
import { mediaUrl } from "../../utils/images";

interface Props {
  photos: FamilyPhoto[];
  /** Index of the open photo, or null when closed. */
  index: number | null;
  onChange: (index: number | null) => void;
}

/** Full-screen photo viewer (modal dialog) with previous / next and keyboard arrows. */
export default function PhotoViewer({ photos, index, onChange }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  if (photos.length === 0) return null;
  const i = index ?? 0;
  const photo = photos[i];
  const go = (delta: number) => onChange((i + delta + photos.length) % photos.length);

  return (
    <dialog ref={ref} className="viewer" aria-label="Photo viewer" onClose={() => onChange(null)}
      onKeyDown={(e) => { if (e.key === "ArrowLeft") go(-1); if (e.key === "ArrowRight") go(1); }}
      onClick={(e) => { if (e.target === e.currentTarget) onChange(null); }}>
      {open && (
        <div className="viewer__inner">
          <button type="button" className="viewer__close" onClick={() => onChange(null)} aria-label="Close photo viewer"><X size={22} aria-hidden="true" /></button>
          <figure className="viewer__figure">
            <img key={photo.path} src={mediaUrl(photo.path, 1200)} alt={photo.caption ? `A TeddyPups family: ${photo.caption}` : "A happy TeddyPups family with their new puppy"} />
            <figcaption className="viewer__caption">
              {photo.caption && <span className="font-scrawl">{photo.caption}</span>}
              <span className="viewer__count">{i + 1} / {photos.length}</span>
            </figcaption>
          </figure>
          <button type="button" className="viewer__nav viewer__nav--prev" onClick={() => go(-1)} aria-label="Previous photo"><ChevronLeft size={26} aria-hidden="true" /></button>
          <button type="button" className="viewer__nav viewer__nav--next" onClick={() => go(1)} aria-label="Next photo"><ChevronRight size={26} aria-hidden="true" /></button>
        </div>
      )}
    </dialog>
  );
}
