'use client';

import { useEffect, useRef } from 'react';

export function PublicationVideo({ src, poster, title }: { src: string; poster: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (video.getAttribute('src') !== src) video.src = src;
        // Keep the poster visible if the browser blocks automatic playback.
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { rootMargin: '300px' });

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster}
      aria-label={`Research illustration for ${title}`}
      width="240"
      height="156"
      loop
      muted
      playsInline
      preload="none"
    />
  );
}
