import React, { useState } from "react";
import { subscribeToNewsletter } from "../../../../services/operations/newsletterApis";
import { motion } from "framer-motion";

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await subscribeToNewsletter(formData);
    if (res) {
      setFormData({ name: "", email: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-richblack-900 px-4">
      <motion.div
        className="w-full max-w-md bg-richblack-700 text-richblack-5 rounded-lg shadow-md p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-yellow-100 text-center">
          Join Our Free Newsletter
        </h2>
        <p className="text-sm text-center text-richblack-300 mb-6">
          Get exclusive tips, strategies, and market insights directly in your
          inbox.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-richblack-800 border border-richblack-600 focus:outline-none focus:ring-1 focus:ring-yellow-100"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-richblack-800 border border-richblack-600 focus:outline-none focus:ring-1 focus:ring-yellow-100"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-100 text-richblack-900 font-semibold py-2 rounded hover:bg-yellow-200 transition-all"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default NewsletterSignup;
