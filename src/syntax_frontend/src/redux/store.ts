import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

const stores = combineReducers({
  user: userSlice,
});

export const store = configureStore({
  reducer: stores,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
