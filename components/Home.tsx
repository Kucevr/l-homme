import React, { useEffect, useRef } from 'react';
import { useStore } from '../store';
import { PRODUCTS } from '../data';
import { Icons, RevealOnScroll } from './ui';
import { ProductCard } from './Product';

export const Hero = () => {
  const { setView } = useStore();
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
        if (imgRef.current) {
            const scrolled = window.scrollY;
            imgRef.current.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0) scale(1.1)`;
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden group cursor-pointer bg-black" onClick={() => { setView('collections'); window.scrollTo(0, 0); }}>
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

const CuratedGrid = () => {
    const { setView, setSelectedCategory, setActiveProduct } = useStore();
    // Balanced 3-column layout: Text + Product + Product
    const displayProducts = PRODUCTS.slice(0, 2); 

    const handleShopKnitwear = () => {
        setSelectedCategory('KNITWEAR');
        setView('collections');
        window.scrollTo(0, 0);
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
                        onClick={handleShopKnitwear}
                        className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
                     >
                        Shop Knitwear
                     </button>
                </div>

                {/* Product 1 */}
                <div className="bg-white">
                    <ProductCard 
                        product={displayProducts[0]} 
                        onClick={(p) => { setActiveProduct(p); setView('product'); window.scrollTo(0, 0); }} 
                        isWishlisted={false}
                        onToggleWishlist={() => {}} 
                        showPrice={false}
                    />
                </div>

                {/* Product 2 */}
                <div className="bg-white">
                    <ProductCard 
                        product={displayProducts[1]} 
                        onClick={(p) => { setActiveProduct(p); setView('product'); window.scrollTo(0, 0); }} 
                        isWishlisted={false} 
                        onToggleWishlist={() => {}}
                        showPrice={false}
                    />
                </div>
            </div>
        </section>
    );
};

const CategoryList = () => {
    const { setView, setSelectedCategory } = useStore();
    const categories = [
        { name: 'Outerwear', id: 'OUTERWEAR', img: 'https://images.unsplash.com/photo-1544022613-e87a79a7835d?q=80&w=800' },
        { name: 'Tailoring', id: 'TAILORING', img: 'https://images.unsplash.com/photo-1594932224828-b4b057b99cdd?q=80&w=800' },
        { name: 'Footwear', id: 'FOOTWEAR', img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800' },
    ];

    return (
        <section className="bg-white border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {categories.map((cat) => (
                    <div 
                        key={cat.id}
                        className="group relative h-[500px] overflow-hidden cursor-pointer"
                        onClick={() => {
                            setSelectedCategory(cat.id);
                            setView('collections');
                            window.scrollTo(0, 0);
                        }}
                    >
                        <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-white text-4xl lg:text-5xl font-serif italic tracking-tighter transition-transform duration-700 group-hover:scale-110">{cat.name}</h3>
                        </div>
                        <div className="absolute bottom-10 left-10 overflow-hidden">
                             <span className="text-white text-[10px] font-bold uppercase tracking-widest block translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                Explore Collection
                             </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ShopNewAndNow = () => {
    const { setView, setActiveProduct, wishlist, toggleWishlist } = useStore();
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 bg-white overflow-hidden border-b border-gray-200">
             <div className="max-w-[1920px] mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-4">(04) — New & Now</span>
                    <h2 className="text-5xl font-serif italic leading-none">The Latest arrivals</h2>
                </div>
                <button onClick={() => { setView('collections'); window.scrollTo(0, 0); }} className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
                    View All
                </button>
             </div>

             <div className="relative group">
                <div 
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12 snap-x snap-mandatory"
                >
                    {PRODUCTS.slice(4, 10).map((p) => (
                        <div key={p.id} className="min-w-[300px] md:min-w-[450px] snap-start group/card relative">
                             <ProductCard 
                                product={p} 
                                onClick={(p) => { setActiveProduct(p); setView('product'); window.scrollTo(0, 0); }} 
                                isWishlisted={wishlist.includes(p.id)}
                                onToggleWishlist={() => toggleWishlist(p.id)}
                             />
                             {/* Quick Add Overlay on Hover */}
                             <div className="absolute bottom-24 right-4 translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                                <button className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-6 py-3 shadow-xl hover:bg-black hover:text-white transition-colors">
                                    Buy Now
                                </button>
                             </div>
                        </div>
                    ))}
                    {/* View All Card at end of scroll */}
                    <div 
                        className="min-w-[200px] snap-start flex items-center justify-center border border-gray-100 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => { setView('collections'); window.scrollTo(0, 0); }}
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

const TheJournal = () => {
    const { setView } = useStore();
    return (
    <section className="border-t border-b border-gray-200 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
             <div className="group relative h-[600px] lg:h-[700px] overflow-hidden cursor-pointer" onClick={() => { setView('journal'); window.scrollTo(0, 0); }}>
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
                 <div className="flex-1 p-12 flex flex-col justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer group" onClick={() => { setView('journal'); window.scrollTo(0, 0); }}>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Style</span>
                     <h4 className="text-3xl font-serif italic mb-6 group-hover:underline decoration-1 underline-offset-4">The Monochromatic Guide</h4>
                     <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                        Mastering the art of tonal dressing. How to layer textures within a single color palette for a sophisticated winter look.
                     </p>
                     <span className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 self-start">View Guide</span>
                 </div>
                 
                 <div className="flex-1 relative overflow-hidden group cursor-pointer min-h-[350px]" onClick={() => { setView('locations'); window.scrollTo(0, 0); }}>
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
    );
};

export const HomeView = () => {
    return (
        <div className="bg-brand-off-white">
            <Hero />
            <Manifesto />
            <CuratedGrid />
            <CategoryList />
            <ShopNewAndNow />
            <TheJournal />
        </div>
    )
}
