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

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative gap-8 mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
        {/* Become an Instructor button */}
        <Link to={"/login"}>
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 w-fit">
            <div className="flex items-center rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 gap-2">
              <p>Start Teaching Investment</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Empower Your Financial Future with{" "}
          <HighlightText text={"Stock Market Skills"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 text-center w-[90%] mx-auto text-lg font-bold text-richblack-300">
          Learn the intricacies of the stock market with our expert-led courses.
          From basic to advanced trading strategies, we offer hands-on lessons
          tailored to boost your investing knowledge.
        </div>

        {/* CTA buttons */}
        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/login"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Start Teaching
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
                Unlock your <HighlightText text={"investment potential "} />{" "}
                with our courses
              </div>
            }
            subheading={
              "Our stock market courses are designed by industry veterans who understand the nuances of financial markets and are eager to share their expertise with you."
            }
            ctabtn1={{
              active: true,
              linkto: "/login",
              text: "Enroll Now",
            }}
            ctabtn2={{
              active: false,
              linkto: "/login",
              text: "Learn More",
            }}
            codeblock={`Welcome to Investment Courses
                        Explore a range of topics:
                        - Stock market fundamentals
                        - Trading strategies
                        - Financial analysis
                        - Risk management techniques
                        Get the knowledge you need
                        to make confident investment decisions.
                        Join our community of learners.`}
            codeColor={"text-yellow-25"}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] lg:w-[50%] text-4xl font-semibold">
                Start <HighlightText text={"investing in seconds"} />
              </div>
            }
            subheading={
              "Experience hands-on learning with real-time investment simulations and portfolio management from day one."
            }
            ctabtn1={{
              active: true,
              linkto: "/login",
              text: "Continue Lesson",
            }}
            ctabtn2={{
              active: false,
              linkto: "/login",
              text: "Learn More",
            }}
            codeblock={`Investment Home
                        Start building your skills in:
                        - Market trend analysis
                        - Portfolio management
                        - Stock valuation techniques
                        Unlock insights that can shape
                        your financial future.
                        Let’s dive into real-world scenarios
                        and practical strategies.
                        Become an informed investor today.`}
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
