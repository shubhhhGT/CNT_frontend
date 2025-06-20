import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { uploadVideoInChunks } from "../../../../utils/chunkedUpload";
import { createEvent } from "../../../../services/operations/eventApi";

const CreateEvent = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    date: "",
    price: "",
    meetingLink: "",
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

    if (!formData.image) {
      toast.error("Please upload a thumbnail image.");
      return;
    }

    setLoading(true);
    try {
      const thumbnail = await uploadVideoInChunks(formData.image, token);
      const payload = {
        title: formData.title,
        summary: formData.summary,
        content: formData.content,
        date: formData.date,
        price: formData.price,
        meetingLink: formData.meetingLink,
        thumbnail,
      };

      const response = await createEvent(payload, token);
      if (response) {
        toast.success("Event created successfully");
        navigate("/dashboard/events");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error("Failed to create event");
    }
    setLoading(false);
  };

  return (
    <div className="text-richblack-5 p-6 animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Create Event</h1>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 max-w-3xl bg-richblack-800 p-6 rounded-lg shadow-lg transition-all duration-500"
      >
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-richblack-700 border border-richblack-600"
          required
        />
        <textarea
          name="summary"
          rows={2}
          placeholder="Short Summary"
          value={formData.summary}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-richblack-700 border border-richblack-600"
          required
        />
        <textarea
          name="content"
          rows={6}
          placeholder="Full Event Description"
          value={formData.content}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-richblack-700 border border-richblack-600"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-richblack-700 border border-richblack-600"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={formData.price}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-richblack-700 border border-richblack-600"
          required
        />
        <input
          type="url"
          name="meetingLink"
          placeholder="Meeting Link (Hidden from public)"
          value={formData.meetingLink}
          onChange={handleChange}
          className="px-4 py-2 rounded bg-richblack-700 border border-richblack-600"
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
          <img
            src={preview}
            alt="Event Preview"
            className="w-64 rounded-md mt-2 border border-richblack-600"
          />
        )}
        <button
          type="submit"
          disabled={loading}
          className="bg-yellow-100 text-richblack-900 px-6 py-2 rounded hover:bg-yellow-200 transition-all"
        >
          {loading ? "Uploading..." : "Create Event"}
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
