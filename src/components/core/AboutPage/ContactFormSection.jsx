import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactUsForm from "../../../common/ContactUsForm";

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
      className="mx-auto"
    >
      <motion.div variants={animationVariants} transition={{ duration: 0.6 }}>
        <div className="text-center text-4xl font-semibold">Get in Touch</div>
      </motion.div>

      <motion.div
        variants={animationVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-center text-richblack-300 mt-3">
          We’d love to hear from you, Please fill out this form.
        </p>
      </motion.div>

      <motion.div
        variants={animationVariants}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 mx-auto"
      >
        <ContactUsForm />
      </motion.div>
    </motion.div>
  );
};

export default ContactFormSection;
