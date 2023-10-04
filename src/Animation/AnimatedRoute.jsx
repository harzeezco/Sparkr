// AnimatedRoute.js
import { motion } from "framer-motion";

const AnimatedRoute = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export default AnimatedRoute;