import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { useStore } from '../store';
import { PRODUCTS } from '../data';
import { Icons, LazyImage } from './ui';
import { translations } from '../translations';

export const WishlistOverlay = () => {
  const { isWishlistOpen, setIsWishlistOpen, wishlist, toggleWishlist, setActiveProduct, setView, language } = useStore();
  const t = translations[language].wishlist;
  
  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <div className="fixed inset-0 z-[70] flex justify-end">
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsWishlistOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <m.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-gray-100 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-serif italic">{t.title}</h2>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">
                  {wishlistedProducts.length} {t.itemsSaved}
                </p>
              </div>
              <button 
                onClick={() => setIsWishlistOpen(false)}
                className="hover:rotate-90 transition-transform p-2"
              >
                <Icons.X />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              {wishlistedProducts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Icons.Heart className="w-12 h-12 text-gray-200 mb-6" />
                  <p className="font-serif italic text-xl text-gray-400">{t.empty}</p>
                  <button 
                    onClick={() => { setIsWishlistOpen(false); setView('collections'); }}
                    className="mt-6 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1"
                  >
                    {t.explore}
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {wishlistedProducts.map(p => (
                    <div key={p.id} className="flex gap-6 group">
                      <m.div 
                        layoutId={`product-image-${p.id}`}
                        className="w-24 aspect-[3/4] bg-stone-50 overflow-hidden cursor-pointer"
                        onClick={() => { setActiveProduct(p); setView('product'); setIsWishlistOpen(false); window.scrollTo(0, 0); }}
                      >
                        <LazyImage src={p.image} alt={language === 'ru' && p.name_ru ? p.name_ru : p.name} className="group-hover:scale-110 transition-transform duration-700" />
                      </m.div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{p.category}</p>
                            <h4 
                                onClick={() => { setActiveProduct(p); setIsWishlistOpen(false); window.scrollTo(0, 0); }}
                                className="font-serif italic text-lg cursor-pointer hover:text-gray-600 transition-colors"
                            >
                                {language === 'ru' && p.name_ru ? p.name_ru : p.name}
                            </h4>
                            <p className="text-sm font-light mt-1">${p.price}</p>
                          </div>
                          <button 
                            onClick={() => toggleWishlist(p.id)}
                            className="text-gray-300 hover:text-black transition-colors"
                          >
                            <Icons.X className="w-4 h-4" />
                          </button>
                        </div>
                        <button 
                         onClick={() => { setActiveProduct(p); setIsWishlistOpen(false); window.scrollTo(0, 0); }}
                         className="mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
                        >
                            {t.viewDetails}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default WishlistOverlay;
