'use client';

import { useState } from 'react';
import Image from 'next/image';
import { driveFallbackImageUrl, driveImageUrl } from '@/data/catalog';

const WARM_BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI0Y0RTZFNCIvPjwvc3ZnPg==';

export default function LuxuryImage({
  driveId,
  alt,
  width = 900,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
  priority = false,
  className = '',
  enhanced = true,
}) {
  const [useFallback, setUseFallback] = useState(false);

  const src = useFallback
    ? driveFallbackImageUrl(driveId, width)
    : driveImageUrl(driveId, width);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      placeholder="blur"
      blurDataURL={WARM_BLUR_DATA_URL}
      onError={() => {
        if (!useFallback) setUseFallback(true);
      }}
      className={`object-cover ${enhanced ? 'luxury-photo-filter' : ''} ${className}`}
    />
  );
}
