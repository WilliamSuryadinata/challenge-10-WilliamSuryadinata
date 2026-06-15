// src/store/useCartStore.ts
import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
  restaurant: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  decreaseItem: (id: string) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  // Fungsi menambah pesanan (Tombol Add / Plus)
  addItem: (newItem) => {
    set((state) => {
      const existing = state.items.find((i) => i.id === newItem.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === newItem.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...newItem, qty: 1 }] };
    });
  },

  // Fungsi mengurangi pesanan (Tombol Minus)
  decreaseItem: (id) => {
    set((state) => {
      const existing = state.items.find((i) => i.id === id);
      if (existing && existing.qty > 1) {
        return {
          items: state.items.map((i) =>
            i.id === id ? { ...i, qty: i.qty - 1 } : i
          ),
        };
      }
      // Jika qty menjadi 0, hapus dari keranjang
      return { items: state.items.filter((i) => i.id !== id) };
    });
  },

  getTotalItems: () => get().items.reduce((total, item) => total + item.qty, 0),
  getTotalPrice: () =>
    get().items.reduce((total, item) => total + item.price * item.qty, 0),
  clearCart: () => set({ items: [] }),
}));
