'use client';

import { useState } from 'react';
import {
  MapPin,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { buildCartWhatsAppUrl } from '@/data/catalog';
import LuxuryImage from './LuxuryImage';

export default function CartDrawer() {
  const { lang, isAr, currency, t } = useLanguage();
  const { items, isOpen, closeCart, updateQty, removeItem, clearCart, subtotal } =
    useCart();
  const [deliveryCity, setDeliveryCity] = useState('');

  if (!isOpen) return null;

  const checkoutUrl = buildCartWhatsAppUrl(items, subtotal, lang, deliveryCity);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/55 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      {/* Slide-out Drawer Panel */}
      <aside
        className={`relative z-10 w-full max-w-md bg-ivory h-full shadow-2xl flex flex-col border-gold/20 ${
          isAr ? 'mr-auto border-r' : 'ml-auto border-l'
        }`}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-gold/20 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-gold-dark" />
            <h2 className="text-lg font-bold text-charcoal font-display">
              {t('سلة التسوق', 'Your Shopping Cart')}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label={t('إغلاق السلة', 'Close cart')}
            className="w-9 h-9 rounded-full hover:bg-blush/70 flex items-center justify-center text-charcoal transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-blush/80 text-gold-dark flex items-center justify-center mb-4">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <p className="text-base font-bold text-charcoal">
                {t('سلتك فارغة حالياً', 'Your cart is currently empty')}
              </p>
              <p className="mt-1.5 text-sm text-charcoal/60 max-w-xs">
                {t(
                  'اختر من تشكيلتنا الفاخرة من البوكيهات والفازات والشوكولاتة لإضافتها هنا.',
                  'Explore our luxury hand bouquets, royal vases, and gifts to add them here.'
                )}
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 px-6 py-2.5 rounded-full bg-charcoal text-ivory text-sm font-semibold hover:bg-gold-dark transition"
              >
                {t('تصفح التشكيلة', 'Browse Collections')}
              </button>
            </div>
          ) : (
            items.map((item) => {
              const title = isAr ? item.nameAr : item.nameEn;
              return (
                <div
                  key={item.id}
                  className="flex gap-3.5 p-3 rounded-2xl bg-white border border-gold/15 shadow-sm"
                >
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden shrink-0 luxury-photo-frame">
                    <LuxuryImage
                      driveId={item.driveId}
                      alt={title}
                      width={300}
                      sizes="80px"
                      enhanced
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold text-charcoal leading-snug line-clamp-2">
                        {title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={t('حذف', 'Remove')}
                        className="text-charcoal/40 hover:text-rose-600 transition shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-extrabold text-charcoal">
                        {item.price * item.quantity}{' '}
                        <span className="text-xs font-semibold text-gold-dark">
                          {currency}
                        </span>
                      </span>

                      <div className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-ivory px-2 py-1">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, -1)}
                          aria-label={t('تقليل الكمية', 'Decrease quantity')}
                          className="w-6 h-6 rounded-full hover:bg-blush flex items-center justify-center text-charcoal"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold min-w-[18px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, 1)}
                          aria-label={t('زيادة الكمية', 'Increase quantity')}
                          className="w-6 h-6 rounded-full hover:bg-blush flex items-center justify-center text-charcoal"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Checkout Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gold/20 bg-white space-y-4">
            {/* Delivery City / District Input */}
            <div>
              <label className="block text-xs font-semibold text-charcoal/75 mb-1.5">
                {t('المدينة / الحي للتوصيل (اختياري)', 'Delivery City / District (Optional)')}
              </label>
              <div className="relative">
                <MapPin
                  className={`w-4 h-4 text-gold-dark absolute top-1/2 -translate-y-1/2 ${
                    isAr ? 'right-3.5' : 'left-3.5'
                  }`}
                />
                <input
                  type="text"
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                  placeholder={t(
                    'مثال: المدينة المنورة - حي العوالي',
                    'e.g., Al-Madinah - Al-Awali District'
                  )}
                  className={`w-full rounded-xl bg-ivory border border-gold/30 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-gold ${
                    isAr ? 'pr-10 pl-3' : 'pl-10 pr-3'
                  }`}
                />
              </div>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold text-charcoal/75">
                {t('الإجمالي', 'Subtotal')}
              </span>
              <span className="text-xl font-extrabold text-charcoal">
                {subtotal}{' '}
                <span className="text-sm font-bold text-gold-dark">{currency}</span>
              </span>
            </div>

            {/* Complete Order via WhatsApp */}
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-charcoal text-ivory text-sm font-bold hover:bg-gold-dark transition shadow-gold-glow"
            >
              <MessageCircle className="w-4 h-4 text-gold-light" />
              <span>{t('إتمام الطلب عبر واتساب', 'Complete Order via WhatsApp')}</span>
            </a>

            <button
              type="button"
              onClick={clearCart}
              className="w-full text-center text-xs font-semibold text-charcoal/50 hover:text-rose-600 transition"
            >
              {t('إفراغ السلة', 'Clear Cart')}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
