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
  mockup: {
    caption: "صورة توضيحية للواجهة — ليست لقطة شاشة حقيقية",
    description:
      "رسم توضيحي لواجهة سبورتي: شريط أدوات للكتابة والرسم، صفحة بخلفية سييس عليها درس عن الكسور، مسطرة وكوس، ومؤشر ليزري.",
    windowTitle: "درس: الكسور",
    lessonHeading: "الكسور",
    page: "الصفحة 2 من 4",
    saved: "محفوظ",
    chipSeyes: "خلفية سييس",
    chipLaser: "المؤشر الليزري",
    chipGeometry: "أدوات هندسية",
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
    eyebrow: "نظرة على التطبيق",
    title: "واجهة التطبيق",
    description: "ستُضاف هنا لقطات شاشة حقيقية من التطبيق قريباً.",
    placeholder: "لقطة شاشة حقيقية قريباً",
    slots: {
      main: "الواجهة الرئيسية",
      backgrounds: "خلفيات الصفحات",
      geometry: "الأدوات الهندسية",
      pages: "صفحات الدرس",
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
  mockup: {
    caption: "Illustration de l’interface — pas une capture d’écran réelle",
    description:
      "Illustration de l’interface de Sabourti : barre d’outils d’écriture et de dessin, page sur fond Seyès avec une leçon sur les fractions, règle, équerre et pointeur laser.",
    windowTitle: "Leçon : les fractions",
    lessonHeading: "Les fractions",
    page: "Page 2 sur 4",
    saved: "Enregistré",
    chipSeyes: "Fond Seyès",
    chipLaser: "Pointeur laser",
    chipGeometry: "Outils de géométrie",
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
    eyebrow: "Aperçu de l’application",
    title: "L’interface de Sabourti",
    description: "De vraies captures d’écran de l’application seront ajoutées ici prochainement.",
    placeholder: "Capture d’écran réelle à venir",
    slots: {
      main: "Interface principale",
      backgrounds: "Fonds de page",
      geometry: "Outils de géométrie",
      pages: "Pages de la leçon",
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
