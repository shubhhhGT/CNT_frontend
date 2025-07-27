import toast from "react-hot-toast";
import { newsletterEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";

const { SUBSCRIBE_TO_NEWSLETTER, GET_ALL_SUBCRIBERS } = newsletterEndpoints;

export async function getAllSubscribers(token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_SUBCRIBERS, null, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("GET_ALL_SUBCRIBERS ERROR...", error);
    toast.error("Could not get all the subscribers");
  }
  toast.dismiss(toastId);
  return result;
}

export async function subscribeToNewsletter(formdata) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector(
      "POST",
      SUBSCRIBE_TO_NEWSLETTER,
      formdata
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    toast.success("Subscribed successfully!");
    result = response.data;
  } catch (error) {
    console.log("SUBSCRIBE_TO_NEWSLETTER ERROR...", error);
    toast.error("Could not susbcribe to the newsletter");
  }
  toast.dismiss(toastId);
  return result;
}
