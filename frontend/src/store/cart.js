import { create } from 'zustand';

export const useCartStore = create((set) => ({
  items: [],
  addItem: (product) => set((state) => {
    const existing = state.items.find((item) => item.product.id === product.id);
    if (existing) {
      return { items: state.items.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) };
    }
    return { items: [...state.items, { product, quantity: 1 }] };
  }),
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.product.id !== id) })),
  updateQuantity: (id, quantity) => set((state) => {
    if (quantity <= 0) {
      return { items: state.items.filter((item) => item.product.id !== id) };
    }
    return { items: state.items.map((item) => item.product.id === id ? { ...item, quantity } : item) };
  }),
  clear: () => set({ items: [] }),
}));
