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
    `<span class="text-gradient-gold">Dear Trader,</span>`,
    `Welcome to CNT Academy – not just an institute, but a movement to empower the modern trader.`,
    `Every candlestick tells a story, every breakout hides opportunity, and every failure is a lesson in disguise. I’ve spent years decoding the language of charts, understanding the psychology of price, and living through every kind of market storm—bull, bear, sideways, and emotional.`,
    `Here, we teach more than indicators - we train you to think like the market, act with precision, and manage risks like a pro.`,
    `Let’s chart your growth, together.`,
    `Because when you learn to read the market, you learn to read yourself.`,
    `See you on the charts!`,
    `With gratitude & guidance,`,
    `<span class="text-gradient-gold">Vikash Bagaria</span>`,
    `<span class="text-gradient-gold">Founder – CNT Academy</span>`,
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
      <div className="lg:w-1/2 space-y-4 text-richblack-5 p-4">
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
