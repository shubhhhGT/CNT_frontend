import React, { useEffect, useState } from "react";
import Iconbtn from "../../../common/Iconbtn";
import { VscAdd } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import InstructorCourses from "./InstructorDashboard/InstructorCourses";
import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import Sidebar from "./Sidebar";

const MyCourses = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(5);

  // Get the courses whenever the component renders
  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token);
      if (result) {
        setCourses(result);
        setFilteredCourses(result);
      }
    };
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle search
  useEffect(() => {
    const filtered = courses.filter(
      (course) =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.courseDescription
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        course.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
    setCurrentPage(1); // Reset to first page when search changes
  }, [searchTerm, courses]);

  // Get current courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Media query to check if screen size is greater than 768px
  const isMediumScreenOrLarger = useMediaQuery({ minWidth: 768 });

  const [sidebarIconClicked, setSidebarIconClicked] = useState(false);

  return (
    <div className="p-6">
      {/* Responsive design for small screen */}
      <div className="mb-4 md:hidden">
        {!isMediumScreenOrLarger &&
          (sidebarIconClicked ? (
            <div className="flex">
              <GoSidebarExpand
                size={24}
                fill="#AFB2BF"
                onClick={() => setSidebarIconClicked(!sidebarIconClicked)}
              />
              <Sidebar />
            </div>
          ) : (
            <GoSidebarCollapse
              size={24}
              fill="#AFB2BF"
              onClick={() => setSidebarIconClicked(!sidebarIconClicked)}
            />
          ))}
      </div>

      {/* My Course */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-3xl font-medium text-richblack-5">My Courses</h2>
        <Iconbtn
          text={"Add Course"}
          onclick={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </Iconbtn>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by course name, description, or status..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 bg-richblack-700 text-richblack-5 rounded-lg border border-richblack-600 focus:outline-none focus:ring-2 focus:ring-yellow-100"
        />
      </div>

      {currentCourses && (
        <>
          <InstructorCourses
            courses={currentCourses}
            setCourses={setCourses}
            totalCourses={filteredCourses.length}
          />

          {/* Pagination */}
          {filteredCourses.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
              <p className="text-richblack-200 text-sm sm:text-base">
                Showing {indexOfFirstCourse + 1} to{" "}
                {Math.min(indexOfLastCourse, filteredCourses.length)} of{" "}
                {filteredCourses.length} courses
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-richblack-700 text-richblack-5 rounded disabled:opacity-50 hover:bg-richblack-600 transition-colors"
                >
                  Previous
                </button>
                {Array.from(
                  {
                    length: Math.ceil(filteredCourses.length / coursesPerPage),
                  },
                  (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={`px-3 py-1 rounded ${
                        currentPage === i + 1
                          ? "bg-yellow-100 text-richblack-900 font-medium"
                          : "bg-richblack-700 text-richblack-5 hover:bg-richblack-600"
                      } transition-colors`}
                    >
                      {i + 1}
                    </button>
                  )
                ).slice(
                  Math.max(0, currentPage - 3),
                  Math.min(
                    Math.ceil(filteredCourses.length / coursesPerPage),
                    currentPage + 2
                  )
                )}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={
                    currentPage ===
                    Math.ceil(filteredCourses.length / coursesPerPage)
                  }
                  className="px-3 py-1 bg-richblack-700 text-richblack-5 rounded disabled:opacity-50 hover:bg-richblack-600 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyCourses;
