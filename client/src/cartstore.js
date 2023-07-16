import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [{ id: 0, name: "", count: 0 }],
  // initialState: [
  //   { id: "", name: "", count: 0 },
  //  { id: '', name: "Grey Yordan", count: 1 },
  // ],
  reducers: {
    addCount(state, action) {
      let number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count++;
    },
    downCount(state, action) {
      let number = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[number].count--;
    },
    deleteGoods(state, action) {
      state.pop(action.payload);
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addCount, downCount, deleteGoods, addItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
