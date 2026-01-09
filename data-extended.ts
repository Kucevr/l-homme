export interface ProductDetails {
  materials: string[];
  materials_ru?: string[];
  care: string[];
  care_ru?: string[];
  features: string[];
  features_ru?: string[];
  fit: string;
  fit_ru?: string;
  madeIn: string;
  madeIn_ru?: string;
  story?: string;
  story_ru?: string;
  completeTheLook: number[];
  craft?: {
    title: string;
    title_ru?: string;
    description: string;
    description_ru?: string;
    image: string;
  };
}

export const PRODUCT_DETAILS: Record<number, ProductDetails> = {
  1: { // Oxford Structure Shirt
    materials: ["100% Italian Cotton", "Oxford Weave", "Mother-of-Pearl Buttons"],
    materials_ru: ["100% итальянский хлопок", "Оксфордское плетение", "Перламутровые пуговицы"],
    care: ["Machine wash cold", "Tumble dry low", "Iron medium heat", "Do not bleach"],
    care_ru: ["Машинная стирка в холодной воде", "Сушка при низкой температуре", "Глажка при средней температуре", "Не отбеливать"],
    features: ["Button-down collar", "Chest pocket", "Split back yoke", "Curved hem"],
    features_ru: ["Воротник на пуговицах", "Нагрудный карман", "Разрезная кокетка сзади", "Изогнутый подол"],
    fit: "Regular fit with room through chest and waist",
    fit_ru: "Стандартный крой, свободный в груди и талии",
    madeIn: "Portugal",
    madeIn_ru: "Португалия",
    completeTheLook: [3, 20, 11], // Chino, Belt, Derby
    craft: {
        title: "The Single-Needle Stitch",
        title_ru: "Одноигольный шов",
        description: "Each shirt is constructed using traditional single-needle tailoring. This slower process creates a cleaner finish inside and out, ensuring the garment retains its shape for years.",
        description_ru: "Каждая рубашка изготовлена с использованием традиционного одноигольного пошива. Этот более медленный процесс создает более чистую обработку внутри и снаружи, обеспечивая сохранение формы изделия на долгие годы.",
        image: "https://images.unsplash.com/photo-1558232108-9a244a5619bb?q=80&w=1200"
    }
  },
  2: { // Merino Rollneck
    materials: ["100% Superfine Merino Wool", "12-gauge knit", "Ribbed trims"],
    materials_ru: ["100% сверхтонкая мериносовая шерсть", "Плотность вязки 12", "Отделка в рубчик"],
    care: ["Hand wash cold", "Lay flat to dry", "Do not wring", "Steam if needed"],
    care_ru: ["Ручная стирка в холодной воде", "Сушить в расправленном виде", "Не выжимать", "Отпаривать при необходимости"],
    features: ["Rollneck collar", "Ribbed cuffs and hem", "Seamless construction", "Lightweight"],
    features_ru: ["Высокий воротник", "Манжеты и подол в рубчик", "Бесшовная конструкция", "Легкий вес"],
    fit: "Slim fit, true to size",
    fit_ru: "Облегающий крой, соответствует размеру",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [8, 4, 6], // Wool Trouser, Wool Coat, Chelsea Boot
    craft: {
        title: "Seamless Knitting",
        title_ru: "Бесшовная вязка",
        description: "Knitted on advanced Japanese Shima Seiki machines, this rollneck is produced as a single piece. No seams means zero friction and a perfect, sculptural silhouette.",
        description_ru: "Эта водолазка связана на современных японских машинах Shima Seiki как единое целое. Отсутствие швов означает отсутствие трения и идеальный скульптурный силуэт.",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200"
    }
  },
  3: { // Tapered Pleat Chino
    materials: ["98% Cotton, 2% Elastane", "High-density twill", "YKK zipper"],
    materials_ru: ["98% хлопок, 2% эластан", "Твил высокой плотности", "Молния YKK"],
    care: ["Machine wash cold", "Hang dry", "Iron if needed", "Dry clean for best results"],
    care_ru: ["Машинная стирка в холодной воде", "Сушить на вешалке", "Глажка при необходимости", "Для лучшего результата рекомендуется химчистка"],
    features: ["Single pleat", "Tapered leg", "Side pockets", "Welt back pockets"],
    features_ru: ["Одна складка", "Зауженная штанина", "Боковые карманы", "Прорезные задние карманы"],
    fit: "Tapered fit from knee to ankle",
    fit_ru: "Зауженный крой от колена до щиколотки",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [1, 6, 20] // Oxford Shirt, Chelsea Boot, Belt
  },
  4: { // Italian Wool Coat
    materials: ["80% Recycled Wool, 20% Polyamide", "Cupro lining", "Horn buttons"],
    materials_ru: ["80% переработанная шерсть, 20% полиамид", "Подкладка купро", "Роговые пуговицы"],
    care: ["Dry clean only", "Store on hanger", "Steam to refresh", "Professional press"],
    care_ru: ["Только химчистка", "Хранить на вешалке", "Отпаривать для свежести", "Профессиональное прессование"],
    features: ["Structured shoulders", "Notch lapels", "Interior pockets", "Full lining"],
    features_ru: ["Структурированные плечи", "Ступенчатые лацканы", "Внутренние карманы", "Полная подкладка"],
    fit: "Regular fit, sized to layer",
    fit_ru: "Стандартный крой, рассчитан на многослойность",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [2, 8, 11] // Merino Rollneck, Wool Trouser, Derby
  },
  5: { // Heavy Cotton Tee
    materials: ["100% Organic Cotton", "280gsm weight", "Pre-shrunk fabric"],
    materials_ru: ["100% органический хлопок", "Плотность 280 г/м²", "Предварительно усаженная ткань"],
    care: ["Machine wash cold", "Tumble dry low", "Do not iron print", "Wash inside out"],
    care_ru: ["Машинная стирка в холодной воде", "Сушка при низкой температуре", "Не гладить принт", "Стирать наизнанку"],
    features: ["Boxy fit", "Reinforced collar", "Side seam construction", "Heavyweight"],
    features_ru: ["Свободный крой (Boxy)", "Укрепленный воротник", "Конструкция с боковыми швами", "Плотная ткань"],
    fit: "Relaxed boxy fit",
    fit_ru: "Расслабленный свободный крой",
    madeIn: "Portugal",
    madeIn_ru: "Португалия",
    completeTheLook: [15, 9, 24] // Wide Denim, Suede Bomber, Loafers
  },
  6: { // Chelsea Boot No. 5
    materials: ["Full-grain calf leather", "Leather sole", "Elastic side panels"],
    materials_ru: ["Цельнозерновая телячья кожа", "Кожаная подошва", "Эластичные боковые вставки"],
    care: ["Wipe with damp cloth", "Use leather conditioner", "Store with shoe trees", "Resole when needed"],
    care_ru: ["Протирать влажной тканью", "Использовать кондиционер для кожи", "Хранить с распорками", "Замена подошвы при необходимости"],
    features: ["Blake stitch construction", "Pull tabs", "Stacked leather heel", "Goodyear welt"],
    features_ru: ["Конструкция Блейк", "Петельки для надевания", "Наборный кожаный каблук", "Рантовый метод Goodyear"],
    fit: "True to size, European sizing",
    fit_ru: "Размер в размер, европейская сетка",
    madeIn: "Portugal",
    madeIn_ru: "Португалия",
    completeTheLook: [3, 2, 4] // Chino, Merino, Wool Coat
  },
  7: { // Cashmere Crew Neck
    materials: ["100% Mongolian Cashmere", "2-ply yarn", "12-gauge knit"],
    materials_ru: ["100% монгольский кашемир", "Двуниточная пряжа", "Плотность вязки 12"],
    care: ["Hand wash cold", "Lay flat to dry", "Store folded", "Use cashmere comb"],
    care_ru: ["Ручная стирка в холодной воде", "Сушить в расправленном виде", "Хранить в сложенном виде", "Использовать гребень для кашемира"],
    features: ["Crew neck", "Ribbed trims", "Seamless shoulders", "Lightweight"],
    features_ru: ["Круглый вырез", "Отделка в рубчик", "Бесшовные плечи", "Легкий вес"],
    fit: "Regular fit, slightly relaxed",
    fit_ru: "Стандартный крой, слегка свободный",
    madeIn: "Scotland",
    madeIn_ru: "Шотландия",
    completeTheLook: [17, 16, 11] // Dress Trouser, Blazer, Derby
  },
  8: { // Wool Flannel Trouser
    materials: ["100% Virgin Wool", "Flannel weave", "Side adjusters"],
    materials_ru: ["100% натуральная шерсть", "Фланелевое плетение", "Боковые регуляторы"],
    care: ["Dry clean only", "Hang to air", "Steam press", "Store on hanger"],
    care_ru: ["Только химчистка", "Проветривать на вешалке", "Паровая глажка", "Хранить на вешалке"],
    features: ["Mid-rise", "Straight leg", "Side adjusters", "Slant pockets"],
    features_ru: ["Средняя посадка", "Прямая штанина", "Боковые регуляторы", "Косые карманы"],
    fit: "Classic straight fit",
    fit_ru: "Классический прямой крой",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [7, 4, 11] // Cashmere, Wool Coat, Derby
  },
  9: { // Suede Bomber
    materials: ["100% Italian Suede", "Silk lining", "Ribbed knit trims"],
    materials_ru: ["100% итальянская замша", "Шелковая подкладка", "Трикотажная отделка в рубчик"],
    care: ["Professional suede cleaning", "Brush regularly", "Avoid water", "Store in garment bag"],
    care_ru: ["Профессиональная чистка замши", "Регулярно чистить щеткой", "Избегать воды", "Хранить в чехле"],
    features: ["Bomber silhouette", "Zip closure", "Side pockets", "Ribbed cuffs"],
    features_ru: ["Силуэт бомбера", "Застежка на молнию", "Боковые карманы", "Манжеты в рубчик"],
    fit: "Regular fit, true to size",
    fit_ru: "Стандартный крой, размер в размер",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [5, 15, 24] // Cotton Tee, Wide Denim, Loafers
  },
  10: { // Linen Camp Collar
    materials: ["100% Portuguese Linen", "Lightweight weave", "Corozo buttons"],
    materials_ru: ["100% португальский лен", "Легкое плетение", "Пуговицы корозо"],
    care: ["Machine wash cold", "Line dry", "Iron while damp", "Embrace wrinkles"],
    care_ru: ["Машинная стирка в холодной воде", "Сушка на веревке", "Глажка во влажном состоянии", "Допускаются естественные помятости"],
    features: ["Camp collar", "Chest pocket", "Short sleeves", "Relaxed fit"],
    features_ru: ["Отложной воротник", "Нагрудный карман", "Короткие рукава", "Свободный крой"],
    fit: "Relaxed fit with drop shoulders",
    fit_ru: "Свободный крой со спущенным плечом",
    madeIn: "Portugal",
    madeIn_ru: "Португалия",
    completeTheLook: [3, 24, 19] // Chino, Loafers, Cardholder
  },
  11: { // Leather Derby
    materials: ["Full-grain leather", "Leather sole", "Cork footbed"],
    materials_ru: ["Цельнозерновая кожа", "Кожаная подошва", "Пробковая стелька"],
    care: ["Polish regularly", "Use shoe trees", "Rotate wear", "Resole when needed"],
    care_ru: ["Регулярно полировать", "Использовать распорки", "Чередовать носку", "Замена подошвы при необходимости"],
    features: ["Derby lacing", "Goodyear welt", "Leather lining", "Stacked heel"],
    features_ru: ["Шнуровка дерби", "Рантовый метод Goodyear", "Кожаная подкладка", "Наборный каблук"],
    fit: "True to size, European sizing",
    fit_ru: "Размер в размер, европейская сетка",
    madeIn: "England",
    madeIn_ru: "Англия",
    completeTheLook: [17, 16, 18] // Dress Trouser, Blazer, Briefcase
  },
  12: { // Ribbed Tank
    materials: ["100% Organic Cotton", "Ribbed knit", "Reinforced straps"],
    materials_ru: ["100% органический хлопок", "Трикотаж в рубчик", "Укрепленные бретели"],
    care: ["Machine wash cold", "Tumble dry low", "No bleach", "Iron low heat"],
    care_ru: ["Машинная стирка в холодной воде", "Сушка при низкой температуре", "Не отбеливать", "Глажка при низкой температуре"],
    features: ["Slim fit", "Ribbed texture", "Athletic cut", "Reinforced seams"],
    features_ru: ["Приталенный крой", "Текстура в рубчик", "Атлетический вырез", "Укрепленные швы"],
    fit: "Slim fit, size up for relaxed",
    fit_ru: "Облегающий крой, для свободы возьмите на размер больше",
    madeIn: "Portugal",
    madeIn_ru: "Португалия",
    completeTheLook: [15, 9, 24] // Wide Denim, Bomber, Loafers
  },
  13: { // Quilted Vest
    materials: ["Recycled nylon shell", "Recycled down fill", "Snap buttons"],
    materials_ru: ["Верх из переработанного нейлона", "Наполнитель из переработанного пуха", "Кнопки"],
    care: ["Machine wash cold", "Tumble dry low", "Do not iron", "Store uncompressed"],
    care_ru: ["Машинная стирка в холодной воде", "Сушка при низкой температуре", "Не гладить", "Хранить в несжатом виде"],
    features: ["Diamond quilting", "Snap closure", "Side pockets", "Packable"],
    features_ru: ["Ромбовидная стежка", "Застежка на кнопки", "Боковые карманы", "Компактно складывается"],
    fit: "Regular fit, layers well",
    fit_ru: "Стандартный крой, хорошо подходит для многослойности",
    madeIn: "China",
    madeIn_ru: "Китай",
    completeTheLook: [2, 3, 6] // Merino, Chino, Chelsea Boot
  },
  14: { // Silk Knit Polo
    materials: ["70% Silk, 30% Cotton", "Fine gauge knit", "Mother-of-pearl buttons"],
    materials_ru: ["70% шелк, 30% хлопок", "Тонкая вязка", "Перламутровые пуговицы"],
    care: ["Hand wash cold", "Lay flat to dry", "Steam gently", "Do not wring"],
    care_ru: ["Ручная стирка в холодной воде", "Сушить в расправленном виде", "Аккуратно отпаривать", "Не выжимать"],
    features: ["Knit construction", "Three-button placket", "Ribbed collar", "Short sleeves"],
    features_ru: ["Вязаная конструкция", "Планка на трех пуговицах", "Воротник в рубчик", "Короткие рукава"],
    fit: "Slim fit, elegant drape",
    fit_ru: "Приталенный крой, элегантная драпировка",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [3, 24, 21] // Chino, Loafers, Signature Parfum
  },
  15: { // Wide Leg Denim
    materials: ["100% Japanese Selvedge Denim", "14oz weight", "Copper rivets"],
    materials_ru: ["100% японский селвидж-деним", "Плотность 14 унций", "Медные заклепки"],
    care: ["Wash sparingly", "Cold water only", "Hang dry", "No tumble dry"],
    care_ru: ["Стирать редко", "Только холодная вода", "Сушить на вешалке", "Не сушить в машине"],
    features: ["Wide leg", "High rise", "Selvedge detail", "Button fly"],
    features_ru: ["Широкие штанины", "Высокая посадка", "Детали селвидж", "Ширинка на пуговицах"],
    fit: "Relaxed wide leg from hip",
    fit_ru: "Свободный широкий крой от бедра",
    madeIn: "Japan",
    madeIn_ru: "Япония",
    completeTheLook: [5, 9, 24] // Cotton Tee, Bomber, Loafers
  },
  16: { // Double-Breasted Blazer
    materials: ["100% Italian Wool", "Cupro lining", "Horn buttons"],
    materials_ru: ["100% итальянская шерсть", "Подкладка купро", "Роговые пуговицы"],
    care: ["Dry clean only", "Steam press", "Store on hanger", "Brush regularly"],
    care_ru: ["Только химчистка", "Паровая глажка", "Хранить на вешалке", "Регулярно чистить щеткой"],
    features: ["Peak lapels", "Double-breasted", "Structured shoulders", "Working cuffs"],
    features_ru: ["Заостренные лацканы", "Двубортный", "Структурированные плечи", "Рабочие манжеты"],
    fit: "Tailored fit through body",
    fit_ru: "Приталенный крой по фигуре",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [17, 11, 18] // Dress Trouser, Derby, Briefcase
  },
  17: { // Pleated Dress Trouser
    materials: ["100% Super 120s Wool", "Satin waistband", "Horn button"],
    materials_ru: ["100% шерсть Super 120s", "Сатиновый пояс", "Роговая пуговица"],
    care: ["Dry clean only", "Hang to air", "Steam press", "Professional alterations"],
    care_ru: ["Только химчистка", "Проветривать на вешалке", "Паровая глажка", "Профессиональная подгонка по фигуре"],
    features: ["Double pleats", "Side pockets", "Welt back pockets", "Unfinished hem"],
    features_ru: ["Двойные складки", "Боковые карманы", "Прорезные задние карманы", "Необработанный низ"],
    fit: "Classic fit with pleats",
    fit_ru: "Классический крой со складками",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [16, 11, 20] // Blazer, Derby, Belt
  },
  18: { // Leather Briefcase
    materials: ["Full-grain vegetable-tanned leather", "Brass hardware", "Cotton canvas lining"],
    materials_ru: ["Цельнозерновая кожа растительного дубления", "Латунная фурнитура", "Подкладка из хлопкового канваса"],
    care: ["Condition regularly", "Avoid water", "Store stuffed", "Patina develops naturally"],
    care_ru: ["Регулярно обрабатывать кондиционером", "Избегать воды", "Хранить в набитом виде", "Со временем появляется естественная патина"],
    features: ["Multiple compartments", "Padded laptop sleeve", "Adjustable strap", "Top handles"],
    features_ru: ["Несколько отделений", "Мягкий отсек для ноутбука", "Регулируемый ремень", "Верхние ручки"],
    fit: "One size",
    fit_ru: "Один размер",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [16, 17, 11] // Blazer, Dress Trouser, Derby
  },
  19: { // Leather Cardholder
    materials: ["Vegetable-tanned leather", "Cotton stitching", "Minimal design"],
    materials_ru: ["Кожа растительного дубления", "Хлопковая строчка", "Минималистичный дизайн"],
    care: ["Wipe clean", "Condition occasionally", "Avoid water", "Patina develops"],
    care_ru: ["Протирать чистой тканью", "Изредка использовать кондиционер", "Избегать воды", "Появляется патина"],
    features: ["4-6 card capacity", "Slim profile", "Center pocket", "Hand-stitched"],
    features_ru: ["Вмещает 4–6 карт", "Тонкий профиль", "Центральный карман", "Ручная строчка"],
    fit: "One size",
    fit_ru: "Один размер",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [20, 18, 10] // Belt, Briefcase, Linen Shirt
  },
  20: { // Leather Belt
    materials: ["Full-grain leather", "Brushed metal buckle", "Edge paint"],
    materials_ru: ["Цельнозерновая кожа", "Матовая металлическая пряжка", "Покраска уреза"],
    care: ["Wipe clean", "Condition leather", "Store flat", "Avoid water"],
    care_ru: ["Протирать чистой тканью", "Обрабатывать кондиционером для кожи", "Хранить в расправленном виде", "Избегать воды"],
    features: ["3.5cm width", "Five holes", "Brushed buckle", "Edge finishing"],
    features_ru: ["Ширина 3,5 см", "Пять отверстий", "Матовая пряжка", "Финишная обработка края"],
    fit: "Order one size up from waist",
    fit_ru: "Заказывайте на размер больше вашего объема талии",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [3, 1, 6] // Chino, Oxford Shirt, Chelsea Boot
  },
  21: { // Signature Parfum
    materials: ["Bergamot", "Cedar", "Vetiver", "Amber base"],
    materials_ru: ["Бергамот", "Кедр", "Ветивер", "Амбровая база"],
    care: ["Store in cool place", "Avoid direct sunlight", "Keep cap closed", "Use within 3 years"],
    care_ru: ["Хранить в прохладном месте", "Избегать прямых солнечных лучей", "Держать колпачок закрытым", "Использовать в течение 3 лет"],
    features: ["100ml bottle", "Eau de Parfum concentration", "Long-lasting", "Signature scent"],
    features_ru: ["Флакон 100 мл", "Концентрация Eau de Parfum", "Стойкий аромат", "Фирменный аромат"],
    fit: "One size",
    fit_ru: "Один размер",
    madeIn: "France",
    madeIn_ru: "Франция",
    completeTheLook: [16, 17, 18] // Blazer, Dress Trouser, Briefcase
  },
  22: { // Noir Eau de Toilette
    materials: ["Black pepper", "Leather accord", "Tobacco", "Woody base"],
    materials_ru: ["Черный перец", "Кожаный аккорд", "Табак", "Древесная база"],
    care: ["Store in cool place", "Avoid direct sunlight", "Keep cap closed", "Use within 3 years"],
    care_ru: ["Хранить в прохладном месте", "Избегать прямых солнечных лучей", "Держать колпачок закрытым", "Использовать в течение 3 лет"],
    features: ["50ml bottle", "Eau de Toilette concentration", "Evening scent", "Bold character"],
    features_ru: ["Флакон 50 мл", "Концентрация Eau de Toilette", "Вечерний аромат", "Смелый характер"],
    fit: "One size",
    fit_ru: "Один размер",
    madeIn: "France",
    madeIn_ru: "Франция",
    completeTheLook: [9, 15, 24] // Bomber, Wide Denim, Loafers
  },
  23: { // Wool Overcoat
    materials: ["100% Virgin Wool", "Viscose lining", "Horn buttons"],
    materials_ru: ["100% натуральная шерсть", "Вискозная подкладка", "Роговые пуговицы"],
    care: ["Dry clean only", "Steam to refresh", "Store on hanger", "Brush regularly"],
    care_ru: ["Только химчистка", "Отпаривать для свежести", "Хранить на вешалке", "Регулярно чистить щеткой"],
    features: ["Single-breasted", "Notch lapels", "Interior pockets", "Full lining"],
    features_ru: ["Однобортный", "Ступенчатые лацканы", "Внутренние карманы", "Полная подкладка"],
    fit: "Regular fit, sized to layer",
    fit_ru: "Стандартный крой, рассчитан на многослойность",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [7, 8, 11] // Cashmere, Wool Trouser, Derby
  },
  24: { // Suede Loafers
    materials: ["Soft suede upper", "Leather sole", "Rubber heel"],
    materials_ru: ["Верх из мягкой замши", "Кожаная подошва", "Резиновая пятка"],
    care: ["Brush regularly", "Use suede protector", "Avoid water", "Professional cleaning"],
    care_ru: ["Регулярно чистить щеткой", "Использовать защитный спрей для замши", "Избегать воды", "Профессиональная чистка"],
    features: ["Penny loafer style", "Leather lining", "Flexible sole", "Hand-stitched"],
    features_ru: ["Стиль пенни-лоферы", "Кожаная подкладка", "Гибкая подошва", "Ручная строчка"],
    fit: "True to size, European sizing",
    fit_ru: "Размер в размер, европейская сетка",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [10, 3, 19] // Linen Shirt, Chino, Cardholder
  },
  25: { // Silk Tie Classic
    materials: ["100% Mulberry Silk", "Hand-rolled edges", "Interlining for structure"],
    materials_ru: ["100% шелк малбери", "Края ручной работы", "Прокладка для структуры"],
    care: ["Dry clean only", "Store hanging or rolled", "Steam gently", "Avoid water spots"],
    care_ru: ["Только химчистка", "Хранить в подвешенном или скрученном виде", "Аккуратно отпаривать", "Избегать пятен от воды"],
    features: ["Classic width 8cm", "Hand-rolled edges", "Self-loop", "Timeless solid color"],
    features_ru: ["Классическая ширина 8 см", "Края ручной работы", "Петля для фиксации хвостика", "Вне времени однотонный цвет"],
    fit: "Standard length 150cm",
    fit_ru: "Стандартная длина 150 см",
    madeIn: "Italy",
    madeIn_ru: "Италия",
    completeTheLook: [16, 17, 11]
  },
  26: { // Wool Knit Tie
    materials: ["100% Wool", "Knit construction", "Square-cut bottom"],
    materials_ru: ["100% шерсть", "Вязаная конструкция", "Прямой низ"],
    care: ["Dry clean recommended", "Store flat or rolled", "Steam if needed", "Avoid hanging"],
    care_ru: ["Рекомендуется химчистка", "Хранить в расправленном или скрученном виде", "Отпаривать при необходимости", "Избегать хранения на вешалке"],
    features: ["Textured knit", "Square bottom", "Casual elegance", "Width 6cm"],
    features_ru: ["Фактурная вязка", "Прямой низ", "Повседневная элегантность", "Ширина 6 см"],
    fit: "Standard length 145cm",
    fit_ru: "Стандартная длина 145 см",
    madeIn: "England",
    madeIn_ru: "Англия",
    completeTheLook: [1, 3, 6]
  },
};
