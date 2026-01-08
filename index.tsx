import React, { useState, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";

import { PRODUCTS } from "./data";
import "./data-extended"; 
import { useStore } from "./store";

import { Header } from "./components/Header";
import { Marquee, Icons } from "./components/ui";

const HomeView = lazy(() => import("./components/Home").then(m => ({ default: m.HomeView })));
const ProductDetail = lazy(() => import("./components/Product").then(m => ({ default: m.ProductDetail })));
const SearchOverlay = lazy(() => import("./components/Search").then(m => ({ default: m.SearchOverlay })));
const Shop = lazy(() => import("./components/Shop").then(m => ({ default: m.Shop })));
const NewsletterModal = lazy(() => import("./components/Newsletter").then(m => ({ default: m.NewsletterModal })));
const Locations = lazy(() => import("./components/Locations").then(m => ({ default: m.Locations })));
const Journal = lazy(() => import("./components/Journal").then(m => ({ default: m.Journal })));

const App = () => {
  const { 
    view, setView, 
    activeProduct, setActiveProduct,
    cart, removeFromCart, updateQuantity,
  } = useStore();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleNavigate = (v: any) => {
      setView(v);
      window.scrollTo(0, 0);
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen font-sans bg-white selection:bg-black selection:text-white">
        <Helmet>
          <title>L\HOMME | Modern Atelier</title>
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
            <AnimatePresence mode="wait">
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
             <div className="col-span-1 md:col-span-5 p-8 md:p-16">
                <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-8 cursor-pointer hover:text-gray-300 transition-colors" onClick={() => handleNavigate("home")}>L\HOMME</h2>
                <p className="max-w-md text-gray-400 font-light leading-relaxed mb-12">
                   A modern atelier dedicated to the pursuit of silence in design. Crafted for the contemporary creative who values form, function, and longevity.
                </p>
             </div>
             <div className="col-span-1 md:col-span-7 grid grid-cols-2 md:grid-cols-3 divide-x divide-white/20">
                 <div className="p-8 md:p-12">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">Shop</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("collections")}>New Arrivals</li>
                    </ul>
                 </div>
                 <div className="p-8 md:p-12">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">Atelier</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("journal")}>The Journal</li>
                    </ul>
                 </div>
                 <div className="p-8 md:p-12">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">Service</h4>
                    <ul className="space-y-4 text-sm font-medium text-gray-300">
                       <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate("locations")}>Locations</li>
                    </ul>
                 </div>
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
                        <div className="w-24 aspect-[3/4] bg-gray-100"><img src={item.image} className="w-full h-full object-cover" /></div>
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
        <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onProductClick={(p: any) => { setActiveProduct(p); setView("product"); window.scrollTo(0,0); }} />
        <NewsletterModal />
      </div>
    </HelmetProvider>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);