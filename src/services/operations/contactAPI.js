import { apiConnector } from "../apiconnector";
import { contactUsEndpoint } from "../apis";
import { toast } from "react-hot-toast";

export function contactUs(data, setLoading) {
  const { email, firstName, lastName, message, phoneNo, countrycode } = data;
  setLoading(true);
  return async () => {
    try {
      await apiConnector("POST", contactUsEndpoint.CONTACT_US_API, {
        email,
        firstName,
        lastName,
        message,
        phoneNo,
        countrycode,
      });

      toast.success("Request Sent");
    } catch (error) {
      console.log("ERROR MESSAGE...", error);
      toast.error("Error sending request");
    }
    setLoading(false);
  };
}
