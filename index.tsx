
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// Import Data & Types
import { PageView, Product, PRODUCTS, CartItem } from "./data";
import './data-extended'; // Load extended product details

// Import Components
import { Header } from "./components/Header";
import { Marquee, Icons } from "./components/ui";
import { HomeView } from "./components/Home";
import { ProductDetail } from "./components/Product";
import { SearchOverlay } from "./components/Search";
import { Shop } from "./components/Shop";
import { NewsletterModal } from "./components/Newsletter";
import { Locations } from "./components/Locations";
import { Journal } from "./components/Journal";

const App = () => {
  const [view, setView] = useState<PageView>('home');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  const addToCart = (product: Product, size: string) => {
    setCart(prev => {
       const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
       if (existing) {
         return prev.map(item => item.id === product.id && item.selectedSize === size ? { ...item, quantity: item.quantity + 1 } : item);
       }
       return [...prev, { ...product, quantity: 1, selectedSize: size, cartId: `${product.id}-${size}` }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.cartId === cartId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const toggleWishlist = (id: number) => {
      setWishlist(prev => 
          prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleProductClick = (product: Product) => {
      setActiveProduct(product);
      setRecentlyViewed(prev => {
         // Keep only unique items, limit to 4
         const filtered = prev.filter(p => p.id !== product.id);
         return [product, ...filtered].slice(0, 4);
      });
      setView('product');
      window.scrollTo(0,0);
  };

  const handleCategorySelect = (category: string) => {
      setSelectedCategory(category);
  };

  const handleNavigate = (v: PageView) => {
      if (v !== 'collections') {
          setSelectedCategory(undefined);
      }
      setView(v);
      window.scrollTo(0,0);
  };

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-black selection:text-white">
      <Marquee />
      <Header 
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      
      <main>
        {view === 'home' && (
           <HomeView 
              onNavigate={handleNavigate}
              onProductClick={handleProductClick}
              products={PRODUCTS}
              onCategorySelect={handleCategorySelect}
           />
        )}

        {view === 'collections' && (
          <Shop 
             onProductClick={handleProductClick} 
             wishlist={wishlist}
             onToggleWishlist={toggleWishlist}
             initialCategory={selectedCategory}
          />
        )}

        {view === 'product' && activeProduct && (
          <ProductDetail 
            product={activeProduct} 
            onAdd={addToCart} 
            onBack={() => setView('collections')}
            onNavigate={handleNavigate}
            onProductClick={handleProductClick}
            recentlyViewed={recentlyViewed}
          />
        )}
        
        {view === 'journal' && <Journal />}

        {view === 'stores' && <Locations />}
      </main>

      {/* Footer - Architectural Grid */}
      <footer className="bg-black text-white border-t border-black">
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/20 border-b border-white/20">
           <div className="col-span-1 md:col-span-5 p-8 md:p-16">
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-8 cursor-pointer hover:text-gray-300 transition-colors" onClick={() => handleNavigate('home')}>L'HOMME</h2>
              <p className="max-w-md text-gray-400 font-light leading-relaxed mb-12">
                 A modern atelier dedicated to the pursuit of silence in design. Crafted for the contemporary creative who values form, function, and longevity.
              </p>
              <div className="flex gap-4">
                  <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/40 py-2 outline-none text-sm w-64 focus:border-white transition-colors" />
                  <button className="text-[10px] font-bold uppercase tracking-widest hover:text-gray-300">Subscribe</button>
              </div>
           </div>
           
           <div className="col-span-1 md:col-span-7 grid grid-cols-2 md:grid-cols-3 divide-x divide-white/20">
               <div className="p-8 md:p-12">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">Shop</h4>
                  <ul className="space-y-4 text-sm font-medium text-gray-300">
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate('collections')}>New Arrivals</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => { handleCategorySelect('OUTERWEAR'); handleNavigate('collections'); }}>Outerwear</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => { handleCategorySelect('TAILORING'); handleNavigate('collections'); }}>Tailoring</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => { handleCategorySelect('LEATHER GOODS'); handleNavigate('collections'); }}>Accessories</li>
                  </ul>
               </div>
               <div className="p-8 md:p-12">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">Atelier</h4>
                  <ul className="space-y-4 text-sm font-medium text-gray-300">
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate('home')}>About Us</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate('journal')}>The Journal</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate('home')}>Sustainability</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate('home')}>Careers</li>
                  </ul>
               </div>
               <div className="p-8 md:p-12 col-span-2 md:col-span-1 border-t md:border-t-0 border-white/20">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-gray-500">Client Service</h4>
                  <ul className="space-y-4 text-sm font-medium text-gray-300">
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate('stores')}>Contact</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate('home')}>Shipping</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate('home')}>Returns</li>
                     <li className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate('home')}>Size Guide</li>
                  </ul>
               </div>
           </div>
        </div>
        
        <div className="p-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-500">
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p>© 2024 L'Homme Atelier.</p>
              <a 
                href="https://kutsev-studio.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors tracking-[0.2em]"
              >
                Made with Kutsev Studio
              </a>
           </div>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors">Twitter</a>
              <span className="hover:text-white cursor-pointer transition-colors" onClick={() => handleNavigate('home')}>Privacy</span>
           </div>
        </div>
      </footer>

      {/* Cart Drawer - Refined */}
      <div className={`fixed inset-0 z-50 pointer-events-none ${isCartOpen ? 'pointer-events-auto' : ''}`}>
         <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsCartOpen(false)}></div>
         <div className={`absolute top-0 right-0 h-full w-full md:w-[450px] bg-white transform transition-transform duration-500 shadow-2xl flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
             <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white z-10">
                <h3 className="text-xl font-serif italic">Shopping Bag <span className="text-sm font-sans not-italic text-gray-400 ml-2">({cart.reduce((a, b) => a + b.quantity, 0)})</span></h3>
                <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform"><Icons.X /></button>
             </div>
             
             <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                   <div className="h-full flex flex-col items-center justify-center text-gray-400">
                      <Icons.ShoppingBag />
                      <p className="mt-4 font-serif italic text-lg">Your bag is empty.</p>
                      <button onClick={() => setIsCartOpen(false)} className="mt-4 text-[10px] font-bold uppercase tracking-widest border-b border-gray-300 hover:border-black hover:text-black">Start Shopping</button>
                   </div>
                ) : (
                   cart.map(item => (
                      <div key={item.cartId} className="flex gap-6 animate-fade-in">
                         <div className="w-24 aspect-[3/4] bg-gray-100 flex-shrink-0">
                            <img src={item.image} className="w-full h-full object-cover" />
                         </div>
                         <div className="flex-1 flex flex-col justify-between py-1">
                            <div>
                               <div className="flex justify-between items-start">
                                  <h4 className="font-serif text-lg leading-tight">{item.name}</h4>
                                  <p className="font-medium text-sm">${item.price * item.quantity}</p>
                               </div>
                               <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">{item.category} / Size {item.selectedSize}</p>
                            </div>
                            <div className="flex items-center justify-between">
                               <div className="flex items-center border border-gray-200">
                                  <button onClick={() => updateQuantity(item.cartId, -1)} className="p-2 hover:bg-gray-100 text-gray-500"><Icons.Minus /></button>
                                  <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                                  <button onClick={() => updateQuantity(item.cartId, 1)} className="p-2 hover:bg-gray-100 text-gray-500"><Icons.Plus /></button>
                               </div>
                               <button onClick={() => removeFromCart(item.cartId)} className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-red-500">Remove</button>
                            </div>
                         </div>
                      </div>
                   ))
                )}
             </div>
             
             <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between mb-2 text-sm">
                   <span className="text-gray-500">Subtotal</span>
                   <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between mb-6 text-sm">
                   <span className="text-gray-500">Shipping</span>
                   <span className="font-medium">Calculated at checkout</span>
                </div>
                <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-black border border-transparent transition-all duration-300">
                   Proceed to Checkout
                </button>
             </div>
         </div>
      </div>
      
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onProductClick={handleProductClick} 
      />

      <NewsletterModal />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
