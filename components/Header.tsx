
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Icons } from './ui';
import { FullScreenMenu } from './Menu';
import { PageView } from '../data';
import { useStore } from '../store';
import { translations } from '../translations';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (view: PageView) => void;
  onOpenSearch: () => void;
}

const RollingNumber = ({ value }: { value: number }) => {
    return (
        <span className="relative inline-block overflow-hidden h-3.5">
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="block leading-none"
                >
                    {value}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useStore();
  
  return (
    <div className="flex items-center gap-2 ml-4 border-l border-gray-200 pl-4">
      <button 
        onClick={() => setLanguage('en')}
        className={`text-[10px] font-bold tracking-tighter transition-colors ${language === 'en' ? 'text-black underline underline-offset-4' : 'text-gray-400 hover:text-black'}`}
      >
        EN
      </button>
      <span className="text-[10px] text-gray-300">/</span>
      <button 
        onClick={() => setLanguage('ru')}
        className={`text-[10px] font-bold tracking-tighter transition-colors ${language === 'ru' ? 'text-black underline underline-offset-4' : 'text-gray-400 hover:text-black'}`}
      >
        RU
      </button>
    </div>
  );
};

export const Header = ({ cartCount, onOpenCart, onNavigate, onOpenSearch }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { wishlist, setIsWishlistOpen, language } = useStore();
  const cartControls = useAnimation();
  const wishlistControls = useAnimation();
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (cartCount > 0) {
      cartControls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.3 }
      });
    }
  }, [cartCount, cartControls]);

  useEffect(() => {
    if (wishlist.length > 0) {
      wishlistControls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.3 }
      });
    }
  }, [wishlist.length, wishlistControls]);

  return (
    <>
      <header 
        role="banner"
        className={`fixed ${scrolled ? 'top-0' : 'top-[16px]'} left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent border-transparent py-8 text-black'}`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              aria-label="Open menu"
              className="flex items-center gap-3 hover:opacity-50 transition-opacity group focus:outline-none focus-visible:ring-2 focus-visible:ring-black px-2 py-1"
            >
              <Icons.Menu />
              <span className="hidden md:inline text-xs font-bold uppercase tracking-widest group-hover:underline">
                {translations[language].nav.menu}
              </span>
            </button>
            <LanguageSwitcher />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <button 
              aria-label="Go to home"
              onClick={() => onNavigate('home')} 
              className="text-4xl md:text-5xl font-serif font-black tracking-tighter cursor-pointer hover:tracking-wide transition-all duration-500 focus:outline-none"
            >
              L'HOMME
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`View wishlist, ${wishlist.length} items`}
              className="hover:opacity-50 transition-opacity relative flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black p-2"
            >
              <span className="hidden md:inline text-xs font-bold uppercase tracking-widest">
                {translations[language].nav.saved}
              </span>
              <motion.div animate={wishlistControls} className="relative">
                <Icons.Heart />
                {wishlist.length > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold"
                  >
                    <RollingNumber value={wishlist.length} />
                  </motion.span>
                )}
              </motion.div>
            </button>
            <button 
              onClick={onOpenSearch} 
              aria-label="Search items"
              className="hover:opacity-50 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-black p-2"
            >
              <Icons.Search />
            </button>
            <button 
              onClick={onOpenCart} 
              aria-label={`View cart, ${cartCount} items`}
              className="hover:opacity-50 transition-opacity relative flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black p-2"
            >
              <span className="hidden md:inline text-xs font-bold uppercase tracking-widest">
                {translations[language].nav.cart}
              </span>
              <motion.div animate={cartControls} className="relative">
                <Icons.ShoppingBag />
                {cartCount > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold"
                  >
                    <RollingNumber value={cartCount} />
                  </motion.span>
                )}
              </motion.div>
            </button>
          </div>

        </div>
      </header>
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={onNavigate} />
    </>
  );
};

