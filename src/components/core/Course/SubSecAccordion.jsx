import React from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { convertSecondsToDuration } from "../../../utils/convertToDuration";

const SubSecAccordion = ({ subSec, index, sectionIndex }) => {
  const showPreview = sectionIndex === 0 && (index === 0 || index === 1);

  const handlePreviewClick = () => {
    // Replace this with your actual Play Store app URL
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.cntacademy.app";
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-richblack-100">
          <HiOutlineVideoCamera />
          <p>{subSec?.title}</p>

          {/* Preview Button */}
          {showPreview && (
            <button
              onClick={handlePreviewClick}
              className="text-sm text-yellow-50 underline ml-2"
            >
              Preview
            </button>
          )}
        </div>

        <div className="text-richblack-100">
          {convertSecondsToDuration(subSec.timeDuration)}{" "}
        </div>
      </div>
    </div>
  );
};

export default SubSecAccordion;
