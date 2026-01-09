
export type PageView = 'home' | 'collections' | 'product' | 'journal' | 'locations' | 'stores';
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
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  cartId: string;
}

export interface PageLink {
  id: string;
  title: string;
  view: PageView;
  description: string;
}

export const SEARCHABLE_PAGES: PageLink[] = [
  { id: 'journal', title: 'The Journal', view: 'journal', description: 'Editorial stories on craft, style, and philosophy.' },
  { id: 'locations', title: 'Visit Us', view: 'locations', description: 'Explore our ateliers in Paris, Tokyo, and New York.' },
  { id: 'shipping', title: 'Shipping & Returns', view: 'home', description: 'Details on our worldwide shipping and return policy.' },
  { id: 'philosophy', title: 'Atelier Philosophy', view: 'home', description: 'The core values behind L\'HOMME design.' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Oxford Structure Shirt",
    price: 120,
    category: "SHIRTING",
    image: "/items/OxfordStructureShirt.jpeg",
    imageHover: "/items/OxfordStructureShirt2.jpeg",
    description: "A staple of the modern wardrobe, cut from premium Italian cotton with a robust oxford weave. Designed for a relaxed fit that bridges the gap between formal and casual.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Merino Rollneck",
    price: 185,
    category: "KNITWEAR",
    image: "/items/MerinoRollneck.jpeg",
    imageHover: "/items/Merino Rollneck2.jpeg",
    description: "Spun from superfine merino wool, this rollneck offers exceptional warmth without the weight. Features ribbed trims and a seamless construction for comfort.",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Tapered Pleat Chino",
    price: 145,
    category: "TROUSERS",
    image: "/items/TaperedPleatChino.jpeg",
    imageHover: "/items/TaperedPleatChino2.jpeg",
    description: "Classic chinos reimagined with a single pleat and a sharp tapered leg. Constructed from high-density cotton twill that ages beautifully with wear.",
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: 4,
    name: "Italian Wool Coat",
    price: 450,
    category: "OUTERWEAR",
    image: "/items/ItalianWoolCoat.jpeg",
    imageHover: "/items/ItalianWoolCoat2.jpeg",
    description: "The definitive winter overcoat. Tailored from a heavy recycled wool blend with a structured shoulder and fully lined interior for insulation against the elements.",
    sizes: ["46", "48", "50", "52", "54"]
  },
  {
    id: 5,
    name: "Heavy Cotton Tee",
    price: 65,
    category: "ESSENTIALS",
    image: "/items/HeavyCottonTee.jpeg",
    imageHover: "/items/HeavyCottonTee2.jpeg",
    description: "The perfect t-shirt exists. 280gsm heavyweight organic cotton with a boxy fit and tight collar. Pre-shrunk to maintain its shape wash after wash.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Chelsea Boot No. 5",
    price: 295,
    category: "FOOTWEAR",
    image: "/items/ChelseaBoot.jpeg",
    imageHover: "/items/ChelseaBoot2.jpeg",
    description: "Handcrafted in Portugal from smooth calf leather. Features a durable Blake-stitched sole and elasticated side panels for easy entry.",
    sizes: ["40", "41", "42", "43", "44", "45"]
  },
  {
    id: 7,
    name: "Cashmere Crew Neck",
    price: 320,
    category: "KNITWEAR",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?q=80&w=1000&auto=format&fit=crop",
    description: "Pure cashmere luxury. Knitted in Scotland from the finest Mongolian fibers. A timeless piece that only gets softer with age.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Wool Flannel Trouser",
    price: 195,
    category: "TROUSERS",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1000&auto=format&fit=crop",
    description: "Tailored from Italian wool flannel with a mid-rise and straight leg. Features side adjusters for a perfect fit without a belt.",
    sizes: ["30", "32", "34", "36", "38"]
  },
  {
    id: 9,
    name: "Suede Bomber Jacket",
    price: 680,
    category: "OUTERWEAR",
    image: "/items/SuedeBomberJacket.jpeg",
    imageHover: "/items/SuedeBomberJacket2.jpeg",
    description: "Crafted from buttery Italian suede with ribbed cuffs and hem. Fully lined in silk for effortless layering.",
    sizes: ["46", "48", "50", "52"]
  },
  {
    id: 10,
    name: "Linen Camp Collar Shirt",
    price: 135,
    category: "SHIRTING",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1000&auto=format&fit=crop",
    description: "Relaxed camp collar cut from Portuguese linen. Perfect for warm weather with a sophisticated drape.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 11,
    name: "Leather Derby Shoe",
    price: 385,
    category: "FOOTWEAR",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
    description: "Classic derby construction with a modern silhouette. Goodyear welted for durability and resoling.",
    sizes: ["40", "41", "42", "43", "44", "45"]
  },
  {
    id: 12,
    name: "Ribbed Tank Top",
    price: 55,
    category: "ESSENTIALS",
    image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=1000&auto=format&fit=crop",
    description: "Slim-fit ribbed tank in organic cotton. A versatile layering piece for year-round wear.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 13,
    name: "Quilted Vest",
    price: 245,
    category: "OUTERWEAR",
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
    description: "Lightweight quilted vest with recycled down fill. Perfect for transitional weather layering.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 14,
    name: "Silk Knit Polo",
    price: 275,
    category: "KNITWEAR",
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=1000&auto=format&fit=crop",
    description: "Luxurious silk-cotton blend polo with mother-of-pearl buttons. Refined casual elegance.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 15,
    name: "Wide Leg Denim",
    price: 165,
    category: "TROUSERS",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop",
    description: "Japanese selvedge denim with a relaxed wide leg. Unwashed for natural fading over time.",
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: 16,
    name: "Double-Breasted Blazer",
    price: 495,
    category: "TAILORING",
    image: "/items/DoubleBreastedBlazer.jpeg",
    imageHover: "/items/DoubleBreastedBlazer2.jpeg",
    description: "Classic double-breasted blazer in Italian wool. Peak lapels and structured shoulders for a powerful silhouette.",
    sizes: ["46", "48", "50", "52"]
  },
  {
    id: 17,
    name: "Pleated Dress Trouser",
    price: 225,
    category: "TAILORING",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1000&auto=format&fit=crop",
    description: "Formal dress trousers with double pleats. Cut from Super 120s wool for a refined drape.",
    sizes: ["30", "32", "34", "36", "38"]
  },
  {
    id: 18,
    name: "Leather Briefcase",
    price: 650,
    category: "LEATHER GOODS",
    image: "/items/LeatherBriefcase.jpeg",
    imageHover: "/items/LeatherBriefcase.jpeg",
    description: "Full-grain leather briefcase with brass hardware. Handcrafted in Italy with multiple compartments.",
    sizes: ["One Size"]
  },
  {
    id: 19,
    name: "Leather Cardholder",
    price: 95,
    category: "LEATHER GOODS",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
    description: "Minimalist cardholder in vegetable-tanned leather. Holds 4-6 cards with a slim profile.",
    sizes: ["One Size"]
  },
  {
    id: 20,
    name: "Leather Belt",
    price: 145,
    category: "LEATHER GOODS",
    image: "https://images.unsplash.com/photo-1624222247344-550fb60583c2?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1624222247344-550fb60583c2?q=80&w=1000&auto=format&fit=crop",
    description: "Classic leather belt with brushed metal buckle. 3.5cm width, perfect for tailored trousers.",
    sizes: ["85", "90", "95", "100", "105"]
  },
  {
    id: 21,
    name: "Signature Eau de Parfum",
    price: 185,
    category: "FRAGRANCE",
    image: "/items/SignatureEaudeParfum.jpeg",
    imageHover: "/items/SignatureEaudeParfum2.jpeg",
    description: "Our signature scent. Notes of bergamot, cedar, and vetiver. 100ml.",
    sizes: ["100ml"]
  },
  {
    id: 22,
    name: "Noir Eau de Toilette",
    price: 125,
    category: "FRAGRANCE",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    description: "Dark and mysterious. Black pepper, leather, and tobacco. 50ml.",
    sizes: ["50ml"]
  },
  {
    id: 23,
    name: "Wool Overcoat",
    price: 580,
    category: "OUTERWEAR",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
    description: "Single-breasted overcoat in pure wool. Notch lapels and full lining for warmth.",
    sizes: ["46", "48", "50", "52", "54"]
  },
  {
    id: 24,
    name: "Suede Loafers",
    price: 340,
    category: "FOOTWEAR",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1000&auto=format&fit=crop",
    description: "Penny loafers in soft suede. Leather sole with rubber heel for durability.",
    sizes: ["40", "41", "42", "43", "44", "45"]
  },
  {
    id: 25,
    name: "Silk Tie Classic",
    price: 95,
    category: "ACCESSORIES",
    image: "/items/SilkTieClassic.jpeg",
    imageHover: "/items/SilkTieClassic2.jpeg",
    description: "Hand-rolled silk tie in timeless solid color. Woven in Como, Italy from pure mulberry silk.",
    sizes: ["One Size"]
  },
  {
    id: 26,
    name: "Wool Knit Tie",
    price: 85,
    category: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop",
    imageHover: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1000&auto=format&fit=crop",
    description: "Textured wool knit tie for a refined casual look. Perfect for autumn and winter styling.",
    sizes: ["One Size"]
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
