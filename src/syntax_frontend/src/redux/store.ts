import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
// import userSlice from "./userSlice";
import cvDataReducer from "./cvDataSlice";

export const store = configureStore({
  reducer: {
    // user: userSlice,
    cvData: cvDataReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
