import { motion } from "framer-motion";

const transition = {
  initial: {
    y: "100%",
    height: "100%",
  },
  animate: {
    y: "0%",
    height: "0%",
  },
  exit: {
    y: ["0%", "100%"],
    height: ["0%", "100%"],
  },
};
const Transition = () => {
  return (
    <motion.div
      className="bg-light-secondary fixed bottom-0 top-0 z-30 h-screen w-screen"
      variants={transition}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
    >
      
    </motion.div>
  );
};

export default Transition;
