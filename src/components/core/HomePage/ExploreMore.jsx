import React, { useEffect, useState } from "react";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";
import { getCourseBytype } from "../../../services/operations/courseDetailsAPI";

const ExploreMore = () => {
  const tabNames = [
    "Free",
    "New to Trading",
    "Most popular",
    "Intermediate",
    "Advanced",
  ];

  const [currentTab, setCurrentTab] = useState(tabNames[0]);
  const [courses, setCourses] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);

  const fetchCourses = async (courseType) => {
    setLoading(true);
    try {
      const allCourses = await getCourseBytype(courseType);
      if (allCourses) {
        setCourses(allCourses);
        setSelectedCard(allCourses[0].courseName); // Assuming the API returns a similar structure
      } else {
        setCourses([]);
        setSelectedCard(null);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const setMyCards = (value) => {
    setCurrentTab(value);
    if (value === "New to Trading") value = "Beginner";
    fetchCourses(value);
  };

  useEffect(() => {
    // Fetch courses initially for the default tab
    fetchCourses(currentTab);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* Heading */}
      <div className="sm:w-full w-[90%] lg:text-4xl text-3xl font-semibold sm:text-center pl-3 sm:p-0">
        CNT Academy -
        <HighlightText text={"Your Path to Market Domination!"} />
      </div>

      {/* Sub Heading */}
      <div className="sm:text-center pl-3 sm:p-0 text-richblack-300 text-[16px] md:text-lg font-semibold mt-3 mb-24 lg:mb-0">
        At CNT Academy, we provide a structured and results-driven approach to
        stock market education. Whether you're just starting or looking to
        refine your advanced strategies, our courses are designed to empower you
        with the right skills, knowledge, and confidence to navigate the markets
        like a PRO!
      </div>

      {/* Tabs */}
      <div className="hidden lg:flex gap-5 mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabNames.map((element, index) => {
          return (
            <div
              className={`text-base flex flex-row items-center gap-2
                         ${
                           currentTab === element
                             ? "bg-richblack-900 text-richblack-5 font-medium"
                             : "text-richblack-200"
                         } rounded-full transition-all duration-200 cursor-pointer
                          hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
              key={index}
              onClick={() => setMyCards(element)}
            >
              {element}
            </div>
          );
        })}
      </div>

      <div className=" block h-[885px] min-[821px]:h-[550px] lg:h-[200px]"></div>
      {/* Course Cards */}
      <div className="absolute gap-10 mt-10 lg:mt-0 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full bottom-0 min-[821px]:translate-y-[25%] translate-y-[18%]  lg:translate-y-[50%] left-1/2 -translate-x-1/2 text-black lg:mb-0 mb-7 lg:px-0 px-3 sm:w-full sm:px-2 md:w-full md:px-4 lg:w-full">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
