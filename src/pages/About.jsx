import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import bannerimage3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
import Stats from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../common/Footer";
import ReviewSlider from "../common/ReviewSlideer";
import aboutBgImage from "../assets/Images/ROY_5001.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="text-white">
      {/* Section 1 */}

      <section className="bg-richblack-700 relative min-h-[100vh]">
        {/* Background image with enhanced gradients */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to right, 
              rgba(44,51,63,1) 0%, 
              rgba(44,51,63,0.8) 20%,
              rgba(44,51,63,0) 50%,
              rgba(44,51,63,0.8) 80%,
              rgba(44,51,63,1) 100%),
              linear-gradient(to bottom, 
              transparent 50%,
              rgba(0, 8, 20, 1) 100%),
              url(${aboutBgImage})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.9) contrast(1.1)",
          }}
        ></div>

        {/* Animated Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-11/12 max-w-maxContent mx-auto text-center z-10 pt-[70vh] pb-20"
        >
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto text-2xl md:text-4xl font-semibold lg:w-[70%]"
          >
            Welcome to CNT Academy –
            <HighlightText
              text={"Your Ultimate Guide to Stock Market Success!"}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-3 text-center font-medium text-richblack-5 text-base md:text-xl lg:w-[95%]"
            >
              Welcome to <span className="text-richblack-5">CNT Academy</span>,
              the{" "}
              <span className="text-richblack-5">
                #1 destination for financial education
              </span>
              , where you’ll discover the secrets of Technical & Fundamental
              Analysis used by top traders and investors.
            </motion.p>
          </motion.header>
        </motion.div>
      </section>

      <section className="bg-richblack-900 pt-20">
        <div className="relative w-11/12 max-w-maxContent mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 lg:gap-5"
          >
            <div className="w-full md:w-[35%] flex flex-col text-xl text-center">
              <motion.img
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src={bannerimage3}
                alt="bannerImage"
                className="rounded-lg shadow-xl"
              />
              <div className="text-3xl mt-4">
                <HighlightText text={"Vikash Bagaria"} />
              </div>
              <HighlightText text={"Who Cracks the Code of Stock Trading!"} />
            </div>

            <div className="w-full md:w-[60%] font-semibold text-lg md:text-xl">
              <p className="text-richblack-5 text-center">
                Founded by Vikash Bagaria, a seasoned market expert, full-time
                trader, mentor, and the brains behind Chartn Trade Academy – has
                helped many traders & investors unlock REAL market secrets that
                work! With 17+ years of experience in Technical & Fundamental
                Analysis, Vikash has cracked the formula behind stock movements,
                options trading, and wealth-building strategies that the pros
                don’t want you to know!
              </p>
              <p className="text-center text-richblack-5 mt-6">
                CNT Academy is here to transform YOU into a confident, pro
                trader—no more gambling, no more uncertainty!
              </p>
              <p className="text-center text-richblack-5 mt-6">
                It’s NOT luck. It’s skill, strategy, and market knowledge.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="border-b border-richblack-700">
        <div className="mx-auto flex flex-col justify-between gap-10 w-11/12 max-w-maxContent text-richblack-500">
          <div className="h-[70px] md:h-[40px]"></div>
          <Quote />
        </div>
      </section>

      {/* Section 3 */}
      <section className="relative py-20">
        <div className="mx-auto w-11/12 max-w-maxContent">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Vision Card */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative bg-richblack-800 p-8 rounded-2xl border-richblack-600 border-2 hover:border-transparent transition-all group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#e6860033] to-[#d9f92333] opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-caribbeangreen-500 rounded-full">
                    <svg
                      className="w-8 h-8 text-richblack-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text">
                    Our Vision
                  </h2>
                </div>
                <p className="text-xl font-semibold mb-4 text-caribbeangreen-200">
                  A NEW ERA of Smart, Pro Traders!
                </p>
                <p className="text-richblack-100 mb-6">
                  We're on a mission to create a NEW generation of traders &
                  investors who:
                </p>
                <ul className="space-y-3">
                  {[
                    "KNOWS financial freedom is accessible to EVERYONE!",
                    "NEVER rely on luck – Trade with confidence & strategy!",
                    "KNOW how to make money in ANY market!",
                    "Can Achieve FINANCIAL FREEDOM through smart investing!",
                    "Have a future where YOU trade with confidence, skill, and strategy!",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-richblack-300"
                    >
                      <div className="w-2 h-2 bg-caribbeangreen-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-richblack-700 p-8 rounded-2xl border-richblack-600 border-2 hover:border-transparent transition-all group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3d00e633] to-[#dc23f933] opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-400 rounded-full">
                    <svg
                      className="w-8 h-8 text-richblack-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3d00e6] to-[#dc23f9] text-transparent bg-clip-text">
                    Our Mission
                  </h2>
                </div>
                <p className="text-xl font-semibold mb-4 text-blue-200">
                  Empowering Your Financial Future!
                </p>
                <p className="text-richblack-100 mb-6">
                  At CNT Academy, our mission is simple yet powerful:
                </p>
                <ul className="space-y-3">
                  {[
                    "Educate, Empower & Elevate with real market knowledge",
                    "Bridge theory and practical success",
                    "Transform beginners into confident traders",
                    "Ensure you never trade blindly again",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-richblack-300"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 */}
      <Stats />

      {/* Section 5 */}
      <section className="mx-auto my-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* Review slider */}
      <section className="w-11/12 mx-auto my-20 max-w-maxContent flex-col flex items-center justify-between gap-8 bg-richblack-900 text-white">
        <div className="text-center text-4xl font-semibold mt-10">
          Reviews from Investors
        </div>
        <ReviewSlider />
      </section>
      {/* <div className="w-11/12 mx-auto ">
        <ReviewSlider />
      </div> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
