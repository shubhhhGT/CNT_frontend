import React, { useEffect, useState } from "react";
import {
  getAllBlogs,
  deleteBlog,
} from "../../../../services/operations/blogApi";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../../../common/ComnfirmationModal";
import { formattedDate } from "../../../../utils/dateFormatter";
import { motion } from "framer-motion";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [modal, setModal] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await getAllBlogs();
    if (res) setBlogs(res);
  };

  const handleDelete = async (id) => {
    await deleteBlog(id, token);
    fetchBlogs();
    setModal(null);
  };

  return (
    <div className="p-6 sm:px-10 text-richblack-5 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Blogs</h1>
        <button
          onClick={() => navigate("/dashboard/create-blog")}
          className="bg-yellow-100 text-richblack-900 px-4 py-2 rounded-md hover:bg-yellow-200 transition-all font-semibold"
        >
          + Add Blog
        </button>
      </div>

      {blogs.length === 0 ? (
        <p className="text-lg text-center">No blogs created yet.</p>
      ) : (
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              className="bg-richblack-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 p-4">
                {/* Image container */}
                <div className="sm:w-1/3 w-full">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-contain rounded-md border border-richblack-600"
                  />
                </div>

                {/* Content section */}
                <div className="sm:w-2/3 w-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                    <p className="text-sm text-richblack-300 mb-3">
                      {blog.summary.length > 180
                        ? blog.summary.slice(0, 180) + "..."
                        : blog.summary}
                    </p>
                    <p className="text-xs text-richblack-400">
                      Posted on {formattedDate(blog.createdAt)}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={() =>
                        navigate(`/dashboard/edit-blog/${blog._id}`)
                      }
                      className="text-yellow-100 hover:text-yellow-300 transition"
                      title="Edit"
                    >
                      <FiEdit2 size={20} />
                    </button>
                    <button
                      onClick={() =>
                        setModal({
                          text1: "Delete this blog?",
                          text2: "This action cannot be undone.",
                          btn1Text: "Delete",
                          btn2Text: "Cancel",
                          btn1Handler: () => handleDelete(blog._id),
                          btn2Handler: () => setModal(null),
                        })
                      }
                      className="text-pink-200 hover:text-pink-400 transition"
                      title="Delete"
                    >
                      <RiDeleteBin6Line size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {modal && <ConfirmationModal modalData={modal} />}
    </div>
  );
};

export default AdminBlogs;
