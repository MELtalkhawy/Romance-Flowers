export const STORE_INFO = {
  brandAr: 'زهور رومانس',
  brandEn: 'Romance Flowers',
  established: '1990',
  whatsappNumber: '966541403095',
  phoneDisplay: '054 140 3095',
  addressAr: '8625 طريق الملك عبدالله الفرعي، المدينة المنورة، المملكة العربية السعودية',
  addressEn: '8625 King Abdullah Branch Rd, Al-Madinah Al-Munawwarah, Saudi Arabia',
  hoursAr: 'يومياً من 4:00 مساءً حتى 12:00 منتصف الليل',
  hoursEn: 'Daily 4:00 PM – 12:00 AM',
  mapsUrl: 'https://maps.google.com/maps/?cid=0x15bdbee9cb8b634d:0x97a2a15c67f766d1',
  driveFolderUrl: 'https://drive.google.com/drive/folders/1dAUyWo8f-91wxA1UnSlzoePlZWA8DzDO?usp=sharing',
  rating: '4.57',
  reviewsCount: 184,
  logoDriveId: '1biz-WC8vlcFeYR3um35KEKEoVXTtzv2q',
};

export const driveImageUrl = (id, width = 1200) =>
  `https://lh3.googleusercontent.com/d/${id}=w${width}`;

export const driveFallbackImageUrl = (id, width = 1200) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;

export const driveVideoUrl = (id) =>
  `https://drive.usercontent.google.com/download?id=${id}&export=download`;

export const driveVideoPreviewUrl = (id) =>
  `https://drive.google.com/file/d/${id}/preview`;

export const driveVideoPosterUrl = (id, width = 800) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;

export const HERO_MEDIA = {
  videoId: '1_-tlweoX_zNjw9kNj1qzlOq7prAFj-Cb',
  posterImageId: '10KGCUWGSBs4xsXgbsdepu18NthFhPxgN',
};

export const CATEGORIES = [
  {
    id: 'bouquets',
    titleAr: 'بوكيهات الورد الفاخرة',
    titleEn: 'Luxury Hand Bouquets',
    subtitleAr: 'تنسيقات يدوية منتقاة من أجود الورود الطبيعية وتغليف فاخر يليق بمناسباتكم',
    subtitleEn: 'Hand-tied arrangements crafted from premium fresh blooms with signature luxury wrapping',
  },
  {
    id: 'vases',
    titleAr: 'فازات وتنسيقات ملكية',
    titleEn: 'Royal Vases & Arrangements',
    subtitleAr: 'فازات زجاجية وخزفية فاخرة للمجالس والقصور والهدايا الرسمية الراقية',
    subtitleEn: 'Statement glass and ceramic floral centerpieces curated for grand spaces and VIP gifting',
  },
  {
    id: 'chocolates',
    titleAr: 'ورد وشوكولاتة فاخرة',
    titleEn: 'Flowers & Luxury Chocolates',
    subtitleAr: 'توليفة استثنائية تجمع عبير الورد الطبيعي مع أفخر أنواع الشوكولاتة والهدايا',
    subtitleEn: 'Exquisite pairings blending fresh natural blooms with artisanal chocolates and curated gifts',
  },
  {
    id: 'bridal',
    titleAr: 'مسكات عرايس ومناسبات',
    titleEn: 'Bridal Bouquets & Occasions',
    subtitleAr: 'مسكات عرايس ملكية وتنسيقات حفلات الزفاف والملكه والتخرج بأعلى درجات الإتقان',
    subtitleEn: 'Bespoke bridal bouquets, wedding florals, and milestone celebration arrangements',
  },
];

export const PRODUCTS = [
  // =========================================================================
  // 1. بوكيهات الورد الفاخرة / Luxury Hand Bouquets (10 items)
  // =========================================================================
  {
    id: 'rf-bq-01',
    category: 'bouquets',
    driveId: '1nyM7gceVo2QfOzUTDcpzw30gHZ7GeqB_',
    nameAr: 'باقة المخمل القرمزي الملكي',
    nameEn: 'Royal Crimson Velvet Bouquet',
    descAr: 'جوري أحمر هولندي فاخر بتغليف حريري أنيق وشريط مخملي مطبوع بشعار رومانس.',
    descEn: 'Premium Dutch red roses hand-tied in silk wrap with our signature velvet ribbon.',
    price: 265,
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Bestseller',
  },
  {
    id: 'rf-bq-02',
    category: 'bouquets',
    driveId: '1vaI5JcnQb4zeenIardgFbfYRGP9SnocO',
    nameAr: 'باقة همس الورد الوردي',
    nameEn: 'Blush Whisper Rose Bouquet',
    descAr: 'تناغم ناعم من الجوري الوردي الفاتح والأبيض مع أوراق الأوكالبتوس العطرية.',
    descEn: 'Soft pastel blush and ivory roses accented with fragrant eucalyptus foliage.',
    price: 240,
    badgeAr: 'جديد',
    badgeEn: 'New',
  },
  {
    id: 'rf-bq-03',
    category: 'bouquets',
    driveId: '1NSOpnUmPKCGQ-CVLNtiuOI1oC9lopfnE',
    nameAr: 'باقة نقاء المدينة البيضاء',
    nameEn: 'Pure Madinah White Bouquet',
    descAr: 'ورود بيضاء ناصعة ترمز للصفاء والفخامة، مثالية للتهاني والمناسبات الراقية.',
    descEn: 'Crisp snow-white blooms embodying timeless grace for refined congratulations.',
    price: 255,
  },
  {
    id: 'rf-bq-04',
    category: 'bouquets',
    driveId: '13GpS4dd6Pj5yEbj_Iqp0RqH2h347jd_Z',
    nameAr: 'باقة سحر الغروب المذهّب',
    nameEn: 'Golden Sunset Hand Bouquet',
    descAr: 'تدرجات دافئة من الورود الخوخية والكريمية بتغليف فاخر بلمسات ذهبية.',
    descEn: 'Warm peach and cream roses presented in signature gold-trimmed luxury wrap.',
    price: 280,
    badgeAr: 'إصدار خاص',
    badgeEn: 'Signature',
  },
  {
    id: 'rf-bq-05',
    category: 'bouquets',
    driveId: '1Z6zvSbIei1-WqFrWHDW2hw9WYg1TdE0h',
    nameAr: 'باقة رومانس الكلاسيكية',
    nameEn: 'Classic Romance Bouquet',
    descAr: 'تصميم رومانس الأيقوني منذ ١٩٩٠ بباقة ممتلئة من الورد الطبيعي المختار بعناية.',
    descEn: 'Our iconic 1990 signature bouquet generously filled with hand-selected fresh roses.',
    price: 295,
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Bestseller',
  },
  {
    id: 'rf-bq-06',
    category: 'bouquets',
    driveId: '1ba6kWiMeUyqJmKqWEYwgGX9AjUL7BG6X',
    nameAr: 'باقة ليلاك الأميرات',
    nameEn: 'Princess Lilac Bouquet',
    descAr: 'ورود بنفسجية ناعمة ولمسات بيبي روز تمنح هدية استثنائية ومميزة.',
    descEn: 'Delicate lavender blooms and spray roses curated for an unforgettable impression.',
    price: 270,
  },
  {
    id: 'rf-bq-07',
    category: 'bouquets',
    driveId: '1tFee94O40FvgD0O6a5bOdS2vPA0DXIkT',
    nameAr: 'باقة فخامة الجوري المخملي',
    nameEn: 'Velvet Grandeur Bouquet',
    descAr: 'باقة كبيرة من الجوري الطبيعي المتفتح بتغليف أسود مطفي وشريط ذهبي.',
    descEn: 'Generous hand-tied velvet roses wrapped in matte charcoal with gold accents.',
    price: 340,
  },
  {
    id: 'rf-bq-08',
    category: 'bouquets',
    driveId: '1CeXC1mg0KoXrDvrW_BN76tiTdb_eTKLd',
    nameAr: 'باقة نسيم الربيع الفاخرة',
    nameEn: 'Luxury Spring Breeze Bouquet',
    descAr: 'مزيج مبهج من الورود الموسمية والألوان الهادئة لإدخال البهجة في كل يوم.',
    descEn: 'Cheerful seasonal flowers in soft neutral tones crafted to brighten any day.',
    price: 230,
  },
  {
    id: 'rf-bq-09',
    category: 'bouquets',
    driveId: '1os6QNStpUpC_DEjLjTl1FOUczfZ9H9rW',
    nameAr: 'باقة أميرة الورد الوردية',
    nameEn: 'Rose Princess Bouquet',
    descAr: 'تدرجات الوردي الملكي بتغليف مزدوج فخم مناسب لأعياد الميلاد والتهاني.',
    descEn: 'Layered royal pink roses in double-layered luxury wrap for birthdays and milestones.',
    price: 310,
  },
  {
    id: 'rf-bq-10',
    category: 'bouquets',
    driveId: '1ZjadgeuPW9zstedwynAIWcp6_GELOrx4',
    nameAr: 'باقة إشراقة الياسمين والورد',
    nameEn: 'Jasmine & Rose Radiance',
    descAr: 'باقة ناعمة بلمسات طبيعية رقيقة وتنسيق متوازن يعكس الذوق الرفيع.',
    descEn: 'Soft botanical arrangement with balanced natural textures and refined elegance.',
    price: 245,
  },

  // =========================================================================
  // 2. فازات وتنسيقات ملكية / Royal Vases & Arrangements (10 items)
  // =========================================================================
  {
    id: 'rf-vs-01',
    category: 'vases',
    driveId: '1IMs64w879dwL8zg4KwNw-CAkf6DXEIZA',
    nameAr: 'فازة القصر الملكي الفاخرة',
    nameEn: 'Royal Palace Floral Vase',
    descAr: 'تنسيق فاخر من الهيدرانجيا والجوري الطبيعي داخل فازة زجاجية كريستالية أنيقة.',
    descEn: 'Opulent hydrangeas and fresh roses styled in a crystal-clear statement glass vase.',
    price: 480,
    badgeAr: 'تصميم ملكي',
    badgeEn: 'Royal Edition',
  },
  {
    id: 'rf-vs-02',
    category: 'vases',
    driveId: '10_MM4lfR0WhRELrZfv5kIjE-DJmefhqd',
    nameAr: 'فازة نقاء اللؤلؤ الأبيض',
    nameEn: 'White Pearl Ceramic Vase',
    descAr: 'ورود بيضاء وأوراق خضراء فاخرة في فازة سيراميك عصرية للمجالس والمكاتب.',
    descEn: 'Pure white florals and lush greenery arranged in a modern matte ceramic vessel.',
    price: 420,
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Bestseller',
  },
  {
    id: 'rf-vs-03',
    category: 'vases',
    driveId: '1UJdp6yM8uaBwIlIlXaFsTiIOkCUdw20T',
    nameAr: 'تنسيق الديوان الملكي الكبير',
    nameEn: 'Grand Diwan Centerpiece',
    descAr: 'تنسيق طاولة استقبالي فخم بارتفاع متدرج يجمع أرقى أنواع الورد المستورد.',
    descEn: 'Tiered reception centerpiece combining imported premium blooms for grand gatherings.',
    price: 650,
    badgeAr: 'VIP',
    badgeEn: 'VIP',
  },
  {
    id: 'rf-vs-04',
    category: 'vases',
    driveId: '1z7Vw8mJGcWd39Ornh69C2r5Hz6Uazno0',
    nameAr: 'فازة الذهب والبلش الوردي',
    nameEn: 'Gold & Blush Couture Vase',
    descAr: 'تدرجات الوردي المخملي والكريمي داخل فازة فاخرة بلمسة ذهبية راقية.',
    descEn: 'Velvet blush and cream petals styled in an accent vase with muted gold detailing.',
    price: 460,
  },
  {
    id: 'rf-vs-05',
    category: 'vases',
    driveId: '15o-Y6lwK5ad5kX0Gj9dAhqYamoL7uPvb',
    nameAr: 'فازة الأوركيد والورد الطبيعي',
    nameEn: 'Orchid & Rose Prestige Vase',
    descAr: 'تنسيق استثنائي يجمع فخامة الأوركيد مع نعومة الجوري لتزيين الصالات.',
    descEn: 'Prestigious pairing of cascading orchids and soft roses for upscale interiors.',
    price: 540,
  },
  {
    id: 'rf-vs-06',
    category: 'vases',
    driveId: '1swmLOVxFvPc3IFIm8LMEjmwvU6XbWI_7',
    nameAr: 'فازة سيدة الأناقة الكريستالية',
    nameEn: 'Crystal Elegance Arrangement',
    descAr: 'تصميم دائري متكامل بالورود الطبيعية المنتقاة بعناية فائقة.',
    descEn: '360-degree dome arrangement filled with meticulously selected fresh blooms.',
    price: 490,
  },
  {
    id: 'rf-vs-07',
    category: 'vases',
    driveId: '1w6Sx6h7JcVQB0rCYdqUuJ1RJJND01rBA',
    nameAr: 'تنسيق الاستقبال الفاخر',
    nameEn: 'Grand Reception Floral Stand',
    descAr: 'تنسيق فخم للتهنئة بالمنزل الجديد، الافتتاحات الرسمية، والمناسبات الخاصة.',
    descEn: 'Lavish floral arrangement tailored for housewarmings, grand openings, and honors.',
    price: 590,
    badgeAr: 'تصميم ملكي',
    badgeEn: 'Royal Edition',
  },
  {
    id: 'rf-vs-08',
    category: 'vases',
    driveId: '19fy9iKYfTbnLFMT8KTFWDxk3XKcEeg_z',
    nameAr: 'فازة الياقوت الأحمر الملكية',
    nameEn: 'Ruby Red Royal Vase',
    descAr: 'جوري أحمر فاخر مرتب بأسلوب عصري داخل فازة زجاجية فخمة.',
    descEn: 'Rich crimson roses arranged in a contemporary architectural glass vase.',
    price: 445,
  },
  {
    id: 'rf-vs-09',
    category: 'vases',
    driveId: '1VDxMG4knbKTJvBfAG3OLILb--Du2ukGG',
    nameAr: 'فازة هدوء الصباح الوردية',
    nameEn: 'Morning Serenity Vase',
    descAr: 'ألوان هادئة تبعث السكينة والجمال في غرف المعيشة ومكاتب كبار الشخصيات.',
    descEn: 'Tranquil neutral and blush tones crafted for living suites and executive offices.',
    price: 395,
  },
  {
    id: 'rf-vs-10',
    category: 'vases',
    driveId: '1SS9JIjQeEVujC9DUmg0-QZBYHrWQlfL7',
    nameAr: 'تنسيق تاج رومانس الفاخر',
    nameEn: 'Romance Crown Arrangement',
    descAr: 'تحفة زهرية متكاملة بلمسة فنية عالية لهدايا الزيارات الرسمية والمناسبات.',
    descEn: 'Artisanal floral centerpiece designed for formal visits and prestigious gifting.',
    price: 520,
  },

  // =========================================================================
  // 3. ورد وشوكولاتة فاخرة / Flowers & Luxury Chocolates (10 items)
  // =========================================================================
  {
    id: 'rf-ch-01',
    category: 'chocolates',
    driveId: '1ZAaSjHpH9TTvN7ZXDw6RiSWifpALk1yh',
    nameAr: 'صندوق رومانس للورد والشوكولاتة البلجيكية',
    nameEn: 'Romance Belgian Chocolate & Rose Box',
    descAr: 'صندوق فاخر يجمع ورد الجوري الطبيعي مع تشكيلة منتقاة من الشوكولاتة البلجيكية.',
    descEn: 'Signature gift box pairing fresh garden roses with assorted Belgian pralines.',
    price: 385,
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Bestseller',
  },
  {
    id: 'rf-ch-02',
    category: 'chocolates',
    driveId: '15cOXulzhPmUiHQZebb_9kMG7xUWNvG7i',
    nameAr: 'صينية الضيافة الملكية بالورد والحلويات',
    nameEn: 'Royal Hospitality Floral & Sweet Tray',
    descAr: 'صينية إهداء فخمة مزينة بالورد الطبيعي مع أفخر حبات الشوكولاتة المغلفة.',
    descEn: 'Luxury presentation tray adorned with fresh blooms and wrapped gourmet chocolates.',
    price: 495,
    badgeAr: 'هدايا فاخرة',
    badgeEn: 'Luxury Gift',
  },
  {
    id: 'rf-ch-03',
    category: 'chocolates',
    driveId: '1N28UD3hzGLgODXOKA4Ya7E1uA3peU2FQ',
    nameAr: 'بوكس السعادة المخملي والشوكولاتة',
    nameEn: 'Velvet Joy Rose & Chocolate Box',
    descAr: 'بوكس أكريليك شفاف يكشف جمال الورد الطبيعي إلى جانب علبة شوكولاتة فاخرة.',
    descEn: 'Crystal-clear acrylic gift box uniting fresh roses with fine luxury chocolates.',
    price: 360,
  },
  {
    id: 'rf-ch-04',
    category: 'chocolates',
    driveId: '1pDtMhmYfDpV0VQY_sUvWYw76eP3dkcZd',
    nameAr: 'طقم الهدية الذهبية مع الورد',
    nameEn: 'Golden Gift & Floral Ensemble',
    descAr: 'هدية متكاملة مع بطاقة إهداء مخصصة وتنسيق ورد طبيعي فاخر.',
    descEn: 'Complete gifting ensemble with personalized message card and lush fresh florals.',
    price: 410,
  },
  {
    id: 'rf-ch-05',
    category: 'chocolates',
    driveId: '1AYyAKgfHSBNi2-7ldnDahjCyDY_k-_U0',
    nameAr: 'سلة الهدايا والورد الملكية',
    nameEn: 'Royal Floral & Chocolate Hamper',
    descAr: 'سلة إهداء فاخرة تجمع الورد الطبيعي والشوكولاتة الفاخرة لأعياد الميلاد والمواليد.',
    descEn: 'Generous luxury hamper filled with fresh flowers and artisan chocolates for celebrations.',
    price: 530,
    badgeAr: 'جديد',
    badgeEn: 'New',
  },
  {
    id: 'rf-ch-06',
    category: 'chocolates',
    driveId: '1fUIxXHIDpVDs8_x6TDJxTdWVXJ7eSg0J',
    nameAr: 'بوكس الورد الوردي والترافل الفاخر',
    nameEn: 'Blush Rose & Truffle Gift Box',
    descAr: 'تنسيق أنيق باللون الوردي مع شوكولاتة الترافل الفاخرة بلمسة رومانس الخاصة.',
    descEn: 'Elegant blush-toned floral arrangement paired with rich gourmet chocolate truffles.',
    price: 375,
  },
  {
    id: 'rf-ch-07',
    category: 'chocolates',
    driveId: '1ryF1RO1JlNhOH7FYCbkX2pRC_VSd4pZn',
    nameAr: 'حقيبة الورد والشوكولاتة العصرية',
    nameEn: 'Chic Floral & Chocolate Gift Bag',
    descAr: 'تصميم عصري فاخر سهل الحمل والإهداء للزيارات السريعة والتهاني.',
    descEn: 'Chic boutique gift carrier combining fresh roses and fine sweets for effortless gifting.',
    price: 320,
  },
  {
    id: 'rf-ch-08',
    category: 'chocolates',
    driveId: '1Pnh5l6iQbyH4NMiN1db0WO8mQW0JT8B2',
    nameAr: 'صندوق الفخامة الكلاسيكي',
    nameEn: 'Classic Opulence Chocolate Box',
    descAr: 'صندوق إهداء مزدوج الطبقات يحتوي على ورود طبيعية منتقاة وشوكولاتة فاخرة.',
    descEn: 'Two-tier luxury keepsake box showcasing fresh blooms and handcrafted chocolates.',
    price: 440,
  },
  {
    id: 'rf-ch-09',
    category: 'chocolates',
    driveId: '1fYQ70ul7VqAieJRX72-YX0F51z8KL2lN',
    nameAr: 'هدية التهنئة الملكية',
    nameEn: 'Royal Congratulatory Gift Set',
    descAr: 'تنسيق احتفالي راقي للمناسبات السعيدة والترقيات والنجاح.',
    descEn: 'Refined celebratory arrangement crafted for promotions, graduations, and joyous news.',
    price: 465,
  },
  {
    id: 'rf-ch-10',
    category: 'chocolates',
    driveId: '1QMq7gL0jtpjegTRpYP9lNZH-xsLA0mTP',
    nameAr: 'بوكس عبير المساء والشوكولاتة',
    nameEn: 'Evening Scent & Chocolate Box',
    descAr: 'مزيج دافئ من الورد الطبيعي والشوكولاتة المختارة في علبة فاخرة مبطنة.',
    descEn: 'Warm blend of natural blooms and curated chocolates in a velvet-lined luxury box.',
    price: 390,
  },

  // =========================================================================
  // 4. مسكات عرايس ومناسبات / Bridal Bouquets & Occasions (10 items)
  // =========================================================================
  {
    id: 'rf-br-01',
    category: 'bridal',
    driveId: '1Kv4ruLyJg8hZ80fiwBoXx5BXmTCvODYq',
    nameAr: 'مسكة العروس الملكية البيضاء',
    nameEn: 'Royal White Bridal Bouquet',
    descAr: 'مسكة عروس ناصعة البياض من الجوري والبيوني مع شريط ساتان حريري ولؤلؤ ناعم.',
    descEn: 'Pure white bridal bouquet of garden roses finished with silk satin ribbon and pearls.',
    price: 550,
    badgeAr: 'مسكة عروس',
    badgeEn: 'Bridal',
  },
  {
    id: 'rf-br-02',
    category: 'bridal',
    driveId: '1u5fKhE5IpTUp27tEqjwwdgpeZBiwhMjg',
    nameAr: 'مسكة الأوركيد المنسدلة للعروس',
    nameEn: 'Cascading Orchid Bridal Bouquet',
    descAr: 'تصميم منسدل ملكي من زهور الأوركيد البيضاء يمنح العروس إطلالة ساحرة.',
    descEn: 'Graceful cascading white orchid bouquet tailored for an unforgettable bridal entrance.',
    price: 680,
    badgeAr: 'تصميم ملكي',
    badgeEn: 'Royal Edition',
  },
  {
    id: 'rf-br-03',
    category: 'bridal',
    driveId: '1K6RjXCSoamH8DF-Xwf1y8bZroyNBczve',
    nameAr: 'مسكة ليلة العمر الوردي الناعم',
    nameEn: 'Soft Blush Wedding Bouquet',
    descAr: 'تدرجات الوردي اللؤلؤي والأبيض الكريمي مثالية لحفلات الملكه والزفاف.',
    descEn: 'Pearly blush and ivory blooms crafted for engagement ceremonies and wedding nights.',
    price: 520,
  },
  {
    id: 'rf-br-04',
    category: 'bridal',
    driveId: '128HDDgly2wbcX4AN3aDH3etXpHscg0UK',
    nameAr: 'تنسيق لوحة الترحيب للمناسبات والزفاف',
    nameEn: 'Luxury Wedding Welcome Floral Stand',
    descAr: 'تنسيق ورد طبيعي فاخر يزين مداخل القاعات وحفلات الملكه والخطوبة.',
    descEn: 'Bespoke natural floral styling for wedding entrances, engagements, and receptions.',
    price: 750,
    badgeAr: 'حفلات ومناسبات',
    badgeEn: 'Events',
  },
  {
    id: 'rf-br-05',
    category: 'bridal',
    driveId: '1baRyNAUSp2d7fbRodFiJcVnXTrqDANgh',
    nameAr: 'مسكة التخرج والفخر الملكية',
    nameEn: 'Royal Graduation Celebration Bouquet',
    descAr: 'باقة احتفالية فخمة لخريجي وخريجات الجامعات بألوان راقية وتغليف فاخر.',
    descEn: 'Festive graduation bouquet in refined tones with luxury keepsake wrapping.',
    price: 310,
  },
  {
    id: 'rf-br-06',
    category: 'bridal',
    driveId: '1udyetjlhHnruw9TYloJnHOY6nef6nNh6',
    nameAr: 'مسكة عروس كلاسيكية بالبيبي روز',
    nameEn: 'Classic Spray Rose Bridal Bouquet',
    descAr: 'مسكة ناعمة مدمجة من البيبي روز الطبيعي بتفاصيل دقيقة وتنسيق متقن.',
    descEn: 'Intimate hand-tied spray rose bridal bouquet crafted with delicate couture detail.',
    price: 490,
  },
  {
    id: 'rf-br-07',
    category: 'bridal',
    driveId: '1-LqZxkK4dcyYgimrcQVnl0FQYFdzSdl3',
    nameAr: 'تنسيق طاولة الملكه الفاخر',
    nameEn: 'Luxury Engagement Table Arrangement',
    descAr: 'تنسيق متكامل لطاولات الملكه والشبكة بالورود الطبيعية واللمسات الذهبية.',
    descEn: 'Full natural floral centerpiece designed for Milkah and engagement tables.',
    price: 620,
  },
  {
    id: 'rf-br-08',
    category: 'bridal',
    driveId: '1ILkIpwI6zBzXvfgvAO9U_SPeW6EkCE9a',
    nameAr: 'مسكة عروس الياسمين واللؤلؤ',
    nameEn: 'Jasmine & Pearl Bridal Bouquet',
    descAr: 'تصميم رومانسي حالم يجمع نقاء الأبيض مع لمسة خضراء ناعمة.',
    descEn: 'Dreamy romantic bridal bouquet blending crisp white petals with soft foliage.',
    price: 560,
  },
  {
    id: 'rf-br-09',
    category: 'bridal',
    driveId: '1K7oExxBbag_qdy5ovaitBv9EusnpnVQh',
    nameAr: 'تنسيق استقبال المواليد الفاخر',
    nameEn: 'Luxury Newborn Welcome Floral Setup',
    descAr: 'تنسيق ورد طبيعي راقي لاستقبال المواليد في المستشفيات والمنازل.',
    descEn: 'Delicate natural floral arrangement tailored for newborn hospital and home welcomes.',
    price: 580,
    badgeAr: 'مواليد ومناسبات',
    badgeEn: 'Celebrations',
  },
  {
    id: 'rf-br-10',
    category: 'bridal',
    driveId: '1DfvK-e6Ve6UgaDjioDhYe9vT4f4CXH9z',
    nameAr: 'باقة مناسبات كبار الشخصيات',
    nameEn: 'VIP Occasion Grand Bouquet',
    descAr: 'تنسيق فاخر ضخم للمناسبات الكبرى والاحتفالات العائلية الرسمية.',
    descEn: 'Grand sculptural arrangement created for prestigious family and formal occasions.',
    price: 720,
  },
];

// All 8 real MP4 videos from the Google Drive folder
export const VIDEO_REELS = [
  {
    id: 'reel-01',
    driveId: '1_-tlweoX_zNjw9kNj1qzlOq7prAFj-Cb',
    titleAr: 'تنسيق بوكيهات فاخرة من قلب البوتيك',
    titleEn: 'Luxury Hand Bouquet Craftsmanship',
    tagAr: 'بوكيهات الورد',
    tagEn: 'Hand Bouquets',
    posterFallbackId: '10KGCUWGSBs4xsXgbsdepu18NthFhPxgN',
  },
  {
    id: 'reel-02',
    driveId: '1-8ac3xcXbtHrXB-ZdwPgv4xp0S6sBkH8',
    titleAr: 'فخامة الفازات والتنسيقات الملكية',
    titleEn: 'Royal Vases & Centerpieces',
    tagAr: 'فازات ملكية',
    tagEn: 'Royal Vases',
    posterFallbackId: '1hb5wa5lQaoOjh-Doif5yB7JyVmbxkoAf',
  },
  {
    id: 'reel-03',
    driveId: '1sDnwEzE-LbM3Apx3Q14DVfX9fXgRzNHx',
    titleAr: 'تجهيز هدايا الورد والشوكولاتة',
    titleEn: 'Flowers & Chocolate Gift Styling',
    tagAr: 'هدايا وشوكولاتة',
    tagEn: 'Chocolates',
    posterFallbackId: '10CUoVbwgqM4a_1VpTPS-g6aVTVJWg7Bv',
  },
  {
    id: 'reel-04',
    driveId: '1Overr7fY3LwSrGbazW9kCI0QTX3qBO28',
    titleAr: 'كواليس تنسيق مسكات العرايس',
    titleEn: 'Bridal Bouquet Behind the Scenes',
    tagAr: 'مسكات عرايس',
    tagEn: 'Bridal',
    posterFallbackId: '1AtXNW1ZHs82wi0Wa4tWGdwJ6-521zjcn',
  },
  {
    id: 'reel-05',
    driveId: '1h8INmJ-eremDbWsjxUHSqYKYWgUF3XLi',
    titleAr: 'تفاصيل الورد الطبيعي اليومي',
    titleEn: 'Daily Fresh Natural Blooms',
    tagAr: 'ورد طبيعي',
    tagEn: 'Fresh Blooms',
    posterFallbackId: '1dD5d9kRaWsWJ9PtT6McqeKho0Fy9Z-K_',
  },
  {
    id: 'reel-06',
    driveId: '1uviFrq0QUsN8--NuI6EOsI-Ih7XpLG2m',
    titleAr: 'تنسيقات حفلات الزفاف والمناسبات',
    titleEn: 'Wedding & Event Floral Designs',
    tagAr: 'مناسبات',
    tagEn: 'Occasions',
    posterFallbackId: '1Hm6lryM0MCmwZOp2YQq4N6204m8StPb_',
  },
  {
    id: 'reel-07',
    driveId: '1_Sa6XxX0wAO8v4ZN5Mt6gGJ2twNPVOgt',
    titleAr: 'جولة داخل بوتيك زهور رومانس',
    titleEn: 'Inside Romance Flowers Boutique',
    tagAr: 'جولة البوتيك',
    tagEn: 'Boutique Tour',
    posterFallbackId: '1pcxii9BI_bVlTUXX3ZkcaxCTZq2hWSis',
  },
  {
    id: 'reel-08',
    driveId: '1aAhlejKd9PJU2mqOVUzj7Yy-SZLjg0AF',
    titleAr: 'تغليف ملكي جاهز للتوصيل السريع',
    titleEn: 'Royal Wrapping Ready for Delivery',
    tagAr: 'توصيل فوري',
    tagEn: 'Express Delivery',
    posterFallbackId: '1WAj3M8g4tSRVuo6Miuj5S4Exz0hOlGG1',
  },
];

export const buildProductWhatsAppUrl = (product, lang) => {
  const isAr = lang === 'ar';
  const name = isAr ? product.nameAr : product.nameEn;
  const message = isAr
    ? `السلام عليكم زهور رومانس 🌹\nأرغب في طلب:\n• المنتج: ${name}\n• السعر: ${product.price} ر.س\n• المدينة / الحي للتوصيل: `
    : `Hello Romance Flowers 🌹\nI would like to order:\n• Product: ${name}\n• Price: ${product.price} SAR\n• Delivery City / District: `;

  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const buildCartWhatsAppUrl = (items, subtotal, lang, deliveryCity = '') => {
  const isAr = lang === 'ar';
  const lines = items.map((item, idx) => {
    const name = isAr ? item.nameAr : item.nameEn;
    return isAr
      ? `${idx + 1}. ${name} × ${item.quantity} (${item.price * item.quantity} ر.س)`
      : `${idx + 1}. ${name} × ${item.quantity} (${item.price * item.quantity} SAR)`;
  });

  const message = isAr
    ? `السلام عليكم زهور رومانس 🌹\nأرغب في تأكيد طلبي من المتجر:\n\n${lines.join('\n')}\n\nالإجمالي: ${subtotal} ر.س\nالمدينة / الحي للتوصيل: ${deliveryCity || '______'}`
    : `Hello Romance Flowers 🌹\nI would like to place the following order:\n\n${lines.join('\n')}\n\nTotal: ${subtotal} SAR\nDelivery City / District: ${deliveryCity || '______'}`;

  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const buildReelWhatsAppUrl = (reel, lang) => {
  const isAr = lang === 'ar';
  const title = isAr ? reel.titleAr : reel.titleEn;
  const message = isAr
    ? `السلام عليكم زهور رومانس 🌹\nأعجبني هذا التنسيق في معرض الفيديو: "${title}" وأرغب في طلب تنسيق مشابه.\nالمدينة / الحي للتوصيل: `
    : `Hello Romance Flowers 🌹\nI loved this arrangement in your video gallery: "${title}" and would like to order something similar.\nDelivery City / District: `;

  return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
