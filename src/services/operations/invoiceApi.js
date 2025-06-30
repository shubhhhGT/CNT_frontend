import toast from "react-hot-toast";
import { invoiceEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";

const { GET_ALL_INVOICES } = invoiceEndpoints;

export const getAllInvoices = async (token) => {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_INVOICES, null, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    result = response?.data?.data;
  } catch (error) {
    console.log("GET_ALL_INVOICES ERROR...", error);
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
};
