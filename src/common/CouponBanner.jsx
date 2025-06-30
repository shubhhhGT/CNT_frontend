// src/components/common/CouponBanner.jsx
import React, { useEffect, useState } from "react";
import { getBannerCoupons } from "../services/operations/couponApi";
import { AnimatePresence, motion } from "framer-motion";

const CouponBanner = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch banner coupons on mount
  useEffect(() => {
    (async () => {
      const res = await getBannerCoupons();
      if (Array.isArray(res)) setBanners(res);
    })();
  }, []);

  // Change banner every 7 seconds
  useEffect(() => {
    if (banners.length < 2) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [banners]);

  if (banners.length === 0) return null;

  const current = banners[currentIndex];

  return (
    <div className="bg-yellow-100 text-richblack-900 text-center py-2 text-sm font-medium overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current._id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          🎁 Use <strong>{current.name}</strong> — {current.discountPercentage}%
          off!
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CouponBanner;
