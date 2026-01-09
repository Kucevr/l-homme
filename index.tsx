import React, { useState, lazy, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { AnimatePresence, motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

import "./index.css";
import { PRODUCTS } from "./data";
import "./data-extended"; 
import { useStore } from "./store";

import { Header } from "./components/Header";
import { Marquee, Icons, ErrorBoundary } from "./components/ui";
import { translations } from "./translations";

const HomeView = lazy(() => import("./components/Home"));
const ProductDetail = lazy(() => import("./components/Product"));
const SearchOverlay = lazy(() => import("./components/Search"));
const Shop = lazy(() => import("./components/Shop"));
const NewArrivals = lazy(() => import("./components/NewArrivals"));
const NewsletterModal = lazy(() => import("./components/Newsletter"));
const Locations = lazy(() => import("./components/Locations"));
const Journal = lazy(() => import("./components/Journal"));
const WishlistOverlay = lazy(() => import("./components/Wishlist"));
const Philosophy = lazy(() => import("./components/Philosophy"));
const Sustainability = lazy(() => import("./components/Sustainability"));

// Service Pages
const Shipping = lazy(() => import("./components/Shipping"));
const Returns = lazy(() => import("./components/Returns"));
const Contact = lazy(() => import("./components/Contact"));

// Legal Pages
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./components/TermsOfService"));

const App = () => {
  const { 
    view, setView, 
    activeProduct, setActiveProduct,
    cart, removeFromCart, updateQuantity,
    isCartOpen, setIsCartOpen,
    language
  } = useStore();

  const t = translations[language];

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // --- Dynamic URL Routing Logic ---
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.replace('/', '');
      const validViews: any = {
        '': 'home',
        'collections': 'collections',
        'new-arrivals': 'new-arrivals',
        'journal': 'journal',
        'locations': 'locations',
        'philosophy': 'philosophy',
        'sustainability': 'sustainability',
        'shipping': 'shipping',
        'returns': 'returns',
        'contact': 'contact',
        'privacy': 'privacy',
        'terms': 'terms'
      };

      if (validViews[path]) {
        setView(validViews[path]);
      } else if (path.startsWith('product/')) {
        const productId = parseInt(path.split('/')[1]);
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) {
          setActiveProduct(product);
          setView('product');
        }
      }
    };

    // Initial check
    handleUrlChange();

    // Listen for back/forward buttons
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, [setView, setActiveProduct]);

  // Sync state to URL
  useEffect(() => {
    const pathMapping: any = {
      'home': '/',
      'collections': '/collections',
      'new-arrivals': '/new-arrivals',
      'journal': '/journal',
      'locations': '/locations',
      'philosophy': '/philosophy',
      'sustainability': '/sustainability',
      'shipping': '/shipping',
      'returns': '/returns',
      'contact': '/contact',
      'privacy': '/privacy',
      'terms': '/terms',
      'product': activeProduct ? `/product/${activeProduct.id}` : '/'
    };

    const targetPath = pathMapping[view] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  }, [view, activeProduct]);
  // ---------------------------------

  // Dynamic Scroll Atmosphere (Grain & Vignette)
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const grainOpacity = useTransform(smoothVelocity, [-2000, 0, 2000], [0.08, 0.03, 0.08]);
  const vignetteBlur = useTransform(smoothVelocity, [-2000, 0, 2000], [4, 0, 4]);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleNavigate = (v: any) => {
      // Small delay to allow Menu to close smoothly
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
            <AnimatePresence mode="wait">
              <motion.div
                key={view + (activeProduct?.id || "")}
                initial={{ opacity: 0, clipPath: "inset(10% 0 10% 0)", filter: "blur(10px)" }}
                animate={{ opacity: 1, clipPath: "inset(0% 0 0% 0)", filter: "blur(0px)" }}
                exit={{ opacity: 0, clipPath: "inset(10% 0 10% 0)", filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <Suspense fallback={
                  <div className="h-screen flex items-center justify-center bg-white">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-px bg-black animate-pulse" />
                      <span className="text-[10px] uppercase tracking-[0.3em] font-medium pulse">L'HOMME</span>
                    </div>
                  </div>
                }>
                    {view === "home" && <HomeView />}
                    {view === "collections" && <Shop />}
                    {view === "new-arrivals" && <NewArrivals />}
                    {view === "product" && activeProduct && (
                      <ProductDetail product={activeProduct} />
                    )}
                    {view === "locations" && <Locations />}
                    {view === "journal" && <Journal />}
                    {view === "shipping" && <Shipping />}
                    {view === "returns" && <Returns />}
                    {view === "contact" && <Contact />}
                    {view === "privacy" && <PrivacyPolicy />}
                    {view === "terms" && <TermsOfService />}
                    {view === "philosophy" && <Philosophy />}
                    {view === "sustainability" && <Sustainability />}
                </Suspense>
              </motion.div>
            </AnimatePresence>
        </main>

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

        <div className={`fixed inset-0 z-50 pointer-events-none ${isCartOpen ? "pointer-events-auto" : ""}`}>
           <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isCartOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsCartOpen(false)}></div>
           <div className={`absolute top-0 right-0 h-full w-full md:w-[450px] bg-white transform transition-transform duration-500 shadow-2xl flex flex-col ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
               <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-xl font-serif italic">{t.cart.title} ({cart.reduce((a, b) => a + b.quantity, 0)})</h3>
                  <button onClick={() => setIsCartOpen(false)}><Icons.X /></button>
               </div>
               <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {cart.length === 0 ? (
                     <div className="h-full flex flex-col items-center justify-center text-center">
                        <Icons.ShoppingBag className="w-12 h-12 text-gray-200 mb-4" />
                        <p className="text-sm text-gray-400">{t.cart.empty}</p>
                     </div>
                  ) : (
                     cart.map(item => (
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
                                 <h4 className="font-serif text-lg leading-tight">
                                    {language === 'ru' && item.name_ru ? item.name_ru : item.name}
                                 </h4>
                                 <p className="font-medium text-sm">${item.price * item.quantity}</p>
                              </div>
                              <div className="flex items-center justify-between">
                                 <div className="flex items-center border border-gray-200">
                                    <button onClick={() => updateQuantity(item.cartId, -1)} className="p-2"><Icons.Minus /></button>
                                    <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.cartId, 1)} className="p-2"><Icons.Plus /></button>
                                 </div>
                                 <button onClick={() => removeFromCart(item.cartId)} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-red-500">{t.cart.remove}</button>
                              </div>
                           </div>
                        </div>
                     ))
                  )}
               </div>
               <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <div className="flex justify-between mb-6 text-sm"><span>{t.cart.subtotal}</span><span className="font-medium">${subtotal}</span></div>
                  <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest">{t.cart.checkout}</button>
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