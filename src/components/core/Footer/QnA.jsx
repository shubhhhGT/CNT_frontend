import React, { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import QuestionForm from "./QuestionForm";
import Tab from "../../../common/Tab";
import { getAllQuestions } from "../../../services/operations/qnaApi";
import { motion } from "framer-motion";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi"; // icon
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "../../../utils/constants";

const tabData = [
  { id: 1, tabName: "Unanswered", type: "unanswered" },
  { id: 2, tabName: "Answered", type: "answered" },
];

const QnAPage = () => {
  const [questions, setQuestions] = useState([]);
  const [field, setField] = useState("unanswered");
  const [showForm, setShowForm] = useState(false);
  const { user } = useSelector((state) => state.profile);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const res = await getAllQuestions();
    setQuestions(res);
  };

  const filtered =
    field === "answered"
      ? questions.filter((q) => q.isAnswered)
      : questions.filter((q) => !q.isAnswered);

  return (
    <div className="px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl text-richblack-5 font-bold text-center mt-8">
        Community Q&A
      </h1>
      <div className="flex justify-center">
        <Tab tabData={tabData} field={field} setField={setField} />
      </div>

      <div className="grid md:grid-cols-2 gap-6 min-h-[200px]">
        {filtered.length > 0 ? (
          filtered.map((q) => (
            <QuestionCard
              key={q._id}
              question={q}
              isAdmin={user?.accountType === ACCOUNT_TYPE.ADMIN}
            />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-full flex flex-col items-center justify-center text-center mt-10"
          >
            <HiOutlineQuestionMarkCircle className="text-5xl text-richblack-300 mb-4" />
            <p className="text-xl text-richblack-200 font-semibold">
              {field === "answered"
                ? "No questions have been answered yet."
                : "No questions have been asked yet."}
            </p>
            <p className="text-richblack-400 mt-2 text-sm max-w-md">
              {field === "answered"
                ? "Once an admin responds, questions will appear here."
                : "Be the first to ask a question and help build our knowledge base!"}
            </p>
          </motion.div>
        )}
      </div>

      <QuestionForm
        show={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={fetchQuestions}
      />

      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-3 rounded-full shadow-md text-lg hover:bg-blue-700 transition-all"
      >
        Ask a Question
      </button>
    </div>
  );
};

export default QnAPage;
