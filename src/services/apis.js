const BASE_URL = process.env.REACT_APP_BASE_URL;

// Authentication endpoints
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendOtp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  GETUSER_API: BASE_URL + "/auth/get-user-from-token",
  SENDPASSRESETEMAIL_API: BASE_URL + "/auth/send-confirmation-email",
};

// Contact Endpoint
export const contactUsEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
};

export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
};

// Settings Endpoints
export const settingsEndpoints = {
  UPDATE_PROFILE_PICTURE_API: BASE_URL + "/profile/updateProfiepicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
};

// Profile Endpoints
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
};

// Course Endpoints
export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/course/showAllCourses",
  COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
  EDIT_COURSE_API: BASE_URL + "/course/editCourse",
  COURSE_CATEGORIES_API: BASE_URL + "/course/showAllCategories",
  CREATE_COURSE_API: BASE_URL + "/course/createCourse",
  CREATE_SECTION_API: BASE_URL + "/course/addSection",
  CREATE_SUBSECTION_API: BASE_URL + "/course/addSubSection",
  UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",
  DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
  DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",
  DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    BASE_URL + "/course/getFullCourseDetails",
  GET_COURSE_BY_TYPE: BASE_URL + "/course/getCoursesByType/:courseType",
  GET_COURSE_BY_STRATERGY: BASE_URL + "/course/getCoursesByStratergy",
  GET_COURSES_BY_TAGS: BASE_URL + "/course/getCoursesByTags",
  GET_COURSES_BY_CATEGORIES: BASE_URL + "/course/get-courses-by-categories",
  GET_STATS_DATA: BASE_URL + "/course/getStatsData",
  UPDATE_STATS_DATA: BASE_URL + "/course/updateStats",
  GET_ALL_CERTIFICATES: BASE_URL + "/course/getAllCertificates",
};

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/course/getReviews",
};

// Category Endpoints
export const categoryEndpoints = {
  ADD_CATEGORY_API: BASE_URL + "/course/createCategory",
};

// Catalog Endpoint
export const catalogEndpoint = {
  CATALOG_DATA_API: BASE_URL + "/course/getCategoryPageDetails",
};

// Student Endpoints
export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "/payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
};

// cart endpoints
export const cartEndpoints = {
  ADD_TO_CART: BASE_URL + "/course/addToCart",
  REMOVE_FROM_CART: BASE_URL + "/course/removeFromCart",
  GET_ENTIRE_CART: BASE_URL + "/course/getEntireCart",
  RESET_CART: BASE_URL + "/course/resetCart",
};

// upload endpoints
export const uploadEndpoints = {
  INITIATE_UPLOAD: BASE_URL + "/upload/initiate-upload",
  GENERATE_SIGNED_URL: BASE_URL + "/upload/generate-urls",
  COMPLETE_UPLOAD: BASE_URL + "/upload/complete-upload",
};

// QnA endpoints
export const qnaEndpoints = {
  GET_ALL_QUESTIONS: BASE_URL + "/qna/getAllQuestions",
  ASK_QUESTION: BASE_URL + "/qna/ask",
  ANSWER_QUESTION: BASE_URL + "/qna/answer",
};

// Testimonial endpoint
export const testimonialEndpoints = {
  GET_ALL_TESTIMONIALS: BASE_URL + "/testimonial/getAllTestimonials",
};

// Blog endpoints
export const blogEndpoints = {
  GET_ALL_BLOGS: BASE_URL + "/blog/all",
  DELETE_BLOG: BASE_URL + "/blog/delete",
  UPDATE_BLOG: BASE_URL + "/blog/update",
  CREATE_BLOG: BASE_URL + "/blog/create",
  GET_BLOG_BY_ID: BASE_URL + "/blog",
};

// Event endpoints
export const eventEndpoints = {
  GET_ALL_EVENTS: BASE_URL + "/event/all",
  DELETE_EVENT: BASE_URL + "/event/delete",
  UPDATE_EVENT: BASE_URL + "/event/update",
  CREATE_EVENT: BASE_URL + "/event/create",
  GET_EVENT_BY_ID: BASE_URL + "/event",
};

// Newsletter endpoints
export const newsletterEndpoints = {
  SUBSCRIBE_TO_NEWSLETTER: BASE_URL + "/newsletter/subscribe",
  GET_ALL_SUBCRIBERS: BASE_URL + "/newsletter/subscribers",
};

// Coupon endpoints
export const couponEndpoints = {
  GET_ALL_COUPONS: BASE_URL + "/coupon/all",
  DELETE_COUPON: BASE_URL + "/coupon/delete",
  TOGGLE_COUPON_BANNER: BASE_URL + "/coupon/toggle-banner",
  CREATE_COUPON: BASE_URL + "/coupon/create",
  TOGGLE_COUPON_ACTIVE: BASE_URL + "/coupon/toggle-active",
  GET_BANNER_COUPONS: BASE_URL + "/coupon/banner",
  VALIDATE_COUPON: BASE_URL + "/coupon/validate",
};

// Invoice endpoints
export const invoiceEndpoints = {
  GET_ALL_INVOICES: BASE_URL + "/invoice/getAllInvoices",
};
