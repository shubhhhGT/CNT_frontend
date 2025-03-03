import React from "react";
import HighlightText from "../HomePage/HighlightText";
import Button from "../HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Led by Vikash Bagaria - ",
    highlightText:
      "SEBI-Registered – 100% Legit, No Fake Gurus Here! with real market experience!",
    description:
      "Tired of guessing in the stock market? Losing money on bad trades? Watching others make profits while you're stuck? It's time to change the game!",
    BtnText: "Learn More",
    BtnLink: "/login",
  },
  {
    order: 1,
    heading: "Vikash Bagaria shares PROVEN, market & time tested strategies!",
    description:
      "Benefit from strategies that have been rigorously validated in real-world market conditions, ensuring you learn techniques that truly work.",
  },
  {
    order: 2,
    heading: "No Useless Theory – 100% Practical Training!",
    description:
      "Dive into training that cuts through the fluff—everything you learn is immediately applicable, focusing on practical skills over outdated theory.",
  },
  {
    order: 3,
    heading: "Master Intraday, Swing, & Long-Term Investing in ONE Place!",
    description:
      "Gain a comprehensive skill set by learning multiple trading styles—from quick intraday moves to swing and long-term investments—all in one integrated program.",
  },
  {
    order: 4,
    heading: `Join a Community of Smart Traders & Grow Together!`,
    description:
      "Become part of a vibrant network of like-minded traders where sharing insights and collaborative growth are at the heart of the learning experience.",
  },
  {
    order: 5,
    heading: "Learn the EXACT Strategies That Work for Pro Traders?",
    description:
      "Discover the precise, battle-tested techniques used by professional traders, empowering you to make informed, confident decisions in the market.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto grid-cols-1 xl:grid-cols-4 mb-12 w-[350px] xl:w-fit">
      {LearningGridArray.map((card, index) => {
        return (
          <div
            key={index}
            className={`${index === 0 && "xl:col-span-2 xl:h-[294px]"} 
                ${
                  card.order % 2 === 1
                    ? "bg-richblack-700 h-[294px]"
                    : card.order % 2 === 0
                    ? "bg-richblack-800 h-[294px]"
                    : "bg-transparent"
                }
                ${card.order === 3 && "xl:col-start-2"}`}
          >
            {card.order === -1 ? (
              <div className="flex flex-col xl:w-[90%] gap-3 pb-10 xl:pb-0">
                <h2 className="text-4xl font-semibold">
                  {card.heading}
                  <span>
                    <HighlightText text={card.highlightText} />
                  </span>
                </h2>
                <p className="font-medium text-richblack-300">
                  {card.description}
                </p>
                <div className="w-fit mt-2">
                  <Button
                    active={true}
                    children={card.BtnText}
                    linkto={card.BtnLink}
                  />
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h3 className="text-lg text-richblack-5">{card.heading}</h3>
                <p className="font-medium text-richblack-300">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
