import React, { useEffect, useState } from "react";
import { getCourseByTags } from "../../../../services/operations/courseDetailsAPI";
import { TOPICS } from "../../../..//data/topicsList";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";

const TopicCoursesPage = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  useEffect(() => {
    const fetchCourses = async () => {
      if (selectedTags.length === 0) return setCourses([]);
      setLoading(true);
      const results = await getCourseByTags(selectedTags);
      setCourses(results);
      setLoading(false);
    };
    fetchCourses();
  }, [selectedTags]);

  return (
    <div className="min-h-screen w-full flex bg-richblack-900 text-richblack-5">
      {/* Sidebar */}
      <aside className="w-[250px] bg-richblack-800 px-6 py-8 border-r border-richblack-700">
        <h2 className="text-xl font-semibold mb-4">Topics</h2>
        <div className="space-y-3">
          {TOPICS.map((tag) => (
            <label
              key={tag}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedTags.includes(tag)}
                onChange={() => handleCheckboxChange(tag)}
                className="accent-yellow-100"
              />
              <span>{tag}</span>
            </label>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-10">
        <h1 className="text-3xl font-bold mb-6">Courses</h1>

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
            No courses found for selected topics.
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

export default TopicCoursesPage;
