import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, PRODUCTS, PageView } from '../data';
import { PRODUCT_DETAILS } from '../data-extended';
import { Icons } from './ui';
import { useStore } from '../store';

interface ProductCardProps {
    product: Product;
    onClick: (p: Product) => void;
    isWishlisted?: boolean;
    onToggleWishlist?: () => void;
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, isWishlisted, onToggleWishlist, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
        className={`group cursor-pointer flex flex-col relative bg-white ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onClick(product)}
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100">
        <img 
          src={isHovered ? product.imageHover : product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {onToggleWishlist && (
            <button 
                onClick={(e) => { e.stopPropagation(); onToggleWishlist(); }}
                className="absolute top-4 right-4 z-10 text-black hover:scale-110 transition-transform opacity-0 group-hover:opacity-100 duration-300"
            >
                {isWishlisted ? <Icons.HeartFill /> : <Icons.Heart />}
            </button>
        )}
      </div>
      
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
            <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-sans font-medium text-black group-hover:underline decoration-1 underline-offset-4 truncate pr-4">{product.name}</h3>
                <span className="text-xs font-bold shrink-0">${product.price}</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{product.category}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ title, children, defaultOpen = false }: { title: string, children?: React.ReactNode, defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border-b border-gray-200">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full py-4 flex justify-between items-center text-left hover:text-gray-500 transition-colors">
                <span className="text-xs font-bold uppercase tracking-widest">{title}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}><Icons.Plus /></span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                <div className="text-sm text-gray-500 font-light leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    )
}

export const SizeGuideModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-2xl shadow-2xl animate-fade-in flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
             <h3 className="text-2xl font-serif italic">Size Guide</h3>
             <button onClick={onClose} className="hover:rotate-90 transition-transform"><Icons.X /></button>
        </div>
        <div className="p-8">
            <p className="text-sm text-gray-500 mb-8">All measurements in inches.</p>
            <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
                <thead>
                <tr className="border-b border-black">
                    <th className="py-3 font-bold uppercase tracking-widest text-xs">Size</th>
                    <th className="py-3 font-bold uppercase tracking-widest text-xs">Chest</th>
                    <th className="py-3 font-bold uppercase tracking-widest text-xs">Waist</th>
                    <th className="py-3 font-bold uppercase tracking-widest text-xs">Sleeve</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                {['XS','S','M','L','XL'].map((s, i) => (
                    <tr key={s}>
                        <td className="py-4 font-bold text-black">{s}</td>
                        <td className="py-4">{34 + (i*2)}-{36 + (i*2)}</td>
                        <td className="py-4">{28 + (i*2)}-{30 + (i*2)}</td>
                        <td className="py-4">{32 + i}</td>
                    </tr>
                ))}</tbody>
            </table>
            </div>
        </div>
      </div>
    </div>
  )
}

interface ProductDetailProps {
    product: Product;
    onAdd: (p: Product, size: string) => void;
    onBack: () => void;
    onNavigate: (view: PageView) => void;
    onProductClick: (p: Product) => void;
    recentlyViewed: Product[];
}

export const ProductDetail = ({ product }: { product: Product }) => {
  const { addToCart, setView, setActiveProduct, recentlyViewed } = useStore();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  
  const details = PRODUCT_DETAILS[product.id];
  const completeTheLookIds = details?.completeTheLook || [];
  const completeTheLook = PRODUCTS.filter(p => completeTheLookIds.includes(p.id));
  const displayRecentlyViewed = recentlyViewed.filter(p => p.id !== product.id).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [product.image, product.imageHover],
    "description": details?.story || product.name,
    "brand": { "@type": "Brand", "name": "L'HOMME" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": product.price,
      "availability": "https://schema.org/InStock"
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.id]);

  return (
    <>
      <Helmet>
        <title>{`${product.name} | L'HOMME`}</title>
        <meta name="description" content={details?.story?.substring(0, 160) || product.name} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white pt-16 md:pt-20">
         {/* Back Button */}
         <div className="border-b border-gray-200 px-6 md:px-12 py-4">
            <button onClick={() => setView('collections')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-black transition-colors">
                <Icons.ArrowRight className="rotate-180" />
                Back to Collection
            </button>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen border-t border-gray-200">
             <div className="lg:col-span-8 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
                    <div className="bg-white aspect-[3/4] relative overflow-hidden group">
                        <img src={product.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt={product.name} />
                    </div>
                    <div className="bg-white aspect-[3/4] relative overflow-hidden group">
                        <img src={product.imageHover} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt={product.name} />
                    </div>
                    <div className="bg-white aspect-[3/4] relative overflow-hidden group md:col-span-2">
                        <img src={product.image} className="absolute inset-0 w-full h-full object-cover object-top scale-110 transition-transform duration-[2s] group-hover:scale-100" alt={product.name} />
                    </div>
                </div>
             </div>

             <div className="lg:col-span-4 relative bg-white">
                <div className="lg:sticky lg:top-20 p-8 md:p-10 h-fit flex flex-col gap-8">
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-gray-200 px-2 py-1">{product.category}</span>
                            <span className="text-xl font-serif">${product.price}</span>
                        </div>
                        <h1 className="text-4xl font-serif italic leading-tight mb-6">{product.name}</h1>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">{product.description}</p>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold uppercase tracking-widest">Select Size</span>
                            <button onClick={() => setShowSizeGuide(true)} className="text-[10px] text-gray-400 underline hover:text-black">Size Guide</button>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {product.sizes.map(size => (
                                <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`py-3 text-xs font-medium border transition-all duration-300 ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-black text-gray-600'}`}
                                >
                                {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button 
                        onClick={() => selectedSize && addToCart(product, selectedSize)}
                        disabled={!selectedSize}
                        className={`w-full py-4 text-xs font-bold uppercase tracking-widest border border-black transition-all duration-300 ${selectedSize ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-gray-50 text-gray-300 border-gray-200 cursor-not-allowed'}`}
                    >
                        {selectedSize ? 'Add to Bag' : 'Select Size'}
                    </button>

                    <div className="pt-4">
                        <Accordion title="Details & Fit" defaultOpen={true}>
                            <p className="mb-3"><strong>Fit:</strong> {details?.fit}</p>
                            <p className="mb-3"><strong>Made in:</strong> {details?.madeIn}</p>
                            {details?.features && (
                                <div>
                                    <strong>Features:</strong>
                                    <ul className="list-disc list-inside mt-2 space-y-1">
                                        {details.features.map((f, i) => <li key={i}>{f}</li>)}
                                    </ul>
                                </div>
                            )}
                        </Accordion>
                        <Accordion title="Materials & Composition">
                            {details?.materials && (
                                <ul className="space-y-2">
                                    {details.materials.map((m, i) => <li key={i}>• {m}</li>)}
                                </ul>
                            )}
                        </Accordion>
                        <Accordion title="Care Instructions">
                            {details?.care && (
                                <ul className="space-y-2">
                                    {details.care.map((c, i) => <li key={i}>• {c}</li>)}
                                </ul>
                            )}
                        </Accordion>
                        <Accordion title="Shipping & Returns">
                            Free worldwide shipping on orders over $250.<br/>
                            Returns accepted within 14 days of delivery.<br/>
                            All items are final sale after 30 days.
                        </Accordion>
                    </div>
                </div>
             </div>
         </div>
         
         {completeTheLook.length > 0 && (
            <div className="border-t border-gray-200 py-16 px-6 md:px-12">
                <h3 className="text-2xl font-serif italic mb-8 text-center">Complete The Look</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {completeTheLook.map(p => (
                        <ProductCard key={p.id} product={p} onClick={onProductClick} />
                    ))}
                </div>
            </div>
         )}

         {displayRecentlyViewed.length > 0 && (
            <div className="border-t border-gray-200 py-16 px-6 md:px-12 bg-gray-50">
                <h3 className="text-xl font-serif italic mb-8 text-center text-gray-500">Recently Viewed</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {displayRecentlyViewed.map(p => (
                        <ProductCard key={p.id} product={p} onClick={onProductClick} className="bg-transparent" />
                    ))}
                </div>
            </div>
         )}
      </div>
      <SizeGuideModal isOpen={showSizeGuide} onClose={() => setShowSizeGuide(false)} />
    </>
  );
};
