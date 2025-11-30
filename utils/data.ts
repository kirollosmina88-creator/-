import { God, Pharaoh, TimelineEvent } from '../types';

export const uiContent = {
  header: {
    title: { ar: "أسرار الفراعنة", en: "Secrets of Pharaohs" },
    subtitle: { ar: "مصر الخالدة", en: "Ancient Egypt" },
  },
  nav: {
    home: { ar: "الرئيسية", en: "Home" },
    history: { ar: "التاريخ", en: "History" },
    gods: { ar: "الآلهة", en: "Gods" },
    pharaohs: { ar: "الفراعنة", en: "Pharaohs" },
    oracle: { ar: "العراف", en: "Oracle" },
  },
  hero: {
    badge: { ar: "مهد الحضارات", en: "Cradle of Civilization" },
    titlePrefix: { ar: "اكتشف أسرار", en: "Discover the Secrets of" },
    titleHighlight: { ar: "مصر القديمة", en: "Ancient Egypt" },
    description: { 
      ar: "رحلة تفاعلية عبر الزمن لاستكشاف عظمة الفراعنة، غموض الأهرامات، وحكمة الأجداد.", 
      en: "An interactive journey through time to explore the grandeur of the Pharaohs, the mystery of the Pyramids, and the wisdom of the ancients." 
    },
    ctaStart: { ar: "ابدأ الرحلة", en: "Start Journey" },
    ctaOracle: { ar: "اسأل الحكيم", en: "Ask the Scribe" },
  },
  cards: {
    history: {
      title: { ar: "التاريخ العظيم", en: "Glorious History" },
      desc: { ar: "استكشف الجدول الزمني لأعظم حضارة عرفتها البشرية.", en: "Explore the timeline of the greatest civilization known to mankind." }
    },
    gods: {
      title: { ar: "الآلهة والأساطير", en: "Gods & Myths" },
      desc: { ar: "تعرف على معتقدات المصريين وقصص الآلهة: رع، أوزيريس، وإيزيس.", en: "Learn about Egyptian beliefs and stories of gods: Ra, Osiris, and Isis." }
    },
    pharaohs: {
      title: { ar: "ملوك الأرض", en: "Kings of the Earth" },
      desc: { ar: "تعرف على أعظم الفراعنة مثل رمسيس الثاني وتوت عنخ آمون.", en: "Meet the greatest pharaohs like Ramesses II and Tutankhamun." }
    },
    oracle: {
      title: { ar: "حكمة إمحوتب", en: "Imhotep's Wisdom" },
      desc: { ar: "تحدث مباشرة مع الذكاء الاصطناعي للحصول على إجابات فورية.", en: "Speak directly with AI to get instant answers about the past." }
    }
  },
  footer: {
    brand: { ar: "مصر الخالدة", en: "Timeless Egypt" },
    desc: { ar: "تم تطوير هذا الموقع باستخدام أحدث تقنيات الويب والذكاء الاصطناعي", en: "Built with the latest web technologies and AI" },
    rights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" }
  },
  sections: {
    history: {
      title: { ar: "شريط التاريخ الخالد", en: "The Timeless Timeline" },
      subtitle: { ar: "رحلة عبر آلاف السنين، من فجر الأسرات وحتى غروب شمس الحضارة الفرعونية.", en: "A journey through thousands of years, from the dawn of dynasties to the sunset of pharaonic civilization." }
    },
    gods: {
      title: { ar: "مجمع الآلهة (الإنيد)", en: "The Ennead (Gods)" },
      subtitle: { ar: "رموز القوى الكونية والطبيعية في العقيدة المصرية القديمة.", en: "Symbols of cosmic and natural forces in ancient Egyptian belief." }
    },
    pharaohs: {
      title: { ar: "ملوك الأرض (الفراعنة)", en: "Kings of the Earth (Pharaohs)" },
      subtitle: { ar: "حكام كيميت العظماء الذين خلدوا أسماءهم في التاريخ بالمعابد والفتوحات.", en: "Great rulers of Kemet who immortalized their names in history through temples and conquests." }
    },
    oracle: {
      title: { ar: "تحدث مع الحكيم", en: "Speak with the Scribe" },
      subtitle: { ar: "استخدم قوة الذكاء الاصطناعي لتسافر عبر الزمن وتتحدث مع أحد حكماء مصر القديمة.", en: "Use the power of AI to travel through time and speak with an ancient Egyptian scribe." }
    }
  }
};

export const timelineData: TimelineEvent[] = [
  {
    year: { ar: "3100 ق.م", en: "3100 BC" },
    title: { ar: "توحيد القطرين", en: "Unification of Upper and Lower Egypt" },
    description: { 
      ar: "الملك نعرمر (مينا) يوحد مصر العليا والسفلى ويؤسس الأسرة الأولى.", 
      en: "King Narmer (Menes) unifies Upper and Lower Egypt and founds the First Dynasty." 
    }
  },
  {
    year: { ar: "2580 ق.م", en: "2580 BC" },
    title: { ar: "بناء الهرم الأكبر", en: "Construction of the Great Pyramid" },
    description: { 
      ar: "انتهى الملك خوفو من بناء الهرم الأكبر في الجيزة، العجيبة الوحيدة الباقية من عجائب الدنيا القديمة.", 
      en: "King Khufu completes the Great Pyramid of Giza, the only surviving wonder of the ancient world." 
    }
  },
  {
    year: { ar: "1479 ق.م", en: "1479 BC" },
    title: { ar: "حكم تحتمس الثالث", en: "Reign of Thutmose III" },
    description: { 
      ar: "توسعت الإمبراطورية المصرية لأقصى حدودها لتشمل بلاد الشام والنوبة.", 
      en: "The Egyptian Empire expands to its greatest extent, covering the Levant and Nubia." 
    }
  },
  {
    year: { ar: "1332 ق.م", en: "1332 BC" },
    title: { ar: "توت عنخ آمون", en: "Tutankhamun" },
    description: { 
      ar: "تولي الملك الصغير العرش وعودة عبادة آمون بعد ثورة إخناتون الدينية.", 
      en: "The boy king takes the throne, restoring the worship of Amun after Akhenaten's religious revolution." 
    }
  },
  {
    year: { ar: "1274 ق.م", en: "1274 BC" },
    title: { ar: "معركة قادش", en: "Battle of Kadesh" },
    description: { 
      ar: "رمسيس الثاني يقود الجيش المصري ضد الحيثيين وتوقيع أول معاهدة سلام في التاريخ.", 
      en: "Ramesses II leads the Egyptian army against the Hittites, resulting in the first peace treaty in history." 
    }
  },
  {
    year: { ar: "30 ق.م", en: "30 BC" },
    title: { ar: "نهاية العصر الفرعوني", en: "End of the Pharaonic Era" },
    description: { 
      ar: "وفاة كليوباترا السابعة وسقوط مصر تحت الحكم الروماني.", 
      en: "Death of Cleopatra VII and the fall of Egypt to Roman rule." 
    }
  }
];

export const godsData: God[] = [
  {
    name: { ar: "رع", en: "Ra" },
    title: { ar: "إله الشمس", en: "God of the Sun" },
    description: { 
      ar: "سيد الآلهة وخالق الكون. يسافر بمركبه الشمسي عبر السماء كل يوم محارباً قوى الظلام.", 
      en: "King of the gods and creator of the universe. He travels across the sky in his solar bark every day, fighting forces of darkness." 
    },
    imageUrl: "https://images.unsplash.com/photo-1721631484050-9c2b4899539d?q=80&w=2670&auto=format&fit=crop" 
  },
  {
    name: { ar: "أنوبيس", en: "Anubis" },
    title: { ar: "حارس المقابر", en: "Guardian of Tombs" },
    description: { 
      ar: "إله التحنيط والموتى برأس ابن آوى. يشرف على ميزان القلب في محكمة الآخرة.", 
      en: "God of mummification and the dead, with a jackal head. He oversees the weighing of the heart in the afterlife." 
    },
    imageUrl: "https://images.unsplash.com/photo-1563203494-b29598a96499?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: { ar: "إيزيس", en: "Isis" },
    title: { ar: "ربة السحر والأمومة", en: "Goddess of Magic & Motherhood" },
    description: { 
      ar: "الزوجة المخلصة لأوزيريس والأم الحامية لحورس. رمز القوة السحرية والشفاء.", 
      en: "The faithful wife of Osiris and protective mother of Horus. A symbol of magical power and healing." 
    },
    imageUrl: "https://images.unsplash.com/photo-1707833352726-28109d936171?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: { ar: "أوزيريس", en: "Osiris" },
    title: { ar: "ملك العالم الآخر", en: "King of the Underworld" },
    description: { 
      ar: "إله البعث والحساب، ورمز الخصوبة والنيل. يحكم مملكة الموتى.", 
      en: "God of resurrection and judgment, symbol of fertility and the Nile. He rules the kingdom of the dead." 
    },
    imageUrl: "https://images.unsplash.com/photo-1544464136-1e0e85d89855?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: { ar: "حورس", en: "Horus" },
    title: { ar: "إله السماء", en: "God of the Sky" },
    description: { 
      ar: "ابن إيزيس وأوزيريس، يصور برأس صقر. عين حورس هي رمز للحماية الملكية والصحة الجيدة.", 
      en: "Son of Isis and Osiris, depicted with a falcon head. The Eye of Horus is a symbol of royal protection and good health." 
    },
    imageUrl: "https://images.unsplash.com/photo-1620692446736-58c9735165c0?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: { ar: "تحوت", en: "Thoth" },
    title: { ar: "إله الحكمة", en: "God of Wisdom" },
    description: { 
      ar: "مخترع الكتابة والعلوم، يصور برأس طائر أبو منجل. كاتب الآلهة وحكم النزاعات.", 
      en: "Inventor of writing and science, depicted with an ibis head. Scribe of the gods and mediator of disputes." 
    },
    imageUrl: "https://images.unsplash.com/photo-1705600645672-019e13374895?q=80&w=2676&auto=format&fit=crop"
  }
];

export const pharaohsData: Pharaoh[] = [
  {
    name: { ar: "رمسيس الثاني", en: "Ramesses II" },
    period: { ar: "الأسرة 19 (1279-1213 ق.م)", en: "19th Dynasty (1279-1213 BC)" },
    description: { 
      ar: "عُرف بلقب 'رمسيس الأكبر'، قاد حملات عسكرية واسعة وبنى معابد ضخمة مثل أبو سمبل. يعتبر من أقوى فراعنة مصر وأكثرهم شهرة.", 
      en: "Known as 'Ramesses the Great', he led vast military campaigns and built massive temples like Abu Simbel. Considered one of Egypt's most powerful pharaohs." 
    },
    imageUrl: "https://images.unsplash.com/photo-1663445767226-7339d1b09995?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: { ar: "توت عنخ آمون", en: "Tutankhamun" },
    period: { ar: "الأسرة 18 (1332-1323 ق.م)", en: "18th Dynasty (1332-1323 BC)" },
    description: { 
      ar: "الفرعون الذهبي الذي اكتشفت مقبرته كاملة. حكم وهو طفل وعادت في عهده عبادة آمون بعد ثورة إخناتون الدينية.", 
      en: "The Golden Pharaoh whose tomb was found intact. He ruled as a child and restored the worship of Amun after Akhenaten's religious revolution." 
    },
    imageUrl: "https://images.unsplash.com/photo-1503177847378-d2048487fa46?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: { ar: "حتشبسوت", en: "Hatshepsut" },
    period: { ar: "الأسرة 18 (1478-1458 ق.م)", en: "18th Dynasty (1478-1458 BC)" },
    description: { 
      ar: "من أنجح الفراعنة، تميز عهدها بالسلام والازدهار التجاري وبناء معبد الدير البحري الفريد في تصميمه.", 
      en: "One of the most successful pharaohs. Her reign was marked by peace, trade prosperity, and the construction of the unique Deir el-Bahari temple." 
    },
    imageUrl: "https://images.unsplash.com/photo-1629813959882-706d88478465?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: { ar: "تحتمس الثالث", en: "Thutmose III" },
    period: { ar: "الأسرة 18 (1479-1425 ق.م)", en: "18th Dynasty (1479-1425 BC)" },
    description: { 
      ar: "لُقب بـ 'نابليون مصر القديمة'. قاد 17 حملة عسكرية وسع الإمبراطورية المصرية لأقصى اتساع لها في التاريخ.", 
      en: "Called 'The Napoleon of Ancient Egypt'. He led 17 military campaigns and expanded the Egyptian Empire to its greatest historical extent." 
    },
    imageUrl: "https://images.unsplash.com/photo-1568603689408-f1f6d3575971?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: { ar: "خوفو", en: "Khufu" },
    period: { ar: "الأسرة 4 (2589-2566 ق.م)", en: "4th Dynasty (2589-2566 BC)" },
    description: { 
      ar: "باني الهرم الأكبر بالجيزة، الذي يعد العجيبة الوحيدة الباقية من عجائب الدنيا السبع القديمة.", 
      en: "Builder of the Great Pyramid of Giza, the only surviving Wonder of the Ancient World." 
    },
    imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ce179a?q=80&w=2527&auto=format&fit=crop"
  },
  {
    name: { ar: "كليوباترا السابعة", en: "Cleopatra VII" },
    period: { ar: "الأسرة البطلمية (51-30 ق.م)", en: "Ptolemaic Dynasty (51-30 BC)" },
    description: { 
      ar: "آخر ملوك مصر القديمة. عرفت بذكائها السياسي وثقافتها الواسعة وتحالفاتها مع قادة روما.", 
      en: "The last ruler of Ancient Egypt. Known for her political intelligence, vast culture, and alliances with Roman leaders." 
    },
    imageUrl: "https://images.unsplash.com/photo-1548074601-0bc4b998246e?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: { ar: "إخناتون", en: "Akhenaten" },
    period: { ar: "الأسرة 18 (1353-1336 ق.م)", en: "18th Dynasty (1353-1336 BC)" },
    description: { 
      ar: "الفرعون الموحد الذي دعا لعبادة إله واحد 'آتون'. أسس عاصمة جديدة وغير الفن المصري التقليدي بشكل جذري.", 
      en: "The heretic pharaoh who promoted the worship of one god, 'Aten'. He founded a new capital and radically changed traditional Egyptian art." 
    },
    imageUrl: "https://images.unsplash.com/photo-1596564614603-518868853a8a?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: { ar: "زوسر", en: "Djoser" },
    period: { ar: "الأسرة 3 (2686-2648 ق.م)", en: "3rd Dynasty (2686-2648 BC)" },
    description: { 
      ar: "مؤسس الأسرة الثالثة وصاحب هرم سقارة المدرج، أول بناء حجري ضخم في التاريخ، بمساعدة وزيره العبقري إمحوتب.", 
      en: "Founder of the 3rd Dynasty and owner of the Step Pyramid of Saqqara, the first monumental stone building, aided by his genius vizier Imhotep." 
    },
    imageUrl: "https://images.unsplash.com/photo-1625866164228-59c259889708?q=80&w=2670&auto=format&fit=crop"
  },
  {
    name: { ar: "سيتي الأول", en: "Seti I" },
    period: { ar: "الأسرة 19 (1290-1279 ق.م)", en: "19th Dynasty (1290-1279 BC)" },
    description: { 
      ar: "والد رمسيس الثاني. اشتهر بإعادة الهيبة للإمبراطورية وبناء قاعة الأعمدة الكبرى بالكرنك ومقبرته المذهلة.", 
      en: "Father of Ramesses II. Famous for restoring the empire's prestige, building the Great Hypostyle Hall at Karnak, and his magnificent tomb." 
    },
    imageUrl: "https://images.unsplash.com/photo-1533054577132-7235a840c57c?q=80&w=2670&auto=format&fit=crop"
  }
];
