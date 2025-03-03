import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import About from "./pages/About";
// import About from "./components/core/SampleAbout/About";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Settings/Settings";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useSelector } from "react-redux";
import MyCourses from "./components/core/Dashboard/MyCourses";
import AddCourse from "./components/core/Dashboard/AddCourse";
import EditCourse from "./components/core/Dashboard/EditCourse/EditCourse";
import InstructorDashboard from "./components/core/Dashboard/InstructorDashboard/InstructorDashboard";
import Category from "./components/core/Dashboard/Category";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import Cart from "./components/core/Dashboard/Cart/Cart";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import TermsAndConditions from "./components/core/Footer/TermsAndConditions";
import PrivacyPolicy from "./components/core/Footer/PrivacyPolicy";

function App() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Routes accessible for both logged-in and not-logged-in users */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />

        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />

        <Route
          path="update-password"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />

        <Route
          path="about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }
        />

        <Route
          path="contact"
          element={
            <OpenRoute>
              <Contact />
            </OpenRoute>
          }
        />

        <Route
          path="terms-and-conditions"
          element={
            <OpenRoute>
              <TermsAndConditions />
            </OpenRoute>
          }
        />

        <Route
          path="privacy-policy"
          element={
            <OpenRoute>
              <PrivacyPolicy />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/settings" element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.USER && (
            <>
              <Route path="dashboard/cart" element={<Cart />} />
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
            </>
          )}
          {user?.accountType === ACCOUNT_TYPE.ADMIN && (
            <>
              <Route path="dashboard/my-courses" element={<MyCourses />} />

              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/categories" element={<Category />} />

              <Route
                path="dashboard/instructor"
                element={<InstructorDashboard />}
              />

              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
        </Route>

        {/* Error route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
