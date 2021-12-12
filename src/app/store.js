import { configureStore } from "@reduxjs/toolkit";
import  filterReducer  from "../features/FilterSlice";
export const store = configureStore({
  reducer: {
       Filter:filterReducer,
  }
});
