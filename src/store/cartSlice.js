import { createSlice } from "@reduxjs/toolkit";

const CART_STORAGE_KEY = "cart";

const getStoredCart = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } else {
    return [];
  }
};

const setStoredCart = (cart) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getStoredCart(),
  reducers: {
    addToCart: (state, action) => {
      const { variantId, title, quantity, image, description, price } =
        action.payload;
      const existingProductIndex = state.findIndex(
        (item) => item.variantId === variantId
      );
      if (existingProductIndex !== -1) {
        state[existingProductIndex].quantity += quantity;
      } else {
        state.push({ variantId, title, quantity, image, description, price });
      }
      setStoredCart(state);
    },

    removeFromCart: (state, action) => {
      const variantId = action.payload;
      const existingProductIndex = state.findIndex(
        (item) => item.variantId === variantId
      );
      if (existingProductIndex !== -1) {
        state.splice(existingProductIndex, 1);
      }
      setStoredCart(state);
    },

    updateQuantity: (state, action) => {
      const { variantId, quantity } = action.payload;
      const existingProductIndex = state.findIndex(
        (item) => item.variantId === variantId
      );
      if (existingProductIndex !== -1) {
        state[existingProductIndex].quantity = quantity;
      }
      setStoredCart(state);
    },

    initializeCart: (state) => {
      const storedCart = getStoredCart();
      state.length = 0;
      state.push(...storedCart);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, initializeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
