import React, { useEffect, useState } from "react";
import { getCourseByCategories } from "../../../../services/operations/courseDetailsAPI";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";

const CATEGORIES = [
  { id: "cat001", name: "Certifications And Trainings" },
  { id: "cat002", name: "Trading as a Full-time Career" },
  { id: "cat003", name: "Stock Market Analyst" },
  { id: "cat004", name: "Derivatives and Algo Trader" },
  { id: "cat005", name: "Portfolio Manager" },
  { id: "cat006", name: "Financial Educator" },
  { id: "cat007", name: "Brokerage and Investment Firm Roles" },
];

const CareerCoursesPage = () => {
  const [selectedCategoryNames, setSelectedCategoryNames] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (categoryName) => {
    setSelectedCategoryNames((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  useEffect(() => {
    const fetchCourses = async () => {
      if (selectedCategoryNames.length === 0) return setCourses([]);
      setLoading(true);
      const results = await getCourseByCategories(selectedCategoryNames);
      setCourses(results);
      setLoading(false);
    };
    fetchCourses();
  }, [selectedCategoryNames]);

  return (
    <div className="min-h-screen w-full flex bg-richblack-900 text-richblack-5">
      {/* Sidebar */}
      <aside className="w-[250px] bg-richblack-800 px-6 py-8 border-r border-richblack-700">
        <h2 className="text-xl font-semibold mb-4">Career Paths</h2>
        <div className="space-y-3">
          {CATEGORIES.map(({ id, name }) => (
            <label
              key={id}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCategoryNames.includes(name)}
                onChange={() => handleCheckboxChange(name)}
                className="accent-yellow-100"
              />
              <span>{name}</span>
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-6 sm:px-10 py-10">
        <h1 className="text-3xl font-bold mb-6">Career Building Courses</h1>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse bg-richblack-700 h-72 rounded-md"
              ></div>
            ))}
          </div>
        ) : courses.length === 0 ? (
          <p className="text-richblack-300">
            No courses found for selected categories.
          </p>
        ) : (
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default CareerCoursesPage;
