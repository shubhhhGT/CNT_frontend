import React, { useState } from "react";
import { createBlog } from "../../../../services/operations/blogApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { uploadVideoInChunks } from "../../../../utils/chunkedUpload";

const AddBlog = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return alert("Please upload a cover image.");
    setLoading(true);
    try {
      const thumbnail = await uploadVideoInChunks(formData.image, token);
      const payload = {
        title: formData.title,
        summary: formData.summary,
        content: formData.content,
        thumbnail,
      };
      await createBlog(payload, token);
      navigate("/dashboard/blogs");
    } catch (err) {
      console.error("Blog creation failed", err);
    }
    setLoading(false);
  };

  return (
    <div className="text-richblack-5 p-6">
      <h1 className="text-3xl font-bold mb-6">Create Blog</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-3xl">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-richblack-700"
          required
        />
        <textarea
          name="summary"
          rows={2}
          placeholder="Short Summary"
          value={formData.summary}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-richblack-700"
          required
        />
        <textarea
          name="content"
          rows={10}
          placeholder="Write your blog content here..."
          value={formData.content}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-richblack-700"
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="text-sm"
          required
        />
        {preview && (
          <img src={preview} alt="Preview" className="w-64 mt-2 rounded" />
        )}
        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-100 text-richblack-900 px-6 py-2 rounded-md hover:bg-yellow-200"
        >
          {loading ? "Uploading..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
