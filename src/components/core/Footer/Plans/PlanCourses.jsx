import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseBytype } from "../../../../services/operations/courseDetailsAPI";
import CourseCard from "./CourseCard";
import { motion } from "framer-motion";

const COURSE_TYPE_MAP = {
  free: "Free",
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  stratergy: "Stratergy",
};

const PlanCourses = () => {
  const { id } = useParams();
  const courseType = COURSE_TYPE_MAP[id?.toLowerCase()];
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const result = await getCourseBytype(courseType);
      setCourses(result || []);
      setLoading(false);
    };

    fetchCourses();
  }, [courseType]);

  return (
    <div className="w-11/12 max-w-maxContent mx-auto my-10 text-richblack-5">
      <motion.h1
        className="text-3xl font-bold mb-6 capitalize"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {courseType} Plan Courses
      </motion.h1>

      {loading ? (
        <p className="text-richblack-200">Loading courses...</p>
      ) : courses.length === 0 ? (
        <p className="text-richblack-200">No courses found for this plan.</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <CourseCard course={course} Height={"h-[300px]"} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default PlanCourses;
