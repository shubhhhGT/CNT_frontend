import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getBlogById,
  updateBlog,
} from "../../../../services/operations/blogApi";
import { useSelector } from "react-redux";
import { uploadVideoInChunks } from "../../../../utils/chunkedUpload";

const EditBlog = () => {
  const { blogId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    image: "",
  });
  const [preview, setPreview] = useState(null);
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await getBlogById(blogId);
      if (res) {
        setFormData(res);
        setPreview(res.image);
      }
    };
    fetchBlog();
  }, [blogId]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setNewImage(files[0]);
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = formData.image;
    if (newImage) imageUrl = await uploadVideoInChunks(newImage, token);

    await updateBlog({ ...formData, image: imageUrl }, blogId, token);
    navigate("/dashboard/blogs");
  };

  return (
    <div className="p-6 text-richblack-5">
      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-3xl">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded bg-richblack-700"
        />
        <textarea
          name="summary"
          rows={2}
          value={formData.summary}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded bg-richblack-700"
        />
        <textarea
          name="content"
          rows={10}
          value={formData.content}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded bg-richblack-700"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="text-sm"
        />
        {preview && (
          <img src={preview} alt="Preview" className="w-64 mt-2 rounded" />
        )}
        <button
          type="submit"
          className="bg-yellow-100 text-richblack-900 px-6 py-2 rounded-md hover:bg-yellow-200"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
