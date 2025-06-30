import React, { useState } from "react";
import { FaShareSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import toast from "react-hot-toast";
import copy from "copy-to-clipboard";
import { addTocart } from "../../../services/operations/cartAPI";
import { setTotalItems } from "../../../slices/cartSlice";
import { validateCoupon } from "../../../services/operations/couponApi";

const CourseDetailsCard = ({
  course,
  handleBuyCourse,
  setConfirmationModal,
  setAppliedCoupon: setAppliedCouponFromParent,
}) => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const { totalItems } = useSelector((state) => state.cart);

  const [couponCode, setCouponCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // For invoice
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    nameOnInvoice: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    placeOfSupply: "",
  });
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are Instructor. You can't buy a course");
      return;
    }

    if (token) {
      const res = await addTocart({ courseId: course }, token);
      if (res) {
        dispatch(setTotalItems(totalItems + 1));
      }
      return;
    }

    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to add courses to your cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    });
  };

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link copied to clipboard");
  };

  const handleApplyCoupon = async () => {
    if (!couponCode) return toast.error("Enter a coupon code");
    const res = await validateCoupon(couponCode.trim().toUpperCase());

    if (res && res?.isActive) {
      const { discountPercentage, expiresAt, name } = res;
      const expiryDate = new Date(expiresAt);
      if (expiryDate < new Date()) {
        toast.error("Coupon expired");
        return;
      }
      const discountAmount = (course.price * discountPercentage) / 100;
      const discounted = Math.max(0, course.price - discountAmount).toFixed(0);
      setDiscountedPrice(discounted);
      setAppliedCoupon(name);
      setAppliedCouponFromParent(name);
      toast.success(`Coupon Applied - ${discountPercentage}% OFF`);
    } else {
      toast.error(res?.message || "Invalid coupon code");
    }
  };

  const hasEnrolled = user && course?.studentsEntrolled.includes(user._id);

  return (
    <div className="flex flex-col bg-richblack-700 rounded-md text-richblack-5 gap-4 p-4">
      <img
        src={course.thumbnail}
        alt={course.courseName}
        className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover"
      />

      <div className="px-4">
        {/* Prices */}
        <div className="space-y-2 pb-4 text-2xl font-semibold">
          {discountedPrice ? (
            <>
              <p className="line-through text-richblack-400 text-lg">
                Rs. {course.price}
              </p>
              <p className="text-yellow-100">Rs. {discountedPrice}</p>
              <p className="text-sm text-caribbeangreen-300">
                Coupon "{appliedCoupon}" applied
              </p>
            </>
          ) : (
            <p>Rs. {course.price}</p>
          )}
        </div>

        {/* Coupon input */}
        <div className="flex gap-2 items-center mb-4">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
            className="w-full px-3 py-1 text-sm rounded bg-richblack-800 border border-richblack-600"
          />
          <button
            onClick={handleApplyCoupon}
            className="px-3 py-1 text-sm bg-yellow-100 text-richblack-900 rounded hover:bg-yellow-200"
          >
            Apply
          </button>
        </div>

        {/* Place to add invoice related things */}
        {!hasEnrolled && (
          <div className="border border-richblack-600 p-4 rounded-md my-4">
            <p
              className="text-sm text-yellow-100 underline cursor-pointer mb-2"
              onClick={() => setShowBillingForm((prev) => !prev)}
            >
              {showBillingForm
                ? "Hide Billing Information"
                : "Enter Billing Information for Invoice"}
            </p>

            {showBillingForm && (
              <div className="flex flex-col gap-3">
                {[
                  "nameOnInvoice",
                  "addressLine1",
                  "addressLine2",
                  "addressLine3",
                  "placeOfSupply",
                ].map((field) => (
                  <input
                    key={field}
                    type="text"
                    required
                    placeholder={field
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (s) => s.toUpperCase())}
                    value={billingInfo[field]}
                    onChange={(e) =>
                      setBillingInfo((prev) => ({
                        ...prev,
                        [field]: e.target.value,
                      }))
                    }
                    className="px-3 py-2 text-sm rounded bg-richblack-800 border border-richblack-600 text-richblack-5 focus:outline-none focus:ring-1 focus:ring-yellow-100"
                  />
                ))}
                {formError && (
                  <p className="text-xs text-pink-200 font-medium">
                    {formError}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => {
              if (user && course?.studentsEntrolled.includes(user._id)) {
                navigate("/dashboard/enrolled-courses");
              } else {
                const allFieldsFilled = Object.values(billingInfo).every(
                  (value) => value.trim() !== ""
                );
                if (!allFieldsFilled) {
                  setFormError("All billing fields are required.");
                  return;
                }
                setFormError("");
                handleBuyCourse(billingInfo);
              }
            }}
            className="cursor-pointer w-full px-4 py-2 bg-yellow-50 hover:scale-105 rounded-md text-richblack-800"
          >
            {user && course?.studentsEntrolled.includes(user._id)
              ? "Go To Course"
              : "Buy Now"}
          </button>

          {(!user || !course?.studentsEntrolled.includes(user._id)) && (
            <button
              onClick={handleAddToCart}
              className="cursor-pointer w-full px-4 py-2 bg-richblack-800 hover:scale-105 rounded-md text-richblack-5 hover:text-yellow-50"
            >
              Add to Cart
            </button>
          )}
        </div>

        {/* Instructions */}
        <div>
          <p className="mt-6 mb-3 text-xl font-semibold text-richblack-5">
            Course Instructions
          </p>
          <div className="grid grid-cols-1 gap-3 text-sm text-richblack-200">
            {course?.instructions.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="mt-1 text-caribbeangreen-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <p className="leading-snug">{item.trim()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="text-center">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 text-yellow-100 py-6 mx-auto"
          >
            <FaShareSquare size={15} />
            <p> Share</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
