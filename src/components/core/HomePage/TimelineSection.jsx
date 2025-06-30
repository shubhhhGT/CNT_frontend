import React, { useState } from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineimage from "../../../assets/Images/TimelineImage.png";
import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const TimelineSection = () => {
  const Timeline = [
    {
      Logo: Logo1,
      heading: "The FREE Golden Ticket",
      Description: [
        "Perfect for beginners who want to explore the world of stock trading before committing.",
        "The biggest stock market myths that are keeping you broke!",
        "	Introduction to the stock market & how it works",
        "	Understanding market movements & price action",
        "Common myths & mistakes every new trader should avoid",
        "	A sneak peek into technical & fundamental analysis",
        "How to read stock charts like a pro (even if you’re a total beginner!)",
        "The one secret every successful trader knows—but no one tells you!",
      ],
    },
    {
      Logo: Logo2,
      heading: "The Beginner’s Breakthrough",
      Description: [
        "Ideal for those who want to start trading with a strong foundation.",
        "Trading 101: The absolute must-knows before placing your first trade",
        "Essential stock market concepts & terminology",
        "Basics of technical analysis: Candlestick patterns & trend analysis",
        "Introduction to fundamental analysis & stock selection",
        "Risk management strategies to protect your capital",
        "The 3 Golden Rules to avoid market traps and losses",
        "How to build a trading strategy that actually works!",
      ],
    },
    {
      Logo: Logo3,
      heading: "The Market Hacker",
      Description: [
        "Designed for traders looking to refine their skills and develop a structured approach.",
        "Chart Patterns That Scream ‘BUY’ & ‘SELL’ – Learn to Spot Them Instantly!",
        "The 5 deadly trading mistakes (and how to NEVER make them!)",
        "Advanced technical indicators & chart patterns",
        "Intraday & swing trading strategies.",
        "Understanding macroeconomic trends & their impact on stock prices",
        "How to build a strong trading plan & avoid emotional trading",
        "Insider tricks to picking winning stocks before the crowd does!",
      ],
    },
    {
      Logo: Logo4,
      heading: "The Trading Genius",
      Description: [
        "For experienced traders aiming to enhance their profitability and risk management.",
        "Options Trading EXPOSED – Strategies that Pro don’t want you to know!",
        "Scalping & Intraday Hacks – Learn the moves of pro traders",
        "Advanced options trading & derivative strategies",
        "	Scalping, momentum, and high-frequency trading techniques",
        "Portfolio diversification & hedging against market downturns",
        "The psychology of successful traders & decision-making techniques",
        "The Ultimate Risk Management Formula – Trade big, lose small!",
      ],
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);
  const navigate = useNavigate();

  // something extra
  // Hook to detect when the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when in view
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
        {/* Left Box */}
        <div className="lg:w-[45%] flex flex-col gap-2 lg:gap-0">
          {Timeline.map((element, index) => {
            return (
              <div className="flex flex-col lg:gap-1 " key={index}>
                <div className="flex flex-row gap-5" key={index}>
                  {/* Logo */}
                  <div className="w-[50px] h-[50px] rounded-full justify-center bg-white flex items-center">
                    <img src={element.Logo} alt="logo" />
                  </div>

                  {/* Content */}
                  {/* <div className="flex flex-col">
                    <h2 className="font-semibold text-[18px]">
                      {element.heading}
                    </h2>
                    <p className="text-base">{element.Description}</p>
                  </div> */}

                  <motion.div
                    onClick={() =>
                      setExpandedCard(expandedCard === index ? null : index)
                    }
                    className={`cursor-pointer bg-white shadow-md rounded-2xl p-4 transition-all w-full ${
                      expandedCard === index ? "shadow-lg" : "hover:shadow-lg"
                    }`}
                    initial={{ scale: 1 }}
                    animate={{ scale: expandedCard === index ? 1.05 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h2 className="font-semibold text-[16px] mb-2">
                      {element.heading}
                    </h2>
                    <p className="text-sm mb-2">{element.Description[0]}</p>
                    <AnimatePresence>
                      {expandedCard === index && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden list-disc pl-5"
                        >
                          {element.Description.slice(1).map((point, i) => (
                            <li key={i} className="text-base">
                              {point}
                            </li>
                          ))}

                          {/* Explore More button */}
                          <div
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent card collapse on button click
                              navigate("/plans");
                            }}
                            className="inline-block mt-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                          >
                            Explore More
                          </div>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
                <div
                  className={`${
                    Timeline.length - 1 === index ? "hidden" : "block"
                  } h-10 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[24px] translate-y-[-20px]`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Right box */}
        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          {/* green box */}
          <div
            ref={ref}
            className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 "
          >
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              {/* <p className="text-3xl font-bold w-[75px]">10</p> */}
              <p className="text-3xl font-bold w-[75px]">
                {inView && <CountUp start={0} end={10} duration={2.5} />}
                {"+"}
              </p>
              <p className="text-sm text-caribbeangreen-300 w-[75px]">
                Years of Experience
              </p>
            </div>

            <div className="flex items-center gap-5 lg:px-14 px-7">
              {/* <p className="text-3xl font-bold w-[75px]">250</p> */}
              <p className="text-3xl font-bold w-[75px]">
                {inView && <CountUp start={0} end={250} duration={2} />}
                {"+"}
              </p>
              <p className="text-sm text-caribbeangreen-300 w-[75px]">
                Types of Courses
              </p>
            </div>
          </div>
          {/* Timeline image */}
          <img
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
            src={timelineimage}
            alt="timelineimage"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
