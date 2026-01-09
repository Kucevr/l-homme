import React, { useState, lazy, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { AnimatePresence, motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

import { PRODUCTS } from "./data";
import "./data-extended"; 
import { useStore } from "./store";

import { Header } from "./components/Header";
import { Marquee, Icons, ErrorBoundary } from "./components/ui";

const HomeView = lazy(() => import("./components/Home").then(m => ({ default: m.HomeView })));
const ProductDetail = lazy(() => import("./components/Product").then(m => ({ default: m.ProductDetail })));
const SearchOverlay = lazy(() => import("./components/Search").then(m => ({ default: m.SearchOverlay })));
const Shop = lazy(() => import("./components/Shop").then(m => ({ default: m.Shop })));
const NewsletterModal = lazy(() => import("./components/Newsletter").then(m => ({ default: m.NewsletterModal })));
const Locations = lazy(() => import("./components/Locations").then(m => ({ default: m.Locations })));
const Journal = lazy(() => import("./components/Journal").then(m => ({ default: m.Journal })));
const WishlistOverlay = lazy(() => import("./components/Wishlist").then(m => ({ default: m.WishlistOverlay })));

const App = () => {
  const { 
    view, setView, 
    activeProduct, setActiveProduct,
    cart, removeFromCart, updateQuantity,
    isCartOpen, setIsCartOpen
  } = useStore();

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Dynamic Scroll Atmosphere (Grain & Vignette)
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const grainOpacity = useTransform(smoothVelocity, [-2000, 0, 2000], [0.08, 0.03, 0.08]);
  const vignetteBlur = useTransform(smoothVelocity, [-2000, 0, 2000], [4, 0, 4]);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleNavigate = (v: any) => {
      setView(v);
      window.scrollTo(0, 0);
  };

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen font-sans bg-white selection:bg-black selection:text-white relative overflow-x-hidden">
          {/* Dynamic Film Grain Texture Overlay */}
        <motion.div 
            style={{ opacity: grainOpacity }}
            className="fixed inset-0 z-[100] pointer-events-none mix-blend-multiply"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </motion.div>

        {/* Dynamic Vignette during scroll */}
        <motion.div 
            style={{ backdropFilter: `blur(${vignetteBlur}px)` }}
            className="fixed inset-0 z-[99] pointer-events-none transition-all duration-300"
        />

        <Helmet>
          <title>L'HOMME | Modern Atelier</title>
          <meta name="description" content="Redefining the boundaries between formal tailoring and casual utility." />
        </Helmet>

        <Marquee />
        <Header 
          cartCount={cart.reduce((a, b) => a + b.quantity, 0)} 
          onOpenCart={() => setIsCartOpen(true)}
          onNavigate={handleNavigate}
          onOpenSearch={() => setIsSearchOpen(true)}
        />
        
        <main>
          <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin"></div></div>}>
            <AnimatePresence>
              <motion.div
                key={view + (activeProduct?.id || "")}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {view === "home" && <HomeView />}
                {view === "collections" && <Shop />}
                {view === "product" && activeProduct && (
                  <ProductDetail product={activeProduct} />
                )}
                {view === "locations" && <Locations />}
                {view === "journal" && <Journal />}
              </motion.div>
            </AnimatePresence>
          </Suspense>
        </main>

        <footer className="bg-black text-white border-t border-black">
          <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/20 border-b border-white/20">
             <div className="col-span-1 md:col-span-4 p-8 md:p-16">
                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-8 cursor-pointer hover:text-gray-300 transition-colors" onClick={() => handleNavigate("home")}>L'HOMME</h2>
                <p className="max-w-md text-gray-400 font-light leading-relaxed mb-12">
                   A modern atelier dedicated to the pursuit of silence in design. Crafted for the contemporary creative who values form, function, and longevity.
                </p>
                <div className="flex gap-6">
                   {['Instagram', 'X', 'Vimeo', 'Pinterest'].map(social => (
                      <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">{social}</a>
                   ))}
                </div>
             </div>
             <div className="col-span-1 md:col-span-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
                 <div className="p-8 md:p-12">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">Shop</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("collections")}>New Arrivals</li>
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("collections")}>Collections</li>
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("collections")}>Essentials</li>
                    </ul>
                 </div>
                 <div className="p-8 md:p-12">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">Atelier</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("journal")}>The Journal</li>
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("home")}>Philosophy</li>
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("locations")}>Visit Us</li>
                    </ul>
                 </div>
                 <div className="p-8 md:p-12">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">Service</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                       <li className="hover:text-white cursor-pointer transition-colors">Shipping</li>
                       <li className="hover:text-white cursor-pointer transition-colors">Returns</li>
                       <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                    </ul>
                 </div>
                 <div className="p-8 md:p-12 bg-white/[0.02]">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">Newsletter</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">Join our list for early access and exclusive updates on new collections.</p>
                    <div className="border-b border-white/20 pb-2 flex justify-between group">
                       <input type="email" placeholder="Email Address" className="bg-transparent border-none text-xs outline-none w-full placeholder:text-gray-600 focus:placeholder:text-gray-400 transition-all" />
                       <button className="text-gray-500 group-hover:text-white transition-colors"><Icons.ArrowRight className="w-4 h-4" /></button>
                    </div>
                 </div>
             </div>
          </div>
          
          <div className="p-8 md:px-16 md:py-12 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-600">
                <span>© 2026 L'HOMME Atelier</span>
                <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
                <span className="cursor-pointer hover:text-white transition-colors">Terms of Service</span>
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

        <div className={`fixed inset-0 z-50 pointer-events-none ${isCartOpen ? "pointer-events-auto" : ""}`}>
           <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isCartOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsCartOpen(false)}></div>
           <div className={`absolute top-0 right-0 h-full w-full md:w-[450px] bg-white transform transition-transform duration-500 shadow-2xl flex flex-col ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
               <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-xl font-serif italic">Bag ({cart.reduce((a, b) => a + b.quantity, 0)})</h3>
                  <button onClick={() => setIsCartOpen(false)}><Icons.X /></button>
               </div>
               <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {cart.map(item => (
                     <div key={item.cartId} className="flex gap-6">
                        <motion.div 
                            layoutId={`product-image-${item.id}`}
                            className="w-24 aspect-[3/4] bg-gray-100 cursor-pointer overflow-hidden"
                            onClick={() => {
                                setActiveProduct(PRODUCTS.find(p => p.id === item.id) || PRODUCTS[0]);
                                setView('product');
                                setIsCartOpen(false);
                                window.scrollTo(0, 0);
                            }}
                        >
                            <img src={item.image} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                           <div className="flex justify-between items-start">
                              <h4 className="font-serif text-lg leading-tight">{item.name}</h4>
                              <p className="font-medium text-sm">${item.price * item.quantity}</p>
                           </div>
                           <div className="flex items-center justify-between">
                              <div className="flex items-center border border-gray-200">
                                 <button onClick={() => updateQuantity(item.cartId, -1)} className="p-2"><Icons.Minus /></button>
                                 <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                                 <button onClick={() => updateQuantity(item.cartId, 1)} className="p-2"><Icons.Plus /></button>
                              </div>
                              <button onClick={() => removeFromCart(item.cartId)} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-red-500">Remove</button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <div className="flex justify-between mb-6 text-sm"><span>Subtotal</span><span className="font-medium">${subtotal}</span></div>
                  <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest">Checkout</button>
               </div>
           </div>
        </div>
        <Suspense fallback={null}>
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onProductClick={(p: any) => { setActiveProduct(p); setView("product"); window.scrollTo(0,0); }} />
            <NewsletterModal />
            <WishlistOverlay />
        </Suspense>
      </div>
     </ErrorBoundary>
    </HelmetProvider>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);