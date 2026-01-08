
import React, { useEffect, useRef, useState } from 'react';
import { PageView, Product, PRODUCTS } from '../data';
import { Icons, RevealOnScroll } from './ui';
import { ProductCard } from './Product';

export const Hero = ({ onNavigate }: { onNavigate: (view: PageView) => void }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
        if (imgRef.current) {
            const scrolled = window.scrollY;
            // Use simple transform for 60fps performance without re-renders
            // TranslateY creates the parallax (slower scroll speed)
            // Scale ensures image covers area even when translated
            imgRef.current.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0) scale(1.1)`;
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden group cursor-pointer bg-black" onClick={() => onNavigate('collections')}>
        {/* Full Screen Image with Optimized Parallax */}
        <div className="absolute inset-0 overflow-hidden will-change-transform">
            <img 
                ref={imgRef}
                src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2000&auto=format&fit=crop" 
                alt="L'HOMME Autumn/Winter 24 Campaign - Modern Tailoring" 
                className="absolute inset-0 w-full h-[120%] object-cover opacity-90 transition-transform duration-75 ease-out origin-top"
                style={{ transform: 'scale(1.1)' }}
            />
        </div>
        
        {/* Cinematic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-20 left-6 md:bottom-32 md:left-24 text-white z-20 max-w-2xl">
            <RevealOnScroll>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-90 border-l-2 border-white pl-4">
                    (01) — Autumn / Winter 24
                </p>
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif italic mb-10 leading-[0.9]">
                    Silence <br/> in Motion
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <button className="px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300">
                        Explore Campaign
                    </button>
                    <p className="hidden md:block text-sm font-light opacity-80 max-w-xs leading-relaxed">
                        Redefining the boundaries between formal tailoring and casual utility.
                    </p>
                </div>
            </RevealOnScroll>
        </div>
    </section>
  );
};

const Manifesto = () => (
    <section className="py-24 md:py-40 border-b border-gray-200 bg-brand-off-white">
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-2 hidden md:block">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">(02) — Philosophy</span>
            </div>
            <div className="md:col-span-8">
                <RevealOnScroll>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.1] md:leading-[1.1]">
                        We believe in <span className="italic text-gray-400">fewer, better things</span>. 
                        Design that respects the wearer. Materials that age with grace. 
                        A wardrobe that acts as a quiet foundation for a loud world.
                    </h2>
                </RevealOnScroll>
            </div>
        </div>
    </section>
);

const CuratedGrid = ({ products, onProductClick, onNavigate, onCategorySelect }: { products: Product[], onProductClick: (p: Product) => void, onNavigate: (view: PageView) => void, onCategorySelect: (category: string) => void }) => {
    // Balanced 3-column layout: Text + Product + Product
    const displayProducts = products.slice(0, 2); 

    const handleShopKnitwear = () => {
        onCategorySelect('KNITWEAR');
        onNavigate('collections');
    };

    return (
        <section className="border-b border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
                {/* Text Block - Intro */}
                <div className="flex flex-col justify-center p-12 lg:p-16 bg-white text-center items-center h-full min-h-[450px]">
                     <h3 className="text-4xl font-serif italic mb-6">Essential Layers</h3>
                     <p className="text-sm text-gray-500 max-w-xs mb-8 leading-relaxed">
                        Build your transitional wardrobe with our signature merino knits and structured cottons. 
                        A study in texture and form.
                     </p>
                     <button 
                        className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 transition-colors"
                        onClick={handleShopKnitwear}
                     >
                        Shop Knitwear
                     </button>
                </div>

                {/* Products */}
                {displayProducts.map(p => (
                    <div key={p.id} className="group cursor-pointer relative h-full min-h-[450px] overflow-hidden" onClick={() => onProductClick(p)}>
                        <img src={p.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" alt={p.name} />
                        
                        {/* Overlay Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/50 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-start justify-end h-1/2">
                            <h4 className="font-serif text-3xl italic">{p.name}</h4>
                            <p className="text-sm font-medium mt-2">${p.price}</p>
                            <span className="mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-white pb-1">View Product</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

const CategoryList = ({ onNavigate, onCategorySelect }: { onNavigate: (view: PageView) => void, onCategorySelect: (category: string) => void }) => {
    const categories = [
        { name: "Outerwear", key: "OUTERWEAR" },
        { name: "Tailoring", key: "TAILORING" },
        { name: "Knitwear", key: "KNITWEAR" },
        { name: "Leather Goods", key: "LEATHER GOODS" },
        { name: "Footwear", key: "FOOTWEAR" },
        { name: "Fragrance", key: "FRAGRANCE" },
    ];

    const handleCategoryClick = (categoryKey: string) => {
        onCategorySelect(categoryKey);
        onNavigate('collections');
    };

    return (
        <section className="py-24 border-b border-gray-200 bg-white">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                <div className="mb-12">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">(03) — Departments</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                    {categories.map((cat, idx) => {
                        const count = PRODUCTS.filter(p => p.category === cat.key).length;
                        return (
                            <div 
                                key={idx} 
                                className="group cursor-pointer border-b border-gray-100 py-6 flex justify-between items-end hover:border-black transition-colors duration-300"
                                onClick={() => handleCategoryClick(cat.key)}
                            >
                                <h3 className="text-3xl font-serif italic text-gray-300 group-hover:text-black transition-colors">{cat.name}</h3>
                                <span className="text-xs font-bold text-gray-400 group-hover:text-black">({count})</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

const ShopNewAndNow = ({ products, onProductClick, onNavigate }: { products: Product[], onProductClick: (p: Product) => void, onNavigate: (view: PageView) => void }) => {
    // Show all products in a horizontal scrollable list
    return (
        <section className="py-24 bg-white border-t border-gray-200 overflow-hidden">
             <div className="max-w-[1920px] mx-auto pl-6 md:pl-12">
                <div className="flex justify-between items-end mb-12 pr-6 md:pr-12">
                    <h3 className="text-4xl md:text-5xl font-serif">Shop New & Now</h3>
                    <div className="hidden md:flex gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Scroll</span>
                        <Icons.ArrowRight />
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto gap-4 md:gap-8 pb-12 pr-6 md:pr-12 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing">
                    {products.map(p => (
                        <div key={p.id} className="min-w-[220px] md:min-w-[260px] snap-start group cursor-pointer flex flex-col" onClick={() => onProductClick(p)}>
                             <div className="bg-[#F3F3F3] aspect-[4/5] relative overflow-hidden mb-6">
                                  <img src={p.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" alt={p.name} />
                                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <button className="bg-white p-2 rounded-full hover:bg-black hover:text-white transition-colors">
                                          <Icons.Heart />
                                      </button>
                                  </div>
                             </div>
                             
                             <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">L'Homme</span>
                                <h4 className="font-serif text-lg leading-tight">{p.name}</h4>
                                <p className="text-sm font-medium mt-1">${p.price}</p>
                                
                                <button className="mt-4 w-full py-3 border border-gray-200 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                                    Buy Now
                                </button>
                             </div>
                        </div>
                    ))}
                    {/* View All Card at end of scroll */}
                    <div 
                        className="min-w-[200px] snap-start flex items-center justify-center border border-gray-100 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => onNavigate('collections')}
                    >
                        <div className="p-8">
                             <p className="font-serif italic text-2xl mb-2">View All</p>
                             <Icons.ArrowRight />
                        </div>
                    </div>
                </div>
             </div>
        </section>
    )
}

const TheJournal = ({ onNavigate }: { onNavigate: (view: PageView) => void }) => (
    <section className="border-t border-b border-gray-200 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
             <div className="group relative h-[600px] lg:h-[700px] overflow-hidden cursor-pointer" onClick={() => onNavigate('journal')}>
                <img 
                    src="/items/CraftingSilence.jpeg" 
                    alt="Atelier" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-0 left-0 p-12 text-white z-10">
                    <span className="inline-block py-1 px-3 border border-white/30 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest mb-6">The Journal</span>
                    <h3 className="text-5xl md:text-6xl font-serif italic mb-6 leading-none">Crafting <br/> Silence</h3>
                    <p className="max-w-md text-sm font-medium opacity-90 leading-relaxed mb-8 text-gray-200">
                        A conversation with our head tailor on the importance of negative space, structure, and the pursuit of the perfect silhouette.
                    </p>
                    <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:gap-6 transition-all">
                        Read Story <Icons.ArrowRight />
                    </button>
                </div>
             </div>

             <div className="flex flex-col divide-y divide-gray-200">
                 <div className="flex-1 p-12 flex flex-col justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer group" onClick={() => onNavigate('journal')}>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Style</span>
                     <h4 className="text-3xl font-serif italic mb-6 group-hover:underline decoration-1 underline-offset-4">The Monochromatic Guide</h4>
                     <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                        Mastering the art of tonal dressing. How to layer textures within a single color palette for a sophisticated winter look.
                     </p>
                     <span className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 self-start">View Guide</span>
                 </div>
                 
                 <div className="flex-1 relative overflow-hidden group cursor-pointer min-h-[350px]" onClick={() => onNavigate('stores')}>
                      <img src="/items/atelier.jpeg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Store" />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-8">
                          <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block">Locations</span>
                          <h4 className="text-4xl font-serif italic mb-6">Visit The Atelier</h4>
                          <button className="bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-white hover:border border-white transition-all">
                              Find a Boutique
                          </button>
                      </div>
                 </div>
             </div>
        </div>
    </section>
)

export const HomeView = ({ onNavigate, onProductClick, products, onCategorySelect }: { onNavigate: (view: PageView) => void, onProductClick: (p: Product) => void, products: Product[], onCategorySelect: (category: string) => void }) => {
    return (
        <div className="bg-brand-off-white">
            <Hero onNavigate={onNavigate} />
            <Manifesto />
            <CuratedGrid products={products} onProductClick={onProductClick} onNavigate={onNavigate} onCategorySelect={onCategorySelect} />
            <CategoryList onNavigate={onNavigate} onCategorySelect={onCategorySelect} />
            <ShopNewAndNow products={products} onProductClick={onProductClick} onNavigate={onNavigate} />
            <TheJournal onNavigate={onNavigate} />
        </div>
    )
}
