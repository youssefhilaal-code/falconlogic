/**
 * FALCON LOGIC - Core Website Engine (falconlogic.tech)
 * Zero-error, ultra-fast, bilingual (EN & AR) interactive controller
 * Author: Youssef Hilal
 */

(function () {
  'use strict';

  // ==========================================
  // 1. DEFAULT DATA & BILINGUAL DICTIONARY
  // ==========================================
  const TRANSLATIONS = {
    en: {
      nav: {
        tagline: "Web Dev & Creative Design",
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        beforeAfter: "Before / After",
        testimonials: "Testimonials",
        faq: "FAQ",
        contact: "Contact",
        cta: "Start a Project"
      },
      hero: {
        badge: "Official Studio · falconlogic.tech",
        title: "Where Sharp Design Meets Smart Code",
        subtitle: "Empowering visionary brands with full-stack engineering precision and high-impact Photoshop visual art. From high-converting digital web platforms to surreal photo manipulations, we engineer the extraordinary.",
        ctaPrimary: "Explore Our Work",
        ctaSecondary: "Get a Free Quote",
        tag1: "Full-Stack Web Architecture",
        tag2: "Creative Photoshop Manipulation",
        tag3: "100% Quality Guaranteed",
        float1Sub: "Performance",
        float1Title: "Lightning Fast 99+",
        float2Sub: "Mastery",
        float2Title: "Photoshop Precision"
      },
      stats: {
        projects: "Projects Delivered Successfully",
        satisfaction: "Client Satisfaction Rate",
        support: "Continuous Agility & Support"
      },
      services: {
        badge: "What We Do Best",
        title: "Specialized Agency Services",
        subtitle: "Whether you need a scalable full-stack web application or world-class Photoshop photo manipulation, select any service below to pre-fill your project request instantly.",
        selectBtn: "Select Service",
        webPillarTitle: "Full-Stack Web Development",
        webPillarSub: "Clean code, robust databases, lightning speed, and responsive aesthetics",
        web1Title: "Corporate Websites",
        web1Desc: "High-authority corporate portals with modern CMS, search engine optimization, and corporate credibility.",
        web1F1: "Bilingual & Multilingual",
        web1F2: "Technical SEO Architecture",
        web1F3: "Enterprise Security",
        web2Title: "E-Commerce Platforms",
        web2Desc: "Fast, frictionless storefronts with secure checkout, inventory tracking, coupon logic, and payment gateways.",
        web2F1: "Stripe & Local Gateways",
        web2F2: "Cart & Stock Sync",
        web2F3: "Automated Invoicing",
        web3Title: "Custom Web Apps & Dashboards",
        web3Desc: "Full-featured SaaS web applications, real-time analytics portals, customer management, and role-based access.",
        web3F1: "REST / GraphQL APIs",
        web3F2: "Role-Based Access Control",
        web3F3: "Live Data Visualizations",
        web4Title: "High-Converting Landing Pages",
        web4Desc: "Laser-targeted conversion machines engineered to convert PPC and social visitors into booked calls and sales.",
        web4F1: "Sub-second Page Load",
        web4F2: "A/B Testing Ready",
        web4F3: "Lead Webhook Integration",
        designPillarTitle: "Photoshop & Creative Graphic Design",
        designPillarSub: "Cinematic photo compositing, high-conversion ad creative, and complete brand identity",
        des1Title: "Photo Manipulation & Retouch",
        des1Desc: "High-end commercial photo compositing, surreal artwork, frequency separation, and cinematic color grading.",
        des1F1: "Cinematic Lighting & FX",
        des1F2: "High-End Beauty Retouching",
        des1F3: "Multi-Layer Compositing",
        des2Title: "Social Media Ad Campaigns",
        des2Desc: "Scroll-stopping advertising visuals for Facebook, Instagram, TikTok, and Google Ads designed for high CTR.",
        des2F1: "Multi-Format Ad Bundles",
        des2F2: "Hook & Offer Visuals",
        des2F3: "Editable Source PSD Files",
        des3Title: "Brand Identity & Logo Systems",
        des3Desc: "Distinctive vector emblems, typographic guidelines, color palettes, stationery kits, and complete brand rulebooks.",
        des3F1: "Vector & Raster Assets",
        des3F2: "Comprehensive Brand Book",
        des3F3: "Social Media Kit Included",
        des4Title: "High-Fidelity UI/UX Mockups",
        des4Desc: "Pixel-perfect user interfaces, web design mockups, device clay renders, and presentation-ready prototypes.",
        des4F1: "Modern Glassmorphic Trends",
        des4F2: "Design Systems & Tokens",
        des4F3: "Dev-Ready Handoff"
      },
      ba: {
        badge: "Photoshop Mastery Demonstration",
        title: "Raw Capture vs. Falcon Retouch",
        subtitle: "Drag the interactive slider horizontally to witness our precision frequency separation, surreal compositing, and cinematic 32-bit volumetric lighting.",
        beforeLabel: "RAW CAPTURE / BEFORE",
        afterLabel: "FALCON RETOUCHED / AFTER",
        hint: "Click, drag, or touch to slide back and forth"
      },
      portfolio: {
        badge: "Selected Works",
        title: "Crafted with Precision",
        subtitle: "Explore our featured projects across enterprise full-stack development and creative graphic design. Click any project to inspect its live architecture.",
        filterAll: "All Works",
        filterWeb: "Web Development",
        filterDesign: "Photoshop Design",
        viewDetails: "View Case Study"
      },
      testimonials: {
        badge: "Verified Client Reviews",
        title: "Trusted by Modern Founders",
        subtitle: "Don't just take our word for it. Here is what leading entrepreneurs and creative directors say about partnering with Falcon Logic.",
        q1: '"Youssef built our corporate web portal ahead of deadline. His code is spotless, and his ability to combine engineering rigor with jaw-dropping Photoshop design transformed our brand overnight."',
        q2: '"The photo manipulation work Falcon Logic delivered for our commercial campaign blew our creative director away. The volumetric lighting and reflections look like a million-dollar Hollywood movie poster."',
        q3: '"Fast, bilingual, and remarkably responsive. The custom dashboard Youssef engineered handled our launch traffic with zero downtime. Falcon Logic is our permanent development and design agency."'
      },
      faq: {
        badge: "Got Questions?",
        title: "Frequently Asked Questions",
        subtitle: "Clear answers on timelines, deliverables, technology, and revisions.",
        q1: "What is the typical turnaround time for a project?",
        a1: "Landing pages and Photoshop manipulations are typically delivered within 2 to 4 business days. Comprehensive full-stack web applications and custom dashboards usually take 2 to 3 weeks depending on technical specifications and integrations. We always provide milestone previews throughout development.",
        q2: "Do I receive full source files (PSD, GitHub repos)?",
        a2: "Yes, 100%! Upon project completion and sign-off, you receive full intellectual property ownership. For design projects, you get organized, labeled Adobe Photoshop (.PSD) files, exports, and assets. For web projects, you receive the full Git repository, deployment instructions, and documentation.",
        q3: "Which web technologies and frameworks do you build with?",
        a3: "We specialize in modern, high-performance stacks including Vanilla JavaScript/HTML5/CSS3 for ultra-fast landing pages, modern React/Next.js and Vue.js for reactive web applications, Tailwind CSS for scalable styling, Node.js/Python backends, and robust cloud databases (PostgreSQL, Supabase, Firebase).",
        q4: "What is your revision and satisfaction guarantee?",
        a4: "Your satisfaction is unconditionally guaranteed. We include up to 3 rounds of comprehensive revisions with every package to refine visual details, typography, copy, and layout until you are 100% thrilled with the outcome."
      },
      contact: {
        badge: "Let's Build Something Exceptional",
        title: "Start Your Project",
        subtitle: "Ready to elevate your digital presence? Fill out the form or reach out directly through any of our official channels below.",
        nameLabel: "Your Name",
        emailField: "Email Address",
        emailError: "Please enter a valid email address (e.g. name@domain.com)",
        serviceLabel: "Selected Service Option",
        serviceOptGeneral: "General Inquiry / Custom Proposal",
        budgetLabel: "Approximate Budget",
        timelineLabel: "Expected Timeline",
        msgLabel: "Project Details",
        submitBtn: "Send Inquiry Now",
        emailLabel: "Direct Email",
        copyBtn: "Copy",
        waLabel: "WhatsApp Direct Chat",
        fbLabel: "Official Facebook Page",
        channelLabel: "Facebook Community Channel",
        privacyPromise: "Your details are safe. We sign standard NDAs on demand and never disclose client project data."
      },
      footer: {
        summary: "Enterprise-grade Full-Stack Web Development & Creative Graphic Design studio. Dedicated to engineering high-speed digital products and iconic visual art.",
        quickLinks: "Quick Links",
        servicesTitle: "Capabilities",
        connectTitle: "Connect",
        signature: "Designed & Developed by YOUSSEF HILAL"
      },
      cookie: {
        text: "Falcon Logic uses local preferences to ensure lightning-fast performance, bilingual caching, and secure session management.",
        accept: "Accept",
        decline: "Dismiss"
      }
    },
    ar: {
      nav: {
        tagline: "تطوير الويب والتصميم الإبداعي",
        home: "الرئيسية",
        services: "خدماتنا",
        portfolio: "أعمالنا",
        beforeAfter: "قبل وبعد",
        testimonials: "آراء العملاء",
        faq: "الأسئلة الشائعة",
        contact: "تواصل معنا",
        cta: "ابدأ مشروعك"
      },
      hero: {
        badge: "الاستوديو الرسمي · falconlogic.tech",
        title: "حيث يلتقي التصميم الإبداعي مع دقة البرمجة",
        subtitle: "نمنح أصحاب الرؤى الطموحة قوة البرمجة المتكاملة وفنون تصميم الفوتوشوب المؤثرة. من المنصات الرقمية السريعة إلى المعالجة البصرية المذهلة، نصنع التميز لعلامتك.",
        ctaPrimary: "استكشف أعمالنا",
        ctaSecondary: "طلب عرض سعر",
        tag1: "برمجة ويب متكاملة وحديثة",
        tag2: "فنون وتعديل فوتوشوب سينمائي",
        tag3: "ضمان جودة 100%",
        float1Sub: "الأداء الفائق",
        float1Title: "سرعة استثنائية 99+",
        float2Sub: "الاحترافية",
        float2Title: "دقة فوتوشوب متناهية"
      },
      stats: {
        projects: "مشروعاً تم إنجازه بنجاح",
        satisfaction: "نسبة رضا وثقة العملاء",
        support: "دعم فني واستجابة متواصلة"
      },
      services: {
        badge: "مجالات تميزنا",
        title: "خدمات الوكالة المتخصصة",
        subtitle: "سواء كنت بحاجة لتطبيق ويب متكامل عالي الأداء أو تصاميم فوتوشوب إعلانية مذهلة، اختر خدمتك المفضلة لتجهيز طلبك على الفور.",
        selectBtn: "اختر هذه الخدمة",
        webPillarTitle: "تطوير وبرمجة الويب المتكاملة",
        webPillarSub: "أكواد برمجية نظيفة، قواعد بيانات آمنة، وسرعة فائقة متوافقة مع جميع الشاشات",
        web1Title: "مواقع الشركات والمؤسسات",
        web1Desc: "بوابات ومواقع شركات راقية تمنح علامتك موثوقية عالية مع إدارة محتوى وتوافق تام مع محركات البحث.",
        web1F1: "دعم كامل للغتين العربية والإنجليزية",
        web1F2: "تهيئة تقنية متقدمة لمحركات البحث (SEO)",
        web1F3: "حماية وأمان بمعايير مؤسسية",
        web2Title: "متاجر إلكترونية متكاملة",
        web2Desc: "متاجر رقمية سريعة وسلسة تدعم بوابات الدفع الإلكتروني، تتبع المخزون، وسلات الشراء التفاعلية.",
        web2F1: "بوابات دفع محلية وعالمية (Stripe وغيرها)",
        web2F2: "مزامنة سريعة للمخزون والطلبات",
        web2F3: "فواتير تلقائية وإشعارات فورية",
        web3Title: "لوحات تحكم وتطبيقات مخصصة",
        web3Desc: "تطبيقات ويب متطورة (SaaS)، لوحات تحكم تحليلية مباشرة، وإدارة متقدمة لصلاحيات المستخدمين.",
        web3F1: "واجهات برمجية RESTful / GraphQL",
        web3F2: "نظام صلاحيات وأدوار محكم (RBAC)",
        web3F3: "رسوم ومؤشرات بيانية تفاعلية",
        web4Title: "صفحات هبوط عالية التحويل",
        web4Desc: "صفحات تسويقية مخصصة لحملات الإعلانات مصممة لتحويل الزوار إلى عملاء ومبيعات حقيقية.",
        web4F1: "سرعة تحميل قياسية في أجزاء من الثانية",
        web4F2: "جاهزة لاختبارات التحسين (A/B Testing)",
        web4F3: "ربط فوري للبيانات وإشعارات العملاء",
        designPillarTitle: "تصميم الجرافيك والفوتوشوب الإبداعي",
        designPillarSub: "دمج وتعديل صور سينمائي، تصاميم إعلانية لزيادة المبيعات، وهويات بصرية كاملة",
        des1Title: "معالجة ودمج الصور الاحترافي",
        des1Desc: "معالجة متقدمة للصور التجارية، دمج خيالي متقن، توزيع إضاءة سينمائية، وتنسيق ألوان بدقة 32 بت.",
        des1F1: "إضاءة ومؤثرات واقعية وسينمائية",
        des1F2: "تنقية احترافية للوجوه والمنتجات",
        des1F3: "دمج متعدد الطبقات فائق الدقة",
        des2Title: "تصاميم إعلانات منصات التواصل",
        des2Desc: "تصاميم لافتة للانتباه على فيسبوك، إنستغرام، تيك توك، وإعلانات جوجل لزيادة التفاعل والمبيعات.",
        des2F1: "باقات إعلانية بمقاسات متعددة",
        des2F2: "تصاميم تعتمد على خطافات بصرية قوية",
        des2F3: "ملفات المصدر القابلة للتعديل (PSD)",
        des3Title: "الهويات البصرية والعلامات التجارية",
        des3Desc: "شعارات مميزة، كتيب إرشادات الهوية، لوحات الألوان والخطوط، وتصاميم المطبوعات الكاملة.",
        des3F1: "ملفات فيكتور عالية الدقة للطباعة والويب",
        des3F2: "دليل شامل لاستخدام الهوية (Brand Book)",
        des3F3: "قوالب مجهزة لمنصات التواصل الاجتماعي",
        des4Title: "تصميم واجهات المستخدم والنماذج (UI/UX)",
        des4Desc: "واجهات رقمية تفاعلية جذابة، نماذج عرض للأجهزة الذكية (Mockups)، وتجربة مستخدم مدروسة بعناية.",
        des4F1: "أسلوب عصري بتقنيات الزجاج الشفاف",
        des4F2: "أنظمة تصميم متكاملة ومتناسقة",
        des4F3: "تسليم منظم جاهز للتطوير البرمجي"
      },
      ba: {
        badge: "استعراض قوة الفوتوشوب",
        title: "اللقطة الخام مقابل لمسة فالكون",
        subtitle: "اسحب المؤشر التفاعلي يميناً ويساراً لمشاهدة الدقة في توزيع الإضاءة السينمائية، تعديل الألوان، والدمج السريالي المتقن.",
        beforeLabel: "تصوير خام / قبل",
        afterLabel: "معالجة فالكون / بعد",
        hint: "انقر واسحب أو المس لتحريك الفاصل بين الصورتين"
      },
      portfolio: {
        badge: "مختارات من أعمالنا",
        title: "صُنعت بأعلى معايير الإتقان",
        subtitle: "استكشف مشاريعنا المميزة في مجالات تطوير الويب وتصميم الجرافيك. انقر على أي مشروع لمعرفة تفاصيله وتجربته.",
        filterAll: "جميع الأعمال",
        filterWeb: "تطوير الويب",
        filterDesign: "تصاميم فوتوشوب",
        viewDetails: "عرض تفاصيل المشروع"
      },
      testimonials: {
        badge: "تقييمات موثقة من العملاء",
        title: "ثقة رواد الأعمال والشركات",
        subtitle: "تعرف على آراء مؤسسي الشركات والمدراء الإبداعيين الذين تعاونوا مع فالكون لوجيك.",
        q1: '"أنجز يوسف موقع شركتنا قبل الموعد المحدد بجودة لا تصدق. دقة الكود البرمجي وجمال تصاميم الفوتوشوب التي أضافها أحدثت نقلة نوعية في صورة علامتنا التجارية."',
        q2: '"أعمال دمج ومعالجة الصور التي قدمتها فالكون لوجيك لحملتنا التسويقية أبهرت الفريق بالكامل. توزيع الإضاءة السينمائية جعل المنتج يظهر وكأنه بوستر فيلم سينمائي عالمي."',
        q3: '"سرعة مذهلة، التزام كامل باللغتين، ومرونة عالية. لوحة التحكم المخصصة التي طورها يوسف تعمل بسلاسة فائقة دون أي أخطاء. هم شريكنا الدائم."',
      },
      faq: {
        badge: "هل لديك استفسار؟",
        title: "الأسئلة الشائعة",
        subtitle: "إجابات واضحة ومباشرة حول المواعيد، ملفات المصدر، التقنيات المستخدمة، والتعديلات.",
        q1: "ما هو الوقت المتوقع لتسليم المشروع؟",
        a1: "صفحات الهبوط وتصاميم معالجة الفوتوشوب تستغرق عادة من يومين إلى 4 أيام عمل. أما تطبيقات الويب المتكاملة ولوحات التحكم فتستغرق من أسبوعين إلى 3 أسابيع حسب حجم الميزات. نقدم دائماً معاينات مستمرة خلال مراحل العمل.",
        q2: "هل أحصل على ملفات المصدر الكاملة (PSD وملفات البرمجة)؟",
        a2: "نعم بالتأكيد 100%! فور اعتماد المشروع، تنتقل إليك ملكية كافة الملفات البرمجية ومستودع Git، بالإضافة لملفات الفوتوشوب المفتوحة المنظمة (.PSD) بكافة طبقاتها وتأثيراتها.",
        q3: "ما هي لغات البرمجة وأطر العمل التي تعتمدون عليها؟",
        a3: "نعتمد على أحدث التقنيات وأسرعها أداءً: Vanilla JS/HTML5/CSS3 لصفحات الهبوط فائقة السرعة، وReact/Next.js وVue.js لتطبيقات الويب التفاعلية، وTailwind CSS للتصميم، وNode.js/Python للخوادم، وقواعد بيانات سحابية متقدمة.",
        q4: "ما هي سياسة التعديلات وضمان رضا العميل؟",
        a4: "رضاك الكامل مضمون دون أي مساومة. تشمل باقاتنا ما يصل إلى 3 جولات تعديل شاملة لتنقيح التفاصيل الدقيقة، الألوان، النصوص، والتنسيقات حتى نصل للنتيجة المثالية التي تطمح إليها."
      },
      contact: {
        badge: "دعنا نصنع شيئاً استثنائياً معاً",
        title: "ابدأ مشروعك الآن",
        subtitle: "جاهز لتطوير أعمالك ونقل علامتك للمستوى التالي؟ املأ النموذج أو تواصل معنا مباشرة عبر قنواتنا الرسمية أدناه.",
        nameLabel: "الاسم الكريم",
        emailField: "البريد الإلكتروني",
        emailError: "يرجى كتابة بريد إلكتروني صالح (مثال: name@domain.com)",
        serviceLabel: "الخدمة المطلوبة",
        serviceOptGeneral: "استفسار عام / طلب مخصص",
        budgetLabel: "الميزانية التقريبية",
        timelineLabel: "المدة الزمنية المتوقعة",
        msgLabel: "تفاصيل المشروع",
        submitBtn: "إرسال الطلب الآن",
        emailLabel: "البريد الإلكتروني المباشر",
        copyBtn: "نسخ",
        waLabel: "محادثة واتساب مباشرة",
        fbLabel: "صفحة فيسبوك الرسمية",
        channelLabel: "قناة فيسبوك المجتمعية",
        privacyPromise: "بياناتك في أمان تام. نلتزم باتفاقيات السرية (NDA) ولا نشارك أي تفاصيل لمشروعك مع أي طرف خارجي."
      },
      footer: {
        summary: "استوديو احترافي متخصص في برمجة وتطوير الويب المتكامل وتصاميم الجرافيك الإبداعية (فوتوشوب). نبتكر منتجات رقمية فائقة السرعة وأعمالاً فنية استثنائية.",
        quickLinks: "روابط سريعة",
        servicesTitle: "الخدمات",
        connectTitle: "قنوات التواصل",
        signature: "صُمّم وبُرمج بواسطة YOUSSEF HILAL"
      },
      cookie: {
        text: "يستخدم موقع فالكون لوجيك إعدادات التخزين المحلي لضمان سرعة التصفح الفائقة وتخزين تفضيلات اللغة والمظهر.",
        accept: "موافق",
        decline: "إغلاق"
      }
    }
  };

  // Default initial projects state
  const DEFAULT_PROJECTS = [
    {
      id: "1",
      title: "Nexus Financial SaaS Platform",
      titleAr: "منصة نكسس للخدمات المالية السحابية",
      category: "web",
      description: "Enterprise fintech analytics portal featuring real-time transaction processing, interactive charts, and multi-tenant security.",
      descriptionAr: "بوابة سحابية متقدمة للتحليلات المالية تدعم معالجة المعاملات الفورية، الرسوم البيانية التفاعلية، والأمان المؤسسي.",
      image: "./assets/projects/project-saas.svg",
      tech: "React, Next.js, Tailwind, PostgreSQL",
      demoUrl: "https://falconlogic.tech/#portfolio"
    },
    {
      id: "2",
      title: "Neo-Tokyo 2099 Composite",
      titleAr: "دمج سينمائي لطوكيو المستقبلية 2099",
      category: "design",
      description: "High-fidelity photo manipulation blending multiple cityscapes, sci-fi vehicles, volumetric mist, and complex neon reflection mapping.",
      descriptionAr: "معالجة وتعديل فوتوشوب سريالي يدمج معالم حضرية مستقبلية، مركبات فضائية، وضباب حجمي مع إضاءات نيون عاكسة.",
      image: "./assets/projects/project-cyberpunk.svg",
      tech: "Adobe Photoshop, Matte Painting, Color Grading",
      demoUrl: "https://falconlogic.tech/#portfolio"
    },
    {
      id: "3",
      title: "Aura Luxury Watch Store",
      titleAr: "متجر أورا للساعات الفاخرة",
      category: "web",
      description: "Bespoke e-commerce storefront for an elite Swiss watchmaker with instant search, interactive 360 viewer, and seamless checkout.",
      descriptionAr: "متجر إلكتروني فاخر لصناع الساعات السويسرية يدعم البحث الفوري، عارض ثلاثي الأبعاد، ودفع إلكتروني آمن وسلس.",
      image: "./assets/projects/project-ecommerce.svg",
      tech: "Next.js, Node.js, Stripe, GraphQL",
      demoUrl: "https://falconlogic.tech/#portfolio"
    },
    {
      id: "4",
      title: "Nova Pulse Commercial Poster",
      titleAr: "بوستر إعلاني تجاري لمشروب نوفا بلس",
      category: "design",
      description: "Commercial key visual with dynamic liquid splashes, stellar cosmic nebulae, lighting fractures, and bespoke metallic can rendering.",
      descriptionAr: "بوستر إعلاني لافت يجمع تناثر السوائل الديناميكي، السدم الكونية، وانكسارات الضوء المعدنية على علبة المشروب.",
      image: "./assets/projects/project-poster.svg",
      tech: "Photoshop Key Visual, Liquid Compositing, Advertising",
      demoUrl: "https://falconlogic.tech/#portfolio"
    },
    {
      id: "5",
      title: "Pulse Healthcare Telemetry OS",
      titleAr: "نظام بالس لإدارة بيانات المرضى الحيوية",
      category: "web",
      description: "HIPAA-compliant telemedicine dashboard monitoring patient vitals in real time with WebSocket connectivity and doctor scheduling.",
      descriptionAr: "لوحة تحكم طبية متوافقة مع معايير HIPAA لمراقبة المؤشرات الحيوية للمرضى لحظياً عبر WebSockets وجدولة الأطباء.",
      image: "./assets/projects/project-healthcare.svg",
      tech: "Vue.js, Nuxt, WebSockets, Chart.js",
      demoUrl: "https://falconlogic.tech/#portfolio"
    },
    {
      id: "6",
      title: "Valkyrie Esports Visual Identity",
      titleAr: "الهوية البصرية الكاملة لفريق فالكيري للرياضات الإلكترونية",
      category: "design",
      description: "Complete brand reboot for an international esports organization, including team jersey mockups, Twitch stream overlays, and mascot emblem.",
      descriptionAr: "إعادة تصميم شاملة لهوية فريق ألعاب إلكتروني دولي، تشمل شعار النسر الحركي، أطقم الفريق، وقوالب البث المباشر على Twitch.",
      image: "./assets/projects/project-esports.svg",
      tech: "Brand Identity, Vector, Photoshop, Merch Design",
      demoUrl: "https://falconlogic.tech/#portfolio"
    }
  ];

  // ==========================================
  // 2. STATE CONTROLLER (WITH LOCALSTORAGE)
  // ==========================================
  const State = {
    lang: 'en',
    theme: 'dark',
    projects: [],
    customHeadlines: {},
    liveEditActive: false,
    bossUnlocked: false,

    init() {
      try {
        // Language
        const savedLang = localStorage.getItem('falcon_lang');
        if (savedLang === 'ar' || savedLang === 'en') {
          this.lang = savedLang;
        }

        // Theme
        const savedTheme = localStorage.getItem('falcon_theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
          this.theme = savedTheme;
        }

        // Projects
        const savedProjects = localStorage.getItem('falcon_projects');
        if (savedProjects) {
          const parsed = JSON.parse(savedProjects);
          if (Array.isArray(parsed) && parsed.length > 0) {
            this.projects = parsed;
          } else {
            this.projects = [...DEFAULT_PROJECTS];
          }
        } else {
          this.projects = [...DEFAULT_PROJECTS];
          this.saveProjects();
        }

        // Headlines
        const savedHeadlines = localStorage.getItem('falcon_headlines');
        if (savedHeadlines) {
          this.customHeadlines = JSON.parse(savedHeadlines);
        }

        // Boss Unlocked status in session
        if (sessionStorage.getItem('falcon_boss_unlocked') === 'true') {
          this.bossUnlocked = true;
        }
      } catch (err) {
        console.warn('Storage init fallback:', err);
        this.projects = [...DEFAULT_PROJECTS];
      }
    },

    saveProjects() {
      try {
        localStorage.setItem('falcon_projects', JSON.stringify(this.projects));
      } catch (e) {
        console.error('Failed to save projects:', e);
      }
    },

    saveHeadlines() {
      try {
        localStorage.setItem('falcon_headlines', JSON.stringify(this.customHeadlines));
      } catch (e) {
        console.error('Failed to save headlines:', e);
      }
    }
  };

  // ==========================================
  // 3. TOAST NOTIFICATION UTILITY
  // ==========================================
  function showToast(message, icon = 'fa-circle-check', duration = 3500) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `
      <i class="fa-solid ${icon} text-cyan-400 text-lg"></i>
      <span class="flex-1 font-medium">${message}</span>
      <button class="text-slate-400 hover:text-white" onclick="this.parentElement.remove()">
        <i class="fa-solid fa-xmark text-xs"></i>
      </button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // ==========================================
  // 4. PRELOADER CONTROLLER (400ms Sleek Fade)
  // ==========================================
  function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    const fadeOut = () => {
      preloader.style.opacity = '0';
      preloader.style.pointerEvents = 'none';
      setTimeout(() => {
        try {
          preloader.remove();
        } catch (_) {}
      }, 400);
    };

    // Ensure it fades out within 400-500ms even if window load fires earlier
    if (document.readyState === 'complete') {
      setTimeout(fadeOut, 400);
    } else {
      window.addEventListener('load', () => {
        setTimeout(fadeOut, 400);
      });
      // Fallback timer
      setTimeout(fadeOut, 800);
    }
  }

  // ==========================================
  // 5. BILINGUAL TRANSLATION ENGINE
  // ==========================================
  function applyLanguage(lang) {
    State.lang = lang;
    try {
      localStorage.setItem('falcon_lang', lang);
    } catch (_) {}

    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update Language Toggle Button Label
    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
      langLabel.textContent = lang === 'ar' ? 'EN' : 'عربي';
    }

    // Translate all elements with data-i18n
    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;

      const keys = key.split('.');
      let val = dict;
      for (const k of keys) {
        if (val && typeof val === 'object' && k in val) {
          val = val[k];
        } else {
          val = null;
          break;
        }
      }

      if (val !== null && typeof val === 'string') {
        el.textContent = val;
      }
    });

    // Translate Inputs / Placeholders
    const nameInput = document.getElementById('contact-name');
    if (nameInput) {
      nameInput.placeholder = lang === 'ar' ? 'مثال: محمد أحمد' : 'e.g. John Doe';
    }

    const emailInput = document.getElementById('contact-email');
    if (emailInput) {
      emailInput.placeholder = lang === 'ar' ? 'مثال: you@company.com' : 'e.g. you@company.com';
    }

    const msgInput = document.getElementById('contact-message');
    if (msgInput) {
      msgInput.placeholder = lang === 'ar'
        ? 'أخبرنا عن أهداف مشروعك، نوع التصميم أو موقع الويب الذي تحتاجه، والخدمات المطلوبة...'
        : 'Tell us about your brand, goals, target audience, and any reference websites or design styles you like...';
    }

    // Apply any saved custom headlines over the defaults
    applyCustomHeadlines();

    // Re-render Portfolio projects with translated text
    renderPortfolioGrid();
  }

  function applyCustomHeadlines() {
    const headlines = State.customHeadlines;
    const lang = State.lang;

    const heroHeadlineEl = document.getElementById('hero-headline');
    if (heroHeadlineEl) {
      if (lang === 'ar' && headlines.heroAr) {
        heroHeadlineEl.textContent = headlines.heroAr;
      } else if (lang === 'en' && headlines.heroEn) {
        heroHeadlineEl.textContent = headlines.heroEn;
      }
    }

    const heroSubEl = document.getElementById('hero-subtitle');
    if (heroSubEl) {
      if (lang === 'ar' && headlines.subAr) {
        heroSubEl.textContent = headlines.subAr;
      } else if (lang === 'en' && headlines.subEn) {
        heroSubEl.textContent = headlines.subEn;
      }
    }

    if (headlines.statProjects) {
      const p = document.getElementById('stat-projects');
      if (p) p.setAttribute('data-target', headlines.statProjects);
    }

    if (headlines.statSatisfaction) {
      const s = document.getElementById('stat-satisfaction');
      if (s) s.setAttribute('data-target', headlines.statSatisfaction);
    }

    if (headlines.statSupport) {
      const sp = document.getElementById('stat-support');
      if (sp) sp.textContent = headlines.statSupport;
    }
  }

  // ==========================================
  // 6. THEME CONTROLLER (Dark / Light)
  // ==========================================
  function applyTheme(theme) {
    State.theme = theme;
    try {
      localStorage.setItem('falcon_theme', theme);
    } catch (_) {}

    const html = document.documentElement;
    html.setAttribute('data-theme', theme);

    if (theme === 'light') {
      html.classList.remove('dark');
      document.body.classList.remove('bg-[#05080F]', 'text-[#F8FAFC]');
      document.body.classList.add('bg-[#FFFFFF]', 'text-[#0F172A]');
    } else {
      html.classList.add('dark');
      document.body.classList.remove('bg-[#FFFFFF]', 'text-[#0F172A]');
      document.body.classList.add('bg-[#05080F]', 'text-[#F8FAFC]');
    }

    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-moon text-sm text-cyan-600';
      } else {
        themeIcon.className = 'fa-solid fa-sun text-sm text-amber-400';
      }
    }
  }

  // ==========================================
  // 7. ANIMATED STAT COUNTER
  // ==========================================
  function initStatCounters() {
    const statCounters = document.querySelectorAll('.stat-counter');
    if (!statCounters.length) return;

    let hasRun = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasRun) {
          hasRun = true;
          statCounters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
            let current = 0;
            const step = Math.ceil(target / 40);
            const interval = setInterval(() => {
              current += step;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(interval);
              } else {
                counter.textContent = current;
              }
            }, 30);
          });
        }
      });
    }, { threshold: 0.3 });

    statCounters.forEach((c) => observer.observe(c));
  }

  // ==========================================
  // 8. INTERACTIVE BEFORE & AFTER SLIDER
  // ==========================================
  function initBeforeAfterSlider() {
    const container = document.getElementById('ba-slider');
    const overlay = document.getElementById('ba-overlay');
    const divider = document.getElementById('ba-divider');
    const range = document.getElementById('ba-range');

    if (!container || !overlay || !divider) return;

    let isDragging = false;

    function updateSlider(clientX) {
      const rect = container.getBoundingClientRect();
      let pos = (clientX - rect.left) / rect.width;

      if (pos < 0.02) pos = 0.02;
      if (pos > 0.98) pos = 0.98;

      const percentage = (pos * 100).toFixed(2);
      overlay.style.width = `${percentage}%`;
      divider.style.left = `${percentage}%`;

      if (range) range.value = percentage;
    }

    // Mouse events
    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      updateSlider(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch events for mobile
    container.addEventListener('touchstart', (e) => {
      isDragging = true;
      if (e.touches[0]) updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!isDragging || !e.touches[0]) return;
      updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', () => {
      isDragging = false;
    });

    // Range input fallback for keyboard accessibility
    if (range) {
      range.addEventListener('input', (e) => {
        const val = e.target.value;
        overlay.style.width = `${val}%`;
        divider.style.left = `${val}%`;
      });
    }
  }

  // ==========================================
  // 9. SERVICE SELECTION SMOOTH FLOW
  // ==========================================
  function initServiceSelection() {
    const selectButtons = document.querySelectorAll('.select-service-btn');
    const serviceDropdown = document.getElementById('contact-service');
    const contactSection = document.getElementById('contact');

    selectButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const serviceName = btn.getAttribute('data-service');
        if (!serviceName || !serviceDropdown) return;

        // Try exact value or matching text
        let found = false;
        for (let i = 0; i < serviceDropdown.options.length; i++) {
          const opt = serviceDropdown.options[i];
          if (opt.value === serviceName || opt.text.includes(serviceName)) {
            serviceDropdown.selectedIndex = i;
            found = true;
            break;
          }
        }

        // Scroll to contact form smoothly
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Flash visual highlight on the dropdown
        serviceDropdown.style.borderColor = '#00E5FF';
        serviceDropdown.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.7)';
        setTimeout(() => {
          serviceDropdown.focus();
        }, 500);
        setTimeout(() => {
          serviceDropdown.style.borderColor = '';
          serviceDropdown.style.boxShadow = '';
        }, 2000);

        showToast(
          State.lang === 'ar' ? `تم تحديد: ${serviceName}` : `Selected: ${serviceName}`,
          'fa-check'
        );
      });
    });
  }

  // ==========================================
  // 10. PORTFOLIO GRID & PROJECT PREVIEW MODAL
  // ==========================================
  let currentFilter = 'all';

  function renderPortfolioGrid() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    const filtered = State.projects.filter((p) => {
      if (currentFilter === 'all') return true;
      return p.category === currentFilter;
    });

    grid.innerHTML = '';

    filtered.forEach((p) => {
      const isArabic = State.lang === 'ar';
      const title = isArabic && p.titleAr ? p.titleAr : p.title;
      const desc = isArabic && p.descriptionAr ? p.descriptionAr : p.description;
      const categoryLabel = p.category === 'web'
        ? (isArabic ? 'تطوير ويب' : 'Web Dev')
        : (isArabic ? 'فوتوشوب' : 'Photoshop');

      const card = document.createElement('div');
      card.className = 'portfolio-card glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400/60 transition-all glow-hover flex flex-col group cursor-pointer';
      card.setAttribute('data-id', p.id);
      card.setAttribute('data-category', p.category);

      const techBadges = (p.tech || '')
        .split(',')
        .map((t) => `<span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300">${t.trim()}</span>`)
        .join(' ');

      card.innerHTML = `
        <div class="relative aspect-video overflow-hidden bg-[#05080F]">
          <img src="${p.image}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          <span class="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold ${p.category === 'web' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40' : 'bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-400/40'} backdrop-blur-md">${categoryLabel}</span>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">${title}</h3>
            <p class="text-xs text-slate-400 leading-relaxed mb-4">${desc}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              ${techBadges}
            </div>
          </div>
          <div class="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-bold text-cyan-400">
            <span>${isArabic ? 'عرض تفاصيل المشروع' : 'View Case Study'}</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProjectModal(p));
      grid.appendChild(card);
    });
  }

  function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => {
          b.className = 'portfolio-filter-btn px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-slate-300 hover:text-white';
        });

        btn.className = 'portfolio-filter-btn px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-gradient-to-r from-[#00A8FF] to-[#00E5FF] text-black shadow-sm';
        currentFilter = btn.getAttribute('data-filter') || 'all';
        renderPortfolioGrid();
      });
    });
  }

  function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('project-modal-content');
    if (!modal || !content) return;

    const isArabic = State.lang === 'ar';
    const title = isArabic && project.titleAr ? project.titleAr : project.title;
    const desc = isArabic && project.descriptionAr ? project.descriptionAr : project.description;
    const categoryLabel = project.category === 'web'
      ? (isArabic ? 'تطوير وبرمجة الويب' : 'Full-Stack Web Development')
      : (isArabic ? 'تصميم ومعالجة فوتوشوب' : 'Creative Graphic Design & Photoshop');

    const techBadges = (project.tech || '')
      .split(',')
      .map((t) => `<span class="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0D1322] border border-cyan-500/30 text-cyan-300">${t.trim()}</span>`)
      .join(' ');

    content.innerHTML = `
      <div class="space-y-6">
        <div class="relative rounded-2xl overflow-hidden aspect-video bg-black border border-slate-700">
          <img src="${project.image}" alt="${title}" class="w-full h-full object-cover">
          <span class="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-bold bg-[#05080F]/80 text-cyan-400 border border-cyan-400/40 backdrop-blur-md">
            ${categoryLabel}
          </span>
        </div>

        <div>
          <h3 class="text-2xl sm:text-3xl font-black text-white font-display mb-3">${title}</h3>
          <p class="text-sm text-slate-300 leading-relaxed">${desc}</p>
        </div>

        <div>
          <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">${isArabic ? 'التقنيات والأدوات المستخدمة' : 'Technology Stack & Tools'}</h4>
          <div class="flex flex-wrap gap-2">
            ${techBadges}
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
          <a href="${project.demoUrl || '#contact'}" target="_blank" rel="noopener noreferrer" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00A8FF] to-[#00E5FF] text-black font-bold text-xs tracking-wide hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] transition-all flex items-center gap-2">
            <span>${isArabic ? 'زيارة الرابط المباشر' : 'Visit Live Demo / Source'}</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
          </a>
          <button id="modal-close-action" class="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white font-bold text-xs">
            ${isArabic ? 'إغلاق' : 'Close Preview'}
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const closeBtn = document.getElementById('modal-close-action');
    if (closeBtn) closeBtn.onclick = () => closeProjectModal();
  }

  function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  function initProjectModalEvents() {
    const modal = document.getElementById('project-modal');
    const closeTopBtn = document.getElementById('close-project-modal');

    if (closeTopBtn) closeTopBtn.onclick = () => closeProjectModal();

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeProjectModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProjectModal();
    });
  }

  // ==========================================
  // 11. FAQ ACCORDION CONTROLLER
  // ==========================================
  function initFaqAccordion() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach((item) => {
      const toggle = item.querySelector('.faq-toggle');
      const content = item.querySelector('.faq-content');
      const chevron = item.querySelector('.fa-chevron-down');

      if (!toggle || !content) return;

      toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        // Close all other FAQs
        items.forEach((other) => {
          if (other !== item) {
            const otherToggle = other.querySelector('.faq-toggle');
            const otherContent = other.querySelector('.faq-content');
            const otherChevron = other.querySelector('.fa-chevron-down');
            if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
            if (otherContent) otherContent.classList.add('hidden');
            if (otherChevron) otherChevron.style.transform = 'rotate(0deg)';
          }
        });

        // Toggle current FAQ
        if (isExpanded) {
          toggle.setAttribute('aria-expanded', 'false');
          content.classList.add('hidden');
          if (chevron) chevron.style.transform = 'rotate(0deg)';
        } else {
          toggle.setAttribute('aria-expanded', 'true');
          content.classList.remove('hidden');
          if (chevron) chevron.style.transform = 'rotate(180deg)';
        }
      });
    });
  }

  // ==========================================
  // 12. STRICT CONTACT FORM & EMAIL VALIDATION
  // ==========================================
  const STRICT_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function validateEmail(email) {
    if (!email) return false;
    return STRICT_EMAIL_REGEX.test(email.trim());
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-message');
    const emailError = document.getElementById('email-error');
    const emailValidIcon = document.getElementById('email-valid-icon');
    const nameError = document.getElementById('name-error');
    const msgError = document.getElementById('msg-error');
    const submitBtn = document.getElementById('submit-btn');
    const submitBtnText = document.getElementById('submit-btn-text');
    const formStatus = document.getElementById('form-status');
    const copyEmailBtn = document.getElementById('copy-email-btn');

    if (!form || !emailInput) return;

    // Real-time Email Validation & Stealth Boss Trigger on Typing
    emailInput.addEventListener('input', () => {
      const val = emailInput.value.trim();

      // Stealth Boss Trigger: Exact case-insensitive match for personal email
      if (val.toLowerCase() === 'youssefhilaal@gmail.com') {
        revealBossButton();
      }

      if (!val) {
        emailInput.classList.remove('border-red-500', 'border-emerald-500');
        if (emailError) emailError.classList.add('hidden');
        if (emailValidIcon) emailValidIcon.classList.add('hidden');
        return;
      }

      if (validateEmail(val)) {
        emailInput.classList.remove('border-red-500');
        emailInput.classList.add('border-emerald-500');
        if (emailError) emailError.classList.add('hidden');
        if (emailValidIcon) emailValidIcon.classList.remove('hidden');
      } else {
        emailInput.classList.remove('border-emerald-500');
        emailInput.classList.add('border-red-500');
        if (emailError) emailError.classList.remove('hidden');
        if (emailValidIcon) emailValidIcon.classList.add('hidden');
      }
    });

    // Form Submission Handler
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('border-red-500');
        if (nameError) nameError.classList.remove('hidden');
        isValid = false;
      } else {
        nameInput.classList.remove('border-red-500');
        if (nameError) nameError.classList.add('hidden');
      }

      // Validate Strict Email
      const emailVal = emailInput.value.trim();
      if (!validateEmail(emailVal)) {
        emailInput.classList.add('border-red-500');
        if (emailError) emailError.classList.remove('hidden');
        if (emailValidIcon) emailValidIcon.classList.add('hidden');
        emailInput.focus();
        isValid = false;
      } else {
        emailInput.classList.remove('border-red-500');
        if (emailError) emailError.classList.add('hidden');
      }

      // Validate Message
      if (!msgInput.value.trim() || msgInput.value.trim().length < 8) {
        msgInput.classList.add('border-red-500');
        if (msgError) msgError.classList.remove('hidden');
        isValid = false;
      } else {
        msgInput.classList.remove('border-red-500');
        if (msgError) msgError.classList.add('hidden');
      }

      if (!isValid) {
        showToast(
          State.lang === 'ar' ? 'يرجى تصحيح الحقول المحددة باللون الأحمر' : 'Please check required fields marked in red',
          'fa-triangle-exclamation'
        );
        return;
      }

      // UI Submitting state
      if (submitBtn) submitBtn.disabled = true;
      if (submitBtnText) submitBtnText.textContent = State.lang === 'ar' ? 'جارٍ الإرسال...' : 'Submitting...';

      const formData = new FormData(form);
      const accessKey = formData.get('access_key');

      // Check if Web3Forms key is set or is placeholder
      const isPlaceholderKey = !accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE';

      if (!isPlaceholderKey) {
        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
          });

          const resJson = await response.json();
          if (resJson.success) {
            handleSuccessSubmission();
            return;
          } else {
            console.warn('Web3Forms returned error, triggering mailto fallback:', resJson);
            triggerMailtoFallback(formData);
          }
        } catch (fetchErr) {
          console.warn('Web3Forms network error, triggering mailto fallback:', fetchErr);
          triggerMailtoFallback(formData);
        }
      } else {
        // Automatic graceful fallback to direct mailto
        triggerMailtoFallback(formData);
      }
    });

    function handleSuccessSubmission() {
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.textContent = State.lang === 'ar' ? 'تم الإرسال بنجاح!' : 'Message Sent!';

      if (formStatus) {
        formStatus.className = 'p-4 rounded-xl text-xs font-semibold bg-emerald-950/80 border border-emerald-400 text-emerald-300 block';
        formStatus.textContent = State.lang === 'ar'
          ? 'شكراً لك! تم استلام رسالتك بنجاح وسيتواصل معك يوسف هلال في أسرع وقت.'
          : 'Thank you! Your inquiry was received successfully. Youssef Hilal will get back to you shortly.';
      }

      showToast(
        State.lang === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Inquiry sent successfully!',
        'fa-circle-check'
      );

      form.reset();
      if (emailValidIcon) emailValidIcon.classList.add('hidden');

      setTimeout(() => {
        if (submitBtnText) submitBtnText.textContent = State.lang === 'ar' ? 'إرسال الطلب الآن' : 'Send Inquiry Now';
      }, 4000);
    }

    function triggerMailtoFallback(formData) {
      if (submitBtn) submitBtn.disabled = false;
      if (submitBtnText) submitBtnText.textContent = State.lang === 'ar' ? 'تم فتح تطبيق البريد' : 'Email Client Opened';

      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const service = formData.get('service') || '';
      const budget = formData.get('budget') || '';
      const timeline = formData.get('timeline') || '';
      const message = formData.get('message') || '';

      const subject = encodeURIComponent(`Falcon Logic Inquiry: ${service} by ${name}`);
      const body = encodeURIComponent(
        `Hello Youssef,\n\nI would like to discuss a project with Falcon Logic:\n\n- Client Name: ${name}\n- Client Email: ${email}\n- Selected Service: ${service}\n- Approximate Budget: ${budget}\n- Timeline: ${timeline}\n\nProject Details:\n${message}\n\nBest regards,\n${name}`
      );

      // Open mailto link
      window.location.href = `mailto:youssefhilaal@gmail.com?subject=${subject}&body=${body}`;

      if (formStatus) {
        formStatus.className = 'p-4 rounded-xl text-xs font-semibold bg-cyan-950/80 border border-cyan-400 text-cyan-300 block';
        formStatus.textContent = State.lang === 'ar'
          ? 'تم فتح تطبيق البريد الخاص بك لإرسال الرسالة مباشرة إلى youssefhilaal@gmail.com.'
          : 'Opening your default mail client to deliver your inquiry directly to youssefhilaal@gmail.com.';
      }

      showToast(
        State.lang === 'ar' ? 'تم تجهيز رسالتك عبر البريد المباشر' : 'Prepared direct email to Youssef',
        'fa-envelope'
      );

      setTimeout(() => {
        if (submitBtnText) submitBtnText.textContent = State.lang === 'ar' ? 'إرسال الطلب الآن' : 'Send Inquiry Now';
      }, 4000);
    }

    // One-Click Copy Email Button
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener('click', async () => {
        const email = 'youssefhilaal@gmail.com';
        try {
          await navigator.clipboard.writeText(email);
          showToast(
            State.lang === 'ar' ? 'تم نسخ البريد الإلكتروني: youssefhilaal@gmail.com' : 'Copied email to clipboard: youssefhilaal@gmail.com',
            'fa-copy'
          );
        } catch (_) {
          // Fallback prompt
          window.prompt('Copy email:', email);
        }
      });
    }
  }

  // ==========================================
  // 13. STEALTH "BOSS" TRIGGER & CONTROL PANEL
  // ==========================================
  function revealBossButton() {
    const bossBtn = document.getElementById('boss-btn');
    if (!bossBtn) return;

    State.bossUnlocked = true;
    try {
      sessionStorage.setItem('falcon_boss_unlocked', 'true');
    } catch (_) {}

    bossBtn.style.display = 'flex';
    showToast(
      '👑 Welcome Boss Youssef! Control panel activated.',
      'fa-crown',
      4000
    );
  }

  function initBossPanel() {
    const bossBtn = document.getElementById('boss-btn');
    const bossModal = document.getElementById('boss-modal');
    const closeBossModal = document.getElementById('close-boss-modal');
    const hideBossAction = document.getElementById('hide-boss-btn-action');

    // If unlocked in session, show it
    if (State.bossUnlocked && bossBtn) {
      bossBtn.style.display = 'flex';
    }

    if (bossBtn && bossModal) {
      bossBtn.addEventListener('click', () => {
        populateBossPanel();
        bossModal.classList.remove('hidden');
        bossModal.classList.add('flex');
      });
    }

    if (closeBossModal && bossModal) {
      closeBossModal.addEventListener('click', () => {
        bossModal.classList.add('hidden');
        bossModal.classList.remove('flex');
      });
    }

    if (hideBossAction && bossBtn && bossModal) {
      hideBossAction.addEventListener('click', () => {
        State.bossUnlocked = false;
        try {
          sessionStorage.removeItem('falcon_boss_unlocked');
        } catch (_) {}
        bossBtn.style.display = 'none';
        bossModal.classList.add('hidden');
        bossModal.classList.remove('flex');
        showToast('Boss button locked & hidden', 'fa-lock');
      });
    }

    // Boss Tab switching
    const tabButtons = document.querySelectorAll('.boss-tab-btn');
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        tabButtons.forEach((b) => {
          b.className = 'boss-tab-btn px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 text-slate-300 hover:text-white';
        });
        btn.className = 'boss-tab-btn px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 text-black shadow-sm';

        const targetTab = btn.getAttribute('data-tab');
        document.querySelectorAll('.boss-tab-content').forEach((content) => {
          if (content.id === targetTab) {
            content.classList.remove('hidden');
          } else {
            content.classList.add('hidden');
          }
        });
      });
    });

    initBossProjectsCRUD();
    initBossHeadlines();
    initBossLiveEdit();
    initBossDataSync();
  }

  function populateBossPanel() {
    renderBossProjectsList();

    // Populate Headlines Tab
    const h = State.customHeadlines;
    const heroEn = document.getElementById('boss-headline-en');
    const heroAr = document.getElementById('boss-headline-ar');
    const subEn = document.getElementById('boss-subtitle-en');
    const subAr = document.getElementById('boss-subtitle-ar');
    const pCount = document.getElementById('boss-stat-projects');
    const sCount = document.getElementById('boss-stat-satisfaction');
    const spText = document.getElementById('boss-stat-support');

    if (heroEn) heroEn.value = h.heroEn || TRANSLATIONS.en.hero.title;
    if (heroAr) heroAr.value = h.heroAr || TRANSLATIONS.ar.hero.title;
    if (subEn) subEn.value = h.subEn || TRANSLATIONS.en.hero.subtitle;
    if (subAr) subAr.value = h.subAr || TRANSLATIONS.ar.hero.subtitle;
    if (pCount) pCount.value = h.statProjects || 50;
    if (sCount) sCount.value = h.statSatisfaction || 100;
    if (spText) spText.value = h.statSupport || '24/7';
  }

  // Projects CRUD inside Boss Panel
  function renderBossProjectsList() {
    const list = document.getElementById('boss-projects-list');
    if (!list) return;

    list.innerHTML = '';

    State.projects.forEach((proj, idx) => {
      const row = document.createElement('div');
      row.className = 'p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4';
      row.innerHTML = `
        <div class="flex items-center gap-3">
          <img src="${proj.image}" alt="${proj.title}" class="w-12 h-12 rounded-lg object-cover bg-black border border-slate-700">
          <div>
            <div class="text-xs font-bold text-white">${proj.title}</div>
            <div class="text-[10px] text-cyan-400 uppercase">${proj.category === 'web' ? 'Web Development' : 'Photoshop Design'}</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button class="edit-proj-btn px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300 hover:text-white" data-index="${idx}">
            <i class="fa-solid fa-pen"></i> Edit
          </button>
          <button class="del-proj-btn px-2.5 py-1 rounded bg-red-950/60 text-xs text-red-400 hover:text-red-300 border border-red-500/30" data-index="${idx}">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
      list.appendChild(row);
    });

    // Attach Edit & Delete events
    list.querySelectorAll('.edit-proj-btn').forEach((b) => {
      b.onclick = () => {
        const i = parseInt(b.getAttribute('data-index'), 10);
        openEditProjectForm(State.projects[i]);
      };
    });

    list.querySelectorAll('.del-proj-btn').forEach((b) => {
      b.onclick = () => {
        const i = parseInt(b.getAttribute('data-index'), 10);
        if (confirm(`Delete project "${State.projects[i].title}"?`)) {
          State.projects.splice(i, 1);
          State.saveProjects();
          renderBossProjectsList();
          renderPortfolioGrid();
          showToast('Project deleted successfully', 'fa-trash');
        }
      };
    });
  }

  function initBossProjectsCRUD() {
    const addBtn = document.getElementById('add-project-btn');
    const formContainer = document.getElementById('project-form-container');
    const cancelBtn = document.getElementById('cancel-project-btn');
    const saveBtn = document.getElementById('save-project-btn');
    const fileInput = document.getElementById('proj-image-file');

    if (addBtn && formContainer) {
      addBtn.onclick = () => {
        document.getElementById('edit-project-id').value = '';
        document.getElementById('project-form-title').textContent = 'Add New Project';
        document.getElementById('proj-title').value = '';
        document.getElementById('proj-category').value = 'web';
        document.getElementById('proj-desc').value = '';
        document.getElementById('proj-tech').value = '';
        document.getElementById('proj-url').value = '';
        document.getElementById('proj-image-url').value = '';
        if (fileInput) fileInput.value = '';
        formContainer.classList.remove('hidden');
      };
    }

    if (cancelBtn && formContainer) {
      cancelBtn.onclick = () => {
        formContainer.classList.add('hidden');
      };
    }

    // Handle Local Image Upload via FileReader
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          document.getElementById('proj-image-url').value = event.target.result;
          showToast('Image file loaded successfully', 'fa-image');
        };
        reader.readAsDataURL(file);
      });
    }

    if (saveBtn) {
      saveBtn.onclick = () => {
        const id = document.getElementById('edit-project-id').value;
        const title = document.getElementById('proj-title').value.trim();
        const category = document.getElementById('proj-category').value;
        const desc = document.getElementById('proj-desc').value.trim();
        const tech = document.getElementById('proj-tech').value.trim();
        const url = document.getElementById('proj-url').value.trim() || 'https://falconlogic.tech';
        const image = document.getElementById('proj-image-url').value.trim() || './assets/projects/project-saas.svg';

        if (!title || !desc) {
          alert('Please enter a title and description.');
          return;
        }

        if (id) {
          // Edit existing
          const item = State.projects.find((p) => p.id === id);
          if (item) {
            item.title = title;
            item.titleAr = title; // fallback sync
            item.category = category;
            item.description = desc;
            item.descriptionAr = desc;
            item.tech = tech;
            item.demoUrl = url;
            item.image = image;
          }
        } else {
          // Create new
          const newProject = {
            id: String(Date.now()),
            title,
            titleAr: title,
            category,
            description: desc,
            descriptionAr: desc,
            tech,
            demoUrl: url,
            image
          };
          State.projects.unshift(newProject);
        }

        State.saveProjects();
        renderBossProjectsList();
        renderPortfolioGrid();
        formContainer.classList.add('hidden');
        showToast('Portfolio projects updated successfully!', 'fa-circle-check');
      };
    }
  }

  function openEditProjectForm(proj) {
    const formContainer = document.getElementById('project-form-container');
    if (!formContainer) return;

    document.getElementById('edit-project-id').value = proj.id;
    document.getElementById('project-form-title').textContent = 'Edit Project';
    document.getElementById('proj-title').value = proj.title;
    document.getElementById('proj-category').value = proj.category;
    document.getElementById('proj-desc').value = proj.description;
    document.getElementById('proj-tech').value = proj.tech || '';
    document.getElementById('proj-url').value = proj.demoUrl || '';
    document.getElementById('proj-image-url').value = proj.image || '';

    formContainer.classList.remove('hidden');
  }

  function initBossHeadlines() {
    const saveBtn = document.getElementById('save-headlines-btn');
    if (!saveBtn) return;

    saveBtn.onclick = () => {
      State.customHeadlines = {
        heroEn: document.getElementById('boss-headline-en').value.trim(),
        heroAr: document.getElementById('boss-headline-ar').value.trim(),
        subEn: document.getElementById('boss-subtitle-en').value.trim(),
        subAr: document.getElementById('boss-subtitle-ar').value.trim(),
        statProjects: parseInt(document.getElementById('boss-stat-projects').value, 10) || 50,
        statSatisfaction: parseInt(document.getElementById('boss-stat-satisfaction').value, 10) || 100,
        statSupport: document.getElementById('boss-stat-support').value.trim() || '24/7'
      };

      State.saveHeadlines();
      applyCustomHeadlines();
      showToast('Headlines and counters saved successfully!', 'fa-circle-check');
    };
  }

  // Visual Live Editing Mode
  function initBossLiveEdit() {
    const toggleBtn = document.getElementById('toggle-live-edit-btn');
    const toolbar = document.getElementById('live-edit-toolbar');
    const saveToolbarBtn = document.getElementById('save-live-edits-btn');
    const exitToolbarBtn = document.getElementById('exit-live-edits-btn');

    function setLiveEdit(enable) {
      State.liveEditActive = enable;
      const editables = document.querySelectorAll('[data-editable="true"]');

      if (enable) {
        document.body.classList.add('live-editable-active');
        editables.forEach((el) => {
          el.setAttribute('contenteditable', 'true');
        });
        if (toolbar) toolbar.classList.remove('hidden');
        if (toolbar) toolbar.classList.add('flex');
        if (toggleBtn) toggleBtn.textContent = 'Disable Live Editing';

        // Close boss modal so user can click on page
        const bossModal = document.getElementById('boss-modal');
        if (bossModal) {
          bossModal.classList.add('hidden');
          bossModal.classList.remove('flex');
        }

        showToast('Live Editing Mode: Click text on the page to edit directly', 'fa-pen');
      } else {
        document.body.classList.remove('live-editable-active');
        editables.forEach((el) => {
          el.removeAttribute('contenteditable');
        });
        if (toolbar) toolbar.classList.add('hidden');
        if (toolbar) toolbar.classList.remove('flex');
        if (toggleBtn) toggleBtn.textContent = 'Enable Live Editing';
      }
    }

    if (toggleBtn) {
      toggleBtn.onclick = () => {
        setLiveEdit(!State.liveEditActive);
      };
    }

    if (saveToolbarBtn) {
      saveToolbarBtn.onclick = () => {
        // Collect edited values
        const heroEl = document.getElementById('hero-headline');
        const subEl = document.getElementById('hero-subtitle');

        if (heroEl) {
          if (State.lang === 'ar') State.customHeadlines.heroAr = heroEl.textContent.trim();
          else State.customHeadlines.heroEn = heroEl.textContent.trim();
        }

        if (subEl) {
          if (State.lang === 'ar') State.customHeadlines.subAr = subEl.textContent.trim();
          else State.customHeadlines.subEn = subEl.textContent.trim();
        }

        State.saveHeadlines();
        showToast('Visual edits saved to localStorage!', 'fa-floppy-disk');
      };
    }

    if (exitToolbarBtn) {
      exitToolbarBtn.onclick = () => {
        setLiveEdit(false);
      };
    }
  }

  function initBossDataSync() {
    const exportBtn = document.getElementById('export-json-btn');
    const importInput = document.getElementById('import-json-file');
    const resetBtn = document.getElementById('reset-defaults-btn');

    if (exportBtn) {
      exportBtn.onclick = () => {
        const payload = {
          version: '1.0',
          timestamp: new Date().toISOString(),
          projects: State.projects,
          headlines: State.customHeadlines,
          lang: State.lang,
          theme: State.theme
        };

        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `falcon_logic_data_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Data exported successfully!', 'fa-file-arrow-down');
      };
    }

    if (importInput) {
      importInput.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target.result);
            if (data.projects && Array.isArray(data.projects)) {
              State.projects = data.projects;
              State.saveProjects();
            }
            if (data.headlines) {
              State.customHeadlines = data.headlines;
              State.saveHeadlines();
            }
            renderBossProjectsList();
            renderPortfolioGrid();
            applyCustomHeadlines();
            showToast('JSON backup restored successfully!', 'fa-circle-check');
          } catch (err) {
            alert('Invalid JSON file format.');
          }
        };
        reader.readAsText(file);
      };
    }

    if (resetBtn) {
      resetBtn.onclick = () => {
        if (confirm('Reset all custom projects and headlines to default factory data?')) {
          try {
            localStorage.removeItem('falcon_projects');
            localStorage.removeItem('falcon_headlines');
          } catch (_) {}
          State.projects = [...DEFAULT_PROJECTS];
          State.customHeadlines = {};
          renderBossProjectsList();
          renderPortfolioGrid();
          applyLanguage(State.lang);
          showToast('Data reset to original defaults', 'fa-rotate-left');
        }
      };
    }
  }

  // ==========================================
  // 14. FLOATING WIDGETS & PRIVACY COOKIE BANNER
  // ==========================================
  function initFloatingWidgets() {
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      if (!backToTop) return;
      if (window.scrollY > 300) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none');
        backToTop.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTop.classList.add('opacity-0', 'pointer-events-none');
        backToTop.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }, { passive: true });

    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Cookie Banner
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieDecline = document.getElementById('cookie-decline');

    try {
      const cookieConsent = localStorage.getItem('falcon_cookie_consent');
      if (!cookieConsent && cookieBanner) {
        cookieBanner.classList.remove('hidden');
      }
    } catch (_) {}

    if (cookieAccept) {
      cookieAccept.onclick = () => {
        try {
          localStorage.setItem('falcon_cookie_consent', 'accepted');
        } catch (_) {}
        if (cookieBanner) cookieBanner.classList.add('hidden');
        showToast(
          State.lang === 'ar' ? 'تم حفظ تفضيلاتك بنجاح' : 'Preferences saved',
          'fa-check'
        );
      };
    }

    if (cookieDecline) {
      cookieDecline.onclick = () => {
        try {
          localStorage.setItem('falcon_cookie_consent', 'declined');
        } catch (_) {}
        if (cookieBanner) cookieBanner.classList.add('hidden');
      };
    }
  }

  // ==========================================
  // 15. MOBILE MENU DRAWER
  // ==========================================
  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    const links = document.querySelectorAll('.mobile-nav-link');

    if (!btn || !drawer) return;

    btn.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
    });

    links.forEach((l) => {
      l.addEventListener('click', () => {
        drawer.classList.add('hidden');
      });
    });
  }

  // ==========================================
  // 16. CORE INITIALIZATION
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize State
    State.init();

    // 2. Preloader
    initPreloader();

    // 3. Apply Theme & Language
    applyTheme(State.theme);
    applyLanguage(State.lang);

    // 4. Attach Language Switcher Button
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const nextLang = State.lang === 'en' ? 'ar' : 'en';
        applyLanguage(nextLang);
        showToast(
          nextLang === 'ar' ? 'تم التحويل إلى اللغة العربية' : 'Switched to English',
          'fa-globe'
        );
      });
    }

    // 5. Attach Theme Switcher Button
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const nextTheme = State.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    }

    // 6. Init Core Sections
    initStatCounters();
    initBeforeAfterSlider();
    initServiceSelection();
    initPortfolioFilters();
    initProjectModalEvents();
    initFaqAccordion();
    initContactForm();
    initBossPanel();
    initFloatingWidgets();
    initMobileMenu();

    console.log('Falcon Logic Agency Website initialized successfully (zero errors).');
  });

})();
