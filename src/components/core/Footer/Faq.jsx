import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "About CNT Academy",
    questions: [
      {
        q: "What is CNT Academy?",
        a: "A financial education platform specializing in stock market training, including technical and fundamental analysis.",
      },
      {
        q: "Who can enroll?",
        a: "Open to beginners, intermediate traders, and professionals seeking to enhance their market knowledge.",
      },
      {
        q: "Are courses available online or offline?",
        a: "Offers both online self-paced and offline classroom training options.",
      },
      {
        q: "How do I enroll?",
        a: "Visit the website, select a course, and complete the registration process.",
      },
    ],
  },
  {
    category: "Course & Curriculum",
    questions: [
      {
        q: "What topics are covered?",
        a: `• Technical Analysis (Charts, Indicators, Price Action)\n• Fundamental Analysis (Financial Statements, Valuations)\n• Derivatives & Options Trading\n• Risk Management & Trading Psychology\n• Live Market Training Sessions\n• And much more`,
      },
      {
        q: "Are the courses beginner-friendly?",
        a: "Yes, structured from basic to advanced levels for easy understanding.",
      },
      {
        q: "Do you provide live market training?",
        a: "No, as per SEBI Norms training will be on 3 Months Back Data.",
      },
      {
        q: "Will I receive a certification?",
        a: "Yes, a certificate of completion is awarded post-course.",
      },
    ],
  },
  {
    category: "Fees & Payment",
    questions: [
      {
        q: "What are the course fees?",
        a: "Varies based on the program. Details are available on the website.",
      },
      {
        q: "Accepted payment methods?",
        a: "UPI, credit/debit cards, net banking, wallets, and EMI options.",
      },
      {
        q: "Refund policy?",
        a: "Subject to the terms & conditions mentioned on the website.",
      },
    ],
  },
  {
    category: "Learning Support & Access",
    questions: [
      {
        q: "Do you provide mentorship?",
        a: "Yes, one-on-one mentorship is available for select programs.",
      },
      {
        q: "How long do I have access to the course?",
        a: "Lifetime access to recorded sessions and study materials.",
      },
      {
        q: "Is there a support team for queries?",
        a: "Yes, via email, community forums, and WhatsApp groups.",
      },
    ],
  },
  {
    category: "Trading & Market Queries",
    questions: [
      {
        q: "Does CNT Academy provide stock recommendations?",
        a: "No, we focus purely on educational training.",
      },
      {
        q: "Will I be able to trade professionally after completing a course?",
        a: "The training equips you with skills, but success depends on practice & market discipline.",
      },
      {
        q: "Is trading risky?",
        a: "Yes, but we emphasize risk management strategies to mitigate losses.",
      },
    ],
  },
  {
    category: "Contact & Support",
    questions: [
      {
        q: "How to reach CNT Academy?",
        a: "📧 Email: info@cntacademy.com\n📞 Phone: 7384708366\n🌍 Website: www.cntacademy.com",
      },
      {
        q: "Where can I follow CNT Academy?",
        a: "📌 YouTube, Instagram, Twitter, LinkedIn for educational content & market updates.",
      },
    ],
  },
];

const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div layout className="rounded-lg bg-richblack-800 shadow-sm">
      <motion.button
        layout
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-richblack-700 transition duration-200"
      >
        <span className="text-white text-base md:text-lg font-medium">
          {question}
        </span>
        <FaChevronDown
          className={`text-richblack-200 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-richblack-300 text-base md:text-lg whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-richblack-900 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-12 text-center">
          Frequently Asked Questions
        </h1>

        {faqs.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-yellow-300 text-2xl font-semibold mb-5">
              {section.category}
            </h2>
            <div className="space-y-4">
              {section.questions.map((item, i) => (
                <AccordionItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
