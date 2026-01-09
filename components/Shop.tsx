import React, { useState } from 'react';
import { useStore } from '../store';
import { PRODUCTS } from '../data';
import { ProductCard } from './Product';

const CATEGORIES = ["All", "Outerwear", "Knitwear", "Shirting", "Trousers", "Footwear", "Essentials", "Tailoring", "Leather Goods", "Fragrance", "Accessories"];

const normalizeCategoryName = (category: string): string => {
  const mapping: { [key: string]: string } = {
    'OUTERWEAR': 'Outerwear',
    'KNITWEAR': 'Knitwear',
    'SHIRTING': 'Shirting',
    'TROUSERS': 'Trousers',
    'FOOTWEAR': 'Footwear',
    'ESSENTIALS': 'Essentials',
    'TAILORING': 'Tailoring',
    'LEATHER GOODS': 'Leather Goods',
    'FRAGRANCE': 'Fragrance',
    'ACCESSORIES': 'Accessories',
  };
  return mapping[category.toUpperCase()] || category;
};

const Shop = () => {
  const { setView, setActiveProduct, wishlist, toggleWishlist, selectedCategory } = useStore();
  const [activeCategory, setActiveCategory] = useState(selectedCategory ? normalizeCategoryName(selectedCategory) : "All");

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => normalizeCategoryName(p.category) === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-32 md:pt-40">
       <div className="flex flex-col lg:flex-row min-h-screen">
          
          {/* Sidebar Filters - Sticky on Desktop */}
          <div className="lg:w-64 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] border-r border-gray-200 bg-white z-10 flex flex-col justify-between">
             <div className="p-6 md:p-8">
                <h3 className="font-serif italic text-2xl mb-8">Collection</h3>
                <div className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                    {CATEGORIES.map(cat => (
                        <button 
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`text-left text-xs font-bold uppercase tracking-widest whitespace-nowrap py-2 transition-all ${activeCategory === cat ? 'text-black pl-2 border-l-2 border-black' : 'text-gray-400 hover:text-black'}`}
                        >
                           {cat}
                        </button>
                    ))}
                </div>
             </div>
             
             <div className="hidden lg:block p-8 border-t border-gray-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Preference</p>
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-3 h-3 border border-gray-300 group-hover:border-black rounded-full"></div>
                        <span className="text-xs text-gray-500 group-hover:text-black">Newest</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-3 h-3 border border-gray-300 group-hover:border-black rounded-full"></div>
                        <span className="text-xs text-gray-500 group-hover:text-black">Price: Low to High</span>
                    </label>
                </div>
             </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1 bg-white">
             {/* Header */}
             <div className="border-b border-gray-200 p-8 md:p-12 bg-white flex justify-between items-end">
                <div>
                    <h2 className="text-4xl md:text-6xl font-serif leading-tight">{activeCategory === "All" ? "The Collection" : activeCategory}</h2>
                    <p className="text-sm text-gray-500 font-light mt-4 max-w-lg">Timeless pieces designed for the modern wardrobe. Quality over quantity.</p>
                </div>
                <p className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-gray-400">{filteredProducts.length} Items</p>
             </div>

             {/* Strict Grid - Uses gap-px for perfect borders */}
             <div className="bg-gray-200 gap-px grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-b border-gray-200">
                {filteredProducts.map((p, idx) => (
                   <ProductCard 
                      key={p.id} 
                      product={p} 
                      onClick={(p) => { setActiveProduct(p); window.scrollTo(0, 0); }}
                      isWishlisted={wishlist.includes(p.id)}
                      onToggleWishlist={() => toggleWishlist(p.id)}
                      className="h-full bg-white hover:z-10"
                   />
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
