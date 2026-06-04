// ===================== إعدادات الموقع (قابلة للتعديل بسهولة) =====================
// قم بتغيير هذه القيم لتحديد موقع المحل
const SHOP_LAT = 17.55027;      // خط العرض (latitude)
const SHOP_LNG = 44.25187;      // خط الطول (longitude)
const SHOP_ADDRESS = "نجران – طريق الملك عبدالعزيز – عصائر+الصعيدي+عصفور";
// ===============================================================

AOS.init({ duration: 800, once: true });

// تعريف المنتجات مع أسعار خاصة لكل حجم
const products = [
    { 
        id: 2, name: "افكادو ملكي", desc: "", icon: "🥤", category: "فواكة",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
    { 
        id: 107, name: "اصفهاني", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
    { 
        id: 1, name: "عور قلب", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
    { 
        id: 112, name: "كوكتيل", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
    { 
        id: 10, name: "الصعيدي", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
    { 
        id: 107, name: "شمندر", desc: "", icon: "🥬", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
    { 
        id: 37, name: "برتقال بالمنجا", desc: "", icon: "🍊", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
    { 
        id: 37, name: "رمان بالأناناس", desc: "", icon: "🍍", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
    { 
        id: 37, name: "حبحب", desc: "", icon: "🍉", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
    { 
        id: 37, name: "ليمون عدني", desc: "", icon: "🍋", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
    { 
        id: 58, name: "طبقات", desc: "", icon: "🍰", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
    { 
        id: 3, name: "بوكسات المناسبات", desc: "علب 100 ملي ", icon: "📦", category: "فواكة",
        prices: { "صغير": 3, }
    },
    { 
        id: 4, name: "المكسيكي", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 5, name: "افكادو مغربي", desc: "", icon: "🥑", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 6, name: "السلطان", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 7, name: "امريكانا", desc: "", icon: "🥤", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 8, name: "الأماكن", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 11, name: "الخبرة", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 12, name: "المدمر", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 13, name: "باندول", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 14, name: "بسام", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 15, name: "برشلونة", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 16, name: "برتقال كبس", desc: "", icon: "🍊", category: "فواكه",
        prices: { "كبير": 12, "وسط": 10, "صغير": 7, "1 لتر": 24, "1.5 لتر": 30 }
    },
     { 
        id: 17, name: "جمايكا", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 18, name: "خلطة تامر", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 19, name: "خلطة العصفور", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 20, name: "خلطة المزاج", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 21, name: "خارق الصحراء", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 22, name: "خلطة 88", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 24, name: "عصير عرايسي", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 25, name: "فيتامين سي", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 26, name: "فرغلي", desc: "", icon: "🥝", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 28, name: "رمان حبيبات", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 12, "وسط": 10, "صغير": 7, "1 لتر": 22, "1.5 لتر": 28 }
    },
     { 
        id: 29, name: "رمان وبطيخ", desc: "", icon: "🍉", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 30, name: "رمان وتوت", desc: "", icon: "🍓", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 31, name: "ركبة حاشي", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 32, name: "ريال مديد", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 33, name: "روح الروح", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 34, name: "برتقال خلاط", desc: "", icon: "🍊", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 35, name: "برتقال بالليمون", desc: "", icon: "🍊", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 36, name: "برتقال بالرمان", desc: "", icon: "🍊", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 38, name: "برتقال بالموز", desc: "", icon: "🍊", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 39, name: "برتقال بالفرولة", desc: "", icon: "🍊", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 40, name: "مانجو بالحليب", desc: "", icon: "🥭", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 41, name: "مانجو بالجوافة", desc: "", icon: "🥭", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 42, name: "عرائسي اطفال", desc: "", icon: "🍼", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 43, name: "عرائسي شقف", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 12, "وسط": 10, "صغير": 7 }
    },
     { 
        id: 44, name: "عرائسي مصاص", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 45, name: "تفاح احمر", desc: "", icon: "🍎", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 46, name: "تفاح بالعنب", desc: "", icon: "🍎", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 47, name: "تفاح بالجزر", desc: "", icon: "🍎", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 48, name: "كيوي بالليمون", desc: "", icon: "🥝", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 49, name: "كيوي بالاناناس", desc: "", icon: "🥝", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 50, name: "أفكادو بالكيوي", desc: "", icon: "🥑", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 51, name: "أفكادو بالموز", desc: "", icon: "🥑", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 52, name: "أفكادو بالمانجو", desc: "", icon: "🥑", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 53, name: "أفكادو بالجوافة", desc: "", icon: "🥑", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 54, name: "أناناس بالبرتقال", desc: "", icon: "🍍", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 55, name: "رمان بالليمون", desc: "", icon: "🍅", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23    }
    },
    
    { 
        id: 56, name: "عنب بالبرتقال", desc: "مانجو أليسا الناعمة", icon: "🍇", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 57, name: "توت بالأفكادو", desc: "", icon: "🫐", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 59, name: "مناحي", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 60, name: "العصفور", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 61, name: "سيرلاك", desc: "", icon: "🥤", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 62, name: "ساهر", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 63, name: "توت بالبرتقال", desc: "", icon: "🫐", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },

     { 
        id: 64, name: "ليمون بالنعناع", desc: "", icon: "🍋", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 65, name: "", desc: "", icon: "🍊", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 66, name: "موز بالحليب", desc: "", icon: "🍌", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 67, name: "موز بالعسل", desc: "", icon: "🍌", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 68, name: "موز بالجوافة", desc: "", icon: "🍌", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 69, name: "موز بالشوكولاتة", desc: "", icon: "🍌", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 70, name: "موز بالنعناع", desc: "", icon: "🍌", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 71, name: "", desc: "", icon: "🍊", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 72, name: "جوافة بالحليب", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 73, name: "جوافة بالفرولة", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 74, name: "جوافة بالرمان", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 75, name: "جوافة بالبرتقال", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 76, name: "جوافة بالليمون", desc: "", icon: "🍹", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 77, name: "ليمون بالحليب", desc: "", icon: "🍋", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 78, name: "فرولة بالحليب", desc: "", icon: "🍓", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 79, name: "زبيب اسود", desc: "", icon: "🍇", category: "فواكه",
        prices: { "كبير": 12, "وسط": 10, "صغير": 7, "1 لتر": 24, "1.5 لتر": 30 }
    },
     { 
        id: 80, name: "زبيب اخضر", desc: "", icon: "🍇", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 81, name: "زبيب اسود بالتوت", desc: "", icon: "🍇", category: "فواكه",
        prices: { "كبير": 12, "وسط": 10, "صغير": 7, "1 لتر": 24, "1.5 لتر": 30 }
    },
     { 
        id: 82, name: "صاروخ الليل", desc: "", icon: "🥤", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 83, name: "مانجو وزبيب", desc: "", icon: "🥭", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 84, name: "موهيتوا", desc: "", icon: "🥤", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 85, name: "مسامير ركب", desc: "", icon: "🥤", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 86, name: "خلطة إل جي", desc: "", icon: "🥤", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 87, name: "سلطة فواكة", desc: "", icon: "🥗", category: "فواكه",
        prices: { "كبير": 18,"صغير": 13 }
    },
     { 
        id: 88, name: "أفكادو بالعسل والمكسرات", desc: "", icon: "🥜", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 89, name: "أناناس بالعسل والمكسرات", desc: "", icon: "🍍", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 90, name: "أناناس بالموز والبرتقال", desc: "", icon: "🍍", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 91, name: "موز بالفرولة والحليب", desc: "", icon: "🍌", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 92, name: "فرولة بالبرتقال والموز", desc: "", icon: "🍓", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 93, name: "مانجو بالفرولة والحليب", desc: "", icon: "🥭", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 94, name: "مانجو بالجوافة والفرولة", desc: "", icon: "🥭", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 95, name: "مانجو بالشوكولاتة", desc: "", icon: "🥭", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 96, name: "مانجو بالفرولة والتفاح", desc: "", icon: "🥭", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 97, name: "تفاح بالجزر والبرتقال", desc: "", icon: "🍎", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 98, name: "كيوي بالبرتقال والليمون", desc: "", icon: "🥝", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 99, name: "زبيب كوب", desc: "", icon: "🍇", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 100, name: "خلطة دلوني عليك", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 101, name: "خلطة خاصة للعرسان", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 102, name: "علب عصير صغيرة", desc: "", icon: "🥤", category: "فواكه",
        prices: { "صغير": 3, "وسط": 4, "كبير": 5, "1.5 لتر": 23 }
    },
     { 
        id: 103, name: "برتقال بالليمون والنعناع", desc: "", icon: "🍊", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 104, name: "مانجو بالبرتقال والفرولة", desc: "", icon: "🥭", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 105, name: "زنقة زنقة", desc: "", icon: "🍹", category: "مشروب",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 106, name: "سوبر فياجرا", desc: "", icon: "🥤", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 108, name: "جابر", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 109, name: "شمبانيا", desc: "", icon: "🍾", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 110, name: "مذهلة", desc: "", icon: "🥤", category: "مشروبات",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },
     { 
        id: 111, name: "كودرد فرولة", desc: "", icon: "🍹", category: "مشروبات",
        prices: { "كبير": 12, "وسط": 10, "صغير": 7, "1 لتر": 22, "1.5 لتر": 28 }
    },
     { 
        id: 113, name: "برتقال بالجزر", desc: "", icon: "🍊", category: "فواكه",
        prices: { "كبير": 10, "وسط": 7, "صغير": 5, "1 لتر": 17, "1.5 لتر": 23 }
    },

];

// قائمة الأحجام الثابتة (لترتيب العرض فقط)
const sizeLabels = ["كبير", "وسط", "صغير", "1 لتر", "1.5 لتر"];

let cart = JSON.parse(localStorage.getItem("juiceCart")) || [];

function saveCart() {
    localStorage.setItem("juiceCart", JSON.stringify(cart));
    updateCartCounter();
}

function updateCartCounter() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    const span = document.getElementById("cartCountNav");
    if (span) span.innerText = totalQty;
}

function showNotification(msg) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2000);
}

function addToCart(product, selectedSize, selectedPrice) {
    const existingIndex = cart.findIndex(item => item.id === product.id && item.selectedSize === selectedSize);
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            icon: product.icon,
            selectedSize: selectedSize,
            price: selectedPrice,
            quantity: 1,
            notes: ""
        });
    }
    saveCart();
    showNotification(`✅ تم إضافة ${product.name} (${selectedSize}) - ${selectedPrice} ريال`);
}

let currentFilter = "all";
let searchTerm = "";

function renderProducts() {
    let filtered = products.filter(p => {
        const matchCat = currentFilter === "all" ? true : p.category === currentFilter;
        const matchSearch = p.name.includes(searchTerm) || p.desc.includes(searchTerm);
        return matchCat && matchSearch;
    });
    const container = document.getElementById("productsContainer");
    if (!container) return;
    
    container.innerHTML = filtered.map(p => {
        // إنشاء خيارات الحجم بناءً على الأسعار الخاصة بالمنتج
        const optionsHtml = sizeLabels.map((size, idx) => {
            const price = p.prices[size];
            return `<option value="${price}" data-size="${size}" ${idx === 0 ? 'selected' : ''}>${size} - ${price} ريال</option>`;
        }).join('');
        const defaultSize = sizeLabels[0];
        const defaultPrice = p.prices[defaultSize];
        return `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 text-center p-3">
                    <div class="icon-circle mx-auto">${p.icon}</div>
                    <h3 class="product-name">${p.name}</h3>
                    <p class="text-muted">${p.desc}</p>
                    <div class="mb-2">
                        <label class="fw-bold">اختر الحجم</label>
                        <select class="form-select size-select" data-id="${p.id}">
                            ${optionsHtml}
                        </select>
                    </div>
                    <div class="price-tag mb-2" id="price-${p.id}">💰 السعر: ${defaultPrice} ريال</div>
                    <div class="d-flex gap-2 justify-content-center mt-2">
                        <button class="btn btn-fruit add-to-cart-btn" data-id="${p.id}" data-name="${p.name}" data-icon="${p.icon}"><i class="fas fa-cart-plus"></i> إضافة للسلة</button>
                        <button class="btn btn-success order-now-btn" data-id="${p.id}" data-name="${p.name}" data-icon="${p.icon}"><i class="fab fa-whatsapp"></i> طلب مباشر</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // تحديث السعر عند تغيير الحجم
    document.querySelectorAll('.size-select').forEach(select => {
        const productId = select.dataset.id;
        const priceSpan = document.getElementById(`price-${productId}`);
        select.addEventListener('change', (e) => {
            const newPrice = e.target.value;
            const selectedSize = e.target.options[e.target.selectedIndex].dataset.size;
            priceSpan.innerText = `💰 السعر: ${newPrice} ريال (${selectedSize})`;
        });
    });

    // إضافة للسلة
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            const selectElem = document.querySelector(`.size-select[data-id="${id}"]`);
            const selectedOption = selectElem.options[selectElem.selectedIndex];
            const priceVal = parseInt(selectedOption.value);
            const sizeLabel = selectedOption.dataset.size;
            addToCart(product, sizeLabel, priceVal);
        });
    });

    // طلب مباشر
    document.querySelectorAll('.order-now-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === id);
            const selectElem = document.querySelector(`.size-select[data-id="${id}"]`);
            const selectedOption = selectElem.options[selectElem.selectedIndex];
            const priceVal = parseInt(selectedOption.value);
            const sizeLabel = selectedOption.dataset.size;
            const msg = `السلام عليكم%0Aطلب جديد من عصائر الصعيدي%0Aاسم المنتج: ${product.name}%0Aالحجم: ${sizeLabel}%0Aالسعر: ${priceVal} ريال%0Aشكراً لكم.`;
            window.open(`https://wa.me/966552121467?text=${msg}`, '_blank');
        });
    });
}

// البحث والتصفية
document.getElementById("searchInput")?.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderProducts();
});
document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.cat;
        renderProducts();
    });
});

// الوضع الليلي
const darkToggle = document.getElementById("darkModeToggle");
if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });
}
if (localStorage.getItem("darkMode") === "true") document.body.classList.add("dark-mode");

// الخرائط
document.getElementById("openMapsBtn")?.addEventListener("click", () => {
    window.open("https://www.google.com/maps/search/?api=1&query=نجران+طريق+الملك+عبدالعزيز+شرق+عصائر+الصعيدي+عصفور", "_blank");
});
document.getElementById("shareLocationBtn")?.addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({ title: "موقع عصائر الصعيدي", text: "نجران - طريق الملك عبدالعزيز - شرق محطة ابن دوحان" });
    } else {
        navigator.clipboard.writeText("نجران - طريق الملك عبدالعزيز - شرق محطة ابن دوحان");
        showNotification("تم نسخ الموقع");
    }
});

// معالجة أزرار بوكسات المناسبات
document.getElementById('addEventPackToCart')?.addEventListener('click', () => {
    const product = {
        id: 99,  // id فريد
        name: 'بوكسات المناسبات',
        icon: '🎁',
        prices: { 'علبة 100 مل': 3 }
    };
    addToCart(product, 'علبة 100 مل', 3);
});
document.getElementById('orderEventPackDirect')?.addEventListener('click', () => {
    const productName = 'بوكسات المناسبات';
    const sizeLabel = 'علبة 100 مل';
    const price = 3;
    const msg = `السلام عليكم%0Aطلب جديد من عصائر الصعيدي%0Aاسم المنتج: ${productName}%0Aالحجم: ${sizeLabel}%0Aالسعر: ${price} ريال%0Aشكراً لكم.`;
    window.open(`https://wa.me/966552121467?text=${msg}`, '_blank');
});

// مزامنة السلة مع التخزين
window.addEventListener("storage", () => {
    cart = JSON.parse(localStorage.getItem("juiceCart")) || [];
    updateCartCounter();
});

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartCounter();
    initMapAndLocation();
});

window.addEventListener("storage", () => {
    cart = JSON.parse(localStorage.getItem("juiceCart")) || [];
    updateCartCounter();
});

renderProducts();
updateCartCounter();