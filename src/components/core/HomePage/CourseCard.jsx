import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ cardData, selectedCard, setSelectedCard }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    setSelectedCard(cardData?.courseName);
    setTimeout(() => {
      navigate(`/courses/${cardData?._id}`);
    }, 500); // 1 second delay
  };

  // Function to truncate course description
  const truncateDescription = (description, maxLength) => {
    if (!description) return "";
    return description.length > maxLength
      ? `${description.slice(0, maxLength)}...`
      : description;
  };

  return (
    <div
      className={`w-[340px] lg:w-[30%] 
    ${
      selectedCard === cardData?.courseName
        ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
        : "bg-richblack-800"
    } text-richblack-25 h-[380px] box-border cursor-pointer`}
      onClick={handleCardClick}
    >
      <div className="flex flex-col gap-2 border-b-[2px] border-richblack-400 border-dashed h-[87%] p-4 lg:p-6 ">
        {/* Thumbnail */}
        {cardData?.thumbnail && (
          <img
            src={cardData?.thumbnail}
            alt={cardData?.courseName}
            className="w-full h-[150px] object-cover rounded-md"
          />
        )}

        {/* Heading */}
        <div
          className={`${
            selectedCard === cardData?.courseName && "text-richblack-800"
          } font-semibold text-[16px] md:text-[18px]`}
        >
          {truncateDescription(cardData?.courseName, 50)}
        </div>
        {/* Sub heading */}
        <div className="text-richblack-400">
          {truncateDescription(cardData?.courseDescription, 100)}
        </div>
      </div>

      <div
        className={`flex justify-between ${
          selectedCard === cardData?.courseName
            ? "text-blue-300"
            : "text-richblack-300"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.courseType}</p>
        </div>

        {/* FlowChart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.totalLessons}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
