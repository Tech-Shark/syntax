import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Experience {
  id: number;
  jobTitle: string;
  companyName: string;
  duration: string;
  responsibilities: string;
}

interface TechnicalSkills {
  skillName: string;
}

interface SoftSkills {
  skillName: string;
}

interface IndustrySkiils {
  skillName: string;
}

interface AdditionalSkills {
  skillName: string;
}

export interface Skills {
  technicalSkill: TechnicalSkills[];
  softSkill: SoftSkills[];
  industrySkill: IndustrySkiils[];
  additionalSkill: AdditionalSkills[];
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
  skills: Skills;
  education?: Education[];
  achievements?: Achievements;
  portfolio: PortfolioDetails;
}

export interface Education {
  id: number;
  degreeType: string;
  fieldStudy: string;
  universityName: string;
  location: string;
  startDate: string;
  endDate: string;
  degreeClass?: string;
}


const persistedState = localStorage.getItem("cvData")
  ? JSON.parse(localStorage.getItem("cvData")!)
  : {
      personalInformation: {},
      workExperience: [],
      skills: {
        technicalSkill: [],
        softSkill: [],
        industrySkill: [],
        additionalSkill: [],
      },
      education: [],
      achievements: {
        award: [],
        certification: [],
        academicHonor: [],
        milestone: [],
      },
      portfolio: {
        links: "",
        description: "",
        tech: "",
        role: "",
        impact: "",
        duration: "",
      },
    };

const initialState: CvDataState = persistedState;

interface Achievements {
  award: string[];
  certification: string[];
  academicHonor: string[];
  milestone: string[];
}

interface PortfolioDetails {
  links: string;
  description: string;
  tech: string;
  role: string;
  impact: string;
  duration: string;
}

const cvDataSlice = createSlice({
  name: "cvData",
  initialState,
  reducers: {
    setPersonalInformation: (
      state,
      action: PayloadAction<CvDataState["personalInformation"]>
    ) => {
      state.personalInformation = { ...state.personalInformation, ...action.payload };
      const cvData = state;
      localStorage.setItem('cvData', JSON.stringify(cvData))
    },
    updateField: (
      state,
      action: PayloadAction<{ section: string; key: string; value: string }>
    ) => {
      (state[action.payload.section as keyof CvDataState] as any)[action.payload.key] = action.payload.value;
      const cvData = state;
      localStorage.setItem('cvData', JSON.stringify(cvData))
    },
    setWorkExperience: (state, action: PayloadAction<Experience[]>) => {
      state.workExperience = action.payload;
      const cvData = state;
      localStorage.setItem('cvData', JSON.stringify(cvData))
    },
    addWorkExperience: (state, action: PayloadAction<Experience>) => {
      state.workExperience.push(action.payload);
      const cvData = state;
      localStorage.setItem('cvData', JSON.stringify(cvData))
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
      const cvData = state;
      localStorage.setItem('cvData', JSON.stringify(cvData))
    },
    updateSkills: (
      state,
      action: PayloadAction<{ category: keyof Skills; updatedSkills: (TechnicalSkills | SoftSkills | IndustrySkiils | AdditionalSkills)[] }>
    ) => {
      const { category, updatedSkills } = action.payload;
      state.skills[category] = updatedSkills;
      const cvData = state;
      localStorage.setItem('cvData', JSON.stringify(cvData))
    },
    addEducation: (state, action: PayloadAction<Education[] | any>) => {
      state.education = action.payload;
      const cvData = state;
      localStorage.setItem('cvData', JSON.stringify(cvData))
    },
    updateAchievement: (state, action: PayloadAction<Achievements[] | any>) => {
      state.achievements = action.payload;
      const cvData = state;
      localStorage.setItem('cvData', JSON.stringify(cvData))
    },
    // updateEducation: (state, action: PayloadAction<{ index: number; updatedEducation: Education }>) => {
    //   const { index, updatedEducation } = action.payload;
    //   if (index >= 0 && index < state.education.length) {
    //     state.education[index] = updatedEducation;
    //   }
    // },
    // removeEducation: (state, action: PayloadAction<number>) => {
    //   state.education.splice(action.payload, 1);
    // },
    updatePortfolio: (state, action: PayloadAction<PortfolioDetails>) => {
      state.portfolio = action.payload;
      const cvData = state;
      localStorage.setItem('cvData', JSON.stringify(cvData))
    },
  },
});

export const {
  setPersonalInformation,
  updateField,
  setWorkExperience,
  addWorkExperience,
  updateWorkExperience,
  updateSkills,
  addEducation,
  // updateEducation,
  // removeEducation,
  updateAchievement,
  updatePortfolio
} = cvDataSlice.actions;

export default cvDataSlice.reducer;
