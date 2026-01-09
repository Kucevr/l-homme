import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useStore } from '../store';
import { PRODUCTS } from '../data';
import { Icons, RevealOnScroll, LazyImage, RevealText, CharRevealText } from './ui';
import { ProductCard } from './Product';
import { translations } from '../translations';

export const Hero = () => {
  const { setView, language } = useStore();
  const t = translations[language];
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { damping: 30, stiffness: 200, restDelta: 0.001 };
  
  // High-end smooth parallax values
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 300]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1.1, 1.3]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.9, 0.4]);

  return (
    <section 
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden group cursor-pointer bg-black" 
        onClick={() => { setView('collections'); window.scrollTo(0, 0); }}
    >
        {/* Full Screen Image with Cinematic Spring Parallax */}
        <motion.div 
            style={{ y, scale, opacity }}
            className="absolute inset-0 w-full h-full will-change-transform"
        >
            <img 
                src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=85&w=2000&auto=format&fit=crop" 
                srcSet="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=85&w=600&auto=format&fit=crop 600w,
                        https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=85&w=1200&auto=format&fit=crop 1200w,
                        https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=85&w=2000&auto=format&fit=crop 2000w"
                sizes="100vw"
                alt="L'HOMME Autumn/Winter 26 Campaign - Modern Tailoring" 
                className="w-full h-full object-cover origin-center"
                loading="eager"
                fetchPriority="high"
            />
        </motion.div>
        
        {/* Cinematic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-20 left-6 md:bottom-32 md:left-24 text-white z-20 max-w-2xl">
            <RevealOnScroll>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-90 border-l-2 border-white pl-4">
                    (01) — Autumn / Winter 26
                </p>
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif italic mb-10 leading-[0.9]" dangerouslySetInnerHTML={{ __html: t.home.heroTitle }}>
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <button className="px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-300">
                        {t.home.heroSubtitle}
                    </button>
                    <p className="hidden md:block text-sm font-light opacity-80 max-w-xs leading-relaxed">
                        {t.home.heroDesc}
                    </p>
                </div>
            </RevealOnScroll>
        </div>
    </section>
  );
};

const Manifesto = () => {
    const { language } = useStore();
    const t = translations[language];
    return (
        <section className="py-24 md:py-40 border-b border-gray-200 bg-brand-off-white">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col items-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-12">(02) — {t.nav.philosophy}</span>
                <CharRevealText 
                    text={t.home.philosophyText}
                    className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tight text-center max-w-5xl leading-[1.1] font-serif italic"
                />
            </div>
        </section>
    );
};

const CuratedGrid = () => {
    const { setView, setSelectedCategory, setActiveProduct, wishlist, toggleWishlist, language } = useStore();
    const t = translations[language];
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
                     <h3 className="text-4xl font-serif italic mb-6">{t.home.essentials}</h3>
                     <p className="text-sm text-gray-500 max-w-xs mb-8 leading-relaxed">
                        {t.home.essentialsDesc}
                     </p>
                     <button 
                        onClick={handleShopKnitwear}
                        className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
                     >
                        {t.home.shopEssentials}
                     </button>
                </div>

                {/* Product 1 */}
                <div className="bg-white">
                    <ProductCard 
                        product={displayProducts[0]} 
                        onClick={(p) => { setActiveProduct(p); setView('product'); window.scrollTo(0, 0); }} 
                        isWishlisted={wishlist.includes(displayProducts[0].id)}
                        onToggleWishlist={() => toggleWishlist(displayProducts[0].id)} 
                        showPrice={false}
                        layoutId={`product-image-${displayProducts[0].id}`}
                    />
                </div>

                {/* Product 2 */}
                <div className="bg-white">
                    <ProductCard 
                        product={displayProducts[1]} 
                        onClick={(p) => { setActiveProduct(p); setView('product'); window.scrollTo(0, 0); }} 
                        isWishlisted={wishlist.includes(displayProducts[1].id)} 
                        onToggleWishlist={() => toggleWishlist(displayProducts[1].id)}
                        showPrice={false}
                        layoutId={`product-image-${displayProducts[1].id}`}
                    />
                </div>
            </div>
        </section>
    );
};

const CategoryList = () => {
    const { setView, setSelectedCategory, language } = useStore();
    const t = translations[language];
    const categories = [
        { name: language === 'ru' ? 'Верхняя одежда' : 'Outerwear', id: 'OUTERWEAR', img: 'https://images.unsplash.com/photo-1544022613-e87a79a7835d?q=80&w=800' },
        { name: language === 'ru' ? 'Костюмы' : 'Tailoring', id: 'TAILORING', img: 'https://images.unsplash.com/photo-1594932224828-b4b057b99cdd?q=80&w=800' },
        { name: language === 'ru' ? 'Обувь' : 'Footwear', id: 'FOOTWEAR', img: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800' },
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
                        <LazyImage src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-110 opacity-80" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-white text-4xl lg:text-5xl font-serif italic tracking-tighter transition-transform duration-700 group-hover:scale-110">{cat.name}</h3>
                        </div>
                        <div className="absolute bottom-10 left-10 overflow-hidden">
                             <span className="text-white text-[10px] font-bold uppercase tracking-widest block translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                {t.home.explorePrompt}
                             </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ShopNewAndNow = () => {
    const { setView, setActiveProduct, wishlist, toggleWishlist, addToCart, setIsCartOpen, language } = useStore();
    const t = translations[language];
    const scrollRef = useRef<HTMLDivElement>(null);

    // Filter products that use images from /items/ first, then take up to 12
    const filteredProducts = [
        ...PRODUCTS.filter(p => p.image.startsWith('/items/')),
        ...PRODUCTS.filter(p => !p.image.startsWith('/items/'))
    ].slice(0, 12);

    return (
        <section className="py-24 bg-white overflow-hidden border-b border-gray-200">
             <div className="max-w-[1920px] mx-auto px-6 md:px-12 mb-16 flex justify-between items-end">
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-4">(04) — {t.home.newAndNow}</span>
                    <h2 className="text-5xl font-serif italic leading-none">{t.home.latestArrivals}</h2>
                </div>
                <button onClick={() => { setView('new-arrivals'); window.scrollTo(0, 0); }} className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
                    {t.home.viewAll}
                </button>
             </div>

             <div className="relative">
                <div 
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide px-6 md:px-12 snap-x snap-mandatory pb-8"
                >
                    {filteredProducts.map((p, index) => (
                        <RevealOnScroll key={p.id} delay={index * 100} className="snap-start">
                            <div className="min-w-[300px] md:min-w-[450px] group/card relative">
                                <ProductCard 
                                    product={p} 
                                    onClick={(p) => { setActiveProduct(p); setView('product'); window.scrollTo(0, 0); }} 
                                    isWishlisted={wishlist.includes(p.id)}
                                    onToggleWishlist={() => toggleWishlist(p.id)}
                                    layoutId={null}
                                />
                                {/* Quick Add Overlay on Hover */}
                                <div className="absolute bottom-24 right-4 translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                                    <button 
                                        onClick={(e) => { 
                                            e.stopPropagation(); 
                                            addToCart(p, p.sizes[0]); 
                                            setIsCartOpen(true); 
                                        }}
                                        className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-6 py-3 shadow-xl hover:bg-black hover:text-white transition-colors"
                                    >
                                        {t.cart.buyNow}
                                    </button>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                    {/* View All Card at end of scroll */}
                    <div 
                        className="min-w-[200px] snap-start flex items-center justify-center border border-gray-100 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => { setView('collections'); window.scrollTo(0, 0); }}
                    >
                        <div className="p-8">
                             <p className="font-serif italic text-2xl mb-2">{t.home.viewAll}</p>
                             <Icons.ArrowRight />
                        </div>
                    </div>
                </div>
             </div>
        </section>
    )
}

const TheJournal = () => {
    const { setView, language } = useStore();
    const t = translations[language];
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
                    <span className="inline-block py-1 px-3 border border-white/30 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest mb-6">{t.nav.journal}</span>
                    <h3 className="text-5xl md:text-6xl font-serif italic mb-6 leading-none">{t.home.craftingSilence}</h3>
                    <p className="max-w-md text-sm font-medium opacity-90 leading-relaxed mb-8 text-gray-200">
                        {t.home.journalDesc}
                    </p>
                    <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:gap-6 transition-all">
                        {t.home.readStory} <Icons.ArrowRight />
                    </button>
                </div>
             </div>

             <div className="flex flex-col divide-y divide-gray-200">
                 <div className="flex-1 p-12 flex flex-col justify-center bg-white hover:bg-gray-50 transition-colors cursor-pointer group" onClick={() => { setView('journal'); window.scrollTo(0, 0); }}>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">{t.home.style}</span>
                     <h4 className="text-3xl font-serif italic mb-6 group-hover:underline decoration-1 underline-offset-4">{t.home.monochromaticGuide}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                        {t.home.monochromaticGuideDesc}
                     </p>
                     <span className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 self-start">{t.home.viewGuide}</span>
                 </div>
                 
                 <div className="flex-1 relative overflow-hidden group cursor-pointer min-h-[350px]" onClick={() => { setView('locations'); window.scrollTo(0, 0); }}>
                      <img src="/items/atelier.jpeg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Store" />
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-8">
                          <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block">{t.home.locationsLabel}</span>
                          <h4 className="text-4xl font-serif italic mb-6">{t.home.visitAtelier}</h4>
                          <button className="bg-white text-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-transparent hover:text-white hover:border border-white transition-all">
                              {t.home.findBoutique}
                          </button>
                      </div>
                 </div>
             </div>
        </div>
    </section>
    );
};

const ShopTheLook = () => {
    const { setView, setActiveProduct, language } = useStore();
    const t = translations[language];
    const lookProducts = PRODUCTS.slice(2, 5); // Picking products for the 'look'

    return (
        <section className="py-24 bg-brand-off-white border-b border-gray-200">
            <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Main Look Image */}
                    <div className="w-full md:w-1/2 relative aspect-[3/4] overflow-hidden group">
                        <img 
                            src="/items/CraftingSilence.jpeg" 
                            alt="The Look" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/5"></div>
                    </div>

                    {/* Look Items */}
                    <div className="w-full md:w-1/2 space-y-12">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-4">(05) — {t.home.editorial}</span>
                            <h2 className="text-5xl font-serif italic mb-6">{t.home.modernUniform}</h2>
                            <p className="text-gray-500 max-w-sm font-light leading-relaxed">
                                {t.home.modernUniformDesc}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {lookProducts.map((p) => (
                                <div 
                                    key={p.id} 
                                    className="cursor-pointer group flex gap-4 items-center" 
                                    onClick={() => { setActiveProduct(p); setView('product'); window.scrollTo(0, 0); }}
                                >
                                    <div className="w-20 h-28 bg-white overflow-hidden shrink-0">
                                        <LazyImage src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                            {p.category}
                                        </p>
                                        <h4 className="text-sm font-serif italic text-black group-hover:text-gray-600 transition-colors">
                                            {language === 'ru' && p.name_ru ? p.name_ru : p.name}
                                        </h4>
                                        <p className="text-xs font-light mt-1 text-black">${p.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            onClick={() => { setView('collections'); window.scrollTo(0, 0); }}
                            className="px-8 py-3 bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-all"
                        >
                            {t.home.shopCollection}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HomeView = () => {
    return (
        <div className="bg-brand-off-white">
            <Hero />
            <Manifesto />
            <CuratedGrid />
            <CategoryList />
            <ShopNewAndNow />
            <ShopTheLook />
            <TheJournal />
        </div>
    )
}

export default HomeView;
