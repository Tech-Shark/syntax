import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CvDataState {
  personalInformation: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    professionalTitle?: string;
    nationality?: string;
  };
  [key: string]: any;
}

const initialState: CvDataState = {
  personalInformation: {},
};

const cvDataSlice = createSlice({
  name: "cvData",
  initialState,
  reducers: {
    setPersonalInformation: (
      state,
      action: PayloadAction<CvDataState["personalInformation"]>
    ) => {
      state.personalInformation = { ...state.personalInformation, ...action.payload };
    },
    updateField: (
      state,
      action: PayloadAction<{ section: string; key: string; value: string }>
    ) => {
      state[action.payload.section][action.payload.key] = action.payload.value;
    },
  },
});

export const { setPersonalInformation, updateField } = cvDataSlice.actions;

export default cvDataSlice.reducer;
