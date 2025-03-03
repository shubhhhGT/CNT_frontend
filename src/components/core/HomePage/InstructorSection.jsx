import React from "react";
import instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const InstructorSection = () => {
  const { user } = useSelector((state) => state.profile);
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        {/* Left container */}
        <div className="lg:w-[50%]">
          <img
            src={instructor}
            alt="instructor_image"
            className="shadow-white shadow-[-20px_-20px_0_0]"
          />
        </div>

        {/* Right container */}
        <div className="lg:w-[50%] flex-col flex gap-10">
          <div className="w-full text-4xl font-semibold">
            CNT Academy –
            <HighlightText text={"Your Path to Market Domination!"} />
          </div>

          <div className="text-base font-medium text-justify w-[90%] text-richblack-300">
            At CNT Academy, we provide a structured and results-driven approach
            to stock market education. Whether you're just starting or looking
            to refine your advanced strategies, our courses are designed to
            empower you with the right skills, knowledge, and confidence to
            navigate the markets like a PRO!
          </div>

          <div className="w-fit">
            <CTAButton
              active={true}
              linkto={user ? "/dashboard/enrolled-courses" : "/login"}
            >
              <div className="flex items-center gap-3">
                Start Learning Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
