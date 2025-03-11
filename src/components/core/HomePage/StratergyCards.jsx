import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RatingStars from "../../../common/RatingStars";

const StratergyCards = ({ courses }) => {
  return (
    // In StratergyCards component
    <div className=" w-full">
      <div className="h-[450px] my-12 max-w-sm sm:max-w-maxContentTab lg:max-w-maxContent">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, FreeMode, Autoplay]}
          className="w-full" // Changed this line
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            640: { slidesPerView: 1 }, // Ensures only 1 slide below 640px
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course._id}>
              <div className="h-full flex items-center justify-center p-4">
                {" "}
                {/* Added wrapper div */}
                <Link to={`/courses/${course._id}`} className="w-[30rem]">
                  <motion.div
                    className="bg-white rounded-lg shadow-md p-4 w-full h-[470px] overflow-hidden flex flex-col" // Changed width
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={course?.thumbnail}
                      alt={course?.courseName}
                      className="w-full h-[200px] object-cover rounded-md"
                    />
                    <h3 className="text-lg font-semibold mt-2">
                      {course?.courseName}
                    </h3>
                    <p className="text-sm text-gray-500 my-2">
                      by {course?.instructor?.firstName}{" "}
                      {course?.instructor?.lastName}
                    </p>
                    <p className="text-sm text-gray-700">
                      {course?.courseDescription?.length > 150
                        ? `${course?.courseDescription.substring(0, 150)}...`
                        : course?.courseDescription}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-yellow-500">
                        {course?.averageRating || 0}
                      </span>
                      <RatingStars Review_Count={course?.averageRating} />
                      <span className="text-gray-500">
                        {course?.ratingAndReviews?.length} Ratings
                      </span>
                    </div>
                    <div className="flex flow-row items-center justify-between">
                      <p className="text-xl font-bold mt-2">
                        Rs. {course?.price}
                      </p>
                      <p className="text-sm text-gray-500 mt-1 translate-y-[3px]">
                        {course?.studentsEntrolled?.length} Students •{" "}
                        {course?.totalTime.slice(0, -1)}{" "}
                        {course?.totalTime?.endsWith("s")
                          ? "seconds"
                          : course?.totalTime?.endsWith("h")
                          ? "hours"
                          : "minutes"}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StratergyCards;

// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import RatingStars from "../../../common/RatingStars";

// const StratergyCards = ({ courses }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const intervalRef = useRef(null);
//   const slidesToShow =
//     window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
//   };

//   useEffect(() => {
//     intervalRef.current = setInterval(nextSlide, 3000);
//     return () => clearInterval(intervalRef.current);
//   }, [courses.length]);

//   useEffect(() => {
//     const handleResize = () => {
//       window.location.reload();
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden">
//       {courses?.length ? (
//         <div
//           className="flex transition-transform duration-500"
//           style={{
//             transform: `translateX(-${(currentIndex * 100) / courses.length}%)`,
//           }}
//         >
//           {[...courses, ...courses].map((course, index) => (
//             <div className="min-w-[calc(100%/3)] flex-shrink-0 p-2" key={index}>
//               <Link to={`/courses/${course._id}`}>
//                 <motion.div
//                   className="bg-white rounded-lg shadow-md p-4 w-[370px] h-[450px] overflow-hidden"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <img
//                     src={course?.thumbnail}
//                     alt={course?.courseName}
//                     className="w-full h-[200px] object-cover rounded-md"
//                   />
//                   <h3 className="text-lg font-semibold mt-2">
//                     {course?.courseName}
//                   </h3>
//                   <p className="text-sm text-gray-500 mb-2">
//                     by {course?.instructor?.firstName}{" "}
//                     {course?.instructor?.lastName}
//                   </p>
//                   <p className="text-sm text-gray-700">
//                     {course?.courseDescription?.length > 100
//                       ? `${course?.courseDescription.substring(0, 100)}...`
//                       : course?.courseDescription}
//                   </p>
//                   <div className="flex items-center gap-2 mt-2">
//                     <span className="text-yellow-500">
//                       {course?.averageRating || 0}
//                     </span>
//                     <RatingStars Review_Count={course?.averageRating} />
//                     <span className="text-gray-500">
//                       {course?.ratingAndReviews?.length} Ratings
//                     </span>
//                   </div>
//                   <p className="text-xl font-bold mt-2">Rs. {course?.price}</p>
//                   <p className="text-sm text-gray-500 mt-1">
//                     {course?.totalStudents} Students • {course?.totalTime} hours
//                   </p>
//                 </motion.div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-xl text-gray-700">No Courses Found!</p>
//       )}
//     </div>
//   );
// };

// export default StratergyCards;
