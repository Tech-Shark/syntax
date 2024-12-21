import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import Home from "./pages/Home/Home";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import UploadCv from "./pages/UploadCV/UploadCv";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import Achievements from "./pages/Achievements/Achievements";
import Portfolio from "./pages/Portfolio/Portfolio";
import SavedInfo from "./pages/SavedInfo/SavedInfo";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

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
    element: <WorkExperience />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/saved_info",
    element: <SavedInfo />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <></>,
  },
]);
