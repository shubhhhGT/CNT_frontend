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
import VerifyEmail from "./pages/VerifyEmail";
import ScrollToTop from "./utils/ScrollToTop";
import QnAPage from "./components/core/Footer/QnA";
import TestimonialsPage from "./components/core/Footer/Testimonial";
import FaqPage from "./components/core/Footer/Faq";
import BlogDetails from "./components/core/Footer/Blogs/BlogDetails";
import AdminBlogs from "./components/core/Footer/Blogs/AdminBlogs";
import EditBlog from "./components/core/Footer/Blogs/EditBlog";
import AddBlog from "./components/core/Footer/Blogs/AddBlog";
import AllBlogs from "./components/core/Footer/Blogs/AllBlogs";
import ManageEvents from "./components/core/Footer/Events/ManageEvents";
import CreateEvent from "./components/core/Footer/Events/CreateEvent";
import EditEvent from "./components/core/Footer/Events/EditEvent";
import EventDetails from "./components/core/Footer/Events/EventDetails";
import AllEvents from "./components/core/Footer/Events/AllEvents";
import TopicCoursesPage from "./components/core/Footer/topics/TopicCoursesPage";
import NewsletterSignup from "./components/core/Footer/Newsletter/NewsletterSignup";
import NewsletterSubscribers from "./components/core/Footer/Newsletter/NewsletterSubscribers";
import CareerCoursesPage from "./components/core/Footer/topics/CareerCoursesPage";
import CouponManager from "./components/core/Dashboard/Coupon/CouponManager";
import AddCouponForm from "./components/core/Dashboard/Coupon/AddCouponForm";
import CouponBanner from "./common/CouponBanner";
import Plans from "./components/core/Footer/Plans/Plans";
import PlanCourses from "./components/core/Footer/Plans/PlanCourses";
import RefundPolicy from "./components/core/Footer/RefundPolicy";
import GrievancePolicy from "./components/core/Footer/GrievancePolicy";
import AllInvoices from "./components/core/Dashboard/AllInvoices";

function App() {
  const { user } = useSelector((state) => state.profile);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <CouponBanner />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Routes accessible for both logged-in and not-logged-in users */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="course/:catalogName" element={<Catalog />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="qna-sessions" element={<QnAPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="help-center" element={<FaqPage />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/forums" element={<AllBlogs />} />
        <Route path="/blogs/:blogId" element={<BlogDetails />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/topics" element={<TopicCoursesPage />} />
        <Route path="/newsletter" element={<NewsletterSignup />} />
        <Route path="/career" element={<CareerCoursesPage />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/plans/:id" element={<PlanCourses />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/grievance-policy" element={<GrievancePolicy />} />

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
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
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
              {/* Blogs */}
              <Route path="dashboard/blogs" element={<AdminBlogs />} />
              <Route path="dashboard/create-blog" element={<AddBlog />} />
              <Route
                path="dashboard/edit-blog/:blogId"
                element={<EditBlog />}
              />

              {/* Events */}
              <Route path="dashboard/events" element={<ManageEvents />} />
              <Route path="dashboard/create-event" element={<CreateEvent />} />
              <Route path="dashboard/edit-event/:id" element={<EditEvent />} />

              {/* Newsletter */}
              <Route
                path="dashboard/newsletter"
                element={<NewsletterSubscribers />}
              />

              {/* Coupons */}
              <Route path="dashboard/coupons" element={<CouponManager />} />
              <Route path="dashboard/add-coupon" element={<AddCouponForm />} />

              {/* Invoices */}
              <Route path="dashboard/invoices" element={<AllInvoices />} />

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
