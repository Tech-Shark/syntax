import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Experience {
  id: number;
  jobTitle: string;
  companyName: string;
  duration: string;
  responsibilities: string;
}

interface CvDataState {
  personalInformation: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    professionalTitle?: string;
    nationality?: string;
  };
  workExperience: Experience[];
}

const initialState: CvDataState = {
  personalInformation: {},
  workExperience: [],
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
      (state[action.payload.section as keyof CvDataState] as any)[action.payload.key] = action.payload.value;
    },
    setWorkExperience: (state, action: PayloadAction<Experience[]>) => {
      state.workExperience = action.payload;
    },
    addWorkExperience: (state, action: PayloadAction<Experience>) => {
      state.workExperience.push(action.payload);
    },
    updateWorkExperience: (
      state,
      action: PayloadAction<{ id: number; updatedExperience: Partial<Experience> }>
    ) => {
      const { id, updatedExperience } = action.payload;
      const index = state.workExperience.findIndex((exp) => exp.id === id);
      if (index >= 0) {
        state.workExperience[index] = { ...state.workExperience[index], ...updatedExperience };
      }
    },
  },
});

export const {
  setPersonalInformation,
  updateField,
  setWorkExperience,
  addWorkExperience,
  updateWorkExperience,
} = cvDataSlice.actions;

export default cvDataSlice.reducer;
