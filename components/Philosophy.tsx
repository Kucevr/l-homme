import React from 'react';
import { RevealOnScroll, RevealText, Icons } from './ui';
import { useStore } from '../store';

const Philosophy = () => {
  const { setView } = useStore();

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto text-center mb-40">
            <h1 className="text-7xl md:text-9xl font-serif italic mb-12">Philosophy</h1>
            <p className="text-2xl md:text-3xl font-light text-stone-500 italic max-w-3xl mx-auto leading-relaxed">
              "Silence in design is not an absence of detail, but the elimination of noise until only the essential remains."
            </p>
          </div>
        </RevealOnScroll>

        <section className="mb-64">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <RevealOnScroll>
              <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop" 
                  alt="Architectural structure" 
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </RevealOnScroll>
            <div className="space-y-16">
              <RevealOnScroll delay={200}>
                <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-6">01 — Structuralism</h2>
                <h3 className="text-4xl md:text-5xl font-serif italic mb-8">Portable Architecture</h3>
                <p className="text-xl font-light leading-relaxed text-gray-600">
                  We view garments as portable architecture. Our design process begins not with a sketch of a person, but with a study of volume and tension. Every seam is a calculated line, every fold a purposeful shadow.
                </p>
                <p className="text-xl font-light leading-relaxed text-gray-600 mt-6">
                  L'HOMME rejects the ephemeral nature of "fashion." Instead, we pursue the permanence of structure. Our pieces are engineered to maintain their silhouette across time, acting as a stable framework for the modern creative.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section className="mb-64">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-7 order-2 md:order-1">
                 <RevealOnScroll>
                    <div className="aspect-video bg-stone-100 overflow-hidden">
                       <img 
                          src="https://images.unsplash.com/photo-1558226011-88f572455b76?q=80&w=1600&auto=format&fit=crop" 
                          alt="Detailing" 
                          className="w-full h-full object-cover grayscale"
                       />
                    </div>
                 </RevealOnScroll>
              </div>
              <div className="md:col-span-5 order-1 md:order-2 flex flex-col justify-end pb-12">
                 <RevealOnScroll delay={300}>
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-6">02 — Materiality</h2>
                    <h3 className="text-4xl md:text-5xl font-serif italic mb-8">Haptic Memory</h3>
                    <p className="text-lg font-light leading-relaxed text-gray-500">
                       We source exclusive textiles from historic Italian and Japanese mills. Each fabric is selected for its "memory" — the ability to hold a crease, drape with weight, and age with grace.
                    </p>
                 </RevealOnScroll>
              </div>
           </div>
        </section>

        <section className="mb-64 bg-stone-900 text-white py-48 -mx-6 md:-mx-12 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
             <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                <path d="M0,0 L100,0 L100,100 Z" />
             </svg>
          </div>
          <div className="max-w-4xl mx-auto space-y-32 relative z-10">
            <RevealText>The pursuit of silence is not the absence of sound, but the presence of focus.</RevealText>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-32 border-t border-white/10">
               <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Integrity</h3>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">No internal reinforcements where the cut can do the work. Honesty in construction is our primary directive.</p>
               </div>
               <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Utilitas</h3>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">Beauty is a byproduct of function. Every pocket, button, and vent serves a pragmatic purpose in the daily life.</p>
               </div>
               <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-stone-500">Legacy</h3>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">We do not release collections; we add to a continuous monologue of design evolution across generations.</p>
               </div>
            </div>
          </div>
        </section>

        <section className="mb-48">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-12">03 — The Atelier Culture</h2>
              <div className="space-y-12 text-3xl md:text-4xl font-light text-stone-800 leading-snug font-serif italic">
                 <p>Based in Paris, our studio operates as a laboratory. We collaborate with master artisans, structural engineers, and material scientists to push the boundaries of what a garment can be.</p>
                 <div className="w-24 h-[1px] bg-stone-200 mx-auto"></div>
                 <p className="text-xl md:text-2xl not-italic text-stone-500 max-w-2xl mx-auto">"We don't make clothes for everyone. We make them for those who notice the distance between two stitches."</p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="h-[70vh] flex items-center justify-center border-t border-stone-100 mt-32">
           <RevealOnScroll>
               <div 
                  className="text-center group cursor-pointer"
                  onClick={() => { setView('collections'); window.scrollTo(0, 0); }}
               >
                  <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-12 text-stone-400 group-hover:text-black transition-colors">Experience the Collection</p>
                  <h3 className="text-5xl md:text-8xl font-serif italic group-hover:underline transition-all duration-700 flex items-center justify-center gap-8">
                     Shop Atelier <Icons.ArrowRight className="w-8 h-8 md:w-16 md:h-16 stroke-[0.5]" />
                  </h3>
               </div>
           </RevealOnScroll>
        </section>
      </div>
    </div>
  );
};

export default Philosophy;
