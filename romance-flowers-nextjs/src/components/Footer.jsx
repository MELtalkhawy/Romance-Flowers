'use client';

import { Clock, ExternalLink, MapPin, MessageCircle, Phone, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CATEGORIES, STORE_INFO } from '@/data/catalog';
import LuxuryImage from './LuxuryImage';

export default function Footer() {
  const { isAr, t } = useLanguage();

  const whatsappDirect = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    isAr
      ? 'السلام عليكم زهور رومانس 🌹 أرغب في الاستفسار عن طلب ورد.'
      : 'Hello Romance Flowers 🌹 I would like to inquire about a floral order.'
  )}`;

  return (
    <footer className="bg-ivory border-t border-gold/25 text-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/40 shrink-0">
                <LuxuryImage
                  driveId={STORE_INFO.logoDriveId}
                  alt={t(STORE_INFO.brandAr, STORE_INFO.brandEn)}
                  width={200}
                  sizes="48px"
                  enhanced={false}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-charcoal font-display">
                  {t(STORE_INFO.brandAr, STORE_INFO.brandEn)}
                </h3>
                <p className="text-xs font-semibold text-gold-dark uppercase tracking-widest">
                  {t(`تأسس عام ${STORE_INFO.established} • المدينة المنورة`, `Est. ${STORE_INFO.established} • Al-Madinah`)}
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-charcoal/70 leading-relaxed max-w-md">
              {t(
                'وجهتكم الأولى في المدينة المنورة لأرقى تنسيقات الورد الطبيعي، الفازات الملكية، هدايا الشوكولاتة الفاخرة، ومسكات العرايس بتصاميم تجمع الأصالة والفخامة العصرية.',
                'Al-Madinah’s trusted luxury flower boutique since 1990 — specializing in hand-tied bouquets, royal vases, artisanal chocolate pairings, and bespoke bridal florals.'
              )}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush/70 border border-gold/25 text-xs font-bold text-charcoal">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span>
                {t(
                  `تقييم جوجل ${STORE_INFO.rating} / 5 (${STORE_INFO.reviewsCount} تقييم موثّق)`,
                  `Google Rating ${STORE_INFO.rating} / 5 (${STORE_INFO.reviewsCount} verified reviews)`
                )}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-4">
              {t('أقسام البوتيك', 'Collections')}
            </h4>
            <ul className="space-y-2.5 text-sm text-charcoal/75">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="hover:text-gold-dark transition-colors"
                  >
                    {isAr ? cat.titleAr : cat.titleEn}
                  </a>
                </li>
              ))}
              <li>
                <a href="#reels" className="hover:text-gold-dark transition-colors">
                  {t('معرض الفيديو التفاعلي', 'Interactive Video Reels')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-sm font-bold text-charcoal uppercase tracking-wider mb-4">
              {t('التواصل والموقع', 'Visit & Contact')}
            </h4>
            <ul className="space-y-3 text-sm text-charcoal/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-dark shrink-0 mt-1" />
                <span>{t(STORE_INFO.addressAr, STORE_INFO.addressEn)}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-dark shrink-0" />
                <span>{t(STORE_INFO.hoursAr, STORE_INFO.hoursEn)}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-dark shrink-0" />
                <a
                  href={`tel:+${STORE_INFO.whatsappNumber}`}
                  dir="ltr"
                  className="font-semibold hover:text-gold-dark transition"
                >
                  {STORE_INFO.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal text-ivory text-xs font-semibold hover:bg-gold-dark transition"
              >
                <MessageCircle className="w-3.5 h-3.5 text-gold-light" />
                <span>{t('واتساب', 'WhatsApp')}</span>
              </a>
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gold/35 text-charcoal text-xs font-semibold hover:border-gold hover:text-gold-dark transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t('خرائط جوجل', 'Google Maps')}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal/55">
          <p>
            © {new Date().getFullYear()} {t(STORE_INFO.brandAr, STORE_INFO.brandEn)}.{' '}
            {t('جميع الحقوق محفوظة.', 'All rights reserved.')}
          </p>
          <p>
            {t(
              'جميع الأسعار بالريال السعودي (ر.س)',
              'All prices displayed in Saudi Riyals (SAR)'
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
