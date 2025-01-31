// store/promotionSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Promotion } from '@/types/promotion';

interface PromotionState {
  promotions: Promotion[];
}

const initialState: PromotionState = {
  promotions: [],
};

const promotionSlice = createSlice({
  name: 'promotions',
  initialState,
  reducers: {
    addPromotion: (state, action: PayloadAction<Promotion>) => {
      state.promotions.push(action.payload);
    },
    updatePromotion: (state, action: PayloadAction<Promotion>) => {
      const index = state.promotions.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.promotions[index] = action.payload;
      }
    },
    togglePromotionStatus: (state, action: PayloadAction<string>) => {
      const index = state.promotions.findIndex(p => p.id === action.payload);
      if (index !== -1) {
        state.promotions[index].status = state.promotions[index].status === 'active' ? 'disabled' : 'active';
      }
    },
  },
});

export const { addPromotion, updatePromotion, togglePromotionStatus } = promotionSlice.actions;
export default promotionSlice.reducer;