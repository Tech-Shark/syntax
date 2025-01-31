import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PricingCard {
  currentPrice: number;
  defaultPrice: number;
  suffix: string;
  defaultSuffix: string;
}

interface PricingState {
  card1: PricingCard;
  card2: PricingCard;
  card3: PricingCard;
}

const initialState: PricingState = {
  card1: { currentPrice: 2000, defaultPrice: 2000, suffix: "Resume", defaultSuffix: "Resume" },
  card2: { currentPrice: 5000, defaultPrice: 5000, suffix: "Month", defaultSuffix: "Month" },
  card3: { currentPrice: 10000, defaultPrice: 10000, suffix: "Year", defaultSuffix: "Year" },
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    updatePrice: (
      state,
      action: PayloadAction<{ card: keyof PricingState; price: number }>
    ) => {
      const { card, price } = action.payload;
      state[card].currentPrice = price;
    },
    updateSuffix: (
      state,
      action: PayloadAction<{ card: keyof PricingState; suffix: string }>
    ) => {
      const { card, suffix } = action.payload;
      state[card].suffix = suffix;
    },
    revertPrices: (state) => {
      Object.keys(state).forEach((card) => {
        const cardKey = card as keyof PricingState;
        state[cardKey].currentPrice = state[cardKey].defaultPrice;
        state[cardKey].suffix = state[cardKey].defaultSuffix;
      });
    },
  },
});

export const { updatePrice, updateSuffix, revertPrices } = pricingSlice.actions;

export default pricingSlice.reducer;
