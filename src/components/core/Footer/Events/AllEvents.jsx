import React, { useEffect, useState } from "react";
import { getAllEvents } from "../../../../services/operations/eventApi";
import EventCard from "./EventCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await getAllEvents();
      if (res) setEvents(res);
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen px-4 py-12 flex flex-col items-center text-richblack-5">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Upcoming Events
      </motion.h1>

      {events.length === 0 ? (
        <p className="text-lg">No events available.</p>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl"
        >
          {events.map((event, index) => (
            <EventCard key={event._id} event={event} index={index} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default AllEvents;
