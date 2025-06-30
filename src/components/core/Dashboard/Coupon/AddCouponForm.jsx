import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createCoupon } from "../../../../services/operations/couponApi";
import { useNavigate } from "react-router-dom";

const AddCouponForm = () => {
  const { token } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    discountPercentage: "",
    expiresAt: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, discountPercentage, expiresAt } = formData;

    if (!name || !discountPercentage || !expiresAt) {
      console.log("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await createCoupon(formData, token);
      if (res) {
        setFormData({ name: "", discountPercentage: "", expiresAt: "" });
        navigate("/dashboard/coupons");
      } else {
        console.log("Failed to create coupon");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 rounded bg-richblack-800 text-richblack-5 shadow-md">
      <h2 className="text-2xl font-bold text-yellow-100 mb-4 text-center">
        Create a Discount Coupon
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm">Coupon Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="E.g. SAVE10"
            className="w-full px-4 py-2 bg-richblack-700 border border-richblack-600 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Discount %</label>
          <input
            type="number"
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleChange}
            placeholder="E.g. 10"
            min={1}
            max={100}
            className="w-full px-4 py-2 bg-richblack-700 border border-richblack-600 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Expiry Date</label>
          <input
            type="datetime-local"
            name="expiresAt"
            value={formData.expiresAt}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-richblack-700 border border-richblack-600 rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-100 text-richblack-900 py-2 rounded hover:bg-yellow-200 transition-all"
        >
          {loading ? "Creating..." : "Create Coupon"}
        </button>
      </form>
    </div>
  );
};

export default AddCouponForm;
