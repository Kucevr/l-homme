import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product, CartItem, PageView } from './data';
import { Language } from './translations';

interface AppState {
  view: PageView;
  language: Language;
  activeProduct: Product | null;
  cart: CartItem[];
  wishlist: number[];
  recentlyViewed: Product[];
  selectedCategory: string | undefined;
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  
  // Actions
  setView: (view: PageView) => void;
  setLanguage: (lang: Language) => void;
  setActiveProduct: (product: Product | null) => void;
  setSelectedCategory: (category: string | undefined) => void;
  setIsCartOpen: (isOpen: boolean) => void;
  setIsWishlistOpen: (isOpen: boolean) => void;
  
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (id: number) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      view: 'home',
      language: 'en',
      activeProduct: null,
      cart: [],
      wishlist: [],
      recentlyViewed: [],
      selectedCategory: undefined,
      isCartOpen: false,
      isWishlistOpen: false,

      setView: (view) => set((state) => {
        const resetViews: PageView[] = ['home', 'collections', 'new-arrivals', 'journal', 'locations', 'shipping', 'returns', 'contact', 'privacy', 'terms', 'philosophy', 'sustainability'];
        if (resetViews.includes(view)) {
          return { 
            view, 
            selectedCategory: (view === 'collections' || view === 'new-arrivals') ? state.selectedCategory : undefined, 
            activeProduct: null 
          };
        }
        return { view };
      }),

      setLanguage: (language) => set({ language }),

      setActiveProduct: (product) => set((state) => {
        if (!product) return { activeProduct: null };
        
        const filtered = state.recentlyViewed.filter(p => p.id !== product.id);
        return { 
          activeProduct: product, 
          view: 'product',
          recentlyViewed: [product, ...filtered].slice(0, 4)
        };
      }),

      setSelectedCategory: (category) => set({ selectedCategory: category }),

      setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
      setIsWishlistOpen: (isOpen) => set({ isWishlistOpen: isOpen }),

      addToCart: (product, size) => set((state) => {
        const existing = state.cart.find(item => item.id === product.id && item.selectedSize === size);
        if (existing) {
          return {
            cart: state.cart.map(item => 
              item.id === product.id && item.selectedSize === size 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
          };
        }
        return { 
          cart: [...state.cart, { ...product, quantity: 1, selectedSize: size, cartId: `${product.id}-${size}` }] 
        };
      }),

      removeFromCart: (cartId) => set((state) => ({
        cart: state.cart.filter(item => item.cartId !== cartId)
      })),

      updateQuantity: (cartId, delta) => set((state) => ({
        cart: state.cart.map(item => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : item;
          }
          return item;
        })
      })),

      clearCart: () => set({ cart: [] }),

      toggleWishlist: (id) => set((state) => ({
        wishlist: state.wishlist.includes(id) 
          ? state.wishlist.filter(item => item !== id) 
          : [...state.wishlist, id]
      })),
    }),
    {
      name: 'lhomme-user-storage-v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        cart: state.cart, 
        wishlist: state.wishlist, 
        recentlyViewed: state.recentlyViewed 
      }),
    }
  )
);
