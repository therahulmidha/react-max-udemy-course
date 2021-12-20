import { createSlice } from "@reduxjs/toolkit";

const initalCartItems = {
  items: [],
  total: 0,
  totalItems: 0,
  changed: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initalCartItems,
  reducers: {
    replaceCart(state, action) {
      state.totalItems = action.payload.totalItems;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        action.payload.qty = 1;
        action.payload.total = action.payload.price;
        state.items.push(action.payload);
      } else {
        existingItem.qty++;
        existingItem.total += existingItem.price;
      }
      state.totalItems++;
      state.changed = true;
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.qty > 1) {
        existingItem.qty--;
        existingItem.total -= existingItem.price;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
      state.totalItems--;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
