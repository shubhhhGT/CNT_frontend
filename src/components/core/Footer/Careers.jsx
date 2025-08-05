import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CareersPage = () => {
  const navigate = useNavigate();
  const careerPaths = [
    {
      icon: "🔹",
      title: "Stock Market Trader",
      description:
        "Become a professional trader in equities, derivatives, and commodities. Develop strong analytical skills, risk management strategies, and market timing techniques to become a pro trader.",
    },
    {
      icon: "💼",
      title: "Investment Analyst",
      description:
        "Analyse financial statements, economic trends, and company fundamentals to provide valuable insights for investment firms, hedge funds, and wealth management firms.",
    },
    {
      icon: "📊",
      title: "Portfolio Manager",
      description:
        "Manage investment portfolios for individuals and institutions by diversifying assets, optimizing returns, and mitigating risks using technical & fundamental analysis.",
    },
    {
      icon: "⚡",
      title: "Derivatives & Options Strategist",
      description:
        "Specialize in designing options and futures strategies, helping firms and individual traders manage risk while maximizing their rewards.",
    },
    {
      icon: "💡",
      title: "Financial Consultant",
      description:
        "Advise clients on investment strategies, wealth management, and financial planning based on in-depth market research and data-driven decision-making.",
    },
  ];

  const benefits = [
    "Certifications – Boost your credibility",
    "Expert Training in Technical & Fundamental Analysis – Master market strategies",
    "Market Learning – Learn different tips & tricks to navigate the markets with confidence",
    "Comprehensive Stock, Derivatives & Commodity Training – Develop multi-asset expertise",
    "Mentorship from Market Professionals – Learn from the best",
  ];

  return (
    <div className="min-h-screen bg-richblack-900 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl md:text-5xl font-bold mb-8 text-center"
        >
          🎓 Transform Your Career with CNT Academy! 🎓
        </motion.h1>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-richblack-800 rounded-xl p-6 mb-12 text-center border-l-4 border-yellow-400"
        >
          <p className="text-yellow-300 text-xl italic">
            "An investment in knowledge pays the best interest."
          </p>
          <p className="text-richblack-300 mt-2">– Benjamin Franklin</p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-richblack-100 text-lg md:text-xl mb-12 text-center"
        >
          <p>
            Looking to build a profound career in financial markets? CNT
            Academy, founded by Vikash Bagaria, provides expert-led training &
            certification programs to help you achieve your professional goals!
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-yellow-300 text-2xl md:text-3xl font-bold mb-6 text-center">
            Why Choose CNT Academy?
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-green-400 text-xl mt-1">✅</span>
                <p className="text-richblack-100 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Career Paths Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-yellow-300 text-2xl md:text-3xl font-bold mb-8 text-center">
            Career Paths After Training
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.4 }}
                className="bg-richblack-800 rounded-xl p-6 border-2 border-richblack-700 hover:border-yellow-500 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{path.icon}</span>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {path.title}
                    </h3>
                    <p className="text-richblack-200">{path.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">
            Turn Your Passion for Markets into a Thriving Career!
          </h2>
          <button
            onClick={() => navigate("/plans")}
            className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-richblack-900 font-bold py-3 px-8 rounded-lg text-lg hover:scale-105 transition-transform"
          >
            Explore Our Plans
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;
