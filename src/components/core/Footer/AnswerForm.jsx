import React, { useState } from "react";
import { answerQuestion } from "../../../services/operations/qnaApi";
import { useSelector } from "react-redux";

const AnswerForm = ({ questionId }) => {
  const [content, setContent] = useState("");
  const { token } = useSelector((state) => state.auth);

  const submitAnswer = async () => {
    await answerQuestion({ questionId, content }, token);
    setContent("");
    window.location.reload(); // Or better, trigger state refresh
  };

  return (
    <div className="mt-2">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your answer..."
        className="w-full border p-2 rounded"
      />
      <button
        onClick={submitAnswer}
        className="bg-green-600 text-white px-4 py-1 mt-2 rounded"
      >
        Submit Answer
      </button>
    </div>
  );
};

export default AnswerForm;
