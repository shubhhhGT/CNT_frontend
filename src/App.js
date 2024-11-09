import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import About from "./pages/About";
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

        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
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
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.ADMIN && (
            <>
              <Route path="dashboard/my-profile" element={<MyProfile />} />
              <Route path="dashboard/settings" element={<Settings />} />

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
