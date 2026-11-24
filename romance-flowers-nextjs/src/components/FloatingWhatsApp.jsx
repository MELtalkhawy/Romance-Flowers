'use client';

import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { STORE_INFO } from '@/data/catalog';

export default function FloatingWhatsApp() {
  const { isAr, t } = useLanguage();

  const href = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
    isAr
      ? 'السلام عليكم زهور رومانس 🌹 أرغب في طلب تنسيق ورد فاخر.'
      : 'Hello Romance Flowers 🌹 I would like to place a luxury flower order.'
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('تواصل عبر واتساب', 'Chat on WhatsApp')}
      className={`fixed bottom-5 ${
        isAr ? 'left-5' : 'right-5'
      } z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-charcoal text-ivory border border-gold/45 shadow-xl hover:bg-gold-dark hover:scale-105 transition-all`}
    >
      <MessageCircle className="w-5 h-5 text-gold-light" />
      <span className="hidden sm:inline text-xs font-bold">
        {t('طلب سريع عبر واتساب', 'Quick WhatsApp Order')}
      </span>
    </a>
  );
}
