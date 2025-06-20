import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { getAllTestimonials } from "../../../services/operations/testimonialApi";

const TestimonialCard = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);

  const { user, course, description, rating, videoUrl } = testimonial;
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative bg-richblack-700 p-6 rounded-2xl border-richblack-600 border-2 hover:border-transparent transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#3d00e633] to-[#dc23f933] opacity-0 group-hover:opacity-30 transition-opacity" />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={user.image}
            alt={fullName}
            className="w-12 h-12 rounded-full object-cover border-2 border-richblack-500"
          />
          <div>
            <h3 className="text-lg font-semibold text-white">{fullName}</h3>
            <p className="text-sm text-richblack-300 italic">
              {course?.courseName}
            </p>
          </div>
        </div>

        {/* Video */}
        {videoUrl && (
          <div className="mb-4">
            <video
              controls
              src={videoUrl}
              className="w-full h-48 rounded-lg border border-richblack-600"
            />
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={`${
                i < rating ? "text-yellow-400" : "text-richblack-500"
              }`}
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-blue-200 text-base font-medium mb-2">
          {expanded || description.length <= 120
            ? description
            : description.slice(0, 120) + "..."}
        </p>

        {description.length > 120 && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="text-blue-400 underline text-sm"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </motion.div>
  );
};

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    try {
      const res = await getAllTestimonials();
      setTestimonials(res || []);
    } catch (error) {
      console.error("Failed to fetch testimonials", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">
        Student Testimonials
      </h2>

      {loading ? (
        <p className="text-richblack-300">Loading testimonials...</p>
      ) : testimonials.length === 0 ? (
        <p className="text-richblack-300 text-center">
          No testimonials available yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;
