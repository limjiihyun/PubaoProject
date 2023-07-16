import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: '', count: 0 },
  ],
  reducers: {
    addCount: (state, action) => {
      const number = state.findIndex((item) => item.id === action.payload);
      state[number].count++;
    },
    downCount: (state, action) => {
      const number = state.findIndex((item) => item.id === action.payload);
      state[number].count--;
    },
    deleteGoods: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    addItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addCount, downCount, deleteGoods, addItem } = cartSlice.actions;

export default cartSlice.reducer;
