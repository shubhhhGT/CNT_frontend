import React from "react";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import "../App.css";
import CTAButton from "../components/core/HomePage/Button";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../common/Footer";
import ReviewSlider from "../common/ReviewSlideer";
import { useSelector } from "react-redux";
import OwnerSection from "../components/core/HomePage/Owner";

import { motion, useInView } from "framer-motion"; // New import
import { useRef } from "react"; // New import

const Home = () => {
  const { user } = useSelector((state) => state.profile);
  const ref = useRef(null); // New ref for animations
  // eslint-disable-next-line
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // New view detection

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      {/* Section 1 */}
      <div className="relative gap-8 mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center text-4xl font-semibold mt-16 mx-auto w-[90%]"
        >
          CNT Academy – Transforming Knowledge into Financial Success!{" "}
          <HighlightText text={"Learn – Apply – Succeed"} />
        </motion.div>

        {/* Sub Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="-mt-3 text-center w-[90%] mx-auto text-lg font-bold text-richblack-300 italic"
        >
          "STOP Losing Money! START Trading Like the Pros! The stock market
          isn’t a gamble—IF you know the right strategies!"
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-row gap-7 mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CTAButton active={true} linkto={"/login"}>
            Learn More
          </CTAButton>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <OwnerSection />
        </motion.div>

        {/* Code section 1 */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <motion.div className="text-4xl font-semibold">
                <HighlightText text={"Welcome to CNT Academy -"} /> Where
                Traders Are Made, Not Born!
              </motion.div>
            }
            subheading={
              "Led by Vikash Bagaria, CNT Academy provides expert education in Technical & Fundamental Analysis, options trading, risk management, and everything you need to navigate the markets like a pro."
            }
            ctabtn1={{
              active: true,
              linkto: "/signup",
              text: "Enroll Now",
            }}
            ctabtn2={{
              active: false,
              linkto: "/login",
              text: "Learn More",
            }}
            codeblock={`Introduction to Candlestick Patterns & Chart Reading.
                        Moving Averages, RSI, MACD, and Other Key Indicators.
                        How to Identify Support & Resistance Levels.
                        Trend Reversals & Breakout Trading Strategies.
                        Real-Time Market Analysis & Practical Applications.
                        How to Identify Undervalued & High-Growth Stocks.
                        Understanding Financial Statements. (Balance Sheet, P&L, Cash Flow)
                        The Science Behind Risk & Reward in Trading.
                        How to Set Stop-Loss & Take-Profit Levels Effectively.`}
            codeColor={"text-yellow-25"}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </motion.div>

        {/* Code section 2 */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold">
                Stock Market Success Isn’t Luck –{" "}
                <HighlightText text={"It’s Strategy! Learn Now!"} />
              </div>
            }
            subheading={
              "CNT Academy is an stock market institute that provides the most simplified and to-the-point stock market course from the scratch for beginners."
            }
            ctabtn1={{
              active: true,
              linkto: user ? "/dashboard/enrolled-courses" : "/signup",
              text: "Continue Lesson",
            }}
            ctabtn2={{
              active: false,
              linkto: "/login",
              text: "Learn More",
            }}
            codeblock={`Managing Emotions in Trading – Fear & Greed Control.
                        How to Stay Disciplined & Consistent in Trading.
                        Avoiding Common Trading Pitfalls.
                        Swing Trading vs. Day Trading – Which One Suits You?
                        Fibonacci Retracement & Advanced Charting Techniques.
                        Scalping & Momentum Trading Tactics.
                        Trading with Volume & Market Sentiment Indicators.
                        Understanding Options. (Calls, Puts, Strike Prices, Expiry)
                        Options Pricing & The Greeks Explained.
                        How Institutions Use Derivatives to Hedge Risk.`}
            codeColor={"text-white"}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </motion.div>

        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700 ">
        {/* Explore Full Catalog section */}
        <motion.div
          className="homepage_bg h-[320px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8 mx-auto">
            <motion.div
              className="h-[160px] lg:h-[150px]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="flex flex-row gap-7 text-white lg:mt-8"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
              initial="hidden"
              whileInView="visible"
            >
              <CTAButton active={true} linkto={"/login"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                <div>Learn More</div>
              </CTAButton>
            </motion.div>
          </div>
        </motion.div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8">
          {/* Skills for Financial Success section */}
          <motion.div
            className="lg:mt-20 mb-10 mt-[100px] flex flex-col lg:flex-row justify-between gap-7 lg:gap-0"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
          >
            <div className="text-4xl font-semibold lg:w-[45%]">
              Gain Skills for <HighlightText text={"Financial Success"} />
            </div>
            <div className="flex flex-col gap-10 lg:w-[40%] items-start">
              <div className="text-[16px]">
                To excel in today’s market, you need more than basic investing
                skills. Our courses give you insights and tools to stay ahead.
              </div>
              <CTAButton active={true} linkto={"/login"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </motion.div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <motion.div
        className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <InstructorSection />

        <motion.h2
          className="text-center text-4xl font-semibold mt-10"
          animate={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Reviews from Investors
        </motion.h2>
        <ReviewSlider />
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
