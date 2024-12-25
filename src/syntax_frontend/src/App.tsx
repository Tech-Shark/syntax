import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";

import Achievements from "./pages/Achievements/Achievements";
import Dashboard from "./pages/Dashboard/Dashboard";
import Education from "./pages/Education/Education";
import Home from "./pages/Home/Home";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import Portfolio from "./pages/Portfolio/Portfolio";
import SavedInfo from "./pages/SavedInfo/SavedInfo";
import Skills from "./pages/Skills/Skills";
import UploadCv from "./pages/UploadCV/UploadCv";
import WelcomeScreen from "./pages/WelcomeScreen/WelcomeScreen";
import WorkExperience from "./pages/WorkExperience/WorkExperience";

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
