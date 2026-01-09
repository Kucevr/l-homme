
export type PageView = 'home' | 'collections' | 'new-arrivals' | 'product' | 'journal' | 'locations' | 'stores' | 'shipping' | 'returns' | 'contact' | 'privacy' | 'terms' | 'philosophy' | 'sustainability' | 'checkout' | 'checkout-success';
export type CategoryType = 'All' | 'Outerwear' | 'Knitwear' | 'Shirting' | 'Trousers' | 'Footwear' | 'Essentials' | 'Tailoring' | 'Leather Goods' | 'Fragrance' | 'Accessories';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  imageHover: string;
  description: string;
  sizes: string[];
  name_ru?: string;
  description_ru?: string;
  material?: string;
  material_ru?: string;
  silhouette?: 'Tailored' | 'Relaxed' | 'Oversized' | 'Standard';
  silhouette_ru?: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  cartId: string;
}

export interface PageLink {
  id: string;
  title: string;
  title_ru?: string;
  view: PageView;
  description: string;
  description_ru?: string;
}

export const SEARCHABLE_PAGES: PageLink[] = [
  { id: 'new-arrivals', title: 'New Arrivals', title_ru: 'Новинки', view: 'new-arrivals', description: 'Explore our latest collection of structural garments and Italian merino knitwear.', description_ru: 'Ознакомьтесь с нашей последней коллекцией структурной одежды и трикотажа из итальянского мериноса.' },
  { id: 'collections', title: 'The Collection', title_ru: 'Коллекция', view: 'collections', description: 'Browse our full range of outerwear, tailoring, and footwear.', description_ru: 'Посмотрите наш полный ассортимента верхней одежды, костюмов и обуви.' },
  { id: 'journal', title: 'The Journal', title_ru: 'Журнал', view: 'journal', description: 'Editorial stories on craft, style, and philosophy.', description_ru: 'Редакционные статьи о мастерстве, стиле и философии.' },
  { id: 'locations', title: 'Visit Us', title_ru: 'Бутики', view: 'locations', description: 'Explore our ateliers in Paris, Tokyo, and New York.', description_ru: 'Посетите наши ателье в Париже, Токио и Нью-Йорке.' },
  { id: 'shipping', title: 'Shipping & Delivery', title_ru: 'Доставка', view: 'shipping', description: 'Details on our worldwide concierge shipping and delivery estimates.', description_ru: 'Подробности о нашей международной доставке и примерные сроки.' },
  { id: 'returns', title: 'Returns & Exchanges', title_ru: 'Возврат и Обмен', view: 'returns', description: 'Information on our global return policy and exchange process.', description_ru: 'Информация о нашей глобальной политике возврата и процессе обмена.' },
  { id: 'contact', title: 'Contact Us', title_ru: 'Контакты', view: 'contact', description: 'Reach out to our concierge team for styling advice or assistance.', description_ru: 'Свяжитесь с нашей консьерж-службой для консультации по стилю или помощи.' },
  { id: 'privacy', title: 'Privacy Policy', title_ru: 'Политика конфиденциальности', view: 'privacy', description: 'How we handle and protect your personal data.', description_ru: 'Как мы обрабатываем и защищаем ваши персональные данные.' },
  { id: 'terms', title: 'Terms of Service', title_ru: 'Условия использования', view: 'terms', description: 'Rules and regulations for using the L\'HOMME website.', description_ru: 'Правила и положения по использованию веб-сайта L\'HOMME.' },
  { id: 'philosophy', title: 'Atelier Philosophy', title_ru: 'Философия Ателье', view: 'philosophy', description: 'The core values behind L\'HOMME design and structural precision.', description_ru: 'Основные ценности L\'HOMME: дизайн и структурная точность.' },
  { id: 'sustainability', title: 'Sustainability & Craft', title_ru: 'Устойчивое развитие', view: 'sustainability', description: 'Our commitment to circularity, artisan mastery, and ethical production.', description_ru: 'Наши обязательства по экологичности, мастерству и этичному производству.' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Oxford Structure Shirt",
    name_ru: "Структурная рубашка Oxford",
    price: 120,
    category: "SHIRTING",
    image: "/items/OxfordStructureShirt.jpeg",
    imageHover: "/items/OxfordStructureShirt2.jpeg",
    description: "A staple of the modern wardrobe, cut from premium Italian cotton with a robust oxford weave. Designed for a relaxed fit that bridges the gap between formal and casual.",
    description_ru: "Основа современного гардероба, выполненная из премиального итальянского хлопка с прочным оксфордским плетением. Свободный крой, идеально сочетающий формальный и повседневный стили.",
    sizes: ["S", "M", "L", "XL"],
    material: "Cotton",
    material_ru: "Хлопок",
    silhouette: "Relaxed",
    silhouette_ru: "Свободный"
  },
  {
    id: 2,
    name: "Merino Rollneck",
    name_ru: "Водолазка из мериноса",
    price: 185,
    category: "KNITWEAR",
    image: "/items/MerinoRollneck.jpeg",
    imageHover: "/items/Merino Rollneck2.jpeg",
    description: "Spun from superfine merino wool, this rollneck offers exceptional warmth without the weight. Features ribbed trims and a seamless construction for comfort.",
    description_ru: "Эта водолазка, изготовленная из сверхтонкой мериносовой шерсти, обеспечивает исключительное тепло при минимальном весе. Ребристая отделка и бесшовная конструкция для комфорта.",
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "Wool",
    material_ru: "Шерсть",
    silhouette: "Tailored",
    silhouette_ru: "Приталенный"
  },
  {
    id: 3,
    name: "Tapered Pleat Chino",
    name_ru: "Зауженные чиносы со складками",
    price: 145,
    category: "TROUSERS",
    image: "/items/TaperedPleatChino.jpeg",
    imageHover: "/items/TaperedPleatChino2.jpeg",
    description: "Classic chinos reimagined with a single pleat and a sharp tapered leg. Constructed from high-density cotton twill that ages beautifully with wear.",
    description_ru: "Классические чиносы в новом прочтении: с одной складкой и четко зауженными штанинами. Изготовлены из хлопкового твила высокой плотности, который красиво стареет при носке.",
    sizes: ["30", "32", "34", "36"],
    material: "Cotton",
    material_ru: "Хлопок",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 4,
    name: "Italian Wool Coat",
    name_ru: "Итальянское шерстяное пальто",
    price: 450,
    category: "OUTERWEAR",
    image: "/items/ItalianWoolCoat.jpeg",
    imageHover: "/items/ItalianWoolCoat2.jpeg",
    description: "The definitive winter overcoat. Tailored from a heavy recycled wool blend with a structured shoulder and fully lined interior for insulation against the elements.",
    description_ru: "Идеальное зимнее пальто. Сшито из плотной смеси переработанной шерсти, имеет структурированное плечо и подкладку по всей длине для защиты от непогоды.",
    sizes: ["46", "48", "50", "52", "54"],
    material: "Wool",
    material_ru: "Шерсть",
    silhouette: "Oversized",
    silhouette_ru: "Оверзайз"
  },
  {
    id: 5,
    name: "Heavy Cotton Tee",
    name_ru: "Плотная хлопковая футболка",
    price: 65,
    category: "ESSENTIALS",
    image: "/items/HeavyCottonTee.jpeg",
    imageHover: "/items/HeavyCottonTee2.jpeg",
    description: "The perfect t-shirt exists. 280gsm heavyweight organic cotton with a boxy fit and tight collar. Pre-shrunk to maintain its shape wash after wash.",
    description_ru: "Идеальная футболка существует. Плотный органический хлопок плотностью 280 г/м² со свободным кроем и плотным воротником. Предварительная усадка для сохранения формы после стирки.",
    sizes: ["S", "M", "L", "XL"],
    material: "Cotton",
    material_ru: "Хлопок",
    silhouette: "Oversized",
    silhouette_ru: "Оверзайз"
  },
  {
    id: 6,
    name: "Chelsea Boot No. 5",
    name_ru: "Ботинки челси №5",
    price: 295,
    category: "FOOTWEAR",
    image: "/items/ChelseaBoot.jpeg",
    imageHover: "/items/ChelseaBoot2.jpeg",
    description: "Handcrafted in Portugal from smooth calf leather. Features a durable Blake-stitched sole and elasticated side panels for easy entry.",
    description_ru: "Ручная работа из Португалии, гладкая телячья кожа. Износостойкая подошва с прошивкой Блейк и эластичные боковые вставки для удобства.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    material: "Leather",
    material_ru: "Кожа",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 7,
    name: "Cashmere Crew Neck",
    name_ru: "Кашемировый джемпер",
    price: 320,
    category: "KNITWEAR",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?q=80&w=1000&auto=format&fit=crop",
    description: "Pure cashmere luxury. Knitted in Scotland from the finest Mongolian fibers. A timeless piece that only gets softer with age.",
    description_ru: "Роскошь чистого кашемира. Связано в Шотландии из лучших монгольских волокон. Вневременная модель, которая с годами становится только мягче.",
    sizes: ["S", "M", "L", "XL"],
    material: "Cashmere",
    material_ru: "Кашемир",
    silhouette: "Relaxed",
    silhouette_ru: "Свободный"
  },
  {
    id: 8,
    name: "Wool Flannel Trouser",
    name_ru: "Брюки из шерстяной фланели",
    price: 195,
    category: "TROUSERS",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1000&auto=format&fit=crop",
    description: "Tailored from Italian wool flannel with a mid-rise and straight leg. Features side adjusters for a perfect fit without a belt.",
    description_ru: "Сшиты из итальянской шерстяной фланели, средняя посадка и прямые штанины. Боковые регуляторы обеспечивают идеальную посадку без ремня.",
    sizes: ["30", "32", "34", "36", "38"],
    material: "Wool",
    material_ru: "Шерсть",
    silhouette: "Tailored",
    silhouette_ru: "Приталенный"
  },
  {
    id: 9,
    name: "Suede Bomber Jacket",
    name_ru: "Замшевый бомбер",
    price: 680,
    category: "OUTERWEAR",
    image: "/items/SuedeBomberJacket.jpeg",
    imageHover: "/items/SuedeBomberJacket2.jpeg",
    description: "Crafted from buttery Italian suede with ribbed cuffs and hem. Fully lined in silk for effortless layering.",
    description_ru: "Изготовлен из мягкой итальянской замши с трикотажными манжетами и подолом. Шелковая подкладка для максимального комфорта.",
    sizes: ["46", "48", "50", "52"],
    material: "Suede",
    material_ru: "Замша",
    silhouette: "Relaxed",
    silhouette_ru: "Свободный"
  },
  {
    id: 10,
    name: "Linen Camp Collar Shirt",
    name_ru: "Льняная рубашка с отложным воротником",
    price: 135,
    category: "SHIRTING",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1000&auto=format&fit=crop",
    description: "Relaxed camp collar cut from Portuguese linen. Perfect for warm weather with a sophisticated drape.",
    description_ru: "Свободный крой с отложным воротником, из португальского льна. Идеально для теплой погоды благодаря благородной драпировке.",
    sizes: ["S", "M", "L", "XL"],
    material: "Linen",
    material_ru: "Лен",
    silhouette: "Relaxed",
    silhouette_ru: "Свободный"
  },
  {
    id: 11,
    name: "Leather Derby Shoe",
    name_ru: "Кожаные дерби",
    price: 385,
    category: "FOOTWEAR",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
    description: "Classic derby construction with a modern silhouette. Goodyear welted for durability and resoling.",
    description_ru: "Классическая конструкция дерби в современном силуэте. Рантовый метод крепления Goodyear для долговечности и возможности замены подошвы.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    material: "Leather",
    material_ru: "Кожа",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 12,
    name: "Ribbed Tank Top",
    name_ru: "Майка в рубчик",
    price: 55,
    category: "ESSENTIALS",
    image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=1000&auto=format&fit=crop",
    description: "Slim-fit ribbed tank in organic cotton. A versatile layering piece for year-round wear.",
    description_ru: "Приталенная майка в рубчик из органического хлопка. Универсальный базовый слой для любого времени года.",
    sizes: ["S", "M", "L", "XL"],
    material: "Cotton",
    material_ru: "Хлопок",
    silhouette: "Tailored",
    silhouette_ru: "Приталенный"
  },
  {
    id: 13,
    name: "Quilted Vest",
    name_ru: "Стеганый жилет",
    price: 245,
    category: "OUTERWEAR",
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
    description: "Lightweight quilted vest with recycled down fill. Perfect for transitional weather layering.",
    description_ru: "Легкий стеганый жилет с наполнителем из переработанного пуха. Идеален для многослойных образов в межсезонье.",
    sizes: ["S", "M", "L", "XL"],
    material: "Synthetics",
    material_ru: "Синтетика",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 14,
    name: "Silk Knit Polo",
    name_ru: "Шелковое вязаное поло",
    price: 275,
    category: "KNITWEAR",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1000&auto=format&fit=crop",
    description: "Luxurious silk-cotton blend polo with mother-of-pearl buttons. Refined casual elegance.",
    description_ru: "Роскошное поло из смеси шелка и хлопка с перламутровыми пуговицами. Изысканная повседневная элегантность.",
    sizes: ["S", "M", "L", "XL"],
    material: "Silk",
    material_ru: "Шелк",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 15,
    name: "Wide Leg Denim",
    name_ru: "Широкие джинсы",
    price: 165,
    category: "TROUSERS",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
    description: "Japanese selvedge denim with a relaxed wide leg. Unwashed for natural fading over time.",
    description_ru: "Японский селвидж-деним вольного широкого кроя. Необработанная ткань для появления естественного фейдинга со временем.",
    sizes: ["30", "32", "34", "36"],
    material: "Denim",
    material_ru: "Деним",
    silhouette: "Relaxed",
    silhouette_ru: "Свободный"
  },
  {
    id: 16,
    name: "Double-Breasted Blazer",
    name_ru: "Двубортный блейзер",
    price: 495,
    category: "TAILORING",
    image: "/items/DoubleBreastedBlazer.jpeg",
    imageHover: "/items/DoubleBreastedBlazer2.jpeg",
    description: "Classic double-breasted blazer in Italian wool. Peak lapels and structured shoulders for a powerful silhouette.",
    description_ru: "Классический двубортный блейзер из итальянской шерсти. Заостренные лацканы и структурированные плечи для уверенного силуэта.",
    sizes: ["46", "48", "50", "52"],
    material: "Wool",
    material_ru: "Шерсть",
    silhouette: "Tailored",
    silhouette_ru: "Приталенный"
  },
  {
    id: 17,
    name: "Pleated Dress Trouser",
    name_ru: "Классические брюки со складками",
    price: 225,
    category: "TAILORING",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1000&auto=format&fit=crop",
    description: "Formal dress trousers with double pleats. Cut from Super 120s wool for a refined drape.",
    description_ru: "Формальные брюки с двойными складками. Сшиты из шерсти Super 120s для безупречной посадки.",
    sizes: ["30", "32", "34", "36", "38"],
    material: "Wool",
    material_ru: "Шерсть",
    silhouette: "Tailored",
    silhouette_ru: "Приталенный"
  },
  {
    id: 18,
    name: "Leather Briefcase",
    name_ru: "Кожаный портфель",
    price: 650,
    category: "LEATHER GOODS",
    image: "/items/LeatherBriefcase.jpeg",
    imageHover: "/items/LeatherBriefcase.jpeg",
    description: "Full-grain leather briefcase with brass hardware. Handcrafted in Italy with multiple compartments.",
    description_ru: "Портфель из цельнозерновой кожи с латунной фурнитурой. Сделано вручную в Италии, имеет несколько отделений.",
    sizes: ["One Size"],
    material: "Leather",
    material_ru: "Кожа",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 19,
    name: "Leather Cardholder",
    name_ru: "Кожаный картхолдер",
    price: 95,
    category: "LEATHER GOODS",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
    description: "Minimalist cardholder in vegetable-tanned leather. Holds 4-6 cards with a slim profile.",
    description_ru: "Минималистичный картхолдер из кожи растительного дубления. Вмещает 4–6 карт при очень тонком профиле.",
    sizes: ["One Size"],
    material: "Leather",
    material_ru: "Кожа",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 20,
    name: "Leather Belt",
    name_ru: "Кожаный ремень",
    price: 145,
    category: "LEATHER GOODS",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583c2?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1624222247344-550fb60583c2?q=80&w=1000&auto=format&fit=crop",
    description: "Classic leather belt with brushed metal buckle. 3.5cm width, perfect for tailored trousers.",
    description_ru: "Классический кожаный ремень с матовой пряжкой. Ширина 3,5 см, идеально подходит для костюмных брюк.",
    sizes: ["85", "90", "95", "100", "105"],
    material: "Leather",
    material_ru: "Кожа",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 21,
    name: "Signature Eau de Parfum",
    name_ru: "Парфюм Signature",
    price: 185,
    category: "FRAGRANCE",
    image: "/items/SignatureEaudeParfum.jpeg",
    imageHover: "/items/SignatureEaudeParfum2.jpeg",
    description: "Our signature scent. Notes of bergamot, cedar, and vetiver. 100ml.",
    description_ru: "Наш знаковый аромат. Ноты бергамота, кедра и ветивера. 100 мл.",
    sizes: ["100ml"],
    material: "Essence",
    material_ru: "Эссенция",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 22,
    name: "Noir Eau de Toilette",
    name_ru: "Туалетная вода Noir",
    price: 125,
    category: "FRAGRANCE",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    description: "Dark and mysterious. Black pepper, leather, and tobacco. 50ml.",
    description_ru: "Мрачный и таинственный аромат. Черный перец, кожа и табак. 50 мл.",
    sizes: ["50ml"],
    material: "Essence",
    material_ru: "Эссенция",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 23,
    name: "Wool Overcoat",
    name_ru: "Шерстяное пальто",
    price: 580,
    category: "OUTERWEAR",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
    description: "Single-breasted overcoat in pure wool. Notch lapels and full lining for warmth.",
    description_ru: "Однобортное пальто из чистой шерсти. Ступенчатые лацканы и полная подкладка для тепла.",
    sizes: ["46", "48", "50", "52", "54"],
    material: "Wool",
    material_ru: "Шерсть",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 24,
    name: "Suede Loafers",
    name_ru: "Замшевые лоферы",
    price: 340,
    category: "FOOTWEAR",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
    description: "Penny loafers in soft suede. Leather sole with rubber heel for durability.",
    description_ru: "Пенни-лоферы из мягкой замши. Кожаная подошва с резиновой пяткой для износостойкости.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    material: "Suede",
    material_ru: "Замша",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 25,
    name: "Silk Tie Classic",
    name_ru: "Классический шелковый галстук",
    price: 95,
    category: "ACCESSORIES",
    image: "/items/SilkTieClassic.jpeg",
    imageHover: "/items/SilkTieClassic2.jpeg",
    description: "Hand-rolled silk tie in timeless solid color. Woven in Como, Italy from pure mulberry silk.",
    description_ru: "Шелковый галстук ручной работы в однотонном цвете. Соткан в Комо, Италия, из чистого шелка малбери.",
    sizes: ["One Size"],
    material: "Silk",
    material_ru: "Шелк",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
  {
    id: 26,
    name: "Wool Knit Tie",
    name_ru: "Шерстяной вязаный галстук",
    price: 85,
    category: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1000&auto=format&fit=crop",
    description: "Textured wool knit tie for a refined casual look. Perfect for autumn and winter styling.",
    description_ru: "Текстурированный вязаный галстук из шерсти для изысканного повседневного образа. Идеально для осенне-зимнего сезона.",
    sizes: ["One Size"],
    material: "Wool",
    material_ru: "Шерсть",
    silhouette: "Standard",
    silhouette_ru: "Стандартный"
  },
];

export const getCategoryProducts = (category: string): Product[] => {
  if (category === 'All') return PRODUCTS;
  return PRODUCTS.filter(p => p.category.toUpperCase() === category.toUpperCase());
};

export const getCategoryCount = (category: string): number => {
  if (category === 'All') return PRODUCTS.length;
  return PRODUCTS.filter(p => p.category.toUpperCase() === category.toUpperCase()).length;
};

export const getRecommendedProducts = (currentProductId: number, limit: number = 4): Product[] => {
  const currentProduct = PRODUCTS.find(p => p.id === currentProductId);
  if (!currentProduct) return [];

  return PRODUCTS
    .filter(p => p.id !== currentProductId)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === currentProduct.category && b.category !== currentProduct.category) return -1;
      if (a.category !== currentProduct.category && b.category === currentProduct.category) return 1;
      return 0;
    })
    .slice(0, limit);
};
