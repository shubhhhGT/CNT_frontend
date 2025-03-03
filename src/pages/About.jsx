import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import VikasBagariaMain from "../assets/Images/VikasBagariaMain.png";
import bannerimage3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
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
            Welcome to CNT Academy –
            <HighlightText
              text={"Your Ultimate Guide to Stock Market Success!"}
            />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Welcome to <span className=" text-richblack-5">CNT Academy</span>,
              the{" "}
              <span className=" text-richblack-5">
                #1 destination for financial education
              </span>
              , where you’ll discover the secrets of Technical & Fundamental
              Analysis used by top traders and investors. At CNT Academy, we
              make stock market education simple, practical, and Scientific for
              everyone—whether you're a beginner or an experienced trader!
            </p>
          </header>
          <div className="h-[350px] md:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[30%] flex flex-col md:flex-row justify-between items-center w-[100%] gap-10 lg:gap-5">
            <div className="w-[100%] md:w-[60%] font-semibold text-lg md:text-xl translate-y-[10%]">
              <p className=" text-richblack-100">
                Founded by Vikash Bagaria, a seasoned market expert, SEBI
                Registered Research Analyst, CNT Academy is here to transform
                YOU into a confident, pro trader—no more gambling, no more
                uncertainty! Our mission is to empower individuals with
                real-world trading & investment strategies that actually work.
              </p>

              <p className=" text-center text-richblack-100">
                It’s NOT luck. It’s skill, strategy, and market knowledge.
              </p>
            </div>
            <img src={bannerimage3} alt="bannerImage" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="border-b border-richblack-700">
        <div className="mx-auto flex flex-col justify-between gap-10 w-11/12 max-w-maxContent text-richblack-500">
          <div className="h-[150px] md:h-[100px]"></div>
          <Quote />
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          {/* Section 3 top div */}
          <div className="flex flex-col items-center gap-0 md:gap-10 lg:flex-row justify-between">
            {/* Founding story left box */}
            <div className="my-24 flex lg:w-[50%] flex-col gap-5 md:gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]  text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%]">
                Meet Our Founder
              </h1>
              <p className="bg-gradient-to-br from-[#3ab44c] via-[#FD1D1D] to-[#fc9445]  text-transparent bg-clip-text md:text-2xl text-lg font-semibold lg:w-[90%]">
                Vikash Bagaria – The SEBI-Registered Research Analyst Who Cracks
                the Code of Stock Trading!
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                <span className=" text-lg text-richblack-50">
                  Vikash Bagaria
                </span>{" "}
                – SEBI-Registered Research Analyst
                <span className=" text-lg text-richblack-50">
                  (INH300008155)
                </span>
                , full-time trader, mentor, and the brains behind Chartn Trade
                Academy – has helped many traders & investors unlock REAL market
                secrets that work!
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With 17+ years of experience in Technical & Fundamental
                Analysis, Vikash has cracked the formula behind stock movements,
                options trading, and wealth-building strategies that the pros
                don’t want you to know!
              </p>
            </div>
            {/* Founding story right box */}
            <div>
              <img
                src={VikasBagariaMain}
                alt="FoundingStory"
                className=" drop-shadow-[0_0_10px_#FC6767]"
              />
            </div>
          </div>
          {/* Section 3 bottom div */}
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            {/* Our Vision left box */}
            <div className="my-14 lg:my-24 flex lg:w-[50%] flex-col gap-6">
              <h2 className="font-semibold bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text text-4xl lg:w-[90%]">
                Our Vision -{" "}
                <span className=" font-extralight bg-gradient-to-b from-[#e68600] to-[#d9f923]  text-transparent bg-clip-text text-3xl">
                  A NEW ERA of Smart, Pro Traders!
                </span>
              </h2>
              <p className="text-left text-richblack-100">
                We’re on a mission to create a NEW generation of traders &
                investors who:
              </p>
              <ul className="mt-1 list-disc list-inside text-richblack-300 text-left space-y-2">
                <li>KNOWS financial freedom is accessible to EVERYONE!</li>
                <li>NEVER rely on luck – Trade with confidence & strategy!</li>
                <li>KNOW how to make money in ANY market!</li>
                <li>Can Achieve FINANCIAL FREEDOM through smart investing!</li>
                <li>
                  Have a future where YOU trade with confidence, skill, and
                  strategy!
                </li>
              </ul>
            </div>
            {/* Our Vision right box */}
            <div className="mt-0 mb-20 lg:my-24 flex lg:w-[50%] flex-col gap-6">
              <h2 className="text-4xl lg:w-[90%]">
                <HighlightText text={"Our Mission - "} />
                <span className=" font-extralight bg-gradient-to-b from-[#3d00e6] to-[#dc23f9]  text-transparent bg-clip-text text-3xl">
                  Empowering You to Take Control of Your Financial Future!
                </span>
              </h2>
              <p className="text-left text-richblack-100">
                At CNT Academy, our mission is simple yet powerful:
              </p>
              <ul className="mt-1 list-disc list-inside text-richblack-300 text-left space-y-2">
                <li>
                  Educate, Empower & Elevate individuals with real-world stock
                  market knowledge.
                </li>
                <li>
                  Bridge the gap between theory and practical market success.
                </li>
                <li>
                  Turn beginners into confident traders & investors with proven
                  strategies!
                </li>
                <li>
                  We are here to transform financial literacy, ensuring YOU
                  never trade blindly again!
                </li>
              </ul>
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
