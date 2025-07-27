import toast from "react-hot-toast";
import { couponEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";

const {
  CREATE_COUPON,
  DELETE_COUPON,
  TOGGLE_COUPON_ACTIVE,
  TOGGLE_COUPON_BANNER,
  GET_ALL_COUPONS,
  GET_BANNER_COUPONS,
  VALIDATE_COUPON,
} = couponEndpoints;

export async function getAllCoupons(token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_ALL_COUPONS, null, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("GET_ALL_COUPONS ERROR...", error);
    toast.error("Could not get all the coupons");
  }
  toast.dismiss(toastId);
  return result;
}

export async function createCoupon(data, token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("POST", CREATE_COUPON, data, {
      Authorization: `Bearer ${token}`,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("CREATE_COUPON ERROR...", error);
    toast.error("Could not create the coupon");
  }
  toast.dismiss(toastId);
  return result;
}

export async function toggleCouponActive(id, isActive, token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector(
      "PATCH",
      TOGGLE_COUPON_ACTIVE,
      { couponId: id, isActive },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("TOGGLE_COUPON_ACTIVE ERROR...", error);
    toast.error("Could not toggle coupon to active");
  }
  toast.dismiss(toastId);
  return result;
}

export async function deleteCoupon(id, token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector(
      "DELETE",
      DELETE_COUPON,
      { couponId: id },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("DELETE_COUPON ERROR...", error);
    toast.error("Could not delete the coupon");
  }
  toast.dismiss(toastId);
  return result;
}

export async function toggleCouponBanner(id, showOnBanner, token) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector(
      "PATCH",
      TOGGLE_COUPON_BANNER,
      { couponId: id, showOnBanner },
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("TOGGLE_COUPON_BANNER ERROR...", error);
    toast.error("Could not toggle to put on banner");
  }
  toast.dismiss(toastId);
  return result;
}

export async function getBannerCoupons() {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("GET", GET_BANNER_COUPONS);

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("GET_BANNER_COUPONS ERROR...", error);
    toast.error("Could not get all the banner coupons");
  }
  toast.dismiss(toastId);
  return result;
}

export async function validateCoupon(code) {
  const toastId = toast.loading("Loading...");
  let result = [];
  try {
    const response = await apiConnector("POST", VALIDATE_COUPON, {
      name: code,
    });

    if (!response.data.success) {
      throw new Error(response.data.message);
    }

    result = response.data.data;
  } catch (error) {
    console.log("VALIDATE_COUPON ERROR...", error);
    toast.error("Could not validate the coupon");
  }
  toast.dismiss(toastId);
  return result;
}
