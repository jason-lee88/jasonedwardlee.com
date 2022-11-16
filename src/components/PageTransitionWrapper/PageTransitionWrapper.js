import "./PageTransitionWrapper.css";
import { motion } from "framer-motion";

const PageTransitionWrapper = ({ children }, pageId) => {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };

  return (
    <motion.div
      key={pageId}
      className="page-transition-wrapper"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
