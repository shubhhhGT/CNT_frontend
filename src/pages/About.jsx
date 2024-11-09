import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import bannerimage1 from "../assets/Images/aboutus1.webp";
import bannerimage2 from "../assets/Images/aboutus2.webp";
import bannerimage3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
import FoundingStory from "../assets/Images/FoundingStory.png";
import Stats from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../common/Footer";
import ReviewSlider from "../common/ReviewSlideer";

const About = () => {
  return (
    <div className="text-white">
      {/* Section 1 */}
      <section className="bg-richblack-700">
        <div className="relative w-11/12 flex flex-col max-w-maxContent mx-auto justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Empowering Investors for a
            <HighlightText text={"Financially Secure Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              CntAcademy is dedicated to revolutionizing financial education.
              We’re committed to providing actionable insights, cutting-edge
              strategies, and fostering a community of empowered investors.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[30%] grid w-[100%] grid-cols-3 gap-3 lg:gap-5">
            <img src={bannerimage1} alt="bannerImage" />
            <img src={bannerimage2} alt="bannerImage" />
            <img src={bannerimage3} alt="bannerImage" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="border-b border-richblack-700">
        <div className="mx-auto flex flex-col justify-between gap-10 w-11/12 max-w-maxContent text-richblack-500">
          <div className="h-[100px]"></div>
          <Quote />
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          {/* Section 3 top div */}
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            {/* Founding story left box */}
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]  text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%]">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                CntAcademy was founded with a vision to make high-quality
                investment education accessible to everyone. We started with a
                team of finance experts, investors, and enthusiasts passionate
                about bridging the knowledge gap in financial literacy and
                trading.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                We believe that financial success should be within everyone’s
                reach, regardless of experience or background. Our platform was
                created to break down complex financial concepts and empower
                users with the knowledge needed to navigate the stock market
                confidently.
              </p>
            </div>
            {/* Founding story right box */}
            <div>
              <img
                src={FoundingStory}
                alt="FoundingStory"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          {/* Section 3 bottom div */}
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            {/* Our Vision left box */}
            <div className="my-14 lg:my-24 flex lg:w-[40%] flex-col gap-10">
              <h2 className="font-semibold bg-gradient-to-b from-[#E65C00] to-[#F9D423]  text-transparent bg-clip-text text-4xl lg:w-[70%]">
                Our Vision
              </h2>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our vision is to create a world where anyone can achieve
                financial independence through informed investment choices. We
                are constantly evolving our platform to incorporate the latest
                financial tools, resources, and market insights.
              </p>
            </div>
            {/* Our Vision right box */}
            <div className="mt-0 mb-20 lg:my-24 flex lg:w-[40%] flex-col gap-10">
              <h2 className="text-4xl lg:w-[70%]">
                <HighlightText text={"Our Mission"} />
              </h2>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission is to build a global community of well-informed
                investors. We provide comprehensive training, foster a
                collaborative environment, and offer a platform where
                individuals can connect and grow their financial knowledge,
                ultimately helping them make smarter investment decisions.
              </p>
            </div>
          </div>
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
