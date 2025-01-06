// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import UploadCv from './pages/UploadCV/UploadCv';
import PersonalInfo from './pages/PersonalInfo/PersonalInfo';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Skills from './pages/Skills/skills';
import Education from './pages/Education/Education';
import Achievements from './pages/Achievements/Achievements';
import Portfolio from './pages/Portfolio/Portfolio';
import SavedInfo from './pages/SavedInfo/SavedInfo';
import DashboardUser from './pages/Dashboard/DashboardUser';
import DashboardAdmin from './pages/Dashboard/DashboardAdmin';
import Template1 from './components/ResumeTemplates/Template1';
import Template2 from './components/ResumeTemplates/Template2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/welcome",
    element: <WelcomeScreen />,
  },
  {
    path: "/upload-cv",
    element: <UploadCv />,
  },
  {
    path: "/personal-info",
    element: <PersonalInfo />,
  },
  {
    path: "/work-experience",
    element: <WorkExperience />
  },
  {
    path: "/skills",
    element: <Skills />
  },
  {
    path: "/education",
    element: <Education />
  },
  {
    path: "/achievements",
    element: <Achievements />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/saved_info",
    element: <SavedInfo />
  },
  {
    path: "/user_dashboard",
    element: <DashboardUser />
  },
  {
    path: "/admin_dashboard",
    element: <DashboardAdmin />
  },
  {
    path: "/temp1",
    element: <Template1 />
  },
  {
    path: "/temp2",
    element: <Template2 />
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
