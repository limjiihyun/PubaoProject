import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
