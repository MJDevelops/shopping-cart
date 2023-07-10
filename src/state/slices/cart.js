import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addToCart: (state, action) => {
      // check if item is already in cart
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        // item is in cart, so increment the quantity
        item.quantity += 1;
        item.totalPrice += item.price;
      } else {
        // item is not in cart, so add it to the cart
        state.items.push({
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      }
      state.totalQuantity += 1;
      item
        ? (state.totalPrice += item.price)
        : (state.totalPrice += action.payload.price);
    },
    removeFromCartWithId: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        item.quantity -= 1;
      }
      item.totalPrice -= item.price;
      state.totalPrice -= item.price;
    },
  },
});

export default cartSlice;
