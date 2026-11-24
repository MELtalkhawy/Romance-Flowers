'use client';

import { useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  SearchX,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { CATEGORIES, PRODUCTS, buildProductWhatsAppUrl } from '@/data/catalog';
import ProductCard from './ProductCard';
import LuxuryImage from './LuxuryImage';

export default function ProductSections({ searchQuery, onClearSearch }) {
  const { lang, isAr, currency, t } = useLanguage();
  const { addItem } = useCart();
  const [expandedSections, setExpandedSections] = useState({});
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredByCategory = useMemo(() => {
    const map = {};
    for (const cat of CATEGORIES) {
      map[cat.id] = PRODUCTS.filter((p) => {
        if (p.category !== cat.id) return false;
        if (!normalizedQuery) return true;
        return (
          p.nameAr.toLowerCase().includes(normalizedQuery) ||
          p.nameEn.toLowerCase().includes(normalizedQuery) ||
          p.descAr.toLowerCase().includes(normalizedQuery) ||
          p.descEn.toLowerCase().includes(normalizedQuery)
        );
      });
    }
    return map;
  }, [normalizedQuery]);

  const totalMatches = Object.values(filteredByCategory).reduce(
    (sum, list) => sum + list.length,
    0
  );

  const toggleExpand = (catId) => {
    setExpandedSections((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  return (
    <div className="bg-ivory">
      {/* Sticky Quick Category Pills Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 px-5 py-2.5 rounded-full bg-white border border-gold/25 text-xs sm:text-sm font-semibold text-charcoal hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-all shadow-sm"
            >
              {isAr ? cat.titleAr : cat.titleEn}
            </a>
          ))}
          <a
            href="#reels"
            className="shrink-0 px-5 py-2.5 rounded-full bg-blush/80 border border-gold/30 text-xs sm:text-sm font-semibold text-charcoal hover:bg-gold hover:text-white transition-all shadow-sm"
          >
            {t('معرض الفيديو (ريلز)', 'Video Gallery (Reels)')}
          </a>
        </div>
      </div>

      {/* Active Search Indicator */}
      {normalizedQuery && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-blush/60 border border-gold/25">
            <p className="text-sm text-charcoal font-medium">
              {t(
                `نتائج البحث عن "${searchQuery}": ${totalMatches} منتج`,
                `Search results for "${searchQuery}": ${totalMatches} items`
              )}
            </p>
            <button
              type="button"
              onClick={onClearSearch}
              className="text-xs font-bold text-gold-dark hover:underline"
            >
              {t('عرض جميع التشكيلات', 'Show all collections')}
            </button>
          </div>
        </div>
      )}

      {/* Empty Search State */}
      {normalizedQuery && totalMatches === 0 && (
        <div className="max-w-xl mx-auto px-4 py-20 text-center">
          <div className="w-14 h-14 rounded-full bg-blush/80 text-gold-dark flex items-center justify-center mx-auto mb-4">
            <SearchX className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-charcoal">
            {t('لم نعثر على نتائج مطابقة', 'No matching arrangements found')}
          </h3>
          <p className="mt-2 text-sm text-charcoal/65">
            {t(
              'جرّب البحث بكلمة أخرى مثل "جوري" أو "فازة" أو "عروس" أو تصفح التشكيلة الكاملة.',
              'Try another keyword such as "rose", "vase", or "bridal", or browse all collections.'
            )}
          </p>
          <button
            type="button"
            onClick={onClearSearch}
            className="mt-6 px-6 py-2.5 rounded-full bg-charcoal text-ivory text-sm font-semibold hover:bg-gold-dark transition"
          >
            {t('إعادة ضبط البحث', 'Reset Search')}
          </button>
        </div>
      )}

      {/* 4 Categorized Product Sections */}
      {CATEGORIES.map((category, index) => {
        const items = filteredByCategory[category.id] || [];
        if (normalizedQuery && items.length === 0) return null;

        const isExpanded = Boolean(expandedSections[category.id]) || Boolean(normalizedQuery);
        const visibleItems = isExpanded ? items : items.slice(0, 8);
        const hasMore = items.length > 8 && !normalizedQuery;
        const isAlternateBg = index % 2 === 1;

        return (
          <section
            key={category.id}
            id={category.id}
            className={`scroll-mt-24 py-14 sm:py-20 ${
              isAlternateBg ? 'bg-blush/35' : 'bg-ivory'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Heading */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-gold-dark mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    {t(`القسم 0${index + 1}`, `Collection 0${index + 1}`)}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal font-display">
                    {isAr ? category.titleAr : category.titleEn}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-charcoal/70 max-w-2xl">
                    {isAr ? category.subtitleAr : category.subtitleEn}
                  </p>
                </div>

                <span className="text-xs font-semibold text-charcoal/55 bg-white px-4 py-1.5 rounded-full border border-gold/20 self-start md:self-auto">
                  {t(`${items.length} تصميم فاخر`, `${items.length} Luxury Designs`)}
                </span>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {visibleItems.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>

              {/* Show More / Less Toggle */}
              {hasMore && (
                <div className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={() => toggleExpand(category.id)}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border border-gold/35 text-sm font-semibold text-charcoal hover:bg-charcoal hover:text-ivory hover:border-charcoal transition-all shadow-sm"
                  >
                    {isExpanded ? (
                      <>
                        <span>{t('عرض أقل', 'Show Less')}</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span>
                          {t(
                            `عرض جميع التصاميم (${items.length})`,
                            `View All Designs (${items.length})`
                          )}
                        </span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-ivory rounded-3xl overflow-hidden shadow-2xl border border-gold/25 grid grid-cols-1 sm:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQuickViewProduct(null)}
              aria-label={t('إغلاق', 'Close')}
              className={`absolute top-3.5 ${
                isAr ? 'left-3.5' : 'right-3.5'
              } z-20 w-9 h-9 rounded-full bg-charcoal/80 text-ivory flex items-center justify-center hover:bg-gold hover:text-charcoal transition`}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[4/5] sm:aspect-auto sm:min-h-[380px] luxury-photo-frame">
              <LuxuryImage
                driveId={quickViewProduct.driveId}
                alt={isAr ? quickViewProduct.nameAr : quickViewProduct.nameEn}
                width={1000}
                sizes="(max-width: 640px) 100vw, 400px"
                enhanced
              />
            </div>

            <div className="p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-dark">
                  {t('زهور رومانس', 'Romance Flowers')}
                </span>
                <h3 className="mt-1.5 text-xl font-bold text-charcoal font-display">
                  {isAr ? quickViewProduct.nameAr : quickViewProduct.nameEn}
                </h3>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                  {isAr ? quickViewProduct.descAr : quickViewProduct.descEn}
                </p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-2xl font-extrabold text-charcoal">
                    {quickViewProduct.price}
                  </span>
                  <span className="text-sm font-semibold text-gold-dark">{currency}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={buildProductWhatsAppUrl(quickViewProduct, lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-charcoal text-ivory text-sm font-semibold hover:bg-gold-dark transition"
                >
                  <MessageCircle className="w-4 h-4 text-gold-light" />
                  <span>{t('اطلب الآن عبر واتساب', 'Order via WhatsApp')}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    addItem(quickViewProduct);
                    setQuickViewProduct(null);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blush border border-gold/30 text-charcoal text-sm font-semibold hover:bg-gold hover:text-white transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t('أضف إلى السلة', 'Add to Cart')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
