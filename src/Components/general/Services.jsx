import { motion } from "framer-motion";

import Service from "./Service";
import useModalCursor from "../../Hooks/useModalCursor";
import ServiceVideos from "./ServiceVideos";

const Services = () => {
  const {
    active,
    index,
    manageModal,
    moveItems,
    modalContainer,
    cursor,
    cursorLabel,
    scaleAnimation,
  } = useModalCursor();

  return (
    <div
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className="flex flex-col items-center"
    >
      <Service manageModal={manageModal} />
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className="pointer-events-none fixed left-1/2 top-1/2 z-10 h-96 w-96 overflow-hidden"
        >
          <ServiceVideos index={index} />
        </motion.div>
        <motion.div
          ref={cursor}
          className="pointer-events-none fixed z-10 flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 font-light text-white"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className="pointer-events-none fixed z-10 flex h-20 w-20 items-center justify-center bg-transparent text-lg font-light text-white"
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </div>
  );
};

export default Services;
