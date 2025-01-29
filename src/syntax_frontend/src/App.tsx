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
import Skills from "./Pages/WelcomeScreen/skills";
import Education from "./Pages/WelcomeScreen/education";
import Achievement from "./Pages/WelcomeScreen/achievement";
import Portfolio from "./Pages/WelcomeScreen/portfolio";
import SavedInfo from "./Pages/WelcomeScreen/savedInfo";
import JobDescription from "./Pages/WelcomeScreen/jobDescription";
import CvTemplate from "./Pages/WelcomeScreen/cvTemplates";
import SavedTemplates from "./Pages/WelcomeScreen/saved-templates";
import CreativeResume from "./Pages/WelcomeScreen/creativeResume";

// Auth pages
import AuthWelcome from "./Pages/Auth/authWelcome";
import Signup from "./Pages/Auth/signup";
import Signin from "./Pages/Auth/signin";
import SigninInternetIdentity from "./Pages/Auth/signinInternetIdentity";

// Dashboard pages
import UserDashboard from "./Pages/Dashboard/UserDashboard/userDashboard";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard/DashboardAdmin";
import PricingManagement from "./Pages/Dashboard/AdminDashboard/pricingManagement";
import Pricing from "./Pages/Dashboard/UserDashboard/Pricing/pricing";
import CreatePromotion from "./Pages/Dashboard/AdminDashboard/promoManagement/createPromo";
import ManagePromotion from "./Pages/Dashboard/AdminDashboard/promoManagement/managePromo";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <AuthProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/welcome" element={<WelcomeScreen />} />
          <Route path="/upload-cv" element={<UploadCv />} />
          <Route path="/personal-information" element={<PersonalInformation />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/achievements" element={<Achievement />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/saved-info" element={<SavedInfo />} />
          <Route path="/job_description" element={<JobDescription />} />
          <Route path="/cv-templates" element={<CvTemplate />} />
          <Route path="/saved-templates" element={<SavedTemplates />} />
          <Route path="/creative-resume" element={<CreativeResume />} />

          {/* auth pages */}
          <Route path="/auth-welcome" element={<AuthWelcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signin-internet" element={<SigninInternetIdentity />} />

          {/* Dashboard */}
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/pricing-management" element={<PricingManagement />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/create-promotion" element={<CreatePromotion />} />
          <Route path="/manage-promotion" element={<ManagePromotion />} />
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
