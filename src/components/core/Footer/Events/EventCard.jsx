import React from "react";
import { Link } from "react-router-dom";
import { formattedDate } from "../../../../utils/dateFormatter";
import { motion } from "framer-motion";

const EventCard = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-richblack-700 rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
    >
      <Link to={`/events/${event._id}`} className="block">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-52 object-cover"
        />
        <div className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">{event.title}</h2>
          <p className="text-sm text-richblack-300 line-clamp-2">
            {event.summary}
          </p>
          <p className="text-xs text-richblack-400">
            📅 {formattedDate(event.date)}
          </p>
          <p className="text-sm font-semibold">💰 ₹{event.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
