import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getEventById,
  updateEvent,
} from "../../../../services/operations/eventApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { uploadVideoInChunks } from "../../../../utils/chunkedUpload";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    meetingLink: "",
    date: "",
    price: "",
  });

  const [preview, setPreview] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await getEventById(id);
      if (res) {
        setFormData({
          title: res.title,
          summary: res.summary,
          content: res.content,
          meetingLink: res.meetingLink,
          date: res.date.split("T")[0],
          price: res.price,
        });
        setPreview(res.thumbnail);
      }
    };
    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "thumbnail") {
      setThumbnailFile(files[0]);
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let uploadedThumbnail = preview;

    if (thumbnailFile) {
      try {
        uploadedThumbnail = await uploadVideoInChunks(thumbnailFile, token);
      } catch (err) {
        toast.error("Thumbnail upload failed");
        setLoading(false);
        return;
      }
    }

    const payload = {
      ...formData,
      thumbnail: uploadedThumbnail,
    };

    const res = await updateEvent(id, payload, token);
    if (res) {
      toast.success("Event updated successfully");
      navigate("/dashboard/manage-events");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-richblack-5">
      <h1 className="text-3xl font-bold mb-6">Edit Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-richblack-800 border border-richblack-600"
          required
        />

        <textarea
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
          rows={2}
          className="w-full px-4 py-2 rounded bg-richblack-800 border border-richblack-600"
          required
        />

        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-2 rounded bg-richblack-800 border border-richblack-600"
          required
        />

        <input
          type="file"
          name="thumbnail"
          accept="image/*"
          onChange={handleChange}
          className="text-sm text-richblack-300"
        />
        {preview && (
          <img
            src={preview}
            alt="Thumbnail Preview"
            className="w-64 h-auto rounded border border-richblack-700"
          />
        )}

        <input
          type="text"
          name="meetingLink"
          placeholder="Meeting Link"
          value={formData.meetingLink}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-richblack-800 border border-richblack-600"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-richblack-800 border border-richblack-600"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-richblack-800 border border-richblack-600"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-100 text-richblack-900 px-6 py-2 rounded hover:bg-yellow-200 transition-all"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditEvent;
