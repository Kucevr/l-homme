import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, PRODUCTS, PageView, getRecommendedProducts } from '../data';
import { PRODUCT_DETAILS } from '../data-extended';
import { Icons, LazyImage, CharRevealText } from './ui';
import { useStore } from '../store';
import { translations } from '../translations';

interface ProductCardProps {
    product: Product;
    onClick: (p: Product) => void;
    isWishlisted?: boolean;
    onToggleWishlist?: () => void;
    className?: string;
    showPrice?: boolean;
    layoutId?: string | null;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, isWishlisted, onToggleWishlist, className = "", showPrice = true, layoutId }) => {
  const { language } = useStore();
  
  // Use provided layoutId, or default to standard, or null to disable
  const finalLayoutId = layoutId === null ? undefined : (layoutId || `product-image-${product.id}`);

  return (
    <div 
        className={`group cursor-pointer flex flex-col relative bg-white ${className}`}
        onClick={() => onClick(product)}
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-stone-50">
        {/* Base Image */}
        <motion.div 
            layoutId={finalLayoutId}
            className="w-full h-full"
        >
            <LazyImage 
            src={product.image} 
            alt={language === 'ru' && product.name_ru ? product.name_ru : product.name} 
            className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
        </motion.div>
        
        {/* Hover Image */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <LazyImage 
              src={product.imageHover} 
              alt={language === 'ru' && product.name_ru ? product.name_ru : product.name} 
              className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
        </div>
        
        {onToggleWishlist && (
            <button 
                onClick={(e) => { e.stopPropagation(); onToggleWishlist(); }}
                className="absolute top-4 right-4 z-10 text-black hover:scale-110 transition-transform opacity-0 group-hover:opacity-100 duration-300"
            >
                {isWishlisted ? <Icons.HeartFill /> : <Icons.Heart />}
            </button>
        )}
      </div>
      
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
            <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-sans font-medium text-black group-hover:underline decoration-1 underline-offset-4 truncate pr-4">
                    {language === 'ru' && product.name_ru ? product.name_ru : product.name}
                </h3>
                {showPrice && <span className="text-xs font-bold shrink-0">${product.price}</span>}
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {product.category} {product.material && ` • ${language === 'ru' ? product.material_ru : product.material}`}
            </p>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ title, children, defaultOpen = false }: { title: string, children?: React.ReactNode, defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border-b border-gray-200">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full py-4 flex justify-between items-center text-left hover:text-gray-500 transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest">{title}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}><Icons.Plus /></span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                <div className="text-sm text-gray-500 font-light leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    )
}

export const SizeGuideModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const { language } = useStore();
  const t = translations[language].product;
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-2xl shadow-2xl animate-fade-in flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
             <h3 className="text-2xl font-serif italic">{t.sizeGuide}</h3>
             <button onClick={onClose} className="hover:rotate-90 transition-transform"><Icons.X /></button>
        </div>
        <div className="p-8">
            <p className="text-sm text-gray-500 mb-8">All measurements in inches.</p>
            <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
                <thead>
                <tr className="border-b border-black">
                    <th className="py-3 font-bold uppercase tracking-widest text-xs">Size</th>
                    <th className="py-3 font-bold uppercase tracking-widest text-xs">Chest</th>
                    <th className="py-3 font-bold uppercase tracking-widest text-xs">Waist</th>
                    <th className="py-3 font-bold uppercase tracking-widest text-xs">Sleeve</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                {['XS','S','M','L','XL'].map((s, i) => (
                    <tr key={s}>
                        <td className="py-4 font-bold text-black">{s}</td>
                        <td className="py-4">{34 + (i*2)}-{36 + (i*2)}</td>
                        <td className="py-4">{28 + (i*2)}-{30 + (i*2)}</td>
                        <td className="py-4">{32 + i}</td>
                    </tr>
                ))}</tbody>
            </table>
            </div>
        </div>
      </div>
    </div>
  )
}

interface ProductDetailProps {
    product: Product;
    onAdd: (p: Product, size: string) => void;
    onBack: () => void;
    onNavigate: (view: PageView) => void;
    onProductClick: (p: Product) => void;
    recentlyViewed: Product[];
}

export const ProductDetail = ({ product }: { product: Product }) => {
  const { addToCart, setView, setActiveProduct, recentlyViewed, setIsCartOpen, toggleWishlist, wishlist, language } = useStore();
  const t = translations[language].product;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const isWishlisted = wishlist.includes(product.id);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  
  const details = PRODUCT_DETAILS[product.id];
  const completeTheLookIds = details?.completeTheLook || [];
  let completeTheLook = PRODUCTS.filter(p => completeTheLookIds.includes(p.id));

  if (completeTheLook.length === 0) {
    completeTheLook = getRecommendedProducts(product.id, 3);
  }
  const displayRecentlyViewed = (recentlyViewed || []).filter(p => p && p.id !== product.id).slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [product.image, product.imageHover],
    "description": details?.story || product.name,
    "brand": { "@type": "Brand", "name": "L'HOMME" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showSizeGuide) setShowSizeGuide(false);
        else setView('collections');
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Sticky CTA logic
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowSticky(scrollY > 1000); // Show after some scroll on mobile
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [product.id, showSizeGuide, setView]);

  return (
    <>
      <Helmet>
        <title>{`${product.name} | L'HOMME`}</title>
        <meta name="description" content={details?.story?.substring(0, 160) || product.name} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/80 backdrop-blur-md border-t border-gray-200 p-4 flex items-center gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]"
          >
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{product.name}</p>
              <p className="text-sm font-serif">${product.price}</p>
            </div>
            <button 
              onClick={() => {
                const el = document.getElementById('size-selector');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                else if (selectedSize) {
                    addToCart(product, selectedSize);
                    setIsCartOpen(true);
                }
              }}
              className="bg-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest"
            >
              {selectedSize ? t.addToBag : t.selectSize}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white pt-32 md:pt-40">
         {/* Back Button */}
         <div className="border-b border-gray-200 px-6 md:px-12 py-4">
            <button onClick={() => setView('collections')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
                <Icons.ArrowRight className="rotate-180" />
                {t.back}
            </button>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen border-t border-gray-200">
             <div className="lg:col-span-8 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
                    <motion.div 
                        layoutId={`product-image-${product.id}`}
                        className="bg-white aspect-[3/4] relative overflow-hidden group"
                    >
                        <LazyImage src={product.image} className="absolute inset-0 w-full h-full transition-transform duration-[2s] group-hover:scale-105" alt={product.name} />
                    </motion.div>
                    <div className="bg-white aspect-[3/4] relative overflow-hidden group">
                        <LazyImage src={product.imageHover} className="absolute inset-0 w-full h-full transition-transform duration-[2s] group-hover:scale-105" alt={product.name} />
                    </div>
                    <div className="bg-white aspect-[3/4] relative overflow-hidden group md:col-span-2">
                        <LazyImage src={product.image} className="absolute inset-0 w-full h-full object-top scale-110 transition-transform duration-[2s] group-hover:scale-100" alt={product.name} />
                    </div>
                </div>
             </div>

             <div className="lg:col-span-4 relative bg-white">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:sticky lg:top-20 p-8 md:p-10 h-fit flex flex-col gap-8"
                >
                    <motion.div variants={itemVariants}>
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex flex-wrap gap-2 items-center">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-gray-200 px-2 py-1">{product.category}</span>
                                {product.material && <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{language === 'ru' ? product.material_ru : product.material}</span>}
                                {product.silhouette && <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{language === 'ru' ? product.silhouette_ru : product.silhouette}</span>}
                            </div>
                            <span className="text-xl font-serif">${product.price}</span>
                        </div>
                        <h1 className="text-4xl font-serif italic leading-tight mb-6">
                            {language === 'ru' && product.name_ru ? product.name_ru : product.name}
                        </h1>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                            {language === 'ru' && product.description_ru ? product.description_ru : product.description}
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} id="size-selector">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold uppercase tracking-widest">{t.selectSize}</span>
                            <button onClick={() => setShowSizeGuide(true)} className="text-[10px] text-gray-400 underline hover:text-black">{t.sizeGuide}</button>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {product.sizes.map(size => (
                                <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`py-3 text-xs font-medium border transition-all duration-300 ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black text-gray-600'}`}
                                >
                                {size}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex gap-4">
                        <motion.button 
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                if (selectedSize) {
                                    addToCart(product, selectedSize);
                                    setIsCartOpen(true);
                                }
                            }}
                            disabled={!selectedSize}
                            className={`flex-1 py-4 text-xs font-bold uppercase tracking-widest border border-black transition-all duration-300 ${selectedSize ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed'}`}
                        >
                            {selectedSize ? t.addToBag : t.selectSize}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#f9f9f9" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleWishlist(product.id)}
                            className={`w-14 h-14 flex items-center justify-center border border-black transition-colors ${isWishlisted ? 'bg-black text-white hover:bg-black/90' : 'bg-white text-black hover:bg-gray-50'}`}
                        >
                            {isWishlisted ? <Icons.HeartFill /> : <Icons.Heart />}
                        </motion.button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-4">
                        <Accordion title={t.detailsFit} defaultOpen={true}>
                            <p className="mb-3"><strong>{t.fit}:</strong> {language === 'ru' && details?.fit_ru ? details.fit_ru : details?.fit}</p>
                            <p className="mb-3"><strong>{t.madeIn}:</strong> {language === 'ru' && details?.madeIn_ru ? details.madeIn_ru : details?.madeIn}</p>
                            {(details?.features || (language === 'ru' && details?.features_ru)) && (
                                <div>
                                    <strong>{t.features}:</strong>
                                    <ul className="list-disc list-inside mt-2 space-y-1">
                                        {(language === 'ru' && details?.features_ru ? details.features_ru : (details?.features || [])).map((f, i) => <li key={i}>{f}</li>)}
                                    </ul>
                                </div>
                            )}
                        </Accordion>
                        <Accordion title={t.materials}>
                            {(details?.materials || (language === 'ru' && details?.materials_ru)) && (
                                <ul className="space-y-2">
                                    {(language === 'ru' && details?.materials_ru ? details.materials_ru : (details?.materials || [])).map((m, i) => <li key={i}>• {m}</li>)}
                                </ul>
                            )}
                        </Accordion>
                        <Accordion title={t.care}>
                            {(details?.care || (language === 'ru' && details?.care_ru)) && (
                                <ul className="space-y-2">
                                    {(language === 'ru' && details?.care_ru ? details.care_ru : (details?.care || [])).map((c, i) => <li key={i}>• {c}</li>)}
                                </ul>
                            )}
                        </Accordion>
                        <Accordion title={t.shippingReturns}>
                            {language === 'ru' ? (
                                <>
                                    Бесплатная международная доставка при заказе от $250.<br/>
                                    Возврат принимается в течение 14 дней с момента получения.<br/>
                                    Все товары считаются окончательной покупкой через 30 дней.
                                </>
                            ) : (
                                <>
                                    Free worldwide shipping on orders over $250.<br/>
                                    Returns accepted within 14 days of delivery.<br/>
                                    All items are final sale after 30 days.
                                </>
                            )}
                        </Accordion>
                    </motion.div>
                </motion.div>
             </div>
         </div>
         
         {details?.craft && (
            <div className="border-t border-gray-200 py-24 px-6 md:px-12 bg-stone-50 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-square md:aspect-video lg:aspect-square overflow-hidden bg-gray-200 order-2 lg:order-1">
                        <LazyImage 
                            src={details.craft.image} 
                            alt={language === 'ru' && details.craft.title_ru ? details.craft.title_ru : details.craft.title} 
                            className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/5"></div>
                    </div>
                    <div className="flex flex-col gap-8 order-1 lg:order-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">— {t.behindCraft}</span>
                        <h3 className="text-4xl md:text-5xl font-serif italic leading-tight">
                            {language === 'ru' && details.craft.title_ru ? details.craft.title_ru : details.craft.title}
                        </h3>
                        <CharRevealText 
                            text={language === 'ru' && details.craft.description_ru ? details.craft.description_ru : details.craft.description}
                            className="text-lg md:text-xl font-light leading-relaxed text-gray-700"
                        />
                        <div className="pt-4">
                            <button className="text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
                                {t.exploreAtelier}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
         )}

         {completeTheLook.length > 0 && (
            <div className="border-t border-gray-200 py-16 px-6 md:px-12">
                <h3 className="text-2xl font-serif italic mb-8 text-center">{translations[language].sections.completeLook}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {completeTheLook.map(p => (
                        <ProductCard 
                            key={p.id} 
                            product={p} 
                            onClick={(product) => { setActiveProduct(product); window.scrollTo(0, 0); }} 
                        />
                    ))}
                </div>
            </div>
         )}

         {displayRecentlyViewed.length > 0 && (
            <div className="border-t border-gray-200 py-16 px-6 md:px-12 bg-gray-50">
                <h3 className="text-xl font-serif italic mb-8 text-center text-gray-500">{translations[language].sections.recentlyViewed}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {displayRecentlyViewed.map(p => (
                        <ProductCard 
                            key={p.id} 
                            product={p} 
                            onClick={(product) => { setActiveProduct(product); window.scrollTo(0, 0); }} 
                            className="bg-transparent" 
                        />
                    ))}
                </div>
            </div>
         )}
      </div>
      <SizeGuideModal isOpen={showSizeGuide} onClose={() => setShowSizeGuide(false)} />
    </>
  );
};
export default ProductDetail;
