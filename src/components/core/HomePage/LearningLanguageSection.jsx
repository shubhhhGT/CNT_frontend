import React, { useEffect, useState } from "react";
import HighlightText from "./HighlightText";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.png";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./Button";
import { getCourseByStratergy } from "../../../services/operations/courseDetailsAPI";
import StratergyCards from "./StratergyCards";

const LearningLanguageSection = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await getCourseByStratergy();
      setCourses(result);
    };
    fetchCourses();
  }, []);
  return (
    <div>
      <div className="flex flex-col">
        {/* Heading */}
        <div className="text-4xl font-semibold text-center my-10">
          Your swiss knife for
          <HighlightText text={"learning the Market."} />
        </div>

        {/* subheading */}
        <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
          With Spin, mastering the stock market becomes effortless. Enjoy expert
          guidance with realistic scenarios, track your investment progress,
          tailor your learning schedule, and more.
        </div>

        {/* Cards */}
        {/* <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
          <img
            src={Know_your_progress}
            alt="KnowYourProgress"
            className="object-contain lg:-mr-32"
          />
          <img
            src={Compare_with_others}
            alt="CompareWithOthers"
            className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
          />
          <img
            src={Plan_your_lessons}
            alt="PlanYourLessons"
            className="object-contain lg:-ml-36 lg:-mt-5 -mt-16"
          />
        </div> */}
        {/* Course Cards */}
        <div className="flex items-center justify-center mt-8 lg:mt-0">
          <StratergyCards courses={courses} />
        </div>

        {/* Button */}
        <div className="w-fit mx-auto lg:mb-20 mb-8 mt-5">
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn More</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
