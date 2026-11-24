'use client';

import { useState } from 'react';
import { Check, Eye, MessageCircle, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { buildProductWhatsAppUrl } from '@/data/catalog';
import LuxuryImage from './LuxuryImage';

export default function ProductCard({ product, onQuickView }) {
  const { lang, isAr, currency, t } = useLanguage();
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const title = isAr ? product.nameAr : product.nameEn;
  const description = isAr ? product.descAr : product.descEn;
  const badge = isAr ? product.badgeAr : product.badgeEn;
  const whatsappUrl = buildProductWhatsAppUrl(product, lang);

  const handleAddToCart = () => {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <article className="group bg-white rounded-3xl border border-gold/15 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col overflow-hidden">
      {/* Studio-Enhanced Image Container */}
      <div className="relative aspect-[4/5] w-full luxury-photo-frame">
        <LuxuryImage
          driveId={product.driveId}
          alt={title}
          width={900}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          enhanced
        />

        {/* Luxury Badge */}
        {badge && (
          <span
            className={`absolute top-3.5 ${
              isAr ? 'right-3.5' : 'left-3.5'
            } z-10 px-3 py-1 rounded-full bg-ivory/90 backdrop-blur-md border border-gold/30 text-[11px] font-bold text-charcoal shadow-sm`}
          >
            {badge}
          </span>
        )}

        {/* Quick View Button */}
        <button
          type="button"
          onClick={() => onQuickView(product)}
          aria-label={t('معاينة سريعة', 'Quick view')}
          className={`absolute top-3.5 ${
            isAr ? 'left-3.5' : 'right-3.5'
          } z-10 w-9 h-9 rounded-full bg-charcoal/70 text-ivory backdrop-blur-md flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-gold hover:text-charcoal transition-all`}
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <h3 className="text-base sm:text-[17px] font-bold text-charcoal leading-snug line-clamp-1 group-hover:text-gold-dark transition-colors">
          {title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-charcoal/65 leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>

        {/* Price in Saudi Riyals */}
        <div className="mt-4 pt-3 border-t border-gold/15 flex items-baseline justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-extrabold text-charcoal">
              {product.price}
            </span>
            <span className="text-xs font-semibold text-gold-dark">{currency}</span>
          </div>
          <span className="text-[11px] text-charcoal/50">
            {t('شامل التغليف الفاخر', 'Includes luxury wrap')}
          </span>
        </div>

        {/* Action Buttons: Add to Cart + Direct WhatsApp Order */}
        <div className="mt-4 grid grid-cols-1 gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-charcoal text-ivory text-xs sm:text-sm font-semibold hover:bg-gold-dark transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-gold-light" />
            <span>{t('اطلب عبر واتساب', 'Order via WhatsApp')}</span>
          </a>

          <button
            type="button"
            onClick={handleAddToCart}
            className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
              justAdded
                ? 'bg-emerald-600 border-emerald-600 text-white'
                : 'bg-blush/50 border-gold/25 text-charcoal hover:bg-blush hover:border-gold'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>{t('تمت الإضافة للسلة', 'Added to Cart')}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-gold-dark" />
                <span>{t('أضف إلى السلة', 'Add to Cart')}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
