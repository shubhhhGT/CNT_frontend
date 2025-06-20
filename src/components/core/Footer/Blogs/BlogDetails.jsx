// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getBlogById } from "../../../../services/operations/blogApi";

// const BlogDetails = () => {
//   const { blogId } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       const res = await getBlogById(blogId);
//       if (res) setBlog(res);
//     };
//     fetchBlog();
//   }, [blogId]);

//   if (!blog) return <p className="p-6 text-richblack-5">Loading...</p>;

//   return (
//     <div className="p-6 text-richblack-5 max-w-5xl mx-auto">
//       <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
//       <img
//         src={blog.thumbnail}
//         alt={blog.title}
//         className="w-full h-80 object-cover rounded mb-6"
//       />
//       <p className="text-sm text-richblack-300 mb-4">{blog.summary}</p>
//       <div className="text-richblack-200 leading-relaxed whitespace-pre-line">
//         {blog.content}
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogById } from "../../../../services/operations/blogApi";
import { formattedDate } from "../../../../utils/dateFormatter";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await getBlogById(blogId);
      if (res) setBlog(res);
    };
    fetchBlog();
  }, [blogId]);

  if (!blog)
    return (
      <p className="p-6 text-richblack-100 text-lg text-center animate-pulse">
        Loading blog...
      </p>
    );

  return (
    <motion.div
      className="px-4 sm:px-6 lg:px-10 py-12 max-w-4xl mx-auto text-richblack-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-extrabold mb-4 text-center leading-snug"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {blog.title}
      </motion.h1>

      <p className="text-sm text-richblack-300 text-center mb-6">
        Posted on {formattedDate(blog.createdAt)}
      </p>

      <motion.img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-xl shadow-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      />

      <motion.p
        className="text-base text-richblack-300 mb-8 text-center italic max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {blog.summary}
      </motion.p>

      <motion.div
        className="text-richblack-100 leading-[1.8] text-lg whitespace-pre-line tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {blog.content}
      </motion.div>
    </motion.div>
  );
};

export default BlogDetails;
