import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { PiGlobeHemisphereWestDuotone } from "react-icons/pi";
import { IoIosCall } from "react-icons/io";
import ContactUsForm from "../common/ContactUsForm";
import Footer from "../common/Footer";
import ReviewSlider from "../common/ReviewSlideer";
import AppPromotionBanner from "../components/core/HomePage/AppPromotionBanner";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "anticipate" },
  },
};

const Contact = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* Section 1 */}
      <section className="flex flex-col lg:flex-row w-11/12 mx-auto justify-between gap-10 text-white mt-20 max-w-maxContent">
        <div className="lg:w-[40%] flex flex-col gap-6">
          {/* Left part */}
          <motion.div
            className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6 h-fit"
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
              variants={itemVariants}
            >
              <div className="flex flex-row items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <HiChatBubbleLeftRight size={25} />
                </motion.div>
                <p className="text-lg font-semibold text-richblack-5">
                  Chat with us
                </p>
              </div>
              <div className="font-medium">
                Our friendly team is here to help.
              </div>
              <div className="font-semibold">admin@cntacademy.com</div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
              variants={itemVariants}
            >
              <div className="flex flex-row items-center gap-3">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <PiGlobeHemisphereWestDuotone size={25} />
                </motion.div>
                <p className="text-lg font-semibold text-richblack-5">
                  Visit us
                </p>
              </div>
              <div className="font-medium">
                Come and say hello at our office HQ.
              </div>
              <div className="font-semibold">
                Agnostic Edufin Private Limited 212,Girish Ghosh Road, Room No-
                430 , 4th Floor , P.S. Belur , Howrah , Pin - 711202 State :
                West Bengal
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
              variants={itemVariants}
            >
              <div className="flex flex-row items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <IoIosCall size={25} />
                </motion.div>
                <p className="text-lg font-semibold text-richblack-5">
                  Call us
                </p>
              </div>
              <div className="font-medium">Mon - Fri From 8am to 5pm</div>
              <div className="font-semibold">+91 7384708366</div>
            </motion.div>
          </motion.div>

          {/* Map iframe below the contact details */}
          <motion.div
            className="rounded-lg overflow-hidden h-[250px] w-full"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <iframe
              title="CNT Office Location"
              src="https://www.google.com/maps?q=212,+Girish+Ghosh+Road,+Belur,+Howrah,+West+Bengal+711202,+India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        {/* Right part */}
        <motion.div
          className="lg:w-[60%] border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col"
          variants={slideIn}
          whileHover={{
            boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.5)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.h1
            className="text-4xl leading-10 font-semibold text-richblack-5"
            variants={fadeIn}
          >
            Got a Idea? We've got the skills. Let's team up
          </motion.h1>
          <motion.p className="mb-10" variants={fadeIn}>
            Tell us more about yourself and what you're got in mind.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <ContactUsForm />
          </motion.div>
        </motion.div>
      </section>

      {/* Review slider */}
      <motion.section
        className="w-11/12 mx-auto my-20 max-w-maxContent flex-col flex items-center justify-between gap-8 bg-richblack-900 text-white"
        variants={fadeIn}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center text-4xl font-semibold mt-10">
          Reviews from our Students
        </div>
        <ReviewSlider />
      </motion.section>

      {/* App Promotion Banner */}
      <motion.div
        variants={fadeIn}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
      >
        <AppPromotionBanner />
      </motion.div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Contact;
