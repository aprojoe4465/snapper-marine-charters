"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/lib/photos";

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => {
    setOpen((i) => (i === null ? i : (i + photos.length - 1) % photos.length));
  }, [photos.length]);
  const next = useCallback(() => {
    setOpen((i) => (i === null ? i : (i + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (open === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close, prev, next]);

  const current = open !== null ? photos[open] : null;

  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            className={`gallery-item${photo.width < 800 ? " gallery-item-small" : ""}`}
            onClick={() => setOpen(index)}
            aria-label={`View larger: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 25vw"
              className="gallery-img"
            />
          </button>
        ))}
      </div>

      {current && open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
            Close
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="lightbox-img"
              priority
            />
            <figcaption>{current.alt}</figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
