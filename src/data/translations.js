export const translations = {
  en: {
    nav: {
      brand: "Kine Geez",
      geezSubtitle: "ኪነ ግዕዝ",
      features: "Features",
      catalog: "Catalog",
      readerDemo: "Protected Reader",
      security: "Copyright & Security",
      howItWorks: "How It Works",
      payments: "Payments",
      faq: "FAQ",
      waitlistBtn: "Get Early Access",
      langSwitch: "አማርኛ",
    },
    hero: {
      badge: "Digital Library · Historical Books & Ge'ez Literature",
      title: "Ethiopian Literature, Preserved and Made Available to Read.",
      subtitle:
        "Authorized digital editions of historical books, Ge'ez manuscripts, and religious texts. Protected against unauthorized copying, accessible on web and mobile with Telebirr and Stripe checkout.",
      browseBtn: "Explore the Catalog",
      demoBtn: "Try Reader Demo",
      joinWaitlist: "Join Early Access",
      trustPillars: [
        "Verified Rights & Authorized Editions",
        "Dynamic Watermarked Protection",
        "Telebirr & Stripe Integration",
      ],
      bookCaption: "Featured Work: Mahder Weledo (ማኅደረ ወለዶ)",
    },
    features: {
      tag: "Platform Pillars",
      title: "Built to Respect Manuscripts and Their Authors",
      subtitle:
        "Digital distribution without compromising copyright. Kine Geez pairs rigorous intellectual property protection with a delightful reading experience.",
      items: [
        {
          id: "01",
          title: "Authorized Editions Only",
          desc: "Every title undergoes verified legal rights review prior to catalog publication. We respect modern translations, annotations, and original rights holders.",
        },
        {
          id: "02",
          title: "Protected Reading Engine",
          desc: "Books open exclusively in our encrypted reader with dynamic, personalized watermarking per session. Master files are never exposed.",
        },
        {
          id: "03",
          title: "Authoritative Verified Payments",
          desc: "Pay securely with Telebirr (ETB) or Stripe (Cards/Diaspora). Access is granted only after server-side cryptographic transaction confirmation.",
        },
        {
          id: "04",
          title: "Rigorous Editorial Workflow",
          desc: "Separation of duties: manuscript upload quarantine, editorial metadata curation, and formal publisher sign-off with permanent audit trails.",
        },
      ],
    },
    readerDemo: {
      tag: "Interactive Technology Demo",
      title: "Experience the Protected Web Reader",
      subtitle:
        "Try our simulated reader interface below. Notice the dynamic personalized watermark, Ethiopic typography controls, and copy protection designed to discourage unauthorized duplication.",
      sampleTitle: "Excerpt: Mahder Weledo · ምዕራፍ ፩ (Chapter 1)",
      fontSize: "Font Size",
      fontType: "Typography",
      serif: "Ethiopic Serif",
      sans: "Ethiopic Sans",
      watermarkNotice: "Dynamic Session Watermark",
      watermarkText: "Licensed to reader@kinegeez.com · Session #KG-2026-X89 · Do Not Distribute",
      antiCopyNotice: "Text selection & right-click export are restricted by the reader engine.",
      prevPage: "Previous",
      nextPage: "Next",
      pageOf: "Page 1 of 14",
    },
    catalog: {
      tag: "Curated Collection",
      title: "Featured Works & Manuscripts",
      subtitle:
        "Explore historical chronicles, classical Ge'ez liturgical works, and rare Ethiopian literary treasures. Each edition displays its verified copyright status, language, and format.",
      filterAll: "All Works",
      filterHistorical: "Historical Chronicles",
      filterGeez: "Ge'ez Classics",
      filterReligious: "Religious & Canon",
      searchPlaceholder: "Search titles, authors, or eras...",
      verifiedBadge: "Verified Rights",
      pages: "Pages",
      previewBtn: "Sample Preview",
      buyBtn: "Purchase License",
      modalClose: "Close Preview",
      sampleNotice: "Free preview excerpt. Full title available upon licensed purchase.",
    },
    security: {
      tag: "Defense in Depth",
      title: "How Kine Geez Protects Content & Rights Holders",
      subtitle:
        "The highest priority of our platform is copyright preservation. Unlike conventional stores that sell raw, redistributable PDFs, Kine Geez implements an architectural security boundary.",
      pillars: [
        {
          title: "Dynamic Personalized Watermarking",
          desc: "Every page render embeds an indelible, semi-transparent watermark linking the display to the purchaser's account and transaction reference, deterring screen capture and redistribution.",
        },
        {
          title: "Zero Raw File Exposure",
          desc: "Canonical PDF/DOCX manuscript files remain quarantined in private, encrypted object storage. They are never delivered directly to client browsers or mobile devices.",
        },
        {
          title: "Tamper-Proof Entitlement System",
          desc: "Client-side claims are rejected. Entitlements to read books are issued only after cryptographic, server-side validation against our PostgreSQL ledger.",
        },
        {
          title: "Encrypted Mobile Offline Reading",
          desc: "Upcoming Android and iOS apps use device keystore encryption for authorized offline reading with time-scoped revalidation licenses.",
        },
      ],
    },
    howItWorks: {
      tag: "Simple & Seamless",
      title: "How Kine Geez Works",
      subtitle: "From discovering a rare historical text to enjoying it in your personal digital library.",
      steps: [
        {
          num: "01",
          title: "Discover & Preview",
          desc: "Search our catalog by era, language, or genre. Read free authorized sample pages to evaluate the edition before purchasing.",
        },
        {
          num: "02",
          title: "Instant Secure Payment",
          desc: "Checkout using Telebirr for domestic Ethiopian payments (ETB) or Stripe for diaspora cards (USD/EUR). Transactions are verified server-to-server.",
        },
        {
          num: "03",
          title: "Personal Digital Library",
          desc: "Upon verification, your title is immediately unlocked in your personal cloud library with an immutable license record.",
        },
        {
          num: "04",
          title: "Enjoy on Web & Mobile",
          desc: "Read on any modern browser today with bookmarks and progress sync. Native Android and iOS apps coming soon.",
        },
      ],
      roadmapTitle: "Platform Availability:",
      webStatus: "Web Portal · Available Now",
      androidStatus: "Android App · Coming Soon",
      iosStatus: "iOS App · In Development",
    },
    payments: {
      tag: "Domestic & Diaspora Ready",
      title: "Dual Payment Gateways for Global Ethiopian Readers",
      subtitle:
        "Whether you are reading from Addis Ababa, Mekelle, Hawassa, or the diaspora in North America and Europe, purchasing is effortless and completely safe.",
      telebirrTitle: "Telebirr (ኢትዮ ቴሌኮም)",
      telebirrDesc:
        "Seamless domestic payments in Ethiopian Birr (ETB). Pay using your mobile number or QR code with instantaneous server verification.",
      stripeTitle: "Stripe Global Checkout",
      stripeDesc:
        "Secure payments for the international diaspora and global scholars. Supports Visa, MasterCard, and Apple Pay with end-to-end PCI-DSS compliance.",
      securityGuarantee:
        "Strict Security Guarantee: Kine Geez never sees or stores card numbers or payment credentials. All transactions rely on official signed webhooks.",
    },
    authorCTA: {
      tag: "For Authors & Rights Holders",
      title: "Have a Historical Manuscript or Copyrighted Work?",
      subtitle:
        "Join Kine Geez as a publishing partner. We protect your books against piracy, preserve authentic Ge'ez typography, and provide transparent royalty accounting.",
      btn: "Inquire About Publishing",
      perks: [
        "Rigorous DRM & Screen Watermarking",
        "Full Audit Logs & Royalty Tracking",
        "Reaching Readers Worldwide (Local & Diaspora)",
      ],
    },
    faq: {
      tag: "Frequently Asked Questions",
      title: "Everything You Need to Know",
      subtitle: "Clear answers on reading, licensing, payments, and our copyright protection model.",
      items: [
        {
          q: "Why can't I download books as unrestricted PDF or EPUB files?",
          a: "To protect Ethiopian authors, publishers, and rare manuscript owners from digital piracy and unauthorized redistribution, Kine Geez operates a licensed reading engine. Books are rendered securely in our web and mobile apps rather than distributed as open, unprotected files.",
        },
        {
          q: "How does payment verification work with Telebirr?",
          a: "When you select Telebirr, our backend generates an encrypted order transaction. After you confirm on the Telebirr app or USSD prompt, Telebirr sends an authenticated server callback directly to our backend. Entitlements are unlocked atomically within seconds.",
        },
        {
          q: "Can members of the diaspora purchase books with international credit cards?",
          a: "Yes! We integrate with Stripe so readers across North America, Europe, the Middle East, and beyond can purchase licenses in USD/EUR using any major credit or debit card.",
        },
        {
          q: "Can I read my books without an internet connection?",
          a: "The web portal requires an active internet connection to securely stream watermarked content. Our upcoming native Android and iOS apps (developed in Flutter) will support encrypted offline reading for authorized titles using hardware-backed keystores.",
        },
        {
          q: "How do you handle public domain manuscripts versus modern editions?",
          a: "While ancient texts themselves may belong to the cultural heritage, modern transcriptions, critical annotations, translations, and curated typography have distinct intellectual property protections. Kine Geez requires documented legal basis and rights clearance for every edition published.",
        },
      ],
    },
    waitlist: {
      tag: "Early Access",
      title: "Join the Kine Geez Early Access Community",
      subtitle:
        "Sign up today to receive private beta invites, notification of new manuscript releases, and early access to our mobile applications.",
      namePlaceholder: "Your Full Name",
      emailPlaceholder: "Your Email Address",
      roleLabel: "I am interested as a:",
      roleOptions: [
        { value: "reader", label: "Reader / Cultural Enthusiast" },
        { value: "scholar", label: "Scholar / Researcher / Student" },
        { value: "author", label: "Author / Rights Holder / Publisher" },
        { value: "monastery", label: "Monastery / Religious Institution" },
      ],
      platformLabel: "Preferred Platform:",
      platformOptions: ["Web Portal", "Android App", "iOS App"],
      submitBtn: "Request Early Access",
      successMsg: "Thank you for registering! We will notify you when new titles and mobile apps launch.",
      invalidEmail: "Please provide a valid email address.",
    },
    footer: {
      about:
        "Kine Geez is a specialized digital publishing platform committed to the preservation, distribution, and robust protection of Ethiopian historical literature and Ge'ez manuscripts.",
      rightsNotice: "All titles are distributed under verified license agreements. Master source files are protected.",
      copyright: "Kine Geez. All rights reserved.",
      compliance: "Built in adherence with OWASP ASVS/MASVS security guidelines.",
      linksTitle: "Navigation",
      contactTitle: "Contact & Community",
    },
  },
  am: {
    nav: {
      brand: "ኪነ ግዕዝ",
      geezSubtitle: "Kine Geez",
      features: "ባህሪያት",
      catalog: "ካታሎግ",
      readerDemo: "የንባብ ማሳያ",
      security: "የቅጂ መብት ጥበቃ",
      howItWorks: "አሠራሩ",
      payments: "ክፍያ",
      faq: "ተደጋጋሚ ጥያቄዎች",
      waitlistBtn: "ቀዳሚ ተጠቃሚ ይሁኑ",
      langSwitch: "English",
    },
    hero: {
      badge: "ዲጂታል ቤተ-መጻሕፍት · የታሪክ መጻሕፍትና የግዕዝ ሥነ-ጽሑፍ",
      title: "የኢትዮጵያ ሥነ ጽሑፍ፣ በክብር ተጠብቆ ለንባብ ቀረበ።",
      subtitle:
        "የታሪክ መጻሕፍት፣ ጥንታዊ የግዕዝ ሰነዶችና የሃይማኖት ድርሳናት ሕጋዊ ፈቃድ ባለው የዲጂታል ሥርዓት ተዘጋጅተዋል። በቴሌብር እና በስትራይፕ (Stripe) በደህንነት ይግዙ፤ በድረ-ገጽና በሞባይል ያንብቡ።",
      browseBtn: "ካታሎጉን ይመልከቱ",
      demoBtn: "የንባብ ማሳያ ይሞክሩ",
      joinWaitlist: "ቀዳሚ ተጠቃሚ ይሁኑ",
      trustPillars: [
        "ሕጋዊ ፈቃድ ያላቸው እትሞች ብቻ",
        "የተጠቃሚ መለያ የውሃ ምልክት (Watermark)",
        "በቴሌብርና በካርድ የተረጋገጠ ክፍያ",
      ],
      bookCaption: "ተለይቶ የቀረበ፡ ማኅደረ ወለዶ",
    },
    features: {
      tag: "የመድረኩ መሠረቶች",
      title: "የጸሐፊዎችንና የቅጂ መብት ባለቤቶችን መብት ለማክበር የተገነባ",
      subtitle:
        "የቅጂ መብት ጥበቃ ሳይሸራረፍ ዲጂታል ተደራሽነትን ማስፋፋት። ኪነ ግዕዝ ጥብቅ የደህንነት ሥርዓትን ከምቹ የንባብ ልምድ ጋር ያዋህዳል።",
      items: [
        {
          id: "01",
          title: "ሕጋዊ ፈቃድ ያላቸው እትሞች ብቻ",
          desc: "ማንኛውም መጽሐፍ ለሕዝብ ከመቅረቡ በፊት የባለቤትነት መብቱና ፈቃዱ በጥንቃቄ ይረጋገጣል።",
        },
        {
          id: "02",
          title: "ጥብቅ የንባብ መተግበሪያ",
          desc: "መጻሕፍት የሚከፈቱት በራሳችን ደህንነቱ በተጠበቀ የንባብ ሥርዓት ውስጥ ብቻ ነው። እያንዳንዱ ገጽ የተጠቃሚው መለያ ያለበት የውሃ ምልክት ይታተምበታል።",
        },
        {
          id: "03",
          title: "በሰርቨር የተረጋገጠ ክፍያ",
          desc: "በቴሌብር (Telebirr) ወይም በዓለም አቀፍ ካርዶች (Stripe) ይክፈሉ። መጽሐፉ ወደ ቤተ-መጻሕፍትዎ የሚጨመረው ክፍያው በእርግጠኝነት በሰርቨር ሲረጋገጥ ብቻ ነው።",
        },
        {
          id: "04",
          title: "የተደራጀ የኤዲቶሪያል ቁጥጥር",
          desc: "የመጻሕፍት ዝግጅት፣ የሕጋዊነት ማረጋገጫና የሕትመት ውሳኔ በተለያዩ ኃላፊዎች ቁጥጥር ስር ይከናወናል።",
        },
      ],
    },
    readerDemo: {
      tag: "ቀጥታ የቴክኖሎጂ ማሳያ",
      title: "ደህንነቱ የተጠበቀውን የንባብ ገጽ ይሞክሩ",
      subtitle:
        "የኪነ ግዕዝ የንባብ ገጽ ከዚህ በታች በቀጥታ ተዘጋጅቷል። የተጠቃሚውን መለያ የያዘውን የውሃ ምልክት፣ የግዕዝ ፊደላት አቀራረብና ያልተፈቀደ ቅጂን የሚከላከለውን ሥርዓት ይመልከቱ።",
      sampleTitle: "የናሙና ንባብ፡ ማኅደረ ወለዶ · ምዕራፍ ፩",
      fontSize: "የፊደል መጠን",
      fontType: "የፊደል ስልት",
      serif: "ኖቶ ሰሪፍ ግዕዝ",
      sans: "ኖቶ ሳንስ ግዕዝ",
      watermarkNotice: "የተጠቃሚ መለያ የውሃ ምልክት (Watermark)",
      watermarkText: "ፈቃድ የተሰጠው ለ፡ reader@kinegeez.com · መለያ #KG-2026-X89 · ማባዛት የተከለከለ ነው",
      antiCopyNotice: "ጽሑፍ መቅዳት (Copy) እና በፋይል ማውረድ በደህንነት ሥርዓቱ የተገደበ ነው።",
      prevPage: "ወደ ኋላ",
      nextPage: "ወደ ፊት",
      pageOf: "ገጽ 1 ከ 14",
    },
    catalog: {
      tag: "የተመረጡ መጻሕፍት",
      title: "የታሪክ ድርሳናትና ጥንታዊ የግዕዝ መጻሕፍት",
      subtitle:
        "የነገሥታት ዜና መዋዕል፣ የግዕዝ ሃይማኖታዊ ድርሳናት እና ብርቅዬ የኢትዮጵያ የታሪክ ቅርሶች። እያንዳንዱ እትም የሕጋዊነት ማረጋገጫና የገጽ ብዛት መረጃ ይዟል።",
      filterAll: "ሁሉም",
      filterHistorical: "የታሪክ መጻሕፍት",
      filterGeez: "የግዕዝ ድርሳናት",
      filterReligious: "የቀኖና እና ሥርዓት",
      searchPlaceholder: "በመጽሐፉ ስም፣ በጸሐፊው ወይም በዘመኑ ይፈልጉ...",
      verifiedBadge: "ሕጋዊ ፈቃድ የተረጋገጠ",
      pages: "ገጾች",
      previewBtn: "ናሙና አንብብ",
      buyBtn: "ፈቃድ ግዛ",
      modalClose: "ዝጋ",
      sampleNotice: "ይህ ነፃ የናሙና ገጽ ነው። ሙሉውን መጽሐፍ በሕጋዊ ክፍያ በማግኘት በግል ቤተ-መጻሕፍትዎ ማንበብ ይችላሉ።",
    },
    security: {
      tag: "የደህንነት ግንብ",
      title: "ኪነ ግዕዝ የደራሲያንን መብት እንዴት ይጠብቃል?",
      subtitle:
        "የመድረካችን ቁልፍ መርህ የቅጂ መብት ጥበቃ ነው። ያልተጠበቁ ፒዲኤፍ (PDF) ፋይሎችን እንደሚያሰራጩ ተራ ድረ-ገጾች ሳይሆን፤ ኪነ ግዕዝ በልዩ የደህንነት መዋቅር የተገነባ ነው።",
      pillars: [
        {
          title: "የተጠቃሚ መለያ የውሃ ምልክት (Watermark)",
          desc: "እያንዳንዱ የንባብ ገጽ የገዢውን የኢሜይል አድራሻና የትዕዛዝ ቁጥር በውሃ ምልክትነት ይይዛል። ይህም ገጹን ፎቶ አንስቶ እንዳያሰራጭ ያስጠነቅቃል።",
        },
        {
          title: "ዋናውን ፋይል በምስጢር መጠበቅ",
          desc: "የመጀመሪያዎቹ የፒዲኤፍ ወይም የስካን ፋይሎች በሕዝብ እይታ በማይደርሱባቸው የተዘጉ ሰርቨሮች ውስጥ ብቻ ይቀመጣሉ።",
        },
        {
          title: "በሰርቨር የተረጋገጠ የፈቃድ መዝገብ",
          desc: "ክፍያው በሕጋዊ መንገድ እስካልተረጋገጠ ድረስ ምንም አይነት መጽሐፍ ሊከፈት አይችልም። የድረ-ገጽ ኮድን በመቀየር ማለፍ አይቻልም።",
        },
        {
          title: "በሞባይል ላይ በምስጢር የተቆለፈ ማከማቻ",
          desc: "የሚመጡት የአንድሮይድ እና የአይኦኤስ መተግበሪያዎች ኢንተርኔት በሌለበት ጊዜ መጻሕፍትን በሞባይሉ የደህንነት ቺፕ ቆልፈው ያስቀምጣሉ።",
        },
      ],
    },
    howItWorks: {
      tag: "ቀላል አሠራር",
      title: "ኪነ ግዕዝ እንዴት ይሰራል?",
      subtitle: "ብርቅዬ የታሪክ መጽሐፍትን ከመምረጥ ጀምሮ በግል ቤተ-መጻሕፍትዎ እስከማንበብ ድረስ።",
      steps: [
        {
          num: "01",
          title: "ይመርጡና ናሙና ያንብቡ",
          desc: "ካታሎጉን በዘመን ወይም በቋንቋ ይፈልጉ። ከመግዛትዎ በፊት ነፃ የናሙና ገጾችን ያንብቡ።",
        },
        {
          num: "02",
          title: "በቴሌብር ወይም በካርድ ይክፈሉ",
          desc: "በኢትዮጵያ ውስጥ በቴሌብር፣ በውጭ ሀገር ደግሞ በስትራይፕ ዓለም አቀፍ ካርዶች ክፍያዎን በቅጽበት ያጠናቅቁ።",
        },
        {
          num: "03",
          title: "በግል ዲጂታል ቤተ-መጻሕፍትዎ ያግኙ",
          desc: "ክፍያዎ እንደተረጋገጠ መጽሐፉ ወዲያውኑ በግል መለያዎ ስር ለንባብ ዝግጁ ይሆናል።",
        },
        {
          num: "04",
          title: "በድረ-ገጽና በሞባይል ያንብቡ",
          desc: "አሁን በድረ-ገጽ ንባብዎን ይጀምሩ። የሞባይል መተግበሪያዎችም በቅርቡ ይደርሳሉ።",
        },
      ],
      roadmapTitle: "የመድረኩ ዝግጁነት፡",
      webStatus: "የድረ-ገጽ ፖርታል · ዝግጁ ነው",
      androidStatus: "የአንድሮይድ መተግበሪያ · በቅርቡ",
      iosStatus: "የአይኦኤስ መተግበሪያ · በዝግጅት ላይ",
    },
    payments: {
      tag: "ለሀገር ውስጥና ለዳያስፖራ",
      title: "ሁለት አስተማማኝ የክፍያ አማራጮች",
      subtitle:
        "በአዲስ አበባም ሆኑ በክፍለ ሀገር፣ ወይም በሰሜን አሜሪካና በአውሮፓ የሚኖሩ የዳያስፖራ አባላት፤ በቀላሉና በደህንነት መግዛት ይችላሉ።",
      telebirrTitle: "ቴሌብር (ኢትዮ ቴሌኮም)",
      telebirrDesc:
        "በኢትዮጵያ ብር (ETB) በቀጥታ በስልክ ቁጥርዎ ወይም በኪውአር ኮድ (QR Code) ክፍያዎን በቅጽበት ይፈጽሙ።",
      stripeTitle: "ስትራይፕ ዓለም አቀፍ ክፍያ (Stripe)",
      stripeDesc:
        "በውጭ ሀገር ላሉ አንባቢያን በቪዛ (Visa)፣ በማስተርካርድና በሌሎች ዓለም አቀፍ ካርዶች በዶላር ወይም በዩሮ ይክፈሉ።",
      securityGuarantee:
        "ጥብቅ የደህንነት ማረጋገጫ፡ የባንክ ወይም የካርድ መረጃዎን በፍጹም አንመዘግብም ወይም አናይም። ሁሉም በክፍያ አቅራቢዎቹ ጥበቃ ይከናወናል።",
    },
    authorCTA: {
      tag: "ለደራሲያንና የቅጂ መብት ባለቤቶች",
      title: "የታሪክ መጽሐፍ ወይም የግዕዝ ቅጂ አለዎት?",
      subtitle:
        "ከኪነ ግዕዝ ጋር በመተባበር ሥራዎችዎ ከስርቆት ተጠብቀው ለዓለም አቀፍ አንባቢያን እንዲደርሱ ያድርጉ። ግልጽ የክፍያና የሥርጭት መረጃ ያገኛሉ።",
      btn: "ከኤዲቶሪያል ክፍሉ ጋር ይገናኙ",
      perks: [
        "የተጠቃሚ መለያ ያለበት ጥብቅ የቅጂ መብት ጥበቃ",
        "ግልጽ የገቢና የሽያጭ መረጃ",
        "የሀገር ውስጥና የውጭ ሀገር ሰፊ ተደራሽነት",
      ],
    },
    faq: {
      tag: "ተደጋጋሚ ጥያቄዎች",
      title: "ስለ ኪነ ግዕዝ ማወቅ የሚፈልጓቸው ጉዳዮች",
      subtitle: "ስለ ንባብ፣ ክፍያና የቅጂ መብት ጥበቃ የተሰጡ ግልጽ ማብራሪያዎች።",
      items: [
        {
          q: "መጻሕፍቱን በፒዲኤፍ (PDF) ማውረድ የማልችለው ለምንድን ነው?",
          a: "የደራሲያንንና የገዳማትን የታሪክ ቅርሶች ካልተፈቀደ ሕገወጥ ዝውውር ለመጠበቅ ሲባል መጻሕፍት የሚነበቡት በኪነ ግዕዝ የንባብ ገጽ ላይ ብቻ ነው። ያልተቆለፈ ፒዲኤፍ አንሰጥም።",
        },
        {
          q: "በቴሌብር ክፍያ እንዴት ይረጋገጣል?",
          a: "በቴሌብር ሲከፍሉ የቴሌብር ሰርቨር በቀጥታ ለድረ-ገጻችን መልእክት ይልካል። ክፍያው እንደተረጋገጠ መጽሐፉ ወዲያውኑ በቤተ-መጻሕፍትዎ ውስጥ ይከፈታል።",
        },
        {
          q: "ከኢትዮጵያ ውጭ የሚኖሩ አንባቢያን በካርድ መግዛት ይችላሉ?",
          a: "አዎ! በስትራይፕ (Stripe) አማካኝነት በቪዛ፣ በማስተርካርድ ወይም በሌሎች ካርዶች ከየትኛውም የዓለም ክፍል መግዛት ይችላሉ።",
        },
        {
          q: "ኢንተርኔት በሌለበት ጊዜ ማንበብ ይቻላል?",
          a: "በድረ-ገጽ ላይ ኢንተርኔት ያስፈልጋል። ነገር ግን በቅርቡ የሚወጡት የአንድሮይድ እና የአይኦኤስ መተግበሪያዎች መጻሕፍትን በስልኩ ውስጥ በምስጢር አስቀምጠው ያለ ኢንተርኔት እንዲነበቡ ያደርጋሉ።",
        },
        {
          q: "ጥንታዊ የሆኑ የጋራ ቅርሶችና አዳዲስ እትሞች እንዴት ይለያሉ?",
          a: "ጥንታዊ ጽሑፉ የሕዝብ ቅርስ ቢሆንም፤ የአዲሶቹ ተርጓሚዎች፣ አራሚዎችና አሳታሚዎች ድካም የቅጂ መብት ጥበቃ አለው። ኪነ ግዕዝ የሕጋዊነት ማረጋገጫ ያላቸውን ብቻ ያሳትማል።",
        },
      ],
    },
    waitlist: {
      tag: "ቀዳሚ ዕድል",
      title: "የኪነ ግዕዝ ቀዳሚ አንባቢ ይሁኑ",
      subtitle:
        "አዳዲስ ብርቅዬ መጻሕፍት ሲጨመሩና የሞባይል መተግበሪያዎች ሲለቀቁ ቀድመው እንዲደርስዎ ይመዝገቡ።",
      namePlaceholder: "ሙሉ ስምዎ",
      emailPlaceholder: "የኢሜይል አድራሻዎ",
      roleLabel: "ፍላጎትዎ፡",
      roleOptions: [
        { value: "reader", label: "አንባቢ / የታሪክ ወዳጅ" },
        { value: "scholar", label: "ተመራማሪ / ምሁር / ተማሪ" },
        { value: "author", label: "ደራሲ / የቅጂ መብት ባለቤት / አሳታሚ" },
        { value: "monastery", label: "ገዳም / የቤተክርስቲያን ተቋም" },
      ],
      platformLabel: "የሚመርጡት መተግበሪያ፡",
      platformOptions: ["የድረ-ገጽ ፖርታል", "የአንድሮይድ መተግበሪያ", "የአይኦኤስ (አፕል) መተግበሪያ"],
      submitBtn: "ይመዝገቡ",
      successMsg: "እናመሰግናለን! ምዝገባዎ ተጠናቅቋል። አዳዲስ መጻሕፍት ሲለቀቁ መልእክት እንልክልዎታለን።",
      invalidEmail: "እባክዎን ትክክለኛ የኢሜይል አድራሻ ያስገቡ።",
    },
    footer: {
      about:
        "ኪነ ግዕዝ የኢትዮጵያን የታሪክ ድርሳናትና ጥንታዊ የግዕዝ ሥነ ጽሑፎችን በክብር ለመጠበቅና ለማሰራጨት የተዘጋጀ ልዩ የዲጂታል መድረክ ነው።",
      rightsNotice: "ሁሉም መጻሕፍት በሕጋዊ ውልና ፈቃድ የተዘጋጁ ናቸው። ዋናዎቹ ፋይሎች በከፍተኛ ጥበቃ ይቀመጣሉ።",
      copyright: "ኪነ ግዕዝ። መብቱ በሕግ የተጠበቀ ነው።",
      compliance: "በOWASP ASVS/MASVS የደህንነት መመሪያዎች መሠረት የተዘጋጀ።",
      linksTitle: "ፈጣን ማውጫ",
      contactTitle: "አድራሻና ማኅበራዊ ትስስር",
    },
  },
};
