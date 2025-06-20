import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../../../services/operations/eventApi";
import { formattedDate } from "../../../../utils/dateFormatter";
import { useDispatch, useSelector } from "react-redux";
import { buyCourse } from "../../../../services/operations/studentFeaturesAPI";
import { motion } from "framer-motion";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const userDetails = useSelector((state) => state.profile.user);
  const navigate = useSelector((state) => state.navigate);

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await getEventById(id);
      if (res) setEvent(res);
    };
    fetchEvent();
  }, [id]);

  if (!event) return <p className="p-6 text-richblack-5">Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-10 text-richblack-5"
    >
      <div className="bg-richblack-800 rounded-lg shadow-lg px-6 py-8 sm:p-10">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-6 text-center text-yellow-50"
        >
          {event.title}
        </motion.h1>

        <motion.img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-80 object-cover rounded-md shadow mb-6 border border-richblack-600"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-richblack-300 mb-2 italic text-sm">
            {event.summary}
          </p>
          <p className="text-sm text-richblack-400 mb-4">
            📅 Date: {formattedDate(event.date)}
          </p>

          <div className="text-richblack-100 whitespace-pre-line leading-relaxed mb-6 text-sm sm:text-base">
            {event.content}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
            <p className="text-lg font-semibold text-yellow-100">
              💰 Price: ₹{event.price}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-100 text-richblack-900 px-5 py-2 rounded hover:bg-yellow-200 transition-all font-semibold"
              onClick={() =>
                buyCourse(token, [event._id], userDetails, navigate, dispatch)
              }
            >
              Register Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventDetails;
