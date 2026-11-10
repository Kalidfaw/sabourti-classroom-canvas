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
  footer: {
    tagline: "سبورة تفاعلية لأساتذة التعليم الابتدائي، لنظام ويندوز.",
    linksTitle: "روابط",
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
  footer: {
    tagline: "Tableau blanc interactif pour les enseignants du primaire, sur Windows.",
    linksTitle: "Liens",
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
