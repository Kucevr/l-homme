
import React, { useState, useEffect } from 'react';
import { Icons } from './ui';
import { FullScreenMenu } from './Menu';
import { PageView } from '../data';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (view: PageView) => void;
  onOpenSearch: () => void;
}

export const Header = ({ cartCount, onOpenCart, onNavigate, onOpenSearch }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md border-gray-100 py-4 text-black' : 'bg-transparent border-transparent py-8 text-black'}`}>
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="flex items-center gap-3 hover:opacity-50 transition-opacity group">
              <Icons.Menu />
              <span className="hidden md:inline text-xs font-bold uppercase tracking-widest group-hover:underline">Menu</span>
            </button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 onClick={() => onNavigate('home')} className="text-4xl md:text-5xl font-serif font-black tracking-tighter cursor-pointer hover:tracking-wide transition-all duration-500">L'HOMME</h1>
          </div>

          <div className="flex items-center space-x-6">
            <button onClick={onOpenSearch} className="hover:opacity-50 transition-opacity"><Icons.Search /></button>
            <button onClick={onOpenCart} className="hover:opacity-50 transition-opacity relative flex items-center gap-2">
              <span className="hidden md:inline text-xs font-bold uppercase tracking-widest">Cart</span>
              <div className="relative">
                <Icons.ShoppingBag />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </header>
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={onNavigate} />
    </>
  );
};
