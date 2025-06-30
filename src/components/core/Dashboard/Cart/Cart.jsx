import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";
import { useMediaQuery } from "react-responsive";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import Sidebar from "../Sidebar";
import { getEntireCart } from "../../../../services/operations/cartAPI";
import { setTotalItems } from "../../../../slices/cartSlice";
import { validateCoupon } from "../../../../services/operations/couponApi";
import toast from "react-hot-toast";

const Cart = () => {
  // Media query to check if screen size is greater than 768px
  const isMediumScreenOrLarger = useMediaQuery({ minWidth: 768 });

  const [sidebarIconClicked, setSidebarIconClicked] = useState(false);

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cartUpdated, setCartUpdated] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discountedTotal, setDiscountedTotal] = useState(null);

  // Invoice
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    nameOnInvoice: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    placeOfSupply: "",
  });
  const [formError, setFormError] = useState("");

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Coupon apply handler
  const handleApplyCoupon = async () => {
    if (!couponCode) return toast.error("Enter a coupon code");
    const res = await validateCoupon(couponCode.trim().toUpperCase());
    if (res && res?.isActive) {
      const { discountPercentage, expiresAt } = res;
      const expiry = new Date(expiresAt);
      if (expiry < new Date()) return toast.error("Coupon expired");

      const discount =
        (cart?.data?.data?.totalPrice * discountPercentage) / 100;
      setDiscountedTotal(cart?.data?.data?.totalPrice - discount);
      setAppliedCoupon(res);
      toast.success(`Coupon Applied — ${discountPercentage}% OFF`);
    } else {
      toast.error(res?.message || "Invalid coupon");
    }
  };

  const handleCheckout = () => {
    const allFieldsFilled = Object.values(billingInfo).every(
      (val) => val.trim() !== ""
    );

    if (!allFieldsFilled) {
      setFormError("Please fill all billing fields before proceeding.");
      if (!showBillingForm) setShowBillingForm(true); // auto open
      return;
    }

    setFormError(""); // clear error
  };

  useEffect(() => {
    const getEntireCartData = async () => {
      setLoading(true);
      try {
        const cartData = await getEntireCart(token);
        // console.log("cartData", cartData);
        setCart(cartData);
        dispatch(setTotalItems(cartData?.data?.data?.totalItems));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getEntireCartData();
    // eslint-disable-next-line
  }, [cartUpdated]);

  return (
    <div>
      {/* Responsive design for small screen */}
      <div className="mb-4 md:hidden">
        {!isMediumScreenOrLarger &&
          (sidebarIconClicked ? (
            <div className="flex">
              <GoSidebarExpand
                size={24}
                fill="#AFB2BF"
                onClick={() => setSidebarIconClicked(!sidebarIconClicked)}
              />
              <Sidebar />
            </div>
          ) : (
            <GoSidebarCollapse
              size={24}
              fill="#AFB2BF"
              onClick={() => setSidebarIconClicked(!sidebarIconClicked)}
            />
          ))}
      </div>

      <h2 className="mb-14 text-3xl font-medium text-richblack-5">Cart</h2>
      <p className="text-richblack-400 font-semibold">
        {cart?.data?.data?.totalItems} Courses in Cart
      </p>
      <div className="mt-4 flex flex-wrap gap-2 items-center">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="bg-richblack-700 text-richblack-5 px-3 py-1 rounded-md text-sm"
        />
        <button
          onClick={handleApplyCoupon}
          className="bg-yellow-100 text-richblack-900 text-sm px-4 py-1 rounded-md hover:bg-yellow-200"
        >
          Apply
        </button>
        {appliedCoupon && (
          <p className="text-caribbeangreen-300 text-sm ml-3">
            Coupon <strong>{appliedCoupon.name}</strong> applied
          </p>
        )}
      </div>

      <div className="w-full h-[1px] bg-richblack-400 mt-2"></div>
      {cart?.data?.data?.totalPrice > 0 ? (
        <div className="flex flex-col lg:flex-row mt-8 gap-x-10 gap-y-6 items-start">
          <div className="w-full lg:w-2/3">
            <RenderCartCourses
              loading={loading}
              cart={cart?.data?.data?.userDetails?.cartItems}
              setCartUpdated={setCartUpdated}
            />
          </div>

          {/* Right side - Billing form + Total */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Invoice Billing Fields */}
            <div className="border border-richblack-600 p-4 rounded-md">
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

            {/* Total Amount */}
            <RenderTotalAmount
              total={discountedTotal || cart?.data?.data?.totalPrice}
              cart={cart?.data?.data?.userDetails?.cartItems}
              setCartUpdated={setCartUpdated}
              appliedCoupon={appliedCoupon}
              billingInfo={billingInfo}
              handleCheckout={handleCheckout}
            />
          </div>
        </div>
      ) : (
        <div className="text-center text-richblack-5 mt-4 text-3xl">
          Your cart is empty
        </div>
      )}
    </div>
  );
};

export default Cart;
