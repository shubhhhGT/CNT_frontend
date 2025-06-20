import React, { useState } from "react";
import { motion } from "framer-motion";
import AnswerForm from "./AnswerForm";

const QuestionCard = ({ question, isAdmin }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative bg-richblack-700 p-8 rounded-2xl border-richblack-600 border-2 hover:border-transparent transition-all group overflow-hidden"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3d00e633] to-[#dc23f933] opacity-0 group-hover:opacity-30 transition-opacity" />

      <div className="relative z-10">
        {/* Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-400 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-richblack-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h4m1-9a9 9 0 00-9 9c0 1.657.41 3.21 1.13 4.57l-1.11 3.32a1 1 0 001.26 1.26l3.32-1.11A8.963 8.963 0 0012 21a9 9 0 100-18z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#3d00e6] to-[#dc23f9] text-transparent bg-clip-text">
            {question.title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-blue-200 text-lg font-medium mb-3">
          {expanded || question.description.length <= 100
            ? question.description
            : question.description.slice(0, 100) + "..."}
        </p>

        {/* Expand/Collapse Toggle */}
        <button
          className="text-blue-400 underline text-sm mb-3"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Hide Details" : "Show Details"}
        </button>

        {/* Details */}
        {expanded && (
          <div className="mt-4 space-y-3">
            {question.isAnswered && question.answers?.length > 0 && (
              <>
                <p className="text-richblack-100 font-semibold">Answers:</p>
                <ul className="space-y-2">
                  {question.answers.map((ans, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-richblack-300"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-1" />
                      <div>{ans.content}</div>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Only show if admin and question is not yet answered */}
            {isAdmin && !question.isAnswered && (
              <div className="pt-4">
                <AnswerForm questionId={question._id} />
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default QuestionCard;
