import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Slices/CounterSlice";

export const anbar = configureStore({
  reducer: {
    reqemleOynamaq: CounterReducer,
  },
});
