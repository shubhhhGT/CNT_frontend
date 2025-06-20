import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../../../../services/operations/blogApi";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await getAllBlogs();
      if (res) setBlogs(res);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen px-4 py-12 flex flex-col items-center text-richblack-5">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Explore Blogs
      </motion.h1>

      {blogs.length === 0 ? (
        <p className="text-lg">No blogs available.</p>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl"
        >
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default AllBlogs;
