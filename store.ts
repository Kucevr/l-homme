import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, PageView } from './data';

interface AppState {
  view: PageView;
  activeProduct: Product | null;
  cart: CartItem[];
  wishlist: number[];
  recentlyViewed: Product[];
  selectedCategory: string | undefined;
  
  // Actions
  setView: (view: PageView) => void;
  setActiveProduct: (product: Product | null) => void;
  setSelectedCategory: (category: string | undefined) => void;
  
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  toggleWishlist: (id: number) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      view: 'home',
      activeProduct: null,
      cart: [],
      wishlist: [],
      recentlyViewed: [],
      selectedCategory: undefined,

      setView: (view) => set((state) => {
        if (view !== 'collections') {
          return { view, selectedCategory: undefined };
        }
        return { view };
      }),

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

      toggleWishlist: (id) => set((state) => ({
        wishlist: state.wishlist.includes(id) 
          ? state.wishlist.filter(item => item !== id) 
          : [...state.wishlist, id]
      })),
    }),
    {
      name: 'lhomme-storage',
      partialize: (state) => ({ cart: state.cart, wishlist: state.wishlist, recentlyViewed: state.recentlyViewed }),
    }
  )
);
