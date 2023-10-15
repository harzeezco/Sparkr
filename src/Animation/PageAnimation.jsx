import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PageAnimation = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.75, delay: 0.4, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

PageAnimation.propTypes = {
  children: PropTypes.node,
};

export default PageAnimation;
