import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const plans = [
  {
    id: "free",
    title: "🔥 The FREE Golden Ticket",
    subtitle: "Your First Step to Stock Market Success!",
    description:
      "Perfect for beginners who want to explore the world of stock trading before committing.",
    points: [
      "Biggest myths keeping you broke",
      "Market movement & price action",
      "Intro to technical/fundamental analysis",
      "Reading stock charts for beginners",
      "The #1 secret of successful traders",
    ],
  },
  {
    id: "beginner",
    title: "🚀 The Beginner’s Breakthrough",
    subtitle: "From Clueless to Confident Trader!",
    description: "Start trading with a strong foundation.",
    points: [
      "Trading 101: Must-knows",
      "Candlestick & trend analysis",
      "Fundamental analysis intro",
      "Risk management essentials",
      "3 Golden Rules to avoid losses",
    ],
  },
  {
    id: "intermediate",
    title: "🎯 The Market Hacker",
    subtitle: "Decode the Market, Become a Pro!",
    description: "Refine your trading skills with structure.",
    points: [
      "Chart patterns: Buy/Sell signals",
      "Deadly trading mistakes",
      "Intraday & swing trading",
      "Macroeconomic impact analysis",
      "Insider stock picking tricks",
    ],
  },
  {
    id: "advanced",
    title: "💰 The Trading Genius",
    subtitle: "Turn Market Volatility into Opportunity",
    description: "Boost profitability & risk control.",
    points: [
      "Options & derivatives strategies",
      "Scalping & momentum hacks",
      "Portfolio diversification",
      "Trader psychology mastery",
      "Ultimate Risk Formula",
    ],
  },
];

const Plans = () => {
  const navigate = useNavigate();

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            onClick={() => navigate(`/plans/${plan.id}`)}
            className="bg-richblack-800 p-6 rounded-xl border border-richblack-600 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.05)",
              transition: { type: "spring", stiffness: 250, damping: 18 },
            }}
          >
            <h2 className="text-xl font-bold text-yellow-100">{plan.title}</h2>
            <h3 className="text-lg font-semibold mt-1 text-richblack-25">
              {plan.subtitle}
            </h3>
            <p className="text-sm text-richblack-200 my-2">
              {plan.description}
            </p>
            <ul className="list-disc list-inside space-y-1 text-richblack-100 text-sm">
              {plan.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
