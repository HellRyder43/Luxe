import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartStore, Product, ProductVariant } from "@/types";

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      isLoading: false,

      addItem: (product: Product, variant?: ProductVariant) => {
        set({ isLoading: true });

        const items = get().items;
        const cartItemId = `${product.id}-${variant?.size || "default"}-${variant?.color || "default"}`;

        // Check if item already exists in cart
        const existingItemIndex = items.findIndex((item) => item.id === cartItemId);

        if (existingItemIndex > -1) {
          // Update quantity if item exists
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += 1;

          set({
            items: updatedItems,
            isOpen: true,
            isLoading: false,
          });
        } else {
          // Add new item to cart
          const newItem = {
            id: cartItemId,
            productId: product.id,
            name: product.name,
            price: product.isSale && product.compareAtPrice ? product.price : product.price,
            quantity: 1,
            size: variant?.size,
            color: variant?.color,
            image: product.images[0]?.url || "",
          };

          set({
            items: [...items, newItem],
            isOpen: true,
            isLoading: false,
          });
        }
      },

      removeItem: (itemId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [], isOpen: false });
      },

      getTotalPrice: () => {
        const items = get().items;
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getTotalItems: () => {
        const items = get().items;
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },
    }),
    {
      name: "luxemys-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
