'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductSections from '@/components/ProductSections';
import VideoGallery from '@/components/VideoGallery';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="flex-1">
        <HeroSection />
        <ProductSections
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
        />
        <VideoGallery />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
    </div>
  );
}
