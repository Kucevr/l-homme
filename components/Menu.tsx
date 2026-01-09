
import React, { useState } from 'react';
import { Icons } from './ui';
import { PageView } from '../data';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: PageView) => void;
}

const MENU_ITEMS = [
  { label: 'Shop All', view: 'collections', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&auto=format&fit=crop' },
  { label: 'New Arrivals', view: 'new-arrivals', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop' },
  { label: 'Editorial', view: 'journal', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop' },
  { label: 'Locations', view: 'locations', image: 'https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?q=80&w=1000&auto=format&fit=crop' },
];

export const FullScreenMenu = ({ isOpen, onClose, onNavigate }: MenuProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col animate-fade-in">
      <div className="flex justify-between items-center p-6 md:px-12 md:py-8">
         <h1 className="text-2xl font-serif font-bold tracking-tighter">L'HOMME</h1>
         <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300"><Icons.X /></button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row max-w-[1920px] mx-auto w-full px-6 md:px-12">
        {/* Links */}
        <div className="flex-1 flex flex-col justify-center space-y-2 md:space-y-6 z-10">
          {MENU_ITEMS.map((item, idx) => (
             <button 
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => { onNavigate(item.view as PageView); onClose(); }}
                className="text-5xl md:text-8xl font-serif italic text-left hover:text-gray-400 transition-colors duration-300 group flex items-center gap-6"
             >
               <span className="text-sm font-sans font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300 text-gray-500">0{idx+1}</span>
               {item.label}
             </button>
          ))}
        </div>
        
        {/* Dynamic Visual Feature */}
        <div className="hidden md:flex flex-1 items-center justify-center p-12 relative">
           <div className="w-[450px] h-[600px] overflow-hidden relative grayscale">
              {MENU_ITEMS.map((item, idx) => (
                 <img 
                    key={idx}
                    src={item.image} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${hoveredIndex === idx ? 'opacity-80' : 'opacity-0'}`} 
                    alt={item.label}
                 />
              ))}
              {/* Default image when nothing hovered */}
              <img 
                 src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1000&auto=format&fit=crop"
                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${hoveredIndex === null ? 'opacity-40' : 'opacity-0'}`}
              />
           </div>
        </div>
      </div>
      
      <div className="p-6 md:px-12 md:py-8 border-t border-white/10 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-400">
        <div className="flex gap-6">
          <button className="hover:text-white">My Account</button>
          <button className="hover:text-white">Search</button>
        </div>
        <div className="flex gap-6">
           <button className="hover:text-white">Instagram</button>
           <button className="hover:text-white">Twitter</button>
        </div>
      </div>
    </div>
  );
};
