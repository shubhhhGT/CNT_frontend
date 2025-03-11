// components/core/HomePage/OwnerVideoSection.jsx
import { useState, useEffect, useRef } from "react";
import Banner from "../../../assets/Images/banner.mp4";

const AnimatedTextLine = ({ children, index, scrollPosition }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const lineRef = useRef(null);
  const lineTop = useRef(0);

  useEffect(() => {
    if (lineRef.current) {
      lineTop.current =
        lineRef.current.getBoundingClientRect().top + window.scrollY;
    }
  }, []);

  useEffect(() => {
    const triggerPosition = window.innerHeight * 0.4; // 40% from top
    const currentPosition = lineTop.current - scrollPosition;
    setIsHighlighted(currentPosition < triggerPosition);
  }, [scrollPosition]);

  return (
    <p
      ref={lineRef}
      className={`font-handwriting text-xl transition-all duration-500 ${
        isHighlighted
          ? "text-richblack-5 drop-shadow-glow"
          : "text-richblack-300 opacity-75"
      }`}
    >
      {children}
    </p>
  );
};

const OwnerSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const messages = [
    `"When I started trading, I lost ₹5 lakhs in just 3 months - 
     <span class="text-yellow-200"> I learned the hard way so you don't have to.</span>"`,
    `"Our students have achieved
     <span class="text-blue-200"> 80% consistency rate</span> in 
     profitable trades through our structured approach."`,
    `"Trading isn't gambling - it's a skill that can be
     <span class="text-green-200"> systematically learned and mastered</span>."`,
    `"Join our community of
     <span class="text-caribbeangreen-200"> 10,000+ successful traders</span> 
     who've transformed their financial lives."`,
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center mx-3 my-7">
      <div className="w-full lg:w-1/2">
        <video
          className="w-full rounded-xl shadow-[10px_-5px_50px_-5px] shadow-blue-200"
          muted
          loop
          autoPlay
        >
          <source src={Banner} type="video/mp4" />
        </video>
      </div>

      {/* Owner's Message Container */}
      <div className="lg:w-1/2 space-y-8 text-richblack-5 p-4">
        <h2 className="text-3xl font-bold mb-4 font-handwriting">
          Message from Vikash Bagaria
        </h2>
        {messages.map((message, index) => (
          <AnimatedTextLine
            key={index}
            index={index}
            scrollPosition={scrollPosition}
          >
            <span dangerouslySetInnerHTML={{ __html: message }} />
          </AnimatedTextLine>
        ))}
      </div>
    </div>
  );
};

export default OwnerSection;
