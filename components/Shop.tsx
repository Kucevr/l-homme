import React, { useState } from 'react';
import { useStore } from '../store';
import { PRODUCTS } from '../data';
import { ProductCard } from './Product';
import { translations } from '../translations';
import { RevealOnScroll } from './ui';

const CATEGORIES = [
  { id: 'ALL', en: 'All', ru: 'Все' },
  { id: 'OUTERWEAR', en: 'Outerwear', ru: 'Верхняя одежда' },
  { id: 'KNITWEAR', en: 'Knitwear', ru: 'Трикотаж' },
  { id: 'SHIRTING', en: 'Shirting', ru: 'Рубашек' },
  { id: 'TROUSERS', en: 'Trousers', ru: 'Брюки' },
  { id: 'FOOTWEAR', en: 'Footwear', ru: 'Обувь' },
  { id: 'ESSENTIALS', en: 'Essentials', ru: 'Основы' },
  { id: 'TAILORING', en: 'Tailoring', ru: 'Костюмы' },
  { id: 'LEATHER GOODS', en: 'Leather Goods', ru: 'Кожаные изделия' },
  { id: 'FRAGRANCE', en: 'Fragrance', ru: 'Парфюмерия' },
  { id: 'ACCESSORIES', en: 'Accessories', ru: 'Аксессуары' }
];

const Shop = () => {
  const { setView, setActiveProduct, wishlist, toggleWishlist, selectedCategory, language } = useStore();
  const t = translations[language];
  
  // Use category ID in state instead of translated name
  const [activeCategoryId, setActiveCategoryId] = useState(selectedCategory || 'ALL');
  const [activeMaterial, setActiveMaterial] = useState(translations[language].shop.allMaterials);
  const [activeSilhouette, setActiveSilhouette] = useState(translations[language].shop.allSilhouettes);

  // Sync state with store if selectedCategory changes externally
  React.useEffect(() => {
    if (selectedCategory) setActiveCategoryId(selectedCategory);
  }, [selectedCategory]);

  const materials = [
    translations[language].shop.allMaterials,
    ...Array.from(new Set(PRODUCTS.map(p => language === 'ru' ? (p.material_ru || p.material) : p.material).filter(Boolean) as string[]))
  ];

  const silhouettes = [
    translations[language].shop.allSilhouettes,
    ...Array.from(new Set(PRODUCTS.map(p => language === 'ru' ? (p.silhouette_ru || p.silhouette) : p.silhouette).filter(Boolean) as string[]))
  ];

  const filteredProducts = PRODUCTS.filter(p => {
    // Category Filter using ID
    const categoryMatch = activeCategoryId === 'ALL' || p.category.toUpperCase() === activeCategoryId.toUpperCase();

    // Material Filter
    const pMaterial = language === 'ru' ? (p.material_ru || p.material) : p.material;
    const materialMatch = activeMaterial === translations[language].shop.allMaterials || pMaterial === activeMaterial;

    // Silhouette Filter
    const pSilhouette = language === 'ru' ? (p.silhouette_ru || p.silhouette) : p.silhouette;
    const silhouetteMatch = activeSilhouette === translations[language].shop.allSilhouettes || pSilhouette === activeSilhouette;

    return categoryMatch && materialMatch && silhouetteMatch;
  });

  const activeCategoryDisplay = CATEGORIES.find(c => c.id === activeCategoryId)?.[language] || activeCategoryId;

  return (
    <div className="min-h-screen bg-white pt-32 md:pt-40">
       <div className="flex flex-col lg:flex-row min-h-screen">
          
          {/* Sidebar Filters - Sticky on Desktop */}
          <div className="lg:w-64 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] border-r border-gray-200 bg-white z-10 flex flex-col justify-between overflow-y-auto scrollbar-hide">
             <div className="p-6 md:p-8 space-y-10">
                {/* Categories */}
                <div>
                    <h3 className="font-serif italic text-2xl mb-6">{t.nav.collections}</h3>
                    <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                        {CATEGORIES.map(cat => (
                            <button 
                            key={cat.id}
                            onClick={() => { setActiveCategoryId(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className={`text-left text-[10px] font-bold uppercase tracking-widest whitespace-nowrap py-2 transition-all ${activeCategoryId === cat.id ? 'text-black pl-2 border-l-2 border-black' : 'text-gray-400 hover:text-black'}`}
                            >
                            {cat[language]}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Material Filter */}
                <div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black mb-6 border-b border-black pb-2">
                       {translations[language].shop.material}
                   </h4>
                   <div className="flex flex-row lg:flex-col gap-4 lg:gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                      {materials.map(m => (
                        <button
                          key={m}
                          onClick={() => setActiveMaterial(m)}
                          className={`text-left text-[10px] uppercase tracking-widest py-1 transition-colors whitespace-nowrap ${activeMaterial === m ? 'text-black font-bold' : 'text-gray-400 hover:text-black'}`}
                        >
                          {m}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Silhouette Filter */}
                <div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black mb-6 border-b border-black pb-2">
                       {translations[language].shop.silhouette}
                   </h4>
                   <div className="flex flex-row lg:flex-col gap-4 lg:gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
                      {silhouettes.map(s => (
                        <button
                          key={s}
                          onClick={() => setActiveSilhouette(s)}
                          className={`text-left text-[10px] uppercase tracking-widest py-1 transition-colors whitespace-nowrap ${activeSilhouette === s ? 'text-black font-bold' : 'text-gray-400 hover:text-black'}`}
                        >
                          {s}
                        </button>
                      ))}
                   </div>
                </div>
             </div>
             
             <div className="hidden lg:block p-8 border-t border-gray-100 bg-gray-50/50">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">{language === 'ru' ? 'Сортировка' : 'Preference'}</p>
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-3 h-3 border border-gray-300 group-hover:border-black rounded-full"></div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-black">{language === 'ru' ? 'Новинки' : 'Newest'}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-3 h-3 border border-gray-300 group-hover:border-black rounded-full"></div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-black">{language === 'ru' ? 'Цена: от низкой' : 'Price: Low to High'}</span>
                    </label>
                </div>
             </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1 bg-white">
             {/* Header */}
             <div className="border-b border-gray-200 p-8 md:p-12 bg-white flex justify-between items-end">
                <div>
                    <h2 className="text-4xl md:text-6xl font-serif leading-tight">{activeCategoryId === 'ALL' ? (language === 'ru' ? 'Коллекция' : 'The Collection') : activeCategoryDisplay}</h2>
                    <p className="text-sm text-gray-500 font-light mt-4 max-w-lg">{t.home.essentialsDesc}</p>
                </div>
                <p className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-gray-400">{filteredProducts.length} {translations[language].shop.items}</p>
             </div>

             {/* Strict Grid - Uses gap-px for perfect borders */}
             <div className="bg-gray-200 gap-px grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-b border-gray-200">
                {filteredProducts.map((p, idx) => (
                   <RevealOnScroll key={p.id} delay={(idx % 3) * 50}>
                      <ProductCard 
                          product={p} 
                          onClick={(p) => { setActiveProduct(p); window.scrollTo(0, 0); }}
                          isWishlisted={wishlist.includes(p.id)}
                          onToggleWishlist={() => toggleWishlist(p.id)}
                          className="h-full bg-white hover:z-10"
                      />
                   </RevealOnScroll>
                ))}
                {/* Filler divs to keep grid neat if odd number of items */}
                {[...Array(3 - (filteredProducts.length % 3))].map((_, i) => (
                    <div key={`fill-${i}`} className="bg-white hidden xl:block" />
                ))}
             </div>
          </div>
       </div>
    </div>
  );
};

export default Shop;
