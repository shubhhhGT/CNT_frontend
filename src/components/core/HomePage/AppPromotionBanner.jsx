import React from "react";
import { FaGooglePlay, FaMobileAlt, FaDownload } from "react-icons/fa";
import Cntlogo from "../../../assets/Logo/CNT-logo.png";
import { motion } from "framer-motion";

const AppPromotionBanner = () => {
  return (
    <div className="relative w-full py-10 overflow-hidden bg-gradient-to-br from-richblack-800 to-richblack-700">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-900 rounded-full opacity-15"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-cyan-900 rounded-full opacity-15"></div>

        {/* Glowing elements */}
        <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-15"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-cyan-500 rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <motion.div
            className="text-richblack-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <FaMobileAlt className="text-2xl text-blue-300" />
              <span className="text-blue-300 font-bold tracking-wider uppercase text-sm">
                CNT ACADEMY MOBILE APP
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Trading Knowledge <span className="text-blue-300">On The Go</span>
            </h2>

            <p className="text-richblack-100 text-base mb-6 max-w-lg">
              Access our complete course library, technical analysis tools, and
              market insights anytime, anywhere.
            </p>

            <div className="mb-6">
              <div className="flex gap-4">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.cntacademy.app"
                  target="_blank"
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGooglePlay className="text-xl" />
                  <div>
                    <span className="text-xs block">GET IT ON</span>
                    <span className="font-bold text-base">Google Play</span>
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <motion.div
                className="flex flex-col items-center gap-1 p-3 bg-richblack-700 rounded-lg shadow border border-richblack-600"
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 rounded-full bg-richblack-800 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-xs text-center text-richblack-5">
                  Certificates
                </span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-1 p-3 bg-richblack-700 rounded-lg shadow border border-richblack-600"
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 rounded-full bg-richblack-800 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="font-medium text-xs text-center text-richblack-5">
                  Video Lessons
                </span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-1 p-3 bg-richblack-700 rounded-lg shadow border border-richblack-600"
                whileHover={{ y: -3 }}
              >
                <div className="w-10 h-10 rounded-full bg-richblack-800 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <span className="font-medium text-xs text-center text-richblack-5">
                  Resources
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Phone Mockup Section */}
          <motion.div
            className="flex lg:justify-end justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Phone outline - scaled down */}
              <div className="w-56 h-[380px] bg-richblack-700 rounded-[40px] border-8 border-richblack-600 shadow-xl overflow-hidden">
                {/* Screen content */}
                <div
                  className="h-full w-full rounded-[32px] overflow-hidden relative"
                  style={{
                    background:
                      "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
                  }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 shadow">
                        <img src={Cntlogo} alt="CNT-logo" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        CNT Academy
                      </h3>
                      <p className="text-blue-200 text-sm mt-1">
                        Trade • Learn • Succeed
                      </p>
                    </div>

                    <div className="w-full max-w-[160px]">
                      <div className="bg-richblack-800/80 backdrop-blur-sm rounded-lg p-3 mb-4 border border-richblack-600">
                        <p className="text-white text-sm font-medium">
                          Learn something new today!
                        </p>
                      </div>

                      <div className="space-y-3">
                        <motion.div
                          className="bg-richblack-700/80 backdrop-blur-sm border border-richblack-600 rounded-lg p-3 text-center cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="text-white text-sm">
                            Continue Learning
                          </span>
                        </motion.div>

                        <motion.div
                          className="bg-gradient-to-r from-cyan-600 to-blue-500 rounded-lg p-3 text-center cursor-pointer shadow"
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="text-white text-sm">
                            Market Analysis
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Notification bar */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-white text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaDownload className="text-lg text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-600 to-blue-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-center">
                  <span className="text-xs block font-bold text-white">
                    FREE
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotionBanner;
