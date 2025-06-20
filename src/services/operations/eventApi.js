import toast from "react-hot-toast";
import { eventEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";

const {
  CREATE_EVENT,
  GET_ALL_EVENTS,
  GET_EVENT_BY_ID,
  UPDATE_EVENT,
  DELETE_EVENT,
} = eventEndpoints;

export async function getAllEvents() {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_EVENTS, null);

    console.log("GET_ALL_EVENTS RESPONSE...", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("GET_ALL_EVENTS ERROR...", error);
    toast.error("Could not get all the events");
  }
  toast.dismiss(toastId);
  return result;
}

export async function createEvent(data, token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("POST", CREATE_EVENT, data, {
      Authorization: `Bearer ${token}`,
    });

    console.log("CREATE_EVENT RESPONSE...", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("CREATE_EVENT ERROR...", error);
    toast.error("Could not create the event");
  }
  toast.dismiss(toastId);
  return result;
}

export async function updateEvent(updates, id, token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector(
      "PUT",
      UPDATE_EVENT,
      { id, ...updates },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("UPDATE_EVENT RESPONSE...", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("UPDATE_EVENT ERROR...", error);
    toast.error("Could not update the event");
  }
  toast.dismiss(toastId);
  return result;
}

export async function deleteEvent(id, token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector(
      "DELETE",
      DELETE_EVENT,
      { id: id },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    console.log("DELETE_EVENT RESPONSE...", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("DELETE_EVENT ERROR...", error);
    toast.error("Could not delete the event");
  }
  toast.dismiss(toastId);
  return result;
}

export async function getEventById(id) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", `${GET_EVENT_BY_ID}/${id}`);

    console.log("GET_EVENT_BY_ID RESPONSE...", response);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("GET_EVENT_BY_ID ERROR...", error);
    toast.error("Could not get the event");
  }
  toast.dismiss(toastId);
  return result;
}
