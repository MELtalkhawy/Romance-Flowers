'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Film,
  Maximize2,
  MessageCircle,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  VIDEO_REELS,
  buildReelWhatsAppUrl,
  driveImageUrl,
  driveVideoPosterUrl,
  driveVideoPreviewUrl,
  driveVideoUrl,
} from '@/data/catalog';

function ReelCard({ reel, onOpenPreview }) {
  const { lang, isAr, t } = useLanguage();
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [streamFailed, setStreamFailed] = useState(false);
  const [posterSrc, setPosterSrc] = useState(driveVideoPosterUrl(reel.driveId, 800));

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // Lazy-load observer (preloads slightly before entering viewport)
    const loadObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    loadObserver.observe(node);

    // Viewport playback observer (muted autoplay on intersection)
    const playObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const video = videoRef.current;
        if (!video || streamFailed) return;

        if (entry?.isIntersecting) {
          video
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.55 }
    );
    playObserver.observe(node);

    return () => {
      loadObserver.disconnect();
      playObserver.disconnect();
    };
  }, [streamFailed]);

  const togglePlay = () => {
    if (streamFailed) {
      onOpenPreview(reel);
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => onOpenPreview(reel));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const title = isAr ? reel.titleAr : reel.titleEn;
  const tag = isAr ? reel.tagAr : reel.tagEn;

  return (
    <div
      ref={containerRef}
      className="group relative snap-center shrink-0 w-[76vw] sm:w-[270px] lg:w-auto aspect-[9/16] rounded-3xl overflow-hidden bg-charcoal border border-gold/25 shadow-luxury"
    >
      {/* Poster Thumbnail Fallback */}
      <img
        src={posterSrc}
        alt={title}
        loading="lazy"
        onError={() => setPosterSrc(driveImageUrl(reel.posterFallbackId, 800))}
        className="absolute inset-0 w-full h-full object-cover luxury-photo-filter"
      />

      {/* Lightweight Lazy HTML5 Video Player */}
      {shouldLoad && !streamFailed && (
        <video
          ref={videoRef}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          onError={() => setStreamFailed(true)}
          onClick={togglePlay}
          className="relative z-10 w-full h-full object-cover cursor-pointer"
        >
          <source src={driveVideoUrl(reel.driveId)} type="video/mp4" />
        </video>
      )}

      {/* Editorial Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-charcoal/90 via-charcoal/15 to-charcoal/40" />

      {/* Top Tag & Controls */}
      <div className="absolute top-3.5 inset-x-3.5 z-30 flex items-center justify-between gap-2">
        <span className="px-3 py-1 rounded-full bg-charcoal/65 backdrop-blur-md border border-gold/40 text-[11px] font-semibold text-ivory">
          {tag}
        </span>

        <div className="flex items-center gap-1.5">
          {!streamFailed && (
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? t('تشغيل الصوت', 'Unmute') : t('كتم الصوت', 'Mute')}
              className="w-8 h-8 rounded-full bg-charcoal/65 backdrop-blur-md text-ivory flex items-center justify-center hover:bg-gold hover:text-charcoal transition"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          )}
          <button
            type="button"
            onClick={() => onOpenPreview(reel)}
            aria-label={t('عرض بملء الشاشة', 'Expand video')}
            className="w-8 h-8 rounded-full bg-charcoal/65 backdrop-blur-md text-ivory flex items-center justify-center hover:bg-gold hover:text-charcoal transition"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Center Custom Play/Pause Button */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? t('إيقاف مؤقت', 'Pause') : t('تشغيل الفيديو', 'Play video')}
        className={`absolute inset-0 m-auto z-30 w-14 h-14 rounded-full bg-ivory/20 backdrop-blur-md border border-ivory/45 text-ivory flex items-center justify-center transition-all duration-300 hover:bg-gold hover:text-charcoal hover:border-gold ${
          isPlaying ? 'opacity-0 group-hover:opacity-100 scale-90' : 'opacity-100 scale-100'
        }`}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6 fill-current" />
        )}
      </button>

      {/* Bottom Title & Quick WhatsApp CTA */}
      <div className="absolute bottom-3.5 inset-x-3.5 z-30">
        <p className="text-sm font-bold text-ivory leading-snug line-clamp-2 drop-shadow">
          {title}
        </p>
        <a
          href={buildReelWhatsAppUrl(reel, lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-ivory/90 backdrop-blur-md text-charcoal text-xs font-bold hover:bg-gold hover:text-charcoal transition"
        >
          <MessageCircle className="w-3.5 h-3.5 text-gold-dark" />
          <span>{t('اطلب تنسيق مشابه', 'Order Similar Design')}</span>
        </a>
      </div>
    </div>
  );
}

export default function VideoGallery() {
  const { isAr, t } = useLanguage();
  const [activeReel, setActiveReel] = useState(null);

  return (
    <section
      id="reels"
      className="scroll-mt-24 py-16 sm:py-24 bg-charcoal text-ivory relative overflow-hidden"
    >
      {/* Subtle Ambient Gold Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[560px] h-[260px] rounded-full bg-gold/15 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-gold-light mb-2">
              <Film className="w-3.5 h-3.5" />
              {t('معرض الفيديو التفاعلي', 'Interactive Video Showcase')}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory font-display">
              {t('شاهد فخامة تنسيقاتنا على الطبيعة', 'Experience Our Arrangements in Motion')}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ivory/70 max-w-2xl">
              {t(
                'لقطات حقيقية من داخل بوتيك زهور رومانس — اسحب للاستعراض السريع واضغط على أي فيديو للتحكم أو طلب تنسيق مشابه.',
                'Real footage captured inside Romance Flowers — swipe to explore our reels and tap any clip to order a bespoke arrangement.'
              )}
            </p>
          </div>
          <span className="text-xs font-semibold text-gold-light bg-ivory/10 px-4 py-1.5 rounded-full border border-gold/30 self-start md:self-auto">
            {t(`${VIDEO_REELS.length} مقاطع حقيقية`, `${VIDEO_REELS.length} Boutique Reels`)}
          </span>
        </div>

        {/* Horizontal Swipeable on Mobile, 4-Column Grid on Desktop */}
        <div className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar pb-3 lg:pb-0">
          {VIDEO_REELS.map((reel) => (
            <ReelCard key={reel.id} reel={reel} onOpenPreview={setActiveReel} />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal Player (Uses Official Drive Preview for Guaranteed Playback) */}
      {activeReel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveReel(null)}
        >
          <div
            className="relative w-full max-w-md aspect-[9/16] max-h-[88vh] bg-charcoal rounded-3xl overflow-hidden border border-gold/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveReel(null)}
              aria-label={t('إغلاق الفيديو', 'Close video')}
              className={`absolute top-3.5 ${
                isAr ? 'left-3.5' : 'right-3.5'
              } z-20 w-9 h-9 rounded-full bg-charcoal/85 text-ivory flex items-center justify-center hover:bg-gold hover:text-charcoal transition`}
            >
              <X className="w-4 h-4" />
            </button>

            <iframe
              src={driveVideoPreviewUrl(activeReel.driveId)}
              title={isAr ? activeReel.titleAr : activeReel.titleEn}
              allow="autoplay; fullscreen"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
