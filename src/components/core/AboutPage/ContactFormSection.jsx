import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactUsForm from "../../../common/ContactUsForm";
import ContactImage from "../../../assets/Images/contact-placeholder.png";

const ContactFormSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.2 }}
      className="mx-auto max-w-7xl px-4 py-12"
    >
      {/* Heading */}
      <motion.div variants={animationVariants} transition={{ duration: 0.6 }}>
        <div className="text-center text-4xl font-semibold">Get in Touch</div>
      </motion.div>

      {/* Subheading */}
      <motion.div
        variants={animationVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-center text-richblack-300 mt-3">
          We’d love to hear from you, Please fill out this form.
        </p>
      </motion.div>

      {/* Form and Image Container */}
      <motion.div
        variants={animationVariants}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src={ContactImage}
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side Contact Form */}
        <div className="w-full md:w-1/2">
          <ContactUsForm />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactFormSection;
