import { motion } from "framer-motion";
import Container from "../layouts/Container";
import { PROCESS_DETAILS } from "../../lib/data";
import RegularList from "../general/RegularList";
import Card from "../layouts/Card";
import useTheme from "../../Hooks/useTheme";
import useModalCursor from "../../Hooks/useModalCursor";
import { opacity } from "../../Animation/Opacity";
import { useContext } from "react";
import { ScaleCursorOnHoverContext } from "../../Contexts/ScaleCursorOnHoverContext";

const ProcessSection = () => {
  const { description, isInView } = useModalCursor();
  const { observe } = useContext(ScaleCursorOnHoverContext);

  const { theme } = useTheme();

  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px] text-${theme} lg:max-w-[70%]`;

  return (
    <Container
      id="process"
      pt="20"
      ref={description}
      data-scroll
      data-scroll-speed="-10"
      data-scroll-position="top"
      data-scroll-delay="0.035"
    >
      <div ref={observe}>
        <motion.h1
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className={`${headerText}`}
        >
          Our Customized <span className="text-orangePrimary">Workflow</span>
        </motion.h1>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <RegularList
            items={PROCESS_DETAILS}
            resourceName="item"
            itemComponent={Card}
          />
        </div>
      </div>
    </Container>
  );
};

export default ProcessSection;
