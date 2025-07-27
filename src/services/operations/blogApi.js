import toast from "react-hot-toast";
import { blogEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";

const { CREATE_BLOG, UPDATE_BLOG, DELETE_BLOG, GET_ALL_BLOGS, GET_BLOG_BY_ID } =
  blogEndpoints;

export async function getAllBlogs() {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_BLOGS, null);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("GET_ALL_BLOGS ERROR...", error);
    toast.error("Could not get all the blogs");
  }
  toast.dismiss(toastId);
  return result;
}

export async function createBlog(data, token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("POST", CREATE_BLOG, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("CREATE_BLOG ERROR...", error);
    toast.error("Could not create the blog");
  }
  toast.dismiss(toastId);
  return result;
}

export async function updateBlog(updates, id, token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector(
      "PUT",
      UPDATE_BLOG,
      { id, ...updates },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("UPDATE_BLOG ERROR...", error);
    toast.error("Could not update the blog");
  }
  toast.dismiss(toastId);
  return result;
}

export async function deleteBlog(id, token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector(
      "DELETE",
      DELETE_BLOG,
      { id: id },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("DELETE_BLOG ERROR...", error);
    toast.error("Could not delete the blog");
  }
  toast.dismiss(toastId);
  return result;
}

export async function getBlogById(blogId) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", `${GET_BLOG_BY_ID}/${blogId}`);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("GET_BLOG_BY_ID ERROR...", error);
    toast.error("Could not get the blog");
  }
  toast.dismiss(toastId);
  return result;
}
