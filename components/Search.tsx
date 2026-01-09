
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icons, LazyImage } from './ui';
import { PRODUCTS, Product, SEARCHABLE_PAGES, PageLink, PageView } from '../data';
import { useStore } from '../store';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
  onProductClick: (product: Product) => void;
}

export const SearchOverlay = ({ isOpen, onClose, onProductClick }: SearchProps) => {
  const { setView, wishlist, toggleWishlist } = useStore();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const [pageResults, setPageResults] = useState<PageLink[]>([]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setPageResults([]);
    } else {
      const q = query.toLowerCase();
      const filteredProducts = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q)
      );
      const filteredPages = SEARCHABLE_PAGES.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
      setResults(filteredProducts);
      setPageResults(filteredPages);
    }
  }, [query]);

  const handlePageClick = (view: PageView) => {
    setView(view);
    onClose();
    window.scrollTo(0, 0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white animate-fade-in flex flex-col">
      <div className="flex justify-between items-center p-6 md:px-12 md:py-8 border-b border-gray-100">
         <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Search Catalogue</span>
         <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300"><Icons.X /></button>
      </div>
      
      <div className="max-w-6xl mx-auto w-full px-6 flex-1 flex flex-col pt-12 md:pt-20">
         <div className="border-b-[1px] border-black/10 pb-6 mb-12">
            <input 
              type="text" 
              placeholder="Start typing..." 
              autoFocus
              className="w-full text-4xl md:text-7xl font-serif italic outline-none placeholder:text-gray-200 bg-transparent tracking-tighter"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
         </div>

         <div className="flex-1 overflow-y-auto pb-12">
            {query === '' ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gray-400">Suggested</p>
                    <div className="flex flex-col gap-4">
                       {['New Arrivals', 'Best Sellers', 'Tailoring', 'Essential Knitwear'].map(term => (
                          <button key={term} onClick={() => setQuery(term)} className="text-3xl font-serif italic text-left hover:pl-4 transition-all duration-300 border-b border-gray-50 pb-2">{term}</button>
                       ))}
                    </div>
                  </div>
                  <div className="hidden md:block">
                     <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gray-400">Trending</p>
                     <div className="grid grid-cols-2 gap-4">
                         {PRODUCTS.slice(0, 4).map(p => (
                            <div key={p.id} className="cursor-pointer group" onClick={() => { onProductClick(p); onClose(); }}>
                                <div className="aspect-[3/4] overflow-hidden mb-2">
                                     <LazyImage src={p.image} alt={p.name} className="group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-widest truncate">{p.name}</p>
                            </div>
                         ))}
                     </div>
                  </div>
               </div>
            ) : results.length === 0 ? (
               <div className="flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-3xl font-serif italic text-gray-300 mb-4">No results found for</p>
                  <p className="text-xl font-light">"{query}"</p>
               </div>
            ) : (
               <div className="space-y-12">
                  {pageResults.length > 0 && (
                    <div className="space-y-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Pages</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pageResults.map(page => (
                                <button 
                                    key={page.id}
                                    onClick={() => handlePageClick(page.view)}
                                    className="p-6 border border-gray-100 bg-gray-50/50 hover:bg-white transition-all text-left group"
                                >
                                    <h4 className="text-xl font-serif italic mb-2 group-hover:text-black transition-colors">{page.title}</h4>
                                    <p className="text-xs text-gray-500 font-light">{page.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                  )}

                  {results.length > 0 && (
                    <div className="space-y-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Products</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
                            {results.map(p => (
                                <div key={p.id} onClick={() => { onProductClick(p); onClose(); }} className="cursor-pointer group relative">
                                    <motion.div 
                                        layoutId={`product-image-${p.id}`}
                                        className="aspect-[3/4] bg-stone-50 overflow-hidden mb-4 relative"
                                    >
                                        <LazyImage src={p.image} alt={p.name} className="group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                            <LazyImage src={p.imageHover} alt={p.name} className="group-hover:scale-110 transition-transform duration-1000" />
                                        </div>
                                        <div className="absolute top-4 right-4 z-10 text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Details
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); toggleWishlist(p.id); }}
                                            className="absolute top-4 left-4 z-20 text-black p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            {wishlist.includes(p.id) ? <Icons.HeartFill /> : <Icons.Heart />}
                                        </button>
                                    </motion.div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{p.category}</p>
                                        <h4 className="font-serif italic text-xl group-hover:text-gray-600 transition-colors">{p.name}</h4>
                                        <p className="text-sm font-light mt-1">${p.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                  )}
               </div>
            )}
         </div>
      </div>
    </div>
  );
};
