import React from "react";
import HighlightText from "../HomePage/HighlightText";

const Quote = () => {
  return (
    <div className="text-xl md:text-3xl font-semibold mx-auto py-5 pb-20 text-center text-white">
      “ At CNT Academy, we DON’T teach outdated theories —
      <HighlightText
        text={" we teach you REAL market strategies that actually work!"}
      />
      ,
      <span className="font-bold bg-gradient-to-b from-[#FF512F] to-[#F09819]  text-transparent bg-clip-text">
        {" "}
        Whether you're a beginner or an experienced trader
      </span>
      , we’ll teach you how to spot trades, invest smartly,
      <span className="font-bold bg-gradient-to-b from-[#E65C00] to-[#F9D423]  text-transparent bg-clip-text">
        {" "}
        and build wealth like a pro!
      </span>{" "}
      ”
    </div>
  );
};

export default Quote;
