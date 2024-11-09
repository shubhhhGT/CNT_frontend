import React from "react";
import HighlightText from "../HomePage/HighlightText";
import Button from "../HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Financial Insights for",
    highlightText: "Everyone, Everywhere",
    description:
      "CntAcademy partners with top financial institutions and experts to deliver accessible, impactful, and practical investment knowledge for individuals and businesses worldwide.",
    BtnText: "Learn More",
    BtnLink: "/login",
  },
  {
    order: 1,
    heading: "Market-Driven Curriculum",
    description:
      "Stay ahead with our curriculum designed to align with current market needs and financial industry trends, making your learning both efficient and relevant.",
  },
  {
    order: 2,
    heading: "Our Learning Approach",
    description:
      "Explore our diverse learning approaches at TradeSmart. We collaborate with industry leaders and experts to bring you the latest techniques and strategies for effective investing.",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Boost your credibility with industry-recognized certifications. Our curriculum is meticulously crafted to equip you with the skills and knowledge that top employers value in finance.",
  },
  {
    order: 4,
    heading: `Real-Time Portfolio "Auto-Evaluation"`,
    description:
      "Experience advanced auto-evaluation technology for seamless portfolio assessment, allowing you to stay focused on key investment strategies and decision-making.",
  },
  {
    order: 5,
    heading: "Prepared for the Market",
    description:
      "Get a competitive edge in the investment world. TradeSmart's curriculum is designed to align with industry demands, ensuring you're well-prepared to make informed decisions in the financial markets.",
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
