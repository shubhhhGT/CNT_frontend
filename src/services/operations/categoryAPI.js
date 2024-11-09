import { apiConnector } from "../apiconnector";
import { categoryEndpoints } from "../apis";
import { toast } from "react-hot-toast";

export function createCategory(data, setLoading, token) {
  const { name, description } = data;
  setLoading(true);
  return async () => {
    try {
      const response = await apiConnector(
        "POST",
        categoryEndpoints.ADD_CATEGORY_API,
        { name, description },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log("Create Category Response", response);
      toast.success("Request Sent");
    } catch (error) {
      console.log("ERROR MESSAGE...", error);
      toast.error("Error sending request");
    }
    setLoading(false);
  };
}
