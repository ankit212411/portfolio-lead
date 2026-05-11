"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type PropsWithChildren
} from "react";

import type { CartItem, Product } from "@/types";

type CartState = {
  isOpen: boolean;
  items: CartItem[];
  isHydrated: boolean;
};

type CartContextValue = CartState & {
  addItem: (product: Product) => void;
  removeItem: (slug: string) => void;
  decrementItem: (slug: string) => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  subtotal: number;
  itemCount: number;
};

type CartAction =
  | { type: "hydrate"; payload: CartItem[] }
  | { type: "add"; payload: Product }
  | { type: "remove"; payload: string }
  | { type: "decrement"; payload: string }
  | { type: "open" }
  | { type: "close" }
  | { type: "toggle" };

const STORAGE_KEY = "frontend-lead-demo-cart";

const CartContext = createContext<CartContextValue | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return {
        ...state,
        items: action.payload,
        isHydrated: true
      };
    case "add": {
      const existing = state.items.find((item) => item.product.slug === action.payload.slug);

      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((item) =>
            item.product.slug === action.payload.slug
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        isOpen: true,
        items: [...state.items, { product: action.payload, quantity: 1 }]
      };
    }
    case "remove":
      return {
        ...state,
        items: state.items.filter((item) => item.product.slug !== action.payload)
      };
    case "decrement":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.product.slug === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      };
    case "open":
      return { ...state, isOpen: true };
    case "close":
      return { ...state, isOpen: false };
    case "toggle":
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

const initialState: CartState = {
  isOpen: false,
  items: [],
  isHydrated: false
};

export function CartProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);

      if (!stored) {
        dispatch({ type: "hydrate", payload: [] });
        return;
      }

      const items = JSON.parse(stored) as CartItem[];
      dispatch({ type: "hydrate", payload: items });
    } catch {
      dispatch({ type: "hydrate", payload: [] });
    }
  }, []);

  useEffect(() => {
    if (!state.isHydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.isHydrated, state.items]);

  const value = useMemo<CartContextValue>(() => {
    const subtotal = state.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

    return {
      ...state,
      subtotal,
      itemCount,
      addItem: (product) => dispatch({ type: "add", payload: product }),
      removeItem: (slug) => dispatch({ type: "remove", payload: slug }),
      decrementItem: (slug) => dispatch({ type: "decrement", payload: slug }),
      openCart: () => dispatch({ type: "open" }),
      closeCart: () => dispatch({ type: "close" }),
      toggleCart: () => dispatch({ type: "toggle" })
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
