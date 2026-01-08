
import React, { useState, useEffect } from 'react';
import { Icons } from './ui';
import { PRODUCTS, Product } from '../data';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
  onProductClick: (product: Product) => void;
}

export const SearchOverlay = ({ isOpen, onClose, onProductClick }: SearchProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const filtered = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white animate-fade-in flex flex-col">
      <div className="flex justify-end p-6 md:px-12 md:py-8">
         <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300"><Icons.X /></button>
      </div>
      
      <div className="max-w-4xl mx-auto w-full px-6 flex-1 flex flex-col">
         <div className="border-b-2 border-black pb-4 mb-12">
            <input 
              type="text" 
              placeholder="Search products, categories..." 
              autoFocus
              className="w-full text-3xl md:text-5xl font-serif italic outline-none placeholder:text-gray-300 bg-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
         </div>

         <div className="flex-1 overflow-y-auto pb-12">
            {query === '' ? (
               <div className="text-gray-400">
                  <p className="text-xs font-bold uppercase tracking-widest mb-4">Popular Searches</p>
                  <div className="flex gap-4 flex-wrap">
                     {['Coat', 'Boots', 'Knitwear', 'Trousers'].map(term => (
                        <button key={term} onClick={() => setQuery(term)} className="text-xl hover:text-black hover:underline underline-offset-4 decoration-1">{term}</button>
                     ))}
                  </div>
               </div>
            ) : results.length === 0 ? (
               <p className="text-gray-500">No results found for "{query}"</p>
            ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {results.map(p => (
                     <div key={p.id} onClick={() => { onProductClick(p); onClose(); }} className="cursor-pointer group flex gap-4 md:block">
                        <div className="w-24 h-24 md:w-full md:h-64 bg-gray-100 overflow-hidden mb-0 md:mb-4 shrink-0">
                           <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div>
                           <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{p.category}</p>
                           <h4 className="font-serif text-lg">{p.name}</h4>
                           <p className="text-sm">${p.price}</p>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
    </div>
  );
};
