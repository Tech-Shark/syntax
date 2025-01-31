import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import cvDataReducer from "./cvDataSlice";
import pricingReducer from "./pricingSlice";
import promotionReducer from './promotionSlice';

export const store = configureStore({
  reducer: {
    cvData: cvDataReducer,
    pricing: pricingReducer,
    promotion: promotionReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
