import React from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useDispatch, useSelector } from "react-redux";
import Iconbtn from "../../../../common/Iconbtn";
import { buyCourse } from "../../../../services/operations/studentFeaturesAPI";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../../../../services/operations/cartAPI";
import toast from "react-hot-toast";

const RenderTotalAmount = ({
  total,
  cart,
  setCartUpdated,
  appliedCoupon,
  billingInfo,
  handleCheckout,
}) => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [captchaToken, setCaptchaToken] = React.useState(null);

  const handleBuyCourse = async () => {
    const courses = cart.map((course) => course._id);
    await buyCourse(
      token,
      courses,
      user,
      navigate,
      dispatch,
      appliedCoupon?.name,
      billingInfo,
      captchaToken,
      setCaptchaToken,
    );
    setCartUpdated(true);
    resetCart(token);
  };

  const handleClick = () => {
    const allFieldsFilled = Object.values(billingInfo).every(
      (value) => value.trim() !== "",
    );
    if (!allFieldsFilled) {
      handleCheckout?.(); // will trigger form error and show form if hidden
      return;
    }

    if (!captchaToken) {
      toast.error("Please verify you are human");
      return;
    }

    handleBuyCourse();
  };

  return (
    <div className="min-w-[280px] rounded-md border border-richblack-700 bg-richblack-800 p-6">
      <p className="mb-1 text-sm font-medium text-richblack-300">Total:</p>
      <p className="mb-1 text-3xl font-medium text-yellow-100">Rs {total}</p>
      <p className="text-xl mb-6 text-richblack-400 line-through">
        Rs {total + 1000}
      </p>

      <div className="mb-4">
        <Turnstile
          siteKey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
          onSuccess={(token) => setCaptchaToken(token)}
          onExpire={() => setCaptchaToken(null)}
        />
      </div>

      <Iconbtn
        text={"Buy Now"}
        onclick={handleClick}
        disabled={!captchaToken}
        customClasses={"w-full justify-center"}
      />
    </div>
  );
};

export default RenderTotalAmount;
