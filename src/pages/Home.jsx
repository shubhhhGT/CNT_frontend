import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import "../App.css";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../common/Footer";
import ReviewSlider from "../common/ReviewSlideer";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div>
      {/* Section 1 */}
      <div className="relative gap-8 mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
        {/* Heading */}
        <div className="text-center text-4xl font-semibold mt-16 mx-auto w-[90%]">
          CNT Academy – Transforming Knowledge into Financial Success!{" "}
          <HighlightText text={"Learn – Apply – Succeed"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 text-center w-[90%] mx-auto text-lg font-bold text-richblack-300 italic">
          "STOP Losing Money! START Trading Like the Pros! The stock market
          isn’t a gamble—IF you know the right strategies!"
        </div>

        {/* CTA buttons */}
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/login"}>
            Learn More
          </CTAButton>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                <HighlightText text={"Welcome to CNT Academy -"} /> Where
                Traders Are Made, Not Born!
              </div>
            }
            subheading={
              "Led by SEBI-registered research analyst Vikash Bagaria, CNT Academy provides expert education in Technical & Fundamental Analysis, options trading, risk management, and everything you need to navigate the markets like a pro."
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
        </div>

        {/* Code section 2 */}
        <div>
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
        </div>

        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700 ">
        {/* Explore Full Catalog section */}
        <div className="homepage_bg h-[320px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8 mx-auto">
            <div className="h-[160px] lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/login"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8">
          {/* Skills for Financial Success section */}
          <div className="lg:mt-20 mb-10 mt-[100px] flex flex-col lg:flex-row justify-between gap-7 lg:gap-0">
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
          </div>

          <TimelineSection />
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Instructor Section */}
        <InstructorSection />

        {/* Review Section */}
        <h2 className="text-center text-4xl font-semibold mt-10">
          Reviews from Investors
        </h2>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
