import toast from "react-hot-toast";
import { courseEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";

const {
  COURSE_DETAILS_API,
  COURSE_CATEGORIES_API,
  GET_ALL_COURSE_API,
  CREATE_COURSE_API,
  EDIT_COURSE_API,
  CREATE_SECTION_API,
  CREATE_SUBSECTION_API,
  UPDATE_SECTION_API,
  UPDATE_SUBSECTION_API,
  DELETE_SECTION_API,
  DELETE_SUBSECTION_API,
  GET_ALL_INSTRUCTOR_COURSES_API,
  DELETE_COURSE_API,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED,
  CREATE_RATING_API,
  LECTURE_COMPLETION_API,
  GET_COURSE_BY_TYPE,
  GET_COURSE_BY_STRATERGY,
  GET_COURSES_BY_TAGS,
  GET_COURSES_BY_CATEGORIES,
  GET_STATS_DATA,
  UPDATE_STATS_DATA,
  GET_ALL_CERTIFICATES,
} = courseEndpoints;

export const getAllCourses = async () => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_COURSE_API);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("GET_ALL_COURSE_API ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

export const fetchCourseDetails = async (courseId) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector("POST", COURSE_DETAILS_API, {
      courseId,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response.data;
  } catch (error) {
    console.log("COURSE_DETAILS_API API ERROR............", error);
    result = error.response.data;
  }
  toast.dismiss(toastId);
  return result;
};

export const fetchCourseCategories = async () => {
  let result = [];
  try {
    const response = await apiConnector("GET", COURSE_CATEGORIES_API);

    if (!response?.data?.success) {
      throw new Error("Could not fetch course categories");
    }
    result = response?.data?.allCategories;
  } catch (error) {
    console.log("COURSE_CATEGORY_API API ERROR............", error);
    toast.error(error.message);
  }
  return result;
};

// add the course details
export const addCourseDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Add Course Details");
    }
    toast.success("Course Details Added Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE COURSE API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

//   Edit course
export const editCourseDetails = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", EDIT_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Update Course Details");
    }
    toast.success("Course Details Updated Successfully");
    result = response?.data?.data;
  } catch (error) {
    console.log("EDIT COURSE API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// create a section
export const createSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Create Section");
    }
    toast.success("Course Section Created");
    result = response?.data?.updatedCourse;
  } catch (error) {
    console.log("CREATE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// create a subsection
export const createSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", CREATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Add Lecture");
    }
    toast.success("Lecture Added");
    result = response?.data?.data;
  } catch (error) {
    console.log("CREATE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// Update Section
export const updateSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", UPDATE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error("Coild not update section");
    }

    toast.success("Course section Updated");
    result = response?.data?.data;
  } catch (error) {
    console.log("UPDATE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// update subsection
export const updateSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", UPDATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Update Lecture");
    }
    toast.success("Lecture Updated");
    result = response?.data?.data;
  } catch (error) {
    console.log("UPDATE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// delete a section
export const deleteSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", DELETE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Delete Section");
    }
    toast.success("Course Section Deleted");
    result = response?.data?.data;
  } catch (error) {
    console.log("DELETE SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// delete a subsection
export const deleteSubSection = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", DELETE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Delete Lecture");
    }
    toast.success("Lecture Deleted");
    result = response?.data?.data;
  } catch (error) {
    console.log("DELETE SUB-SECTION API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

//   Fetching all courses for a specific instructor
export const fetchInstructorCourses = async (token) => {
  let result = [];
  const toastId = toast.loading("Loading...");
  // console.log("inside fetchInstructorCourses");
  try {
    const response = await apiConnector(
      "GET",
      GET_ALL_INSTRUCTOR_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      throw new Error("Could not fetch instructor courses");
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("INSTRUCTOR COURSES API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};

// delete course
export const deleteCourse = async (data, token) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("DELETE", DELETE_COURSE_API, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Delete Course");
    }
    toast.success("Course Deleted");
  } catch (error) {
    console.log("DELETE COURSE API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
};

// get full details of a course
export const getFullDetailsOfCourse = async (courseId, token) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector(
      "POST",
      GET_FULL_COURSE_DETAILS_AUTHENTICATED,
      {
        courseId,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("COURSE_FULL_DETAILS_API API ERROR............", error);
    result = error.response.data;
  }
  toast.dismiss(toastId);
  return result;
};

// Mark lecture as complete
export const markLectureAsComplete = async (data, token) => {
  let result = null;
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", LECTURE_COMPLETION_API, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error(response.data.error);
    }
    toast.success("Lecture Completed");
    result = true;
  } catch (error) {
    console.log("MARK_LECTURE_AS_COMPLETE_API API ERROR............", error);
    toast.error(error.message);
    result = false;
  }
  toast.dismiss(toastId);
  return result;
};

// create a rating for course
export const createRating = async (data, token) => {
  const toastId = toast.loading("Loading...");
  let success = false;
  try {
    const response = await apiConnector("POST", CREATE_RATING_API, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Create Rating");
    }
    toast.success("Rating Created");
    success = true;
  } catch (error) {
    success = false;
    console.log("CREATE RATING API ERROR............", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return success;
};

// Get course by type
export const getCourseBytype = async (courseType) => {
  let result = null;
  try {
    // Construct the endpoint with the courseType parameter
    const response = await apiConnector(
      "GET",
      GET_COURSE_BY_TYPE.replace(":courseType", courseType)
    );

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Courses");
    }
    result = response.data.courses; // Assuming the courses are returned here
  } catch (error) {
    console.log("GET COURSE BY TYPE API ERROR............", error);
    toast.error(error.message);
  }
  return result;
};

// Get course by stratergy
export const getCourseByStratergy = async (courseType) => {
  let result = null;
  try {
    // Construct the endpoint with the courseType parameter
    const response = await apiConnector("GET", GET_COURSE_BY_STRATERGY);

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Courses");
    }
    result = response.data.courses; // Assuming the courses are returned here
  } catch (error) {
    console.log("GET COURSE BY TYPE API ERROR............", error);
    toast.error(error.message);
  }
  return result;
};

// Get course by tags
export const getCourseByTags = async (tagsArray) => {
  let result = null;
  try {
    const query = tagsArray.join(",");
    // Construct the endpoint with the courseType parameter
    const response = await apiConnector(
      "GET",
      `${GET_COURSES_BY_TAGS}?tags=${query}`
    );

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Courses");
    }
    result = response.data.data; // Assuming the courses are returned here
  } catch (error) {
    console.log("GET_COURSES_BY_TAGS API ERROR............", error);
    toast.error(error.message);
  }
  return result || [];
};

// Get course by categories
export const getCourseByCategories = async (categories) => {
  let result = null;
  try {
    // Construct the endpoint with the courseType parameter
    const response = await apiConnector("POST", GET_COURSES_BY_CATEGORIES, {
      categories,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Courses");
    }
    result = response.data.data; // Assuming the courses are returned here
  } catch (error) {
    console.log("GET_COURSES_BY_CATEGORIES API ERROR............", error);
    toast.error(error.message);
  }
  return result || [];
};

// Get stats data for about page
export const getStatsData = async () => {
  let result = null;
  try {
    // Construct the endpoint with the courseType parameter
    const response = await apiConnector("GET", GET_STATS_DATA);

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Courses");
    }
    result = response.data.data; // Assuming the courses are returned here
  } catch (error) {
    console.log("GET_STATS_DATA API ERROR............", error);
    toast.error(error.message);
  }
  return result || [];
};

// Update social media stats data
export const updateSocialMediaStats = async (token, data) => {
  let result = null;
  try {
    // Construct the endpoint with the courseType parameter
    const response = await apiConnector("POST", UPDATE_STATS_DATA, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response?.data?.success) {
      throw new Error("Could Not update Stats data");
    }
    result = response.data.data; // Assuming the courses are returned here
  } catch (error) {
    console.log("UPDATE_STATS_DATA API ERROR............", error);
    toast.error(error.message);
  }
  return result || [];
};

export const getAllCertificates = async (token) => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_CERTIFICATES, null, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("GET_ALL_CERTIFICATES ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};
