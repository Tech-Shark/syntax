import { createSlice } from '@reduxjs/toolkit';

const cvSlice = createSlice({
  name: 'cv',
  initialState: {
    cvLines: [],
    selectedFile: null,
  },
  reducers: {
    setCvContent: (state, action) => {
      state.cvLines = action.payload.cvLines;
      state.selectedFile = action.payload.selectedFile;
    },
    resetCvContent: (state) => {
      state.cvLines = [];
      state.selectedFile = null;
    },
  },
});

export const { setCvContent, resetCvContent } = cvSlice.actions;
export default cvSlice.reducer;
