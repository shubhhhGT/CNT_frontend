import React, { useState, useEffect, useRef } from "react";

const AnimatedQuote = ({ children }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const quoteRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (quoteRef.current) {
      const quoteTop =
        quoteRef.current.getBoundingClientRect().top + window.scrollY;
      const triggerPosition = window.innerHeight * 0.4;
      const currentPosition = quoteTop - scrollPosition;
      setIsHighlighted(currentPosition < triggerPosition);
    }
  }, [scrollPosition]);

  return (
    <p
      ref={quoteRef}
      className={`font-satisfy text-2xl md:text-4xl transition-all duration-500 ${
        isHighlighted
          ? "text-richblack-5 drop-shadow-glow"
          : "text-richblack-300 opacity-75"
      }`}
      style={{ lineHeight: "1.6" }}
    >
      {children}
    </p>
  );
};

const Quote = () => {
  return (
    <div className="mx-auto py-5 pb-20 text-center">
      <AnimatedQuote>
        “At CNT Academy, we DON’T teach outdated theories —
        <span className="text-yellow-200">
          {" "}
          we teach you REAL market strategies that actually work!
        </span>
        Whether you're a beginner or an experienced trader,
        <span className="text-blue-200">
          {" "}
          we’ll teach you how to spot trades, invest smartly,
        </span>
        <span className="text-green-200"> and build wealth like a pro!</span>”
      </AnimatedQuote>
    </div>
  );
};

export default Quote;
