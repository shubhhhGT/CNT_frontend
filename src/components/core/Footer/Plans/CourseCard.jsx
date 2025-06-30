import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { convertSecondsToDuration } from "../../../../utils/convertToDuration"; // Update path as per your project

const CourseCard = ({ course, Height = "h-[250px]" }) => {
  const navigate = useNavigate();

  // Calculate total duration in seconds from all subsections (if available)
  const totalDurationInSeconds =
    course?.courseContent?.reduce((acc, section) => {
      const sectionTime = section?.subSection?.reduce(
        (sec, sub) => sec + (parseInt(sub.timeDuration) || 0),
        0
      );
      return acc + sectionTime;
    }, 0) || 0;

  return (
    <div
      className="bg-richblack-800 rounded-lg overflow-hidden shadow-md border border-richblack-600 hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
      onClick={() => navigate(`/courses/${course._id}`)}
    >
      {/* Thumbnail */}
      <div className={`w-full ${Height} overflow-hidden`}>
        <img
          src={course?.thumbnail}
          alt={course?.courseName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h3 className="text-lg font-bold text-richblack-5 line-clamp-2">
          {course?.courseName}
        </h3>

        {/* Description (1-line preview) */}
        <p className="text-sm text-richblack-200 line-clamp-2">
          {course?.courseDescription}
        </p>

        {/* Mentor */}
        <p className="text-sm text-richblack-300 italic">
          By {course?.instructor?.firstName} {course?.instructor?.lastName}
        </p>

        {/* Ratings and Enrolled */}
        <div className="flex items-center gap-2 text-yellow-100 text-sm">
          <FaStar />
          <span>{course?.averageRating?.toFixed(1)}</span>
          <span className="text-richblack-300">
            ({course?.studentsEntrolled?.length} Students)
          </span>
        </div>

        {/* Duration */}
        <div className="text-sm text-richblack-200">
          Duration: {convertSecondsToDuration(totalDurationInSeconds)}
        </div>

        {/* Price */}
        <div className="text-yellow-100 text-lg font-semibold">
          ₹{course?.price || "0"}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
