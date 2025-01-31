import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Experience {
  id: number;
  jobTitle: string;
  companyName: string;
  duration: string;
  responsibilities: string;
}

interface EducationRecord {
  id: number;
  degreeType: string;
  fieldStudy: string;
  universityName: string;
  location: string;
  startDate: string;
  endDate: string;
  degreeClass: string;
}

interface AchievementsState {
  awards: string[];
  certifications: string[];
  academicHonors: string[];
  milestones: string[];
}

interface Project {
  id: number;
  link: string;
  description: string;
  skills: string;
  role: string;
  outcome: string;
  duration: string;
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
  skills: {
    technical: string[];
    soft: string[];
    industry: string[];
    additional: string[];
  };
  education: EducationRecord[];
  achievements: AchievementsState;
  portfolio: Project[];
}

const initialState: CvDataState = {
  personalInformation: {},
  workExperience: [],
  skills: {
    technical: [],
    soft: [],
    industry: [],
    additional: [],
  },
  education: [],
  achievements: {
    awards: [],
    certifications: [],
    academicHonors: [],
    milestones: [],
  },
  portfolio: [],
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
    // New skill-related reducers
    addSkill: (
      state,
      action: PayloadAction<{ category: keyof CvDataState["skills"]; skill: string }>
    ) => {
      const { category, skill } = action.payload;
      state.skills[category].push(skill);
    },
    removeSkill: (
      state,
      action: PayloadAction<{ category: keyof CvDataState["skills"]; index: number }>
    ) => {
      const { category, index } = action.payload;
      state.skills[category].splice(index, 1);
    },
    setSkills: (
      state,
      action: PayloadAction<{ category: keyof CvDataState["skills"]; skills: string[] }>
    ) => {
      const { category, skills } = action.payload;
      state.skills[category] = skills;
    },
    // Education-related reducers
    addEducation: (state, action: PayloadAction<EducationRecord>) => {
      state.education.push(action.payload);
    },
    updateEducation: (state, action: PayloadAction<{ id: number; updatedEducation: Partial<EducationRecord> }>) => {
      const index = state.education.findIndex(edu => edu.id === action.payload.id);
      if (index !== -1) {
        state.education[index] = { ...state.education[index], ...action.payload.updatedEducation };
      }
    },
    removeEducation: (state, action: PayloadAction<number>) => {
      state.education = state.education.filter(edu => edu.id !== action.payload);
    },
    setEducation: (state, action: PayloadAction<EducationRecord[]>) => {
      state.education = action.payload;
    },
    addAchievement: (state, action: PayloadAction<{ category: keyof AchievementsState; achievement: string }>) => {
    const { category, achievement } = action.payload;
    state.achievements[category].push(achievement);
  },
  removeAchievement: (state, action: PayloadAction<{ category: keyof AchievementsState; index: number }>) => {
    const { category, index } = action.payload;
    state.achievements[category].splice(index, 1);
    },
  addPortfolio: (state, action: PayloadAction<Project>) => {
      state.portfolio.push(action.payload);
    },
    removePortfolio: (state, action: PayloadAction<number>) => {
      state.portfolio = state.portfolio.filter(project => project.id !== action.payload);
    },
     updatePortfolio: (state, action: PayloadAction<Project>) => {
      const index = state.portfolio.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.portfolio[index] = action.payload;
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
  addSkill,
  removeSkill,
  setSkills,
  addEducation,
  updateEducation,
  removeEducation,
  setEducation,
  addAchievement,
  removeAchievement,
  addPortfolio,
  removePortfolio,
  updatePortfolio,
} = cvDataSlice.actions;

export default cvDataSlice.reducer;