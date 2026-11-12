/**
 * All website copy, in Arabic (default, RTL) and French (LTR).
 * Keep both dictionaries in the same shape — a test checks they match.
 */

export type Lang = "ar" | "fr";

const ar = {
  meta: {
    title: "سبورتي | السبورة التفاعلية لأساتذة التعليم الابتدائي",
    description:
      "سبورتي تطبيق سبورة تفاعلية لنظام ويندوز، صُمّم لأساتذة التعليم الابتدائي في المغرب: كتابة ورسم، أدوات هندسية، خلفيات صفحات، وتنظيم الدروس وحفظها.",
  },
  common: {
    skipToContent: "انتقل إلى المحتوى",
    brandName: "سبورتي",
    menu: "القائمة",
    closeMenu: "إغلاق القائمة",
    languageLabel: "اختيار اللغة",
    toBeConfirmed: "سيُحدَّد لاحقاً",
  },
  nav: {
    features: "المميزات",
    showcase: "الواجهة",
    teachers: "للأساتذة",
    download: "التحميل",
    faq: "الأسئلة الشائعة",
    productSabourti: "سبورتي",
    productDocsAssetStudio: "Docs Asset Studio",
  },
  cta: {
    download: "تحميل لويندوز",
    discover: "اكتشف التطبيق",
  },
  hero: {
    eyebrow: "تطبيق سطح المكتب لنظام ويندوز",
    titleStart: "سبورة رقمية تساعدك على",
    titleHighlight: "الشرح والرسم والتفاعل",
    titleEnd: "داخل القسم",
    subtitle:
      "سبورتي تطبيق سبورة تفاعلية مستقل، صُمّم لأساتذة التعليم الابتدائي: اكتب وارسم، استعمل الأدوات الهندسية، ونظّم دروسك في صفحات تحفظها وتعود إليها متى شئت.",
    points: ["مصمَّم لنظام ويندوز", "للتعليم الابتدائي", "تطبيق مستقل"],
  },
  values: {
    title: "لماذا سبورتي؟",
    items: [
      {
        id: "classroom",
        title: "مصمَّم للتدريس داخل القسم",
        description: "أدوات تخدم الشرح أمام التلاميذ، بلا تعقيد.",
      },
      {
        id: "simple",
        title: "طريقة عمل بسيطة",
        description: "اختر الأداة وابدأ الشرح مباشرة.",
      },
      {
        id: "desktop",
        title: "تطبيق سطح مكتب لويندوز",
        description: "يُثبَّت على حاسوبك ويُفتح كتطبيق مستقل.",
      },
      {
        id: "independent",
        title: "مشروع مستقل",
        description: "طُوِّر مع التركيز على حاجات أستاذ الابتدائي.",
      },
    ],
  },
  features: {
    eyebrow: "المميزات",
    title: "كل ما تحتاجه لشرح الدرس على السبورة",
    description: "أدوات أساسية ومنظّمة، لتبقى عينك على التلاميذ وليس على البرنامج.",
    items: [
      {
        id: "draw",
        title: "الكتابة والرسم والتحرير",
        description:
          "اكتب وارسم بحرّية، امسح بالممحاة، حدّد العناصر لتحريكها، وأضف نصوصاً وأشكالاً إلى الصفحة.",
        tags: ["كتابة", "رسم", "ممحاة", "تحديد", "نص", "أشكال"],
      },
      {
        id: "pages",
        title: "تنظيم الدروس وحفظها",
        description: "قسّم درسك إلى صفحات، واحفظه لتعود إليه في الحصة القادمة.",
        tags: [],
      },
      {
        id: "backgrounds",
        title: "خلفيات الصفحات",
        description: "اختر الخلفية المناسبة للنشاط.",
        tags: ["بيضاء", "مسطّرة", "مربّعات", "سييس"],
      },
      {
        id: "geometry",
        title: "أدوات هندسية ووسائل القسم",
        description: "أدوات تعليمية للهندسة ووسائل مألوفة في القسم، لإنجاز الأنشطة أمام التلاميذ.",
        tags: [],
      },
      {
        id: "teacher",
        title: "أدوات الأستاذ",
        description:
          "قلم التمييز لإبراز المعلومة المهمة، والمؤشر الليزري لتوجيه انتباه التلاميذ أثناء الشرح.",
        tags: ["قلم التمييز", "المؤشر الليزري"],
      },
    ],
  },
  showcase: {
    eyebrow: "من داخل التطبيق",
    title: "لقطات شاشة حقيقية من سبورتي",
    description: "صور حقيقية من التطبيق، مرتّبة حسب الاستعمال. انقر على أي صورة لتكبيرها.",
    enlarge: "تكبير الصورة",
    viewer: {
      label: "عارض لقطات الشاشة",
      close: "إغلاق",
      previous: "الصورة السابقة",
      next: "الصورة التالية",
    },
    groups: {
      lessons: {
        title: "الدروس ومساحة العمل",
        description:
          "سبورة واسعة مع شريط الأدوات في الأعلى والتنقّل بين الصفحات في الأسفل، مع إمكانية تسجيل الدرس وإعادة تشغيله من البداية.",
      },
      geometry: {
        title: "الأشكال الهندسية",
        description: "ارسم الأشكال الهندسية وأضف إليها أسماءها ونصوص الدرس أمام التلاميذ.",
      },
      measurement: {
        title: "أدوات القياس",
        description:
          "مسطرة وبركار ومنقلة رقمية تُستعمل مباشرة على السبورة، وجداول تحويل مدرسية جاهزة للكتل والمساحات والسعات.",
      },
      teacher: {
        title: "أدوات مساعدة الأستاذ",
        description:
          "لوحة «أدوات الأستاذ» تجمع وسائل القسم، ومنها عجلة الاختيار العشوائي للتلاميذ والستارة التي تكشف المحتوى تدريجياً.",
      },
    },
  },
  screenshots: {
    dashboard: {
      caption: "شاشة البداية: اختر بين السبورة الرقمية واستوديو المستندات",
      alt: "لقطة شاشة لشاشة البداية في سبورتي بعنوان «اختر مساحة العمل للبدء»، مع بطاقتين: السبورة الرقمية واستوديو المستندات المتطور.",
    },
    emptyBoard: {
      caption: "سبورة جديدة جاهزة للدرس",
      alt: "لقطة شاشة لسبورة بيضاء فارغة، مع شريط الأدوات في الأعلى (أقلام، ممحاة، نص، ألوان وسُمك الخط) وأزرار التنقل بين الصفحات في الأسفل.",
    },
    lessonRecorder: {
      caption: "تسجيل الدرس وإعادة تشغيله من البداية",
      alt: "لقطة شاشة لسبورة بخلفية مسطّرة عليها جدول ومثلث ومتوازي مستطيلات وعبارة «سجل دروسك و أعد تشغيلها من البداية»، مع نافذة «إعادة تشغيل الدرس» وأزرار التشغيل وشريط التقدّم.",
    },
    lessonGeometry: {
      caption: "درس في الهندسة: الأشكال والمحيط",
      alt: "لقطة شاشة لدرس «الهندسة: الأشكال والمحيط» يعرض مربعاً ودائرة ومثلثاً مع أسمائها، وعبارة «المحيط = مجموع أطوال الأضلاع».",
    },
    mathInstruments: {
      caption: "المنقلة والبركار والمسطرة الرقمية، مع قائمة الأشكال ثنائية وثلاثية الأبعاد",
      alt: "لقطة شاشة تعرض منقلة ومسطرة مدرّجتين وبركاراً يرسم قوساً على السبورة، مع قائمة الأشكال ثنائية الأبعاد وثلاثية الأبعاد ولوحة أدوات الأستاذ.",
    },
    conversionTables: {
      caption: "جداول التحويل المدرسية: الكتل والمساحات والسعات",
      alt: "لقطة شاشة لثلاثة جداول تحويل على السبورة: وحدات الكتلة من t إلى mg، ووحدات المساحة من km² إلى mm²، ووحدات السعة من hL إلى mL، مع لوحة أدوات الأستاذ مفتوحة.",
    },
    teacherTools: {
      caption: "لوحة أدوات الأستاذ في الواجهة الفرنسية",
      alt: "لقطة شاشة للوحة «Outils de l’enseignant» بالفرنسية، تضم المؤقت وجداول التحويل والكشّاف والبركار والمسطرة والمنقلة وعجلة الاختيار العشوائي.",
    },
    studentWheel: {
      caption: "عجلة الاختيار العشوائي، مع استيراد أسماء التلاميذ من Excel / CSV",
      alt: "لقطة شاشة لنافذة عجلة الاختيار العشوائي: اختيار القسم، زر استيراد الأسماء من Excel / CSV، قائمة التلاميذ، خيار الدورة العادلة، وعجلة بزر «دوّر».",
    },
    curtain: {
      caption: "الستارة: اسحب الحواف لكشف المحتوى تدريجياً",
      alt: "لقطة شاشة لسبورة مغطّاة بستارة داكنة مخطّطة، تظهر عليها عبارة «ستارة — اسحب الحواف لكشف المحتوى تدريجيًا».",
    },
    welcome: {
      caption: "شاشة الترحيب عند فتح سبورتي",
      alt: "لقطة شاشة لشاشة الترحيب في سبورتي: الشعار على خلفية زرقاء داكنة، وعبارة «منصة التدريس الرقمية المتكاملة» وشريط التحميل.",
    },
    dasMainInterface: {
      caption: "الشاشة الرئيسية: أفلت المستندات لاستخراج صورها (PDF · XLSX · DOCX · PPTX)",
      alt: "لقطة شاشة للشاشة الرئيسية لـ Docs Asset Studio بالوضع الداكن، مع منطقة إفلات كبيرة بعنوان «أفلت المستندات هنا لاستخراج صورها» وشارات الصيغ PDF وXLSX وDOCX وPPTX.",
    },
    dasFileUpload: {
      caption: "مساحة إفلات المستندات — ملف واحد أو عدة ملفات دفعة واحدة",
      alt: "لقطة شاشة لمساحة إفلات فاتحة في Docs Asset Studio تقبل مستندات PDF وExcel وWord وPowerPoint، مع ملاحظة أن الملفات تُرتب تلقائيًا عند الإفلات.",
    },
    dasExtractedGallery: {
      caption: "المعرض بعد الاستخراج: بطاقات معاينة وأسماء مقترحة وتصنيفات",
      alt: "لقطة شاشة لمعرض بعد استخراج 78 صورة من ملف PowerPoint: بطاقات بصور مصغرة مع الأبعاد والحجم، شارات تصنيف، أسماء مقترحة بجانب كل صورة، وشريط أدوات للتصدير والتحديد.",
    },
    dasSelectionTools: {
      caption: "تحديد متعدد مع كشف النسخ المكررة (إطار أحمر) وحذف المحدد مع التراجع",
      alt: "لقطة شاشة لمعرض Docs Asset Studio بوضع التحديد: صورتان مكررتان من شريحة «Français» بإطار أحمر، شريط أدوات فيه «تحديد الكل» و«عكس» و«حذف»، وإشعار «تم حذف 2 صورة» مع زر «تراجع».",
    },
    dasImageSplitting: {
      caption: "تقسيم صورة واحدة تحتوي عدة عناصر إلى صور أصغر بالصفوف والأعمدة",
      alt: "لقطة شاشة لمحرر الصور في Docs Asset Studio يقسّم صورة «image31» إلى شبكة خلايا (3 أقسام) بخطوط متقطعة: كعكات وأبطال وبطاقات — لإنتاج صور مستقلة من كل خلية.",
    },
    dasImageEditor: {
      caption: "محرر الصور: تحديد أي عنصر داخل الصفحة وتصديره",
      alt: "لقطة شاشة لمحرر الصور في Docs Asset Studio يعرض صفحة كتاب «Français — Semaine 1»، مع إطار تحديد حول صورة داخل الصفحة وأزرار القص والتدوير وممحاة بيضاء.",
    },
    dasAppSettings: {
      caption: "الإعدادات: قص الهوامش والتدوير التلقائي، الحد الأدنى للحجم، حساسية التشابه وقالب الأسماء",
      alt: "لقطة شاشة للوحة «الإعدادات» في Docs Asset Studio: تفعيل القص والتدوير التلقائي، قص الهوامش البيضاء، أصغر حجم للصورة بالكيلوبايت، حساسية كشف التشابه، وقالب الأسماء المقترحة «loc_text».",
    },
    dasExportOptions: {
      caption: "التصدير: «للسبورة» (موصى به) بملف ZIP، أو منظّم مع فهرس CSV",
      alt: "لقطة شاشة لنافذة «تصدير الصور المحددة (89)» في Docs Asset Studio: خيار «منظّم + فهرس CSV»، وخيار «للسبورة (موصى به)» بملف ZIP جاهز للاستيراد في سبورتي مع حقل كلمة اختـيارية.",
    },
  },
  teachers: {
    eyebrow: "للأساتذة",
    title: "صُمّم لأستاذ التعليم الابتدائي",
    description:
      "من الحروف الأولى إلى الأشكال الهندسية، يرافقك سبورتي في الأنشطة اليومية للقسم، بالعربية والفرنسية والرياضيات والعلوم.",
    points: [
      "واجهة واضحة يسهل استعمالها أمام التلاميذ",
      "دروس محفوظة يمكن الرجوع إليها في أي حصة",
      "للاستعمال على حاسوب القسم، مع جهاز عرض أو شاشة كبيرة",
    ],
    subjects: [
      {
        id: "arabic",
        title: "اللغة العربية",
        description: "كتابة الحروف والكلمات على سطور واضحة، وإبراز المقاطع بقلم التمييز.",
        sample: "أ ب ت",
      },
      {
        id: "french",
        title: "اللغة الفرنسية",
        description: "التدرّب على الكتابة على خلفية سييس المألوفة لدى التلاميذ.",
        sample: "Aa Bb",
      },
      {
        id: "math",
        title: "الرياضيات",
        description: "رسم الأشكال واستعمال الأدوات الهندسية على خلفية المربّعات.",
        sample: "½ + ¼",
      },
      {
        id: "science",
        title: "النشاط العلمي",
        description: "رسم المخططات وكتابة البيانات عليها، وتوجيه الانتباه بالمؤشر الليزري.",
        sample: "H₂O",
      },
    ],
  },
  download: {
    eyebrow: "التحميل",
    title: "حمّل سبورتي لنظام ويندوز",
    description: "سبورتي تطبيق سطح مكتب يُثبَّت على حاسوبك. هذا الموقع للتعريف به فقط.",
    pendingTitle: "رابط التحميل سيُضاف قريباً",
    pendingDescription: "سيظهر زر التحميل هنا فور توفّر ملف التثبيت الرسمي.",
    button: "تحميل ملف التثبيت",
    platformNote: "ويندوز هو النظام المستهدف حالياً.",
    specsTitle: "معلومات الإصدار",
    specs: {
      platform: "النظام",
      version: "الإصدار الحالي",
      fileSize: "حجم الملف",
      requirements: "متطلبات النظام",
    },
    platformValue: "Windows",
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "أسئلة يطرحها الأساتذة",
    description: "إجابات واضحة عن طبيعة التطبيق وطريقة استعماله.",
    items: [
      {
        q: "هل سبورتي تطبيق ويب؟",
        a: "لا. سبورتي تطبيق سطح مكتب لنظام ويندوز يُثبَّت على الحاسوب، وليس موقعاً يُستعمل من المتصفح. هذا الموقع مخصّص للتعريف بالتطبيق فقط.",
      },
      {
        q: "هل يحتاج التطبيق إلى تثبيت؟",
        a: "نعم. بعد تحميل ملف التثبيت، يُثبَّت سبورتي على حاسوبك ويُفتح كأي تطبيق آخر على ويندوز.",
      },
      {
        q: "هل يعمل بدون إنترنت؟",
        a: "بعد التثبيت، صُمّم الاستعمال الأساسي للتطبيق ليعمل محلياً على حاسوبك. قد تحتاج بعض الأمور، مثل التحديثات، إلى اتصال بالإنترنت.",
      },
      {
        q: "هل توجد نسخة لنظام ماك؟",
        a: "لا نُعلن حالياً عن نسخة لماك. ويندوز هو النظام المستهدف في الوقت الحالي.",
      },
      {
        q: "لمن صُمّم سبورتي؟",
        a: "لأساتذة التعليم الابتدائي، خاصة في المغرب، لاستعماله داخل القسم في الشرح والرسم والتفاعل مع التلاميذ.",
      },
      {
        q: "أين أجد رابط التحميل؟",
        a: "سيُضاف رابط التحميل في قسم التحميل بهذه الصفحة فور توفّره.",
      },
    ],
  },
  sabourtiApp: {
    meta: {
      title: "سبورتي — السبورة الرقمية | سبورتي",
      description:
        "سبورتي تطبيق سبورة رقمية صُمّم لأساتذة التعليم الابتدائي: كتابة ورسم، أدوات هندسية ووسائل القسم، تنظيم الدروس في صفحات وحفظها، واستيراد الصور مباشرة من Docs Asset Studio.",
    },
    hero: {
      eyebrow: "تطبيق سطح المكتب لويندوز",
      name: "سبورتي",
      descriptor: "السبورة الرقمية",
      subtitle:
        "تطبيق سبورة تفاعلية صُمّم لأستاذ التعليم الابتدائي: اكتب وارسم، واستعمل الأدوات الهندسية ووسائل القسم، ونظّم دروسك في صفحات تحفظها وتعود إليها متى شئت.",
      points: ["مصمَّم لنظام ويندوز", "للتعليم الابتدائي", "تطبيق مستقل"],
      primaryCta: "اكتشف المميزات",
      secondaryCta: "التحميل",
    },
    integration: {
      eyebrow: "التكامل مع Docs Asset Studio",
      title: "استيراد الصور مباشرة من Docs Asset Studio",
      description:
        "جهّز صور دروسك من مستنداتك التعليمية بواسطة Docs Asset Studio، ثم استوردها دفعة واحدة إلى مكتبة سبورتي عبر ملف ZIP الجاهز للتصدير.",
      bullets: [
        "خيار «للسبورة» في Docs Asset Studio يولّد ملف ZIP جاهزًا للاستيراد",
        "كلمة اختـيارية اختيارية عند التصدير لتسمية الدفعة",
        "الصور تصل إلى التطبيق مرتبة وجاهزة للإدراج في الدرس",
      ],
      cta: "اعرف المزيد عن Docs Asset Studio",
    },
    downloads: {
      eyebrow: "التحميل",
      title: "حمّل سبورتي على حاسوبك",
      description:
        "التطبيق متاح الآن للتحميل بنسختين: نسخة محمولة لا تحتاج إلى تثبيت، ونسخة قابلة للتثبيت على جهازك.",
      portable: {
        title: "سبورتي Portable",
        description: "نسخة محمولة تعمل مباشرة من مجلد — بدون تثبيت.",
      },
      installer: {
        title: "سبورتي Installer",
        description: "ملف تثبيت رسمي يُثبِّت سبورتي على ويندوز كأي تطبيق آخر.",
      },
      pendingTitle: "الرابط سيُضاف قريباً",
      pendingDescription: "سيظهر خيار التحميل هنا فور توفّر الإصدار الرسمي عبر GitHub Releases.",
      note: "ويندوز هو النظام المستهدف حالياً.",
    },
  },
  docsAssetStudio: {
    meta: {
      title: "Docs Asset Studio — مستخرج الصور | سبورتي",
      description:
        "Docs Asset Studio يستخرج الصور من مستندات DOCX وPPTX وPDF وXLSX، ويرتّب المعرض حسب التشابه، ويكشف النسخ المكررة، ويقترح أسماء، ويصدّر كل ذلك مباشرة إلى السبورة.",
    },
    hero: {
      eyebrow: "تطبيق سطح المكتب",
      productName: "Docs Asset Studio",
      descriptor: "مستخرج الصور",
      subtitle:
        "أفلت مستنداتك التعليمية واستخرج كل صورها، ثم رتّبها في معرض متقدّم يكتشف النسخ المكررة ويصنّف حسب التشابه ويقترح أسماء — قبل تصديرها مباشرة إلى سبورتي.",
      points: ["DOCX · PPTX · PDF · XLSX", "كشف النسخ المكررة", "تصدير مباشر للسبورة"],
      primaryCta: "اكتشف المميزات",
      secondaryCta: "التحميل",
    },
    workflow: {
      eyebrow: "طريقة العمل",
      title: "من مستند إلى مكتبة صور في ثلاث خطوات",
      description: "صُمّم ليختصر العمل اليدوي في تجهيز صور الدرس.",
      formatsNote: "يدعم الاستخراج من ملفات DOCX وPPTX وPDF وXLSX",
      steps: [
        {
          title: "أفلت مستنداتك",
          description:
            "مستند واحد أو عدة ملفات دفعة واحدة: PDF وWord وPowerPoint وExcel — أفلتها وتُرتّب تلقائيًا.",
        },
        {
          title: "راجعت ما استُخرج",
          description:
            "كل الصور تُستخرج مع معاينة وأدوات تحديد: كشف النسخ المكررة، اقتراح أسماء، وفرز حسب التشابه.",
        },
        {
          title: "صدّر للسبورة",
          description:
            "ملف ZIP جاهز للاستيراد في سبورتي، أو تصدير منظّم مع فهرس CSV لكل مستند.",
        },
      ],
    },
    features: {
      eyebrow: "المميزات",
      title: "كل ما تحتاجه لتجهيز صور مستنداتك",
      description: "أدوات احترافية لاستخراج الصور من المستندات وتنظيمها وتجهيزها للاستعمال في القسم.",
      items: [
        {
          id: "extract",
          title: "استخراج من كل الصيغ المدرسية",
          description:
            "DOCX وPPTX وPDF وXLSX — تُستخرج كل الصور المضمّنة دفعة واحدة مع تصفية حسب أصغر حجم.",
        },
        {
          id: "gallery",
          title: "معرض متقدّم لإدارة الصور",
          description:
            "بطاقة لكل صورة مع الأبعاد والحجم، تحديد متعدد، «تحديد الكل»، «عكس التحديد» و«حذف المحدّد» مع التراجع.",
        },
        {
          id: "similarity",
          title: "فرز حسب التشابه",
          description:
            "حساسية كشف التشابه قابلة للضبط من الإعدادات، مع ترتيب الصور المتشابهة بجانب بعضها للفرز السريع.",
        },
        {
          id: "duplicates",
          title: "كشف النسخ المكررة",
          description: "يحدّد النسخ المكررة بإطار ملوّن، ويتيح حذفها دفعة واحدة مع إمكانية التراجع.",
        },
        {
          id: "naming",
          title: "أسماء مقترحة وتعرّف على الصور",
          description:
            "قالب أسماء مرن مثل {{loc}}_{{text}} يقترح اسمًا لكل صورة من مكانها داخل المستند أو من تعليقها.",
        },
        {
          id: "editor",
          title: "محرر صور مدمج",
          description:
            "تحديد، قص، تدوير 90°، ممحاة بيضاء وتقسيم الصور — كل ذلك دون مغادرة التطبيق.",
        },
      ],
    },
    gallery: {
      eyebrow: "المعرض",
      title: "معرض متقدّم لإدارة الصور المستخرجة",
      description:
        "بعد الاستخراج تظهر الصور في معرض تفاعلي: حدّد ما تريد، راجع التفاصيل، وصدّر أو احذف دفعة واحدة.",
      points: [
        "بطاقات تعرض المعاينة والأبعاد والحجم والصيغة",
        "تحديد الكل أو عكس التحديد، مع عرض عدد المحدّد وحجمه الإجمالي",
        "فرز وترتيب حسب الفئة أو حسب التشابه",
        "حفظ المحدّد في المكتبة، أو حذفه مع إمكانية التراجع",
        "تحميل ZIP مباشرة، أو تصدير منظّم مع فهرس CSV",
      ],
    },
    splitting: {
      eyebrow: "تقسيم الصور",
      title: "صورة واحدة تحوي عدة عناصر؟ قسّمها",
      description:
        "محرر الصور يقسّم صورة واحدة تحتوي عدة عناصر بصرية إلى صور أصغر مستقلة، عبر شبكة صفوف وأعمدة.",
      points: [
        "شبكة صفوف × أعمدة تُنشئ صورة مستقلة من كل خلية",
        "تقسيم بخطوط متقطعة مع ضبط عدد الأجزاء",
        "مثالي لأوراق الصور (sprites) في كتب الابتدائي",
        "تراجع عن أي تعديل قبل الحفظ",
      ],
    },
    editor: {
      eyebrow: "محرر الصور",
      title: "حرّر صورك قبل تصديرها",
      description:
        "تحديد أي عنصر داخل الصفحة، قص، تدوير 90° وممحاة بيضاء — أدوات تعديل أساسية تعمل مباشرة على الصورة المستخرجة.",
      points: [
        "تحديد أي عنصر داخل الصفحة الممسوحة ضوئيًا",
        "تدوير 90° وتكبير وتحريك",
        "تراجع وإعادة لكل تعديل",
        "حفظ التعديل أو الإغلاق دون حفظ",
      ],
    },
    exportToSabourti: {
      eyebrow: "التصدير إلى سبورتي",
      title: "تصدير مباشر من مستنداتك إلى السبورة",
      description:
        "خيار «للسبورة» (موصى به) يولّد ملف ZIP واحدًا تستورده سبورتي مباشرة في مكتبته — دون نسخ يدوي للملفات.",
      points: [
        "ملف ZIP واحد جاهز للاستيراد في سبورتي",
        "كلمة اختـيارية اختيارية لتسمية الدفعة المصدّرة",
        "بديل منظّم: مجلد لكل مستند مع فهرس CSV",
        "مثالي لتجهيز رسومات الدرس من الكتاب المدرسي",
      ],
      cta: "اعرف المزيد عن سبورتي",
    },
    settings: {
      eyebrow: "إعدادات دقيقة",
      title: "تحكّم في الاستخراج والأسماء والتشابه",
      description:
        "لوحة إعدادات واحدة: قص الهوامش تلقائيًا، تصحيح القص والتدوير، حد أدنى لحجم الصورة، وقالب الأسماء.",
      points: [
        "قص الهوامش البيضاء والشفافة تلقائيًا",
        "تطبيق القص والتدوير التلقائي للمستند",
        "استثناء الصور الصغيرة جدًا (أقل من 2KB افتراضيًا)",
        "قالب أسماء مثل {{loc}}_{{text}} وحساسية تشابه قابلة للضبط",
      ],
    },
    downloads: {
      eyebrow: "التحميل",
      title: "حمّل Docs Asset Studio على حاسوبك",
      description:
        "التطبيق متاح الآن للتحميل بنسختين: نسخة محمولة لا تحتاج إلى تثبيت، ونسخة قابلة للتثبيت على جهازك.",
      portable: {
        title: "Docs Asset Studio Portable",
        description: "نسخة محمولة تعمل مباشرة من مجلد — بدون تثبيت.",
      },
      installer: {
        title: "Docs Asset Studio Installer",
        description: "ملف تثبيت رسمي يُثبِّت Docs Asset Studio على حاسوبك.",
      },
      pendingTitle: "الرابط سيُضاف قريباً",
      pendingDescription:
        "سيظهر خيار التحميل هنا فور توفّر الإصدار الرسمي عبر GitHub Releases.",
      note: "تطبيق سطح مكتب مستقل.",
    },
  },
  footer: {
    tagline: "سبورة تفاعلية لأساتذة التعليم الابتدائي، لنظام ويندوز.",
    linksTitle: "روابط",
    productsTitle: "التطبيقات",
    languageTitle: "اللغة",
    rights: "جميع الحقوق محفوظة.",
    backToTop: "العودة إلى الأعلى",
  },
};

export type Dictionary = typeof ar;

const fr: Dictionary = {
  meta: {
    title: "Sabourti | Tableau blanc interactif pour les enseignants du primaire",
    description:
      "Sabourti est une application de tableau blanc interactif pour Windows, pensée pour les enseignants du primaire au Maroc : écriture et dessin, outils de géométrie, fonds de page, organisation et enregistrement des leçons.",
  },
  common: {
    skipToContent: "Aller au contenu",
    brandName: "Sabourti",
    menu: "Menu",
    closeMenu: "Fermer le menu",
    languageLabel: "Choisir la langue",
    toBeConfirmed: "À préciser",
  },
  nav: {
    features: "Fonctionnalités",
    showcase: "Aperçu",
    teachers: "Enseignants",
    download: "Téléchargement",
    faq: "FAQ",
    productSabourti: "Sabourti",
    productDocsAssetStudio: "Docs Asset Studio",
  },
  cta: {
    download: "Télécharger pour Windows",
    discover: "Découvrir l’application",
  },
  hero: {
    eyebrow: "Application de bureau pour Windows",
    titleStart: "Un tableau numérique pour",
    titleHighlight: "expliquer, dessiner et interagir",
    titleEnd: "en classe",
    subtitle:
      "Sabourti est une application indépendante de tableau blanc interactif, conçue pour les enseignants du primaire : écrivez et dessinez, utilisez les outils de géométrie et organisez vos leçons en pages à enregistrer et à retrouver.",
    points: ["Conçu pour Windows", "Pour l’école primaire", "Application indépendante"],
  },
  values: {
    title: "Pourquoi Sabourti ?",
    items: [
      {
        id: "classroom",
        title: "Pensé pour la classe",
        description: "Des outils au service de l’explication, sans complication.",
      },
      {
        id: "simple",
        title: "Une prise en main simple",
        description: "Choisissez un outil et commencez à expliquer.",
      },
      {
        id: "desktop",
        title: "Application de bureau Windows",
        description: "S’installe sur votre ordinateur et s’ouvre comme une application autonome.",
      },
      {
        id: "independent",
        title: "Un projet indépendant",
        description: "Développé autour des besoins de l’enseignant du primaire.",
      },
    ],
  },
  features: {
    eyebrow: "Fonctionnalités",
    title: "L’essentiel pour mener votre leçon au tableau",
    description:
      "Des outils clairs et bien organisés, pour garder les yeux sur vos élèves plutôt que sur le logiciel.",
    items: [
      {
        id: "draw",
        title: "Écriture, dessin et édition",
        description:
          "Écrivez et dessinez librement, effacez avec la gomme, sélectionnez des éléments pour les déplacer, ajoutez du texte et des formes.",
        tags: ["Écriture", "Dessin", "Gomme", "Sélection", "Texte", "Formes"],
      },
      {
        id: "pages",
        title: "Organisation et enregistrement des leçons",
        description:
          "Découpez votre leçon en pages et enregistrez-la pour la reprendre à la séance suivante.",
        tags: [],
      },
      {
        id: "backgrounds",
        title: "Fonds de page",
        description: "Choisissez le fond adapté à l’activité.",
        tags: ["Blanc", "Ligné", "Quadrillé", "Seyès"],
      },
      {
        id: "geometry",
        title: "Outils de géométrie et instruments de classe",
        description:
          "Des outils pédagogiques de géométrie et des instruments familiers de la classe, pour mener les activités devant les élèves.",
        tags: [],
      },
      {
        id: "teacher",
        title: "Outils de l’enseignant",
        description:
          "Le surligneur pour faire ressortir l’essentiel, le pointeur laser pour guider l’attention des élèves pendant l’explication.",
        tags: ["Surligneur", "Pointeur laser"],
      },
    ],
  },
  showcase: {
    eyebrow: "Dans l’application",
    title: "De vraies captures d’écran de Sabourti",
    description:
      "Des images réelles de l’application, classées par usage. Cliquez sur une image pour l’agrandir.",
    enlarge: "Agrandir l’image",
    viewer: {
      label: "Visionneuse de captures d’écran",
      close: "Fermer",
      previous: "Image précédente",
      next: "Image suivante",
    },
    groups: {
      lessons: {
        title: "Leçons et espace de travail",
        description:
          "Un grand tableau avec la barre d’outils en haut et la navigation entre les pages en bas, et la possibilité d’enregistrer la leçon puis de la rejouer depuis le début.",
      },
      geometry: {
        title: "Formes géométriques",
        description:
          "Tracez des formes géométriques et ajoutez leurs noms et le texte de la leçon, devant les élèves.",
      },
      measurement: {
        title: "Instruments de mesure",
        description:
          "Règle, compas et rapporteur numériques utilisés directement sur le tableau, et tableaux de conversion scolaires prêts à l’emploi pour les masses, les aires et les capacités.",
      },
      teacher: {
        title: "Outils d’aide à l’enseignant",
        description:
          "Le panneau « Outils de l’enseignant » réunit les outils de la classe, dont la roue de tirage au sort des élèves et le rideau qui dévoile le contenu progressivement.",
      },
    },
  },
  screenshots: {
    dashboard: {
      caption: "Écran de démarrage : choisissez entre le tableau numérique et le studio de documents",
      alt: "Capture d’écran de l’écran de démarrage de Sabourti, « Choisissez votre espace de travail », avec deux cartes : le tableau numérique et le studio de documents avancé.",
    },
    emptyBoard: {
      caption: "Un nouveau tableau, prêt pour la leçon",
      alt: "Capture d’écran d’un tableau blanc vide, avec la barre d’outils en haut (stylos, gomme, texte, couleurs et épaisseur du trait) et les boutons de navigation entre les pages en bas.",
    },
    lessonRecorder: {
      caption: "Enregistrer la leçon et la rejouer depuis le début",
      alt: "Capture d’écran d’un tableau sur fond ligné avec un tableau, un triangle, un pavé droit et la phrase « Enregistrez vos leçons et rejouez-les depuis le début », avec la fenêtre « Rejouer la leçon », ses boutons de lecture et sa barre de progression.",
    },
    lessonGeometry: {
      caption: "Une leçon de géométrie : les formes et le périmètre",
      alt: "Capture d’écran de la leçon « Géométrie : les formes et le périmètre » montrant un carré, un cercle et un triangle avec leurs noms, et la phrase « Périmètre = somme des longueurs des côtés ».",
    },
    mathInstruments: {
      caption: "Rapporteur, compas et règle numériques, avec le menu des formes 2D et 3D",
      alt: "Capture d’écran montrant un rapporteur et une règle graduée, un compas qui trace un arc sur le tableau, le menu des formes 2D et 3D et le panneau des outils de l’enseignant.",
    },
    conversionTables: {
      caption: "Tableaux de conversion scolaires : masses, aires et capacités",
      alt: "Capture d’écran de trois tableaux de conversion sur le tableau : unités de masse de t à mg, unités d’aire de km² à mm² et unités de capacité de hL à mL, avec le panneau des outils de l’enseignant ouvert.",
    },
    teacherTools: {
      caption: "Le panneau Outils de l’enseignant, en interface française",
      alt: "Capture d’écran du panneau « Outils de l’enseignant » en français, avec le minuteur, les tableaux de conversion, le projecteur, le compas, la règle, le rapporteur et la roue de tirage au sort.",
    },
    studentWheel: {
      caption: "La roue de tirage au sort, avec import des noms des élèves depuis Excel / CSV",
      alt: "Capture d’écran de la fenêtre de la roue de tirage au sort : choix de la classe, bouton d’import des noms depuis Excel / CSV, liste des élèves, option de tour équitable et roue avec un bouton « Tourner ».",
    },
    curtain: {
      caption: "Le rideau : tirez les bords pour dévoiler le contenu progressivement",
      alt: "Capture d’écran d’un tableau recouvert d’un rideau sombre rayé, avec la consigne « Rideau — tirez les bords pour dévoiler le contenu progressivement ».",
    },
    welcome: {
      caption: "L’écran d’accueil à l’ouverture de Sabourti",
      alt: "Capture d’écran de l’écran d’accueil de Sabourti : le logo sur fond bleu nuit, la mention « La plateforme d’enseignement numérique intégrée » et la barre de chargement.",
    },
    dasMainInterface: {
      caption: "L’écran d’accueil : déposez vos documents pour en extraire les images (PDF · XLSX · DOCX · PPTX)",
      alt: "Capture d’écran de l’écran d’accueil de Docs Asset Studio (thème sombre), avec une grande zone de dépôt « Déposez vos documents ici pour extraire leurs images » et les badges PDF, XLSX, DOCX et PPTX.",
    },
    dasFileUpload: {
      caption: "La zone de dépôt des documents — un ou plusieurs fichiers à la fois",
      alt: "Capture d’écran d’une zone de dépôt claire dans Docs Asset Studio acceptant les documents PDF, Excel, Word et PowerPoint, avec une note indiquant que les fichiers sont triés automatiquement au dépôt.",
    },
    dasExtractedGallery: {
      caption: "La galerie après extraction : aperçus, noms suggérés et catégories",
      alt: "Capture d’écran de la galerie après extraction de 78 images d’un fichier PowerPoint : cartes avec vignettes, dimensions et poids, badges de catégorie, noms suggérés à côté de chaque image et barre d’outils d’export.",
    },
    dasSelectionTools: {
      caption: "Sélection multiple avec détection des doublons (cadre rouge) et suppression avec annulation",
      alt: "Capture d’écran de la galerie Docs Asset Studio en mode sélection : deux doublons de la diapositive « Français » encadrés en rouge, barre d’outils avec « Tout sélectionner », « Inverser » et « Supprimer », et une notification « 2 images supprimées » avec bouton « Annuler ».",
    },
    dasImageSplitting: {
      caption: "Segmentation d’une image composite en images plus petites, en lignes et colonnes",
      alt: "Capture d’écran de l’éditeur de Docs Asset Studio segmentant l’image « image31 » en grille (3 segments) avec des pointillés : gâteaux, cartes et badges — pour produire une image indépendante par cellule.",
    },
    dasImageEditor: {
      caption: "L’éditeur d’images : sélectionnez n’importe quel élément de la page et exportez-le",
      alt: "Capture d’écran de l’éditeur de Docs Asset Studio affichant la page « Français — Semaine 1 », avec un cadre de sélection autour d’une image de la page et les outils de recadrage, rotation et gomme blanche.",
    },
    dasAppSettings: {
      caption: "Paramètres : rognage et rotation automatiques, taille minimale, similarité et modèle de nommage",
      alt: "Capture d’écran du panneau « Paramètres » de Docs Asset Studio : rognage et rotation automatiques, marges blanches, taille minimale des images en kilo-octets, sensibilité de détection des similarités et modèle de nommage « loc_text ».",
    },
    dasExportOptions: {
      caption: "Export : « Pour le tableau » (recommandé, ZIP) ou export organisé avec index CSV",
      alt: "Capture d’écran de la fenêtre « Exporter les images sélectionnées (89) » de Docs Asset Studio : l’option « Organisé + index CSV », et l’option « Pour le tableau (recommandé) » générant un ZIP prêt à importer dans Sabourti, avec un champ de mot-clé facultatif.",
    },
  },
  teachers: {
    eyebrow: "Pour les enseignants",
    title: "Pensé pour l’enseignant du primaire",
    description:
      "Des premières lettres aux figures géométriques, Sabourti vous accompagne dans les activités quotidiennes de la classe : arabe, français, mathématiques et sciences.",
    points: [
      "Une interface claire, facile à utiliser devant les élèves",
      "Des leçons enregistrées, à retrouver à chaque séance",
      "À utiliser sur l’ordinateur de la classe, avec un vidéoprojecteur ou un grand écran",
    ],
    subjects: [
      {
        id: "arabic",
        title: "Arabe",
        description:
          "Écrire lettres et mots sur des lignes bien visibles et surligner les syllabes.",
        sample: "أ ب ت",
      },
      {
        id: "french",
        title: "Français",
        description: "S’exercer à l’écriture sur le fond Seyès, familier aux élèves.",
        sample: "Aa Bb",
      },
      {
        id: "math",
        title: "Mathématiques",
        description: "Tracer des figures et utiliser les outils de géométrie sur fond quadrillé.",
        sample: "½ + ¼",
      },
      {
        id: "science",
        title: "Éveil scientifique",
        description: "Dessiner des schémas, les légender et guider l’attention au pointeur laser.",
        sample: "H₂O",
      },
    ],
  },
  download: {
    eyebrow: "Téléchargement",
    title: "Téléchargez Sabourti pour Windows",
    description:
      "Sabourti est une application de bureau qui s’installe sur votre ordinateur. Ce site sert uniquement à la présenter.",
    pendingTitle: "Le lien de téléchargement sera ajouté prochainement",
    pendingDescription:
      "Le bouton de téléchargement apparaîtra ici dès que l’installateur officiel sera disponible.",
    button: "Télécharger l’installateur",
    platformNote: "Windows est la plateforme actuellement visée.",
    specsTitle: "Informations de version",
    specs: {
      platform: "Système",
      version: "Version actuelle",
      fileSize: "Taille du fichier",
      requirements: "Configuration requise",
    },
    platformValue: "Windows",
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Les questions des enseignants",
    description: "Des réponses claires sur la nature de l’application et son utilisation.",
    items: [
      {
        q: "Sabourti est-elle une application web ?",
        a: "Non. Sabourti est une application de bureau pour Windows, installée sur l’ordinateur, et non un site à utiliser dans le navigateur. Ce site sert uniquement à présenter l’application.",
      },
      {
        q: "Faut-il installer l’application ?",
        a: "Oui. Après avoir téléchargé l’installateur, Sabourti s’installe sur votre ordinateur et s’ouvre comme n’importe quelle autre application Windows.",
      },
      {
        q: "Fonctionne-t-elle sans Internet ?",
        a: "Après l’installation, l’utilisation principale de l’application est conçue pour fonctionner localement sur votre ordinateur. Certains éléments, comme les mises à jour, peuvent nécessiter une connexion Internet.",
      },
      {
        q: "Existe-t-il une version pour Mac ?",
        a: "Aucune version Mac n’est annoncée pour le moment. Windows est la plateforme actuellement visée.",
      },
      {
        q: "À qui s’adresse Sabourti ?",
        a: "Aux enseignants du primaire, en particulier au Maroc, pour expliquer, dessiner et interagir avec les élèves en classe.",
      },
      {
        q: "Où trouver le lien de téléchargement ?",
        a: "Le lien sera ajouté dans la section Téléchargement de cette page dès qu’il sera disponible.",
      },
    ],
  },
  sabourtiApp: {
    meta: {
      title: "Sabourti — Le tableau numérique | Sabourti",
      description:
        "Sabourti est une application de tableau numérique conçue pour les enseignants du primaire : écriture et dessin, outils de géométrie, organisation des leçons en pages, et import direct d’images depuis Docs Asset Studio.",
    },
    hero: {
      eyebrow: "Application de bureau pour Windows",
      name: "Sabourti",
      descriptor: "Le tableau numérique",
      subtitle:
        "Une application de tableau interactif conçue pour l’enseignant du primaire : écrivez et dessinez, utilisez les outils de géométrie et les instruments de la classe, et organisez vos leçons en pages à enregistrer et à retrouver.",
      points: ["Conçu pour Windows", "Pour l’école primaire", "Application indépendante"],
      primaryCta: "Découvrir les fonctionnalités",
      secondaryCta: "Télécharger",
    },
    integration: {
      eyebrow: "Intégration Docs Asset Studio",
      title: "Import direct d’images depuis Docs Asset Studio",
      description:
        "Préparez les images de vos cours à partir de vos documents pédagogiques avec Docs Asset Studio, puis importez-les en une fois dans la bibliothèque Sabourti via le fichier ZIP prêt à l’emploi.",
      bullets: [
        "L’option « Pour le tableau » de Docs Asset Studio génère un ZIP prêt à importer",
        "Un mot-clé facultatif à l’export pour nommer le lot",
        "Les images arrivent dans l’application classées et prêtes à insérer dans la leçon",
      ],
      cta: "En savoir plus sur Docs Asset Studio",
    },
    downloads: {
      eyebrow: "Téléchargement",
      title: "Téléchargez Sabourti sur votre ordinateur",
      description:
        "L’application est disponible en deux versions : une version portable sans installation et une version installable sur votre ordinateur.",
      portable: {
        title: "Sabourti Portable",
        description: "Version portable, exécutée directement depuis un dossier — sans installation.",
      },
      installer: {
        title: "Sabourti Installer",
        description: "Installateur officiel qui installe Sabourti sur Windows comme n’importe quelle application.",
      },
      pendingTitle: "Le lien sera ajouté prochainement",
      pendingDescription:
        "L’option de téléchargement apparaîtra ici dès la publication de la version officielle sur GitHub Releases.",
      note: "Windows est la plateforme actuellement visée.",
    },
  },
  docsAssetStudio: {
    meta: {
      title: "Docs Asset Studio — Extracteur d’images | Sabourti",
      description:
        "Docs Asset Studio extrait les images des documents DOCX, PPTX, PDF et XLSX, trie la galerie par similarité, détecte les doublons, suggère des noms, et exporte le tout directement vers le tableau numérique.",
    },
    hero: {
      eyebrow: "Application de bureau",
      productName: "Docs Asset Studio",
      descriptor: "Extracteur d’images",
      subtitle:
        "Déposez vos documents pédagogiques et extrayez toutes leurs images, puis organisez-les dans une galerie avancée : doublons détectés, tri par similarité, noms suggérés — avant un export direct vers Sabourti.",
      points: ["DOCX · PPTX · PDF · XLSX", "Détection des doublons", "Export direct vers le tableau"],
      primaryCta: "Découvrir les fonctionnalités",
      secondaryCta: "Télécharger",
    },
    workflow: {
      eyebrow: "Mode d’emploi",
      title: "Du document à la bibliothèque d’images en trois étapes",
      description: "Pensé pour réduire le travail manuel de préparation des images pour la classe.",
      formatsNote: "Extraction depuis les fichiers DOCX, PPTX, PDF et XLSX",
      steps: [
        {
          title: "Déposez vos documents",
          description:
            "Un ou plusieurs fichiers à la fois : PDF, Word, PowerPoint et Excel — déposez-les, ils sont triés automatiquement.",
        },
        {
          title: "Vérifiez l’extraction",
          description:
            "Chaque image est extraite avec aperçu et outils de sélection : doublons détectés, noms suggérés et tri par similarité.",
        },
        {
          title: "Exportez vers le tableau",
          description:
            "Un ZIP prêt à importer dans Sabourti, ou un export organisé avec index CSV par document.",
        },
      ],
    },
    features: {
      eyebrow: "Fonctionnalités",
      title: "Tout pour préparer les images de vos documents",
      description:
        "Des outils professionnels pour extraire, organiser et préparer les images pour la classe.",
      items: [
        {
          id: "extract",
          title: "Extraction depuis tous les formats scolaires",
          description:
            "DOCX, PPTX, PDF et XLSX — toutes les images intégrées sont extraites en une fois, avec un filtre de taille minimale.",
        },
        {
          id: "gallery",
          title: "Galerie avancée de gestion d’images",
          description:
            "Une carte par image avec dimensions et poids, sélection multiple, « Tout sélectionner », « Inverser la sélection » et « Supprimer la sélection » avec annulation.",
        },
        {
          id: "similarity",
          title: "Tri par similarité",
          description:
            "La sensibilité de détection se règle dans les paramètres, avec rapprochement des images similaires pour un tri rapide.",
        },
        {
          id: "duplicates",
          title: "Détection des doublons",
          description:
            "Les doublons sont marqués d’un cadre coloré et peuvent être supprimés en une fois, avec possibilité d’annuler.",
        },
        {
          id: "naming",
          title: "Noms suggérés et reconnaissance d’images",
          description:
            "Un modèle de nommage souple comme {{loc}}_{{text}} suggère un nom par image depuis sa position dans le document ou sa légende.",
        },
        {
          id: "editor",
          title: "Éditeur d’images intégré",
          description:
            "Sélection, recadrage, rotation 90°, gomme blanche et segmentation — sans quitter l’application.",
        },
      ],
    },
    gallery: {
      eyebrow: "La galerie",
      title: "Une galerie avancée pour vos images extraites",
      description:
        "Après extraction, les images apparaissent dans une galerie interactive : sélectionnez, vérifiez les détails, exportez ou supprimez en une fois.",
      points: [
        "Des cartes avec aperçu, dimensions, poids et format",
        "Tout sélectionner ou inverser la sélection, avec le nombre et le poids total des images cochées",
        "Tri et ordre par catégorie ou par similarité",
        "Enregistrez la sélection dans la bibliothèque, ou supprimez-la avec annulation",
        "Téléchargement ZIP direct, ou export organisé avec index CSV",
      ],
    },
    splitting: {
      eyebrow: "Segmentation d’images",
      title: "Une image avec plusieurs éléments ? Segmentez-la",
      description:
        "L’éditeur découpe une image composée de plusieurs éléments visuels en images plus petites et indépendantes, via une grille de lignes et de colonnes.",
      points: [
        "Une grille lignes × colonnes crée une image indépendante par cellule",
        "Découpe en pointillés avec réglage du nombre de segments",
        "Idéal pour les planches d’images des manuels du primaire",
        "Chaque modification est réversible avant enregistrement",
      ],
    },
    editor: {
      eyebrow: "L’éditeur d’images",
      title: "Retouchez vos images avant export",
      description:
        "Sélectionnez n’importe quel élément dans la page, recadrez, faites pivoter à 90° ou utilisez la gomme blanche — les retouches essentielles, directement sur l’image extraite.",
      points: [
        "Sélectionnez n’importe quel élément dans la page numérisée",
        "Rotation 90°, zoom et déplacement",
        "Annuler / rétablir pour chaque retouche",
        "Enregistrez la retouche ou fermez sans enregistrer",
      ],
    },
    exportToSabourti: {
      eyebrow: "Export vers Sabourti",
      title: "Export direct de vos documents vers le tableau",
      description:
        "L’option « Pour le tableau » (recommandée) génère un seul ZIP que Sabourti importe directement dans sa bibliothèque — sans copie manuelle de fichiers.",
      points: [
        "Un seul ZIP, prêt à importer dans Sabourti",
        "Un mot-clé facultatif pour nommer le lot exporté",
        "Alternative organisée : un dossier par document avec index CSV",
        "Idéal pour préparer les illustrations du cours depuis le manuel scolaire",
      ],
      cta: "En savoir plus sur Sabourti",
    },
    settings: {
      eyebrow: "Paramètres précis",
      title: "Maîtrisez l’extraction, les noms et la similarité",
      description:
        "Un seul panneau : rognage automatique des marges, correction du recadrage et de la rotation, taille minimale des images et modèle de nommage.",
      points: [
        "Rognage automatique des marges blanches et transparentes",
        "Recadrage et rotation automatiques du document",
        "Écartez les très petites images (2 Ko par défaut)",
        "Modèle de nommage {{loc}}_{{text}} et sensibilité de similarité réglable",
      ],
    },
    downloads: {
      eyebrow: "Téléchargement",
      title: "Téléchargez Docs Asset Studio sur votre ordinateur",
      description:
        "L’application est disponible en deux versions : une version portable sans installation et une version installable sur votre ordinateur.",
      portable: {
        title: "Docs Asset Studio Portable",
        description: "Version portable, exécutée directement depuis un dossier — sans installation.",
      },
      installer: {
        title: "Docs Asset Studio Installer",
        description: "Installateur officiel qui installe Docs Asset Studio sur votre ordinateur.",
      },
      pendingTitle: "Le lien sera ajouté prochainement",
      pendingDescription:
        "L’option de téléchargement apparaîtra ici dès la publication de la version officielle sur GitHub Releases.",
      note: "Application de bureau autonome.",
    },
  },
  footer: {
    tagline: "Tableau blanc interactif pour les enseignants du primaire, sur Windows.",
    linksTitle: "Liens",
    productsTitle: "Applications",
    languageTitle: "Langue",
    rights: "Tous droits réservés.",
    backToTop: "Retour en haut",
  },
};

export const translations: Record<Lang, Dictionary> = { ar, fr };

export const languageNames: Record<Lang, { full: string; short: string }> = {
  ar: { full: "العربية", short: "ع" },
  fr: { full: "Français", short: "FR" },
};

export const sectionIds = ["features", "showcase", "teachers", "download", "faq"] as const;
export type SectionId = (typeof sectionIds)[number];
