import React, { useEffect, useState } from "react";
import RatingStars from "../../../common/RatingStars";
import GetAvgRating from "../../../utils/avgRating";
import { Link } from "react-router-dom";

const Course_Card = ({ course, Height = "h-[200px]" }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);

  return (
    <Link to={`/courses/${course._id}`}>
      <div className="bg-richblack-800 rounded-lg shadow-md hover:shadow-yellow-100 transition-shadow duration-300 overflow-hidden border border-richblack-700">
        {/* Thumbnail */}
        <img
          src={course?.thumbnail}
          alt={course?.courseName}
          className={`w-full ${Height} object-cover`}
        />

        {/* Details */}
        <div className="flex flex-col gap-3 p-4">
          {/* Course Name */}
          <h3 className="text-lg font-semibold text-richblack-5 line-clamp-2">
            {course?.courseName}
          </h3>

          {/* Description */}
          <p className="text-sm text-richblack-300 line-clamp-2">
            {course?.courseDescription}
          </p>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-yellow-50 font-medium">
              {avgReviewCount.toFixed(1) || "0.0"}
            </span>
            <RatingStars Review_Count={avgReviewCount} />
            <span className="text-richblack-400">
              ({course?.ratingAndReviews?.length || 0})
            </span>
          </div>

          {/* Price and Enrollment */}
          <div className="flex justify-between items-center text-sm mt-2">
            <p className="text-yellow-100 text-lg font-bold">
              ₹ {course?.price}
            </p>
            <p className="text-richblack-300">
              {course?.studentsEntrolled?.length || 0} enrolled
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Course_Card;
