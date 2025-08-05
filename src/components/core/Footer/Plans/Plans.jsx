import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Static data for each plan
const planDetails = {
  free: {
    title: "🔥 The FREE Golden Ticket",
    subtitle: "Your First Step to Stock Market Success!",
    description:
      "Perfect for beginners who want to explore the world of stock trading before committing.",
    features: [
      "The biggest stock market myths that are keeping you broke!",
      "Introduction to the stock market & how it works",
      "Understanding market movements & price action",
      "Common myths & mistakes every new trader should avoid",
      "A sneak peek into technical & fundamental analysis",
      "How to read stock charts like a pro (even if you're a total beginner!)",
      "The one secret every successful trader knows—but no one tells you!",
    ],
  },
  beginner: {
    title: "🚀 The Beginner's Breakthrough",
    subtitle: "From Clueless to Confident Trader!",
    description:
      "Ideal for those who want to start trading with a strong foundation.",
    features: [
      "Trading 101: The absolute must-knows before placing your first trade",
      "Essential stock market concepts & terminology",
      "Basics of technical analysis: Candlestick patterns & trend analysis",
      "Introduction to fundamental analysis & stock selection",
      "Risk management strategies to protect your capital",
      "The 3 Golden Rules to avoid market traps and losses",
      "How to build a trading strategy that actually works!",
    ],
  },
  intermediate: {
    title: "🎯 The Market Hacker",
    subtitle: "Decode the Market, Become a Pro!",
    description:
      "Designed for traders looking to refine their skills and develop a structured approach.",
    features: [
      "Chart Patterns That Scream 'BUY' & 'SELL' – Learn to Spot Them Instantly!",
      "The 5 deadly trading mistakes (and how to NEVER make them!)",
      "Advanced technical indicators & chart patterns",
      "Intraday & swing trading strategies",
      "Understanding macroeconomic trends & their impact on stock prices",
      "How to build a strong trading plan & avoid emotional trading",
      "Insider tricks to picking winning stocks before the crowd does!",
    ],
  },
  advanced: {
    title: "💰 The Trading Genius",
    subtitle: "Turn Market Volatility into Opportunity",
    description:
      "For experienced traders aiming to enhance their profitability and risk management.",
    features: [
      "Options Trading EXPOSED – Strategies that Pro don't want you to know!",
      "Scalping & Intraday Hacks – Learn the moves of pro traders",
      "Advanced options trading & derivative strategies",
      "Scalping, momentum, and high-frequency trading techniques",
      "Portfolio diversification & hedging against market downturns",
      "The psychology of successful traders & decision-making techniques",
      "The Ultimate Risk Management Formula – Trade big, lose small!",
      "Secret time-tested Trading Strategies",
      "Decoding the Smart Money Move",
      "Gamma Explosions",
      "Institutional-level risk management techniques",
      "Exclusive 1-on-1 Mentorship – Personalized coaching",
      "Advanced Technical Analysis – Decode charts, patterns, and market trends",
      "Fundamental Analysis Mastery – Analyze financial reports and economic indicators",
      "Institutional-Level Trading Strategies – Access hedge fund strategies",
      "Options & Derivatives Mastery – Learn how to trade options, futures, and other derivatives like Institutions.",
      "Scalping & High-Frequency Trading Techniques – Perfect for traders who thrive on quick moves.",
      "Intraday & Swing Trading Strategies – Master proven methods to capitalize on short- and medium-term market trends.",
      "Risk Management & Capital Protection – Discover professional techniques to safeguard your investments.",
      "Portfolio Diversification & Wealth Building – Learn how to balance risk and optimize long-term growth.",
      "Market Psychology & Trader Mindset Training – Gain the mental edge needed for Stock market Mastery.",
      "Trading Case Studies – Analyze past trades and understand what works (and what doesn’t).",
      "Backtesting & Strategy Development – Learn how to refine and test your strategies before risking real capital.",
      "Smart Money Concepts & Institutional Order Flow – Understand how big players move the markets.",
      "Exclusive Webinars & Q&A Sessions – Get direct access to expert insights on the latest market trends.",
      "Fast-Track to Becoming a Full-Time Trader – Gain the confidence and skills needed to make trading your primary income source.",
    ],
  },
};

const plans = [
  { id: "free", name: "Free Plan" },
  { id: "beginner", name: "Beginner Plan" },
  { id: "intermediate", name: "Intermediate Plan" },
  { id: "advanced", name: "Advanced Plan" },
];

const Plans = () => {
  const navigate = useNavigate();
  const [activePlan, setActivePlan] = useState("free");
  const currentPlan = planDetails[activePlan];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-11/12 max-w-maxContent mx-auto my-10">
      <motion.h1
        className="text-4xl font-bold text-center text-richblack-5 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Choose Your Trading Journey
      </motion.h1>

      {/* Plan Tabs with Animation */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {plans.map((plan) => (
          <motion.button
            key={plan.id}
            variants={item}
            onClick={() => setActivePlan(plan.id)}
            className={`px-5 py-3 rounded-lg transition-all ${
              activePlan === plan.id
                ? "bg-yellow-400 text-richblack-900 font-bold shadow-[0_0_15px_0] shadow-yellow-400/50"
                : "bg-richblack-800 text-richblack-200 hover:bg-richblack-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {plan.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Plan Details with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePlan}
          className="bg-richblack-800 p-8 rounded-xl border border-richblack-700 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="text-center mb-8">
            <motion.h2
              className="text-3xl font-bold text-yellow-100 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {currentPlan.title}
            </motion.h2>
            <motion.h3
              className="text-xl font-semibold text-richblack-25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {currentPlan.subtitle}
            </motion.h3>
            <motion.p
              className="text-lg text-richblack-200 mt-4 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {currentPlan.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-richblack-700 p-6 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-xl font-bold text-richblack-5 mb-4">
                What You'll Learn:
              </h4>
              <ul className="space-y-3">
                {currentPlan.features
                  .slice(0, Math.ceil(currentPlan.features.length / 2))
                  .map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                    >
                      <span className="text-caribbeangreen-200 mr-2 mt-1 text-lg">
                        ✓
                      </span>
                      <span className="text-richblack-100">{feature}</span>
                    </motion.li>
                  ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-richblack-700 p-6 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h4 className="text-xl font-bold text-richblack-5 mb-4">
                More Benefits:
              </h4>
              <ul className="space-y-3">
                {currentPlan.features
                  .slice(Math.ceil(currentPlan.features.length / 2))
                  .map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.45 + idx * 0.05 }}
                    >
                      <span className="text-caribbeangreen-200 mr-2 mt-1 text-lg">
                        ✓
                      </span>
                      <span className="text-richblack-100">{feature}</span>
                    </motion.li>
                  ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={() => navigate(`/plans/${activePlan}`)}
              className="bg-gradient-to-r from-yellow-300 to-yellow-400 text-richblack-900 font-bold py-3 px-8 rounded-lg text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 204, 0, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Courses in this Plan
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Additional CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className="text-2xl font-bold text-richblack-5 mb-4">
          Ready to Transform Your Trading Skills?
        </h3>
        <p className="text-richblack-200 max-w-2xl mx-auto mb-6">
          Join thousands of traders who have already taken control of their
          financial future with CNT Academy.
        </p>
        <motion.button
          className="bg-richblack-700 text-white font-bold py-3 px-8 rounded-lg text-lg border border-yellow-500"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#2C333F", // Slightly lighter richblack-600
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/contact")}
        >
          Speak with a Counsellor
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Plans;
