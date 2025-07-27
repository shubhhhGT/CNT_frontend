import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { updateSocialMediaStats } from "../../../services/operations/courseDetailsAPI";
import toast from "react-hot-toast";

const SocialMediaStats = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Convert to numbers
      const statsData = {
        youtubeSubscribers: Number(data.youtubeSubs),
        instagramFollowers: Number(data.instagramFollowers),
      };

      const result = await updateSocialMediaStats(token, statsData);

      if (result) {
        toast.success("Stats updated successfully!");
        reset();
      }
    } catch (error) {
      toast.error("Failed to update stats");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-richblack-5">
      <h2 className="text-3xl font-semibold mb-6">Update Social Media Stats</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-richblack-800 p-6 rounded-lg border border-richblack-700 max-w-md"
      >
        {/* YouTube Subscribers */}
        <div className="mb-4">
          <label
            htmlFor="youtubeSubs"
            className="block text-sm font-medium mb-2"
          >
            YouTube Subscribers
          </label>
          <input
            type="number"
            id="youtubeSubs"
            placeholder="Enter current subscribers"
            {...register("youtubeSubs", {
              required: "YouTube subscribers is required",
              min: { value: 0, message: "Must be a positive number" },
            })}
            className="w-full p-3 bg-richblack-700 rounded-md border border-richblack-600 focus:outline-none focus:ring-1 focus:ring-yellow-50"
          />
          {errors.youtubeSubs && (
            <p className="mt-1 text-pink-200 text-sm">
              {errors.youtubeSubs.message}
            </p>
          )}
        </div>

        {/* Instagram Followers */}
        <div className="mb-6">
          <label
            htmlFor="instagramFollowers"
            className="block text-sm font-medium mb-2"
          >
            Instagram Followers
          </label>
          <input
            type="number"
            id="instagramFollowers"
            placeholder="Enter current followers"
            {...register("instagramFollowers", {
              required: "Instagram followers is required",
              min: { value: 0, message: "Must be a positive number" },
            })}
            className="w-full p-3 bg-richblack-700 rounded-md border border-richblack-600 focus:outline-none focus:ring-1 focus:ring-yellow-50"
          />
          {errors.instagramFollowers && (
            <p className="mt-1 text-pink-200 text-sm">
              {errors.instagramFollowers.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-4 rounded-md font-medium ${
            loading
              ? "bg-richblack-400 cursor-not-allowed"
              : "bg-yellow-50 hover:bg-yellow-100"
          } text-richblack-900 transition-all duration-200`}
        >
          {loading ? "Updating..." : "Update Stats"}
        </button>
      </form>
    </div>
  );
};

export default SocialMediaStats;
