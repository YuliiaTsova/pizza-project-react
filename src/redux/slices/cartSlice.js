import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalCount = state.items.reduce((sum, el) => el.count + sum, 0);

      state.totalPrice = state.items.reduce((sum, el) => el.price * el.count + sum, 0);
    },
    clearAll: (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
    clearItem: (state, action) => {
      state.items = state.items.filter((obj) => {
        if (
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
        ) {
          return false;
        } else {
          return true;
        }
      });
      state.totalCount = state.items.reduce((sum, el) => el.count + sum, 0);

      state.totalPrice = state.items.reduce((sum, el) => el.price * el.count + sum, 0);
    },
    minusItem: (state, action) => {
      const findItem = state.items.find(
        (obj) =>
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
      );

      if (findItem.count > 1) {
        findItem.count--;
      } else {
        state.items = state.items.filter((obj) => {
          if (
            obj.id === action.payload.id &&
            obj.type === action.payload.type &&
            obj.size === action.payload.size
          ) {
            return false;
          } else {
            return true;
          }
        });
      }

      state.totalCount = state.items.reduce((sum, el) => el.count + sum, 0);

      state.totalPrice = state.items.reduce((sum, el) => el.price * el.count + sum, 0);
    },
  },
});

export const { addItem, clearAll, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
