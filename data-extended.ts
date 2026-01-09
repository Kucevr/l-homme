export interface ProductDetails {
  materials: string[];
  care: string[];
  features: string[];
  fit: string;
  madeIn: string;
  story?: string; // Long form story text
  completeTheLook: number[]; // Product IDs for recommendations
  craft?: {
    title: string;
    description: string;
    image: string;
  };
}

export const PRODUCT_DETAILS: Record<number, ProductDetails> = {
  1: { // Oxford Structure Shirt
    materials: ["100% Italian Cotton", "Oxford Weave", "Mother-of-Pearl Buttons"],
    care: ["Machine wash cold", "Tumble dry low", "Iron medium heat", "Do not bleach"],
    features: ["Button-down collar", "Chest pocket", "Split back yoke", "Curved hem"],
    fit: "Regular fit with room through chest and waist",
    madeIn: "Portugal",
    completeTheLook: [3, 20, 11], // Chino, Belt, Derby
    craft: {
        title: "The Single-Needle Stitch",
        description: "Each shirt is constructed using traditional single-needle tailoring. This slower process creates a cleaner finish inside and out, ensuring the garment retains its shape for years.",
        image: "https://images.unsplash.com/photo-1558232108-9a244a5619bb?q=80&w=1200"
    }
  },
  2: { // Merino Rollneck
    materials: ["100% Superfine Merino Wool", "12-gauge knit", "Ribbed trims"],
    care: ["Hand wash cold", "Lay flat to dry", "Do not wring", "Steam if needed"],
    features: ["Rollneck collar", "Ribbed cuffs and hem", "Seamless construction", "Lightweight"],
    fit: "Slim fit, true to size",
    madeIn: "Italy",
    completeTheLook: [8, 4, 6], // Wool Trouser, Wool Coat, Chelsea Boot
    craft: {
        title: "Seamless Knitting",
        description: "Knitted on advanced Japanese Shima Seiki machines, this rollneck is produced as a single piece. No seams means zero friction and a perfect, sculptural silhouette.",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200"
    }
  },
  3: { // Tapered Pleat Chino
    materials: ["98% Cotton, 2% Elastane", "High-density twill", "YKK zipper"],
    care: ["Machine wash cold", "Hang dry", "Iron if needed", "Dry clean for best results"],
    features: ["Single pleat", "Tapered leg", "Side pockets", "Welt back pockets"],
    fit: "Tapered fit from knee to ankle",
    madeIn: "Italy",
    completeTheLook: [1, 6, 20] // Oxford Shirt, Chelsea Boot, Belt
  },
  4: { // Italian Wool Coat
    materials: ["80% Recycled Wool, 20% Polyamide", "Cupro lining", "Horn buttons"],
    care: ["Dry clean only", "Store on hanger", "Steam to refresh", "Professional press"],
    features: ["Structured shoulders", "Notch lapels", "Interior pockets", "Full lining"],
    fit: "Regular fit, sized to layer",
    madeIn: "Italy",
    completeTheLook: [2, 8, 11] // Merino Rollneck, Wool Trouser, Derby
  },
  5: { // Heavy Cotton Tee
    materials: ["100% Organic Cotton", "280gsm weight", "Pre-shrunk fabric"],
    care: ["Machine wash cold", "Tumble dry low", "Do not iron print", "Wash inside out"],
    features: ["Boxy fit", "Reinforced collar", "Side seam construction", "Heavyweight"],
    fit: "Relaxed boxy fit",
    madeIn: "Portugal",
    completeTheLook: [15, 9, 24] // Wide Denim, Suede Bomber, Loafers
  },
  6: { // Chelsea Boot No. 5
    materials: ["Full-grain calf leather", "Leather sole", "Elastic side panels"],
    care: ["Wipe with damp cloth", "Use leather conditioner", "Store with shoe trees", "Resole when needed"],
    features: ["Blake stitch construction", "Pull tabs", "Stacked leather heel", "Goodyear welt"],
    fit: "True to size, European sizing",
    madeIn: "Portugal",
    completeTheLook: [3, 2, 4] // Chino, Merino, Wool Coat
  },
  7: { // Cashmere Crew Neck
    materials: ["100% Mongolian Cashmere", "2-ply yarn", "12-gauge knit"],
    care: ["Hand wash cold", "Lay flat to dry", "Store folded", "Use cashmere comb"],
    features: ["Crew neck", "Ribbed trims", "Seamless shoulders", "Lightweight"],
    fit: "Regular fit, slightly relaxed",
    madeIn: "Scotland",
    completeTheLook: [17, 16, 11] // Dress Trouser, Blazer, Derby
  },
  8: { // Wool Flannel Trouser
    materials: ["100% Virgin Wool", "Flannel weave", "Side adjusters"],
    care: ["Dry clean only", "Hang to air", "Steam press", "Store on hanger"],
    features: ["Mid-rise", "Straight leg", "Side adjusters", "Slant pockets"],
    fit: "Classic straight fit",
    madeIn: "Italy",
    completeTheLook: [7, 4, 11] // Cashmere, Wool Coat, Derby
  },
  9: { // Suede Bomber
    materials: ["100% Italian Suede", "Silk lining", "Ribbed knit trims"],
    care: ["Professional suede cleaning", "Brush regularly", "Avoid water", "Store in garment bag"],
    features: ["Bomber silhouette", "Zip closure", "Side pockets", "Ribbed cuffs"],
    fit: "Regular fit, true to size",
    madeIn: "Italy",
    completeTheLook: [5, 15, 24] // Cotton Tee, Wide Denim, Loafers
  },
  10: { // Linen Camp Collar
    materials: ["100% Portuguese Linen", "Lightweight weave", "Corozo buttons"],
    care: ["Machine wash cold", "Line dry", "Iron while damp", "Embrace wrinkles"],
    features: ["Camp collar", "Chest pocket", "Short sleeves", "Relaxed fit"],
    fit: "Relaxed fit with drop shoulders",
    madeIn: "Portugal",
    completeTheLook: [3, 24, 19] // Chino, Loafers, Cardholder
  },
  11: { // Leather Derby
    materials: ["Full-grain leather", "Leather sole", "Cork footbed"],
    care: ["Polish regularly", "Use shoe trees", "Rotate wear", "Resole when needed"],
    features: ["Derby lacing", "Goodyear welt", "Leather lining", "Stacked heel"],
    fit: "True to size, European sizing",
    madeIn: "England",
    completeTheLook: [17, 16, 18] // Dress Trouser, Blazer, Briefcase
  },
  12: { // Ribbed Tank
    materials: ["100% Organic Cotton", "Ribbed knit", "Reinforced straps"],
    care: ["Machine wash cold", "Tumble dry low", "No bleach", "Iron low heat"],
    features: ["Slim fit", "Ribbed texture", "Athletic cut", "Reinforced seams"],
    fit: "Slim fit, size up for relaxed",
    madeIn: "Portugal",
    completeTheLook: [15, 9, 24] // Wide Denim, Bomber, Loafers
  },
  13: { // Quilted Vest
    materials: ["Recycled nylon shell", "Recycled down fill", "Snap buttons"],
    care: ["Machine wash cold", "Tumble dry low", "Do not iron", "Store uncompressed"],
    features: ["Diamond quilting", "Snap closure", "Side pockets", "Packable"],
    fit: "Regular fit, layers well",
    madeIn: "China",
    completeTheLook: [2, 3, 6] // Merino, Chino, Chelsea Boot
  },
  14: { // Silk Knit Polo
    materials: ["70% Silk, 30% Cotton", "Fine gauge knit", "Mother-of-pearl buttons"],
    care: ["Hand wash cold", "Lay flat to dry", "Steam gently", "Do not wring"],
    features: ["Knit construction", "Three-button placket", "Ribbed collar", "Short sleeves"],
    fit: "Slim fit, elegant drape",
    madeIn: "Italy",
    completeTheLook: [3, 24, 21] // Chino, Loafers, Signature Parfum
  },
  15: { // Wide Leg Denim
    materials: ["100% Japanese Selvedge Denim", "14oz weight", "Copper rivets"],
    care: ["Wash sparingly", "Cold water only", "Hang dry", "No tumble dry"],
    features: ["Wide leg", "High rise", "Selvedge detail", "Button fly"],
    fit: "Relaxed wide leg from hip",
    madeIn: "Japan",
    completeTheLook: [5, 9, 24] // Cotton Tee, Bomber, Loafers
  },
  16: { // Double-Breasted Blazer
    materials: ["100% Italian Wool", "Cupro lining", "Horn buttons"],
    care: ["Dry clean only", "Steam press", "Store on hanger", "Brush regularly"],
    features: ["Peak lapels", "Double-breasted", "Structured shoulders", "Working cuffs"],
    fit: "Tailored fit through body",
    madeIn: "Italy",
    completeTheLook: [17, 11, 18] // Dress Trouser, Derby, Briefcase
  },
  17: { // Pleated Dress Trouser
    materials: ["100% Super 120s Wool", "Satin waistband", "Horn button"],
    care: ["Dry clean only", "Hang to air", "Steam press", "Professional alterations"],
    features: ["Double pleats", "Side pockets", "Welt back pockets", "Unfinished hem"],
    fit: "Classic fit with pleats",
    madeIn: "Italy",
    completeTheLook: [16, 11, 20] // Blazer, Derby, Belt
  },
  18: { // Leather Briefcase
    materials: ["Full-grain vegetable-tanned leather", "Brass hardware", "Cotton canvas lining"],
    care: ["Condition regularly", "Avoid water", "Store stuffed", "Patina develops naturally"],
    features: ["Multiple compartments", "Padded laptop sleeve", "Adjustable strap", "Top handles"],
    fit: "One size",
    madeIn: "Italy",
    completeTheLook: [16, 17, 11] // Blazer, Dress Trouser, Derby
  },
  19: { // Leather Cardholder
    materials: ["Vegetable-tanned leather", "Cotton stitching", "Minimal design"],
    care: ["Wipe clean", "Condition occasionally", "Avoid water", "Patina develops"],
    features: ["4-6 card capacity", "Slim profile", "Center pocket", "Hand-stitched"],
    fit: "One size",
    madeIn: "Italy",
    completeTheLook: [20, 18, 10] // Belt, Briefcase, Linen Shirt
  },
  20: { // Leather Belt
    materials: ["Full-grain leather", "Brushed metal buckle", "Edge paint"],
    care: ["Wipe clean", "Condition leather", "Store flat", "Avoid water"],
    features: ["3.5cm width", "Five holes", "Brushed buckle", "Edge finishing"],
    fit: "Order one size up from waist",
    madeIn: "Italy",
    completeTheLook: [3, 1, 6] // Chino, Oxford Shirt, Chelsea Boot
  },
  21: { // Signature Parfum
    materials: ["Bergamot", "Cedar", "Vetiver", "Amber base"],
    care: ["Store in cool place", "Avoid direct sunlight", "Keep cap closed", "Use within 3 years"],
    features: ["100ml bottle", "Eau de Parfum concentration", "Long-lasting", "Signature scent"],
    fit: "One size",
    madeIn: "France",
    completeTheLook: [16, 17, 18] // Blazer, Dress Trouser, Briefcase
  },
  22: { // Noir Eau de Toilette
    materials: ["Black pepper", "Leather accord", "Tobacco", "Woody base"],
    care: ["Store in cool place", "Avoid direct sunlight", "Keep cap closed", "Use within 3 years"],
    features: ["50ml bottle", "Eau de Toilette concentration", "Evening scent", "Bold character"],
    fit: "One size",
    madeIn: "France",
    completeTheLook: [9, 15, 24] // Bomber, Wide Denim, Loafers
  },
  23: { // Wool Overcoat
    materials: ["100% Virgin Wool", "Viscose lining", "Horn buttons"],
    care: ["Dry clean only", "Steam to refresh", "Store on hanger", "Brush regularly"],
    features: ["Single-breasted", "Notch lapels", "Interior pockets", "Full lining"],
    fit: "Regular fit, sized to layer",
    madeIn: "Italy",
    completeTheLook: [7, 8, 11] // Cashmere, Wool Trouser, Derby
  },
  24: { // Suede Loafers
    materials: ["Soft suede upper", "Leather sole", "Rubber heel"],
    care: ["Brush regularly", "Use suede protector", "Avoid water", "Professional cleaning"],
    features: ["Penny loafer style", "Leather lining", "Flexible sole", "Hand-stitched"],
    fit: "True to size, European sizing",
    madeIn: "Italy",
    completeTheLook: [10, 3, 19] // Linen Shirt, Chino, Cardholder
  },
  25: { // Silk Tie Classic
    materials: ["100% Mulberry Silk", "Hand-rolled edges", "Interlining for structure"],
    care: ["Dry clean only", "Store hanging or rolled", "Steam gently", "Avoid water spots"],
    features: ["Classic width 8cm", "Hand-rolled edges", "Self-loop", "Timeless solid color"],
    fit: "Standard length 150cm",
    madeIn: "Italy",
    completeTheLook: [16, 17, 11]
  },
  26: { // Wool Knit Tie
    materials: ["100% Wool", "Knit construction", "Square-cut bottom"],
    care: ["Dry clean recommended", "Store flat or rolled", "Steam if needed", "Avoid hanging"],
    features: ["Textured knit", "Square bottom", "Casual elegance", "Width 6cm"],
    fit: "Standard length 145cm",
    madeIn: "England",
    completeTheLook: [1, 3, 6]
  },
};
