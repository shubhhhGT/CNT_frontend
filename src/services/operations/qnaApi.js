import toast from "react-hot-toast";
import { qnaEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";

const { ANSWER_QUESTION, ASK_QUESTION, GET_ALL_QUESTIONS } = qnaEndpoints;

export async function getAllQuestions() {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_QUESTIONS, null);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.questions;
  } catch (error) {
    console.log("GET_ALL_QUESTIONS ERROR...", error);
    toast.error("Could not get all questions");
  }
  toast.dismiss(toastId);
  return result;
}

export async function askQuestion(title, description) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("POST", ASK_QUESTION, {
      title,
      description,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
  } catch (error) {
    console.log("ASK_QUESTION ERROR...", error);
    toast.error("Could not ask questions");
  }
  toast.dismiss(toastId);
  return result;
}

export async function answerQuestion({ questionId, content }, token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector(
      "POST",
      ANSWER_QUESTION,
      {
        questionId,
        content,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data;
  } catch (error) {
    console.log("ANSWER_QUESTION ERROR...", error);
    toast.error("Could not answer question");
  }
  toast.dismiss(toastId);
  return result;
}
