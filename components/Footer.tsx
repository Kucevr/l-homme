import React from 'react';
import { m } from 'framer-motion';
import { Icons } from './ui';
import { useStore } from '../store';
import { translations } from '../translations';
import { PRODUCTS } from '../data';

export const Footer = () => {
    const { view, setView, setActiveProduct, cart, language, language: currentLang } = useStore();
    const t = translations[language];

    const handleNavigate = (v: any) => {
        setView(v);
        window.scrollTo(0, 0);
    };

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <footer className="bg-black text-white border-t border-black">
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/20 border-b border-white/20">
             <div className="col-span-1 md:col-span-4 p-8 md:p-16">
                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-8 cursor-pointer hover:text-gray-300 transition-colors" onClick={() => handleNavigate("home")}>L'HOMME</h2>
                <p className="max-w-md text-gray-400 font-light leading-relaxed mb-12">
                   {t.footer.about}
                </p>
                <div className="flex gap-6">
                   {['Instagram', 'X', 'Vimeo', 'Pinterest'].map(social => (
                      <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">{social}</a>
                   ))}
                </div>
             </div>
             <div className="col-span-1 md:col-span-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
                 <div className="p-8 md:p-12">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">{t.nav.shop}</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("new-arrivals")}>{t.nav.newArrivals}</li>
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("collections")}>{t.nav.collections}</li>
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("collections")}>{t.nav.shop}</li>
                    </ul>
                 </div>
                 <div className="p-8 md:p-12">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">{t.footer.atelier}</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("journal")}>{t.nav.journal}</li>
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("philosophy")}>{t.nav.philosophy}</li>
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("locations")}>{t.nav.locations}</li>
                    </ul>
                 </div>
                 <div className="p-8 md:p-12">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">{t.footer.service}</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("shipping")}>{t.sections.shipping}</li>
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("returns")}>{t.sections.returns}</li>
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("contact")}>{t.sections.contact}</li>
                    </ul>
                 </div>
                 <div className="p-8 md:p-12 bg-white/[0.02]">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">{t.footer.newsletter}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">{t.footer.newsletterDesc}</p>
                    <div className="border-b border-white/20 pb-2 flex justify-between group">
                       <input type="email" placeholder={t.footer.newsletterPlaceholder} className="bg-transparent border-none text-xs outline-none w-full placeholder:text-gray-600 focus:placeholder:text-gray-400 transition-all" />
                       <button className="text-gray-500 group-hover:text-white transition-colors"><Icons.ArrowRight className="w-4 h-4" /></button>
                    </div>
                 </div>
             </div>
          </div>
          
          <div className="p-8 md:px-16 md:py-12 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                <span>© 2026 L'HOMME Atelier</span>
                <span className="cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigate("privacy")}>{t.footer.privacy}</span>
                <span className="cursor-pointer hover:text-white transition-colors" onClick={() => handleNavigate("terms")}>{t.footer.terms}</span>
             </div>
             
             <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 flex items-center gap-2">
                MADE WITH 
                <a 
                   href="https://kutsev-studio.vercel.app" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="px-3 py-1.5 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-300 rounded-full"
                >
                   KUTSEV-STUDIO
                </a>
             </div>
          </div>
        </footer>
    );
};

export default Footer;
