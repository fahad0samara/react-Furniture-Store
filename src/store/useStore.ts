import { create } from 'zustand';
import { CartItem, Product, ConsultationSlot } from '../types';

interface StoreState {
  cart: CartItem[];
  consultationSlots: ConsultationSlot[];
  selectedSlot: ConsultationSlot | null;
  selectedProduct: Product | null;
  isCartOpen: boolean;
  isConsultationModalOpen: boolean;
  isProductDetailOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  setSelectedSlot: (slot: ConsultationSlot | null) => void;
  setSelectedProduct: (product: Product | null) => void;
  toggleCart: () => void;
  toggleConsultationModal: () => void;
  toggleProductDetail: () => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  consultationSlots: [
    { id: 1, date: '2024-03-20', time: '10:00', available: true },
    { id: 2, date: '2024-03-20', time: '14:00', available: true },
    { id: 3, date: '2024-03-21', time: '11:00', available: true },
    { id: 4, date: '2024-03-21', time: '15:00', available: true },
  ],
  selectedSlot: null,
  selectedProduct: null,
  isCartOpen: false,
  isConsultationModalOpen: false,
  isProductDetailOpen: false,

  addToCart: (product: Product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity >= 10) {
          return state;
        }
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (productId: number) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  updateQuantity: (productId: number, quantity: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      ),
    })),

  setSelectedSlot: (slot: ConsultationSlot | null) =>
    set({ selectedSlot: slot }),

  setSelectedProduct: (product: Product | null) =>
    set({ selectedProduct: product, isProductDetailOpen: !!product }),

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  toggleConsultationModal: () =>
    set((state) => ({
      isConsultationModalOpen: !state.isConsultationModalOpen,
    })),

  toggleProductDetail: () =>
    set((state) => ({
      isProductDetailOpen: !state.isProductDetailOpen,
      selectedProduct: state.isProductDetailOpen ? null : state.selectedProduct,
    })),

  clearCart: () => set({ cart: [] }),
}));