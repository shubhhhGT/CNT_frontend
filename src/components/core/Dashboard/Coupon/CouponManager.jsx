import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  deleteCoupon,
  getAllCoupons,
  toggleCouponActive,
  toggleCouponBanner,
} from "../../../../services/operations/couponApi";
import { useNavigate } from "react-router-dom";

const CouponManager = () => {
  const { token } = useSelector((state) => state.auth);
  const [coupons, setCoupons] = useState([]);
  const navigate = useNavigate();

  const loadCoupons = async () => {
    const res = await getAllCoupons(token);
    setCoupons(res);
  };

  useEffect(() => {
    loadCoupons();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (id) => {
    await deleteCoupon(id, token);
    loadCoupons();
  };

  const toggleBanner = async (id, showOnBanner) => {
    await toggleCouponBanner(id, showOnBanner, token);
    loadCoupons();
  };

  const toggleActive = async (id, isActive) => {
    await toggleCouponActive(id, isActive, token);
    loadCoupons();
  };

  return (
    <div className="p-6 text-richblack-5 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Manage Coupons
        </motion.h1>

        <button
          onClick={() => navigate("/dashboard/add-coupon")}
          className="bg-yellow-100 text-richblack-900 px-4 py-2 rounded hover:bg-yellow-200 transition"
        >
          + Add Coupon
        </button>
      </div>

      {coupons.length === 0 ? (
        <p className="text-lg text-center">No coupons created yet!</p>
      ) : (
        <div className="space-y-4">
          {coupons.map((c, idx) => (
            <motion.div
              key={c._id}
              className="bg-richblack-700 p-4 rounded-md shadow flex justify-between items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
            >
              <div>
                <p className="text-yellow-100 font-semibold">{c.name}</p>
                <p className="text-sm text-richblack-300">
                  {c.discountPercentage}% off • Expires:{" "}
                  {new Date(c.expiresAt).toLocaleDateString()}
                </p>
                <div className="flex gap-4 mt-2">
                  <label className="text-xs flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={c.showOnBanner}
                      onChange={() => toggleBanner(c._id, !c.showOnBanner)}
                    />
                    Banner
                  </label>
                  <label className="text-xs flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={c.isActive}
                      onChange={() => toggleActive(c._id, !c.isActive)}
                    />
                    Active
                  </label>
                </div>
              </div>

              <button
                onClick={() => handleDelete(c._id)}
                className="text-pink-200 hover:text-pink-400 transition"
              >
                Delete
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CouponManager;
