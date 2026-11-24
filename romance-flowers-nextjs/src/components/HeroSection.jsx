'use client';

import { useState } from 'react';
import {
  ArrowDown,
  Award,
  Clock,
  Gift,
  MessageCircle,
  Sparkles,
  Star,
  Truck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  HERO_MEDIA,
  STORE_INFO,
  driveImageUrl,
  driveVideoUrl,
} from '@/data/catalog';
import LuxuryImage from './LuxuryImage';

export default function HeroSection() {
  const { t, isAr } = useLanguage();
  const [videoFailed, setVideoFailed] = useState(false);

  const conciergeMessage = isAr
    ? 'السلام عليكم زهور رومانس 🌹\nأرغب في الاستفسار وطلب تنسيق ورد فاخر.'
    : 'Hello Romance Flowers 🌹\nI would like to inquire and order a luxury floral arrangement.';
  const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    conciergeMessage
  )}`;

  const trustHighlights = [
    {
      icon: Truck,
      title: t('توصيل فوري ومبرّد', 'Express Chilled Delivery'),
      desc: t('داخل المدينة المنورة بنفس اليوم', 'Same-day across Al-Madinah'),
    },
    {
      icon: Sparkles,
      title: t('ورد طبيعي 100%', '100% Fresh Natural Blooms'),
      desc: t('منتقى يومياً من أجود المزارع', 'Hand-selected daily quality'),
    },
    {
      icon: Gift,
      title: t('تغليف ملكي فاخر', 'Royal Luxury Wrapping'),
      desc: t('بطاقة إهداء مخصصة مجاناً', 'Complimentary custom gift card'),
    },
    {
      icon: Clock,
      title: t('خدمة يومية', 'Open Daily'),
      desc: t('4:00 مساءً – 12:00 منتصف الليل', '4:00 PM – 12:00 AM'),
    },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Full-Width Luxury Hero Stage */}
      <div className="relative min-h-[78vh] sm:min-h-[84vh] flex items-center">
        {/* Background Layer: High-Res Poster + Autoplay Muted Looping Video */}
        <div className="absolute inset-0 z-0">
          <LuxuryImage
            driveId={HERO_MEDIA.posterImageId}
            alt={t('زهور رومانس — تنسيقات ورد طبيعي فاخر', 'Romance Flowers luxury arrangements')}
            width={1600}
            sizes="100vw"
            priority
            enhanced
          />
          {!videoFailed && (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={driveImageUrl(HERO_MEDIA.posterImageId, 1600)}
              onError={() => setVideoFailed(true)}
              className="absolute inset-0 w-full h-full object-cover opacity-80 luxury-photo-filter"
            >
              <source src={driveVideoUrl(HERO_MEDIA.videoId)} type="video/mp4" />
            </video>
          )}
          {/* Warm Royal Editorial Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/50 to-charcoal/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/30" />
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            {/* Verified Heritage & Rating Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full bg-ivory/15 backdrop-blur-md border border-gold/45 text-ivory text-xs sm:text-sm mb-6">
              <Award className="w-4 h-4 text-gold-light shrink-0" />
              <span>{t('منذ 1990 • المدينة المنورة', 'Est. 1990 • Al-Madinah')}</span>
              <span className="text-gold/60">•</span>
              <span className="inline-flex items-center gap-1 font-semibold text-gold-light">
                <Star className="w-3.5 h-3.5 fill-gold-light text-gold-light" />
                {STORE_INFO.rating} ({STORE_INFO.reviewsCount}+)
              </span>
            </div>

            {/* Luxury Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-[1.2] sm:leading-[1.15] tracking-tight font-display">
              {t(
                'أرقى تنسيقات الورد الطبيعي والهدايا الفاخرة',
                'Finest Natural Flower Arrangements & Luxury Gifts'
              )}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-ivory/85 max-w-2xl leading-relaxed">
              {t(
                'في بوتيك زهور رومانس نحول لحظاتكم الثمينة إلى تحف فنية من الورد الطبيعي المختار بعناية، الفازات الملكية، الشوكولاتة الفاخرة، ومسكات العرايس.',
                'At Romance Flowers, we craft your cherished moments into timeless botanical artistry — from hand-tied luxury bouquets and royal vases to fine chocolates and bridal florals.'
              )}
            </p>

            {/* Primary CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#bouquets"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gold text-charcoal font-bold text-sm sm:text-base hover:bg-gold-light transition-all shadow-gold-glow"
              >
                <span>{t('اطلب الآن', 'Order Now')}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-ivory/15 backdrop-blur-md border border-ivory/35 text-ivory font-semibold text-sm sm:text-base hover:bg-ivory hover:text-charcoal transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('تواصل عبر واتساب', 'Order via WhatsApp')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Saudi Luxury Trust Strip */}
      <div className="bg-white border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trustHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-ivory/70 border border-gold/10"
                >
                  <div className="w-10 h-10 rounded-full bg-blush/80 text-gold-dark flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-charcoal truncate">
                      {item.title}
                    </p>
                    <p className="text-[11px] sm:text-xs text-charcoal/65 truncate">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
