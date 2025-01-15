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
import Template1 from './components/cvTemplates/Template1';
import Template2 from './components/cvTemplates/Template2';
import Template3 from './components/cvTemplates/Template3';
import Template4 from './components/cvTemplates/Template4';
import Template5 from './components/cvTemplates/Template5';
import Template6 from './components/cvTemplates/Template6';
import Template7 from './components/cvTemplates/Template7';
import Template8 from './components/cvTemplates/Template8';
import Template9 from './components/cvTemplates/Template9';
import Template10 from './components/cvTemplates/Template10';
import Template11 from './components/cvTemplates/Template11';
import Template12 from './components/cvTemplates/Template12';
import Template13 from './components/cvTemplates/Template13';
import Template14 from './components/cvTemplates/Template14';
import Template15 from './components/cvTemplates/Template15';
import Template16 from './components/cvTemplates/Template16';
import Template17 from './components/cvTemplates/Template17';
import Template18 from './components/cvTemplates/Template18';
import Template19 from './components/cvTemplates/Template19';
import Template20 from './components/cvTemplates/Template20';
import Template21 from './components/cvTemplates/Template21';

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

  //=======CV Templates, Just for views. To be deleted after proper integration===========//
  {
    path: "/temp1",
    element: <Template1 />
  },
  {
    path: "/temp2",
    element: <Template2 />
  },
  {
    path: "/temp3",
    element: <Template3 />
  },
  {
    path: "/temp4",
    element: <Template4 />
  },
  {
    path: "/temp5",
    element: <Template5 />
  },
  {
    path: "/temp6",
    element: <Template6 />
  },
  {
    path: "/temp7",
    element: <Template7 />
  },

  {
    path: "/temp8",
    element: <Template8 />
  },
  {
    path: "/temp9",
    element: <Template9 />
  },
  {
    path: "/temp10",
    element: <Template10 />
  },
  {
    path: "/temp11",
    element: <Template11 />
  },
  {
    path: "/temp12",
    element: <Template12 />
  },
  {
    path: "/temp13",
    element: <Template13 />
  },
  {
    path: "/temp14",
    element: <Template14 />
  },
  {
    path: "/temp15",
    element: <Template15 />
  },
  {
    path: "/temp16",
    element: <Template16 />
  },
  {
    path: "/temp17",
    element: <Template17 />
  },
  {
    path: "/temp18",
    element: <Template18 />
  },
  {
    path: "/temp19",
    element: <Template19 />
  },
  {
    path: "/temp20",
    element: <Template20 />
  },
  {
    path: "/temp21",
    element: <Template21 />
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
