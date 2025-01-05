import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "./redux/store";
// homepage
import Homepage from "./Pages/Homepage/homepage";
// setup pages
import WelcomeScreen from "./Pages/WelcomeScreen/WelcomeScreen";
import UploadCv from "./Pages/WelcomeScreen/Uploadcv";
import PersonalInformation from "./Pages/WelcomeScreen/personalInformation";
import WorkExperience from "./Pages/WelcomeScreen/workExperience";
import Education from "./Pages/WelcomeScreen/education";
import Portfolio from "./Pages/WelcomeScreen/portfolio";
import SavedInfo from "./Pages/WelcomeScreen/savedInfo";
import JobDescription from "./Pages/WelcomeScreen/jobDescription";

// Auth pages
import AuthWelcome from "./Pages/Auth/authWelcome";
import Signup from "./Pages/Auth/signup";
import Signin from "./Pages/Auth/signin";
import SigninInternetIdentity from "./Pages/Auth/signinInternetIdentity";

// Dashboard pages
import UserDashboard from "./Pages/Dashboard/UserDashboard/userDashboard";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/upload-cv" element={<UploadCv />} />
          <Route path="/personal-information" element={<PersonalInformation />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/saved-info" element={<SavedInfo />} />
          <Route path="/job_description" element={<JobDescription />} />

          {/* auth pages */}
          <Route path="/auth-welcome" element={<AuthWelcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signin-internet" element={<SigninInternetIdentity />} />

          {/* Dashboard */}
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
