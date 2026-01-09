
import React from 'react';
import { PRODUCTS } from '../data';
import { ProductCard } from './Product';
import { useStore } from '../store';
import { Icons, RevealOnScroll } from './ui';

const NewArrivals = () => {
    const { setActiveProduct, wishlist, toggleWishlist, setView } = useStore();
    
    const newArrivals = PRODUCTS.filter(p => [1, 2, 4, 7, 10, 11, 14, 15].includes(p.id));

    return (
        <div className="bg-white min-h-screen">
            {/* Editorial Hero Component */}
            <section className="relative h-[80vh] w-full overflow-hidden bg-stone-900 flex items-center justify-center">
                <div className="absolute inset-0 opacity-60">
                    <img 
                        src="https://images.unsplash.com/photo-1550995694-3f5f4a7b1bd2?q=80&w=2000&auto=format&fit=crop" 
                        alt="L'HOMME Winter 26 Campaign" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
                
                <div className="relative text-center text-white px-6">
                    <RevealOnScroll>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Chapter II — Winter 2026</span>
                        <h1 className="text-7xl md:text-9xl font-serif italic mb-8 tracking-tighter">The Winter<br/>Monologue</h1>
                        <p className="max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed opacity-80">
                            A curated selection of garments defined by structural precision and the tactile warmth of Italian merino. Designed for the quiet moments in a bustling world.
                        </p>
                    </RevealOnScroll>
                </div>
                
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Scroll to Explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
                </div>
            </section>

            <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 mb-4">Current Selection</h2>
                        <h3 className="text-4xl md:text-5xl font-serif italic">New Arrivals</h3>
                    </div>
                    <div className="flex gap-4">
                         <button className="text-[10px] font-bold uppercase tracking-widest border border-stone-200 px-6 py-2 hover:bg-black hover:text-white transition-colors">Filter</button>
                         <button className="text-[10px] font-bold uppercase tracking-widest border border-stone-200 px-6 py-2 hover:bg-black hover:text-white transition-colors">Sort: Newest</button>
                    </div>
                </div>

                <div className="bg-gray-200 gap-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-gray-200">
                    {newArrivals.map((p) => (
                        <ProductCard 
                            key={p.id} 
                            product={p} 
                            onClick={(p) => { setActiveProduct(p); setView('product'); window.scrollTo(0, 0); }}
                            isWishlisted={wishlist.includes(p.id)}
                            onToggleWishlist={() => toggleWishlist(p.id)}
                            className="bg-white"
                        />
                    ))}
                </div>

                {/* Aesthetic Quote Section */}
                <section className="py-32 flex justify-center items-center text-center px-6">
                    <div className="max-w-2xl">
                        <Icons.Quote className="w-8 h-8 mx-auto mb-12 text-stone-300" />
                        <p className="text-3xl md:text-4xl font-serif italic leading-tight mb-12">"We do not design for a season, but for a lifetime. The garment must speak only when spoken to."</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">— THE ATELIER PHILOSOPHY</p>
                    </div>
                </section>

                <div className="mt-24 text-center">
                    <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-8">Refining the narrative since 2012</p>
                    <div className="w-px h-24 bg-gray-200 mx-auto"></div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
