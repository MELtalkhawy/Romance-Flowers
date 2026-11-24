import { Cairo, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { CartProvider } from '@/context/CartContext';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-cairo',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'زهور رومانس | Romance Flowers — أرقى تنسيقات الورد الطبيعي والهدايا الفاخرة',
  description:
    'بوتيك زهور رومانس في المدينة المنورة منذ 1990 — بوكيهات ورد فاخرة، فازات ملكية، ورد وشوكولاتة فاخرة، ومسكات عرايس مع توصيل سريع وطلب فوري عبر واتساب.',
  keywords: [
    'زهور رومانس',
    'Romance Flowers',
    'محل ورد المدينة المنورة',
    'بوكيهات ورد فاخرة',
    'فازات ملكية',
    'مسكات عرايس',
    'ورد وشوكولاتة',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${playfair.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-ivory text-charcoal antialiased selection:bg-blush selection:text-charcoal">
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
