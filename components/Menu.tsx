
import React, { useState } from 'react';
import { Icons } from './ui';
import { PageView } from '../data';
import { useStore } from '../store';
import { translations } from '../translations';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: PageView) => void;
}

const MENU_ITEMS = [
  { label: 'Shop All', label_ru: 'Коллекции', view: 'collections', image: '/items/коллекции.jpg' },
  { label: 'New Arrivals', label_ru: 'Новинки', view: 'new-arrivals', image: '/items/коллекции 2.jpg' },
  { label: 'Editorial', label_ru: 'Журнал', view: 'journal', image: '/items/журнал.jpg' },
  { label: 'Philosophy', label_ru: 'Философия', view: 'philosophy', image: '/items/философия.jpg' },
  { label: 'Sustainability', label_ru: 'Экологичность', view: 'sustainability', image: '/items/экологичность.jpg' },
  { label: 'Locations', label_ru: 'Бутики', view: 'locations', image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2000&auto=format&fit=crop' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useStore();
  
  return (
    <div className="flex items-center gap-4 border border-white/20 px-4 py-2 rounded-full">
      <button 
        onClick={() => setLanguage('en')}
        className={`text-xs font-bold tracking-widest transition-colors ${language === 'en' ? 'text-white underline underline-offset-4' : 'text-gray-500 hover:text-white'}`}
      >
        ENGLISH
      </button>
      <span className="text-gray-700">/</span>
      <button 
        onClick={() => setLanguage('ru')}
        className={`text-xs font-bold tracking-widest transition-colors ${language === 'ru' ? 'text-white underline underline-offset-4' : 'text-gray-500 hover:text-white'}`}
      >
        РУССКИЙ
      </button>
    </div>
  );
};

export const FullScreenMenu = ({ isOpen, onClose, onNavigate }: MenuProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { language } = useStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col animate-fade-in shadow-2xl">
      <div className="flex justify-between items-center p-6 md:px-12 md:py-8">
         <h1 className="text-2xl font-serif font-bold tracking-tighter">L'HOMME</h1>
         <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300"><Icons.X /></button>
      </div>

      <div className="flex-1 flex flex-col md:flex-row max-w-[1920px] mx-auto w-full px-6 md:px-12">
        {/* Links */}
        <div className="flex-1 flex flex-col justify-center space-y-2 md:space-y-4 z-10">
          {MENU_ITEMS.map((item, idx) => (
             <button 
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => { onNavigate(item.view as PageView); onClose(); }}
                className="text-4xl md:text-7xl font-serif italic text-left hover:text-gray-400 transition-colors duration-300 group flex items-center gap-6"
             >
               <span className="text-sm font-sans font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300 text-gray-500">0{idx+1}</span>
               {language === 'ru' ? item.label_ru : item.label}
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
      
      <div className="p-6 md:px-12 md:py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
        <div className="flex gap-6">
          <button className="hover:text-white" onClick={() => { onNavigate('contact'); onClose(); }}>
            {translations[language].sections.contact}
          </button>
          <button className="hover:text-white" onClick={() => { onNavigate('locations'); onClose(); }}>
            {translations[language].nav.locations}
          </button>
        </div>
        
        <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
             <LanguageSwitcher />
        </div>

        <div className="flex gap-6">
           <button className="hover:text-white" onClick={() => { onNavigate('privacy'); onClose(); }}>
            {translations[language].footer.privacy}
           </button>
        </div>
      </div>
    </div>
  );
};
