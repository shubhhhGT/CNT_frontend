import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CourseCard({ course }) {
  return (
    <motion.div
      className="bg-richblack-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link to={`/courses/${course._id}`} className="block">
        {/* Thumbnail */}
        <img
          className="w-full h-40 object-cover"
          src={course.thumbnail}
          alt={course.courseName}
        />

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-yellow-50 leading-snug mb-1 truncate">
            {course.courseName}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-richblack-300 line-clamp-3 mb-3">
            {course.courseDescription}
          </p>

          {/* Instructor */}
          <p className="text-xs sm:text-sm text-richblack-400 italic">
            By {course.instructor.firstName} {course.instructor.lastName}
          </p>

          {/* Price */}
          <p className="mt-2 text-sm sm:text-base font-semibold text-yellow-100">
            {course.price > 0 ? `₹${course.price}` : "Free"}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
