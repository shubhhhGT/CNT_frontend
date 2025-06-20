import React from "react";
import { Link } from "react-router-dom";
import { formattedDate } from "../../../../utils/dateFormatter";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Link
        to={`/blogs/${blog._id}`}
        className="bg-richblack-700 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden flex flex-col"
      >
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-52 object-cover"
        />
        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-richblack-5">
            {blog.title}
          </h2>
          <p className="text-sm text-richblack-300">
            {blog.summary.length > 200
              ? blog.summary.slice(0, 200) + "..."
              : blog.summary}
          </p>
          <p className="text-xs text-richblack-400 mt-auto">
            {formattedDate(blog.createdAt)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
