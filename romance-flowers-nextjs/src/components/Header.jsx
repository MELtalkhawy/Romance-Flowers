'use client';

import { useState } from 'react';
import {
  Globe,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { CATEGORIES, STORE_INFO } from '@/data/catalog';
import LuxuryImage from './LuxuryImage';

export default function Header({ searchQuery, onSearchChange }) {
  const { isAr, toggleLanguage, t } = useLanguage();
  const { totalCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const navLinks = [
    ...CATEGORIES.map((cat) => ({
      href: `#${cat.id}`,
      label: isAr ? cat.titleAr : cat.titleEn,
    })),
    {
      href: '#reels',
      label: t('معرض الفيديو', 'Video Reels'),
    },
  ];

  return (
    <header className="sticky top-0 z-40 glass-nav transition-all">
      {/* Subtle Top Luxury Announcement Strip */}
      <div className="bg-charcoal text-ivory text-[11px] sm:text-xs py-1.5 px-4 text-center tracking-wide">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
          {t(
            'توصيل سريع داخل المدينة المنورة • تنسيق يومي بالورد الطبيعي الفاخر منذ 1990',
            'Express Delivery in Al-Madinah • Daily Fresh Luxury Florals Since 1990'
          )}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 sm:h-20 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-gold/40 shadow-sm shrink-0">
              <LuxuryImage
                driveId={STORE_INFO.logoDriveId}
                alt={t(STORE_INFO.brandAr, STORE_INFO.brandEn)}
                width={200}
                sizes="44px"
                priority
                enhanced={false}
              />
            </div>
            <div className="leading-tight">
              <span className="block text-base sm:text-lg font-bold text-charcoal group-hover:text-gold-dark transition-colors font-display">
                {t(STORE_INFO.brandAr, STORE_INFO.brandEn)}
              </span>
              <span className="block text-[10px] sm:text-[11px] text-gold-dark tracking-widest uppercase">
                {t('بوتيك الورد الفاخر', 'Luxury Flower Boutique')}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal/80 hover:text-gold-dark transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Search, Language Toggle, Cart, Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Search */}
            <div className="hidden md:flex items-center relative w-52 lg:w-64">
              <Search
                className={`w-4 h-4 text-charcoal/45 absolute ${
                  isAr ? 'right-3.5' : 'left-3.5'
                } pointer-events-none`}
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t('ابحث عن باقة أو فازة...', 'Search bouquets, vases...')}
                aria-label={t('بحث المنتجات', 'Search products')}
                className={`w-full rounded-full bg-white/85 border border-gold/25 py-2 text-xs sm:text-sm text-charcoal placeholder:text-charcoal/45 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition ${
                  isAr ? 'pr-10 pl-8' : 'pl-10 pr-8'
                }`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  aria-label={t('مسح البحث', 'Clear search')}
                  className={`absolute ${
                    isAr ? 'left-3' : 'right-3'
                  } text-charcoal/45 hover:text-charcoal`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Mobile Search Button */}
            <button
              type="button"
              onClick={() => setMobileSearchOpen((v) => !v)}
              aria-label={t('بحث', 'Search')}
              className="md:hidden p-2 rounded-full border border-gold/25 bg-white/80 text-charcoal hover:border-gold transition"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Instant Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t('Switch to English', 'التبديل إلى العربية')}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-gold/35 bg-white/90 text-xs sm:text-sm font-semibold text-charcoal hover:bg-gold hover:text-white hover:border-gold transition-all shadow-sm"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isAr ? 'EN' : 'عربي'}</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              type="button"
              onClick={openCart}
              aria-label={t('سلة التسوق', 'Shopping cart')}
              className="relative inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-charcoal text-ivory text-xs sm:text-sm font-medium hover:bg-gold-dark transition-all shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">{t('السلة', 'Cart')}</span>
              {totalCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-gold text-charcoal text-[11px] font-bold">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={t('القائمة', 'Menu')}
              className="xl:hidden p-2 rounded-full border border-gold/25 bg-white/80 text-charcoal hover:border-gold transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="md:hidden pb-3">
            <div className="relative">
              <Search
                className={`w-4 h-4 text-charcoal/45 absolute top-1/2 -translate-y-1/2 ${
                  isAr ? 'right-3.5' : 'left-3.5'
                }`}
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={t('ابحث عن باقة، فازة، شوكولاتة...', 'Search bouquets, vases, chocolates...')}
                className={`w-full rounded-full bg-white border border-gold/30 py-2.5 text-sm text-charcoal placeholder:text-charcoal/45 focus:outline-none focus:border-gold ${
                  isAr ? 'pr-10 pl-9' : 'pl-10 pr-9'
                }`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className={`absolute top-1/2 -translate-y-1/2 ${
                    isAr ? 'left-3' : 'right-3'
                  } text-charcoal/50`}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-gold/15 bg-ivory/95 backdrop-blur-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-charcoal hover:bg-blush/60 hover:text-gold-dark transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
