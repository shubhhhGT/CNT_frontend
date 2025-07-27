import toast from "react-hot-toast";
import { testimonialEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";

const { GET_ALL_TESTIMONIALS } = testimonialEndpoints;

export async function getAllTestimonials() {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_TESTIMONIALS, null);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.testimonials;
  } catch (error) {
    console.log("GET_ALL_TESTIMONIALS ERROR...", error);
    toast.error("Could not get all testimonials");
  }
  toast.dismiss(toastId);
  return result;
}
