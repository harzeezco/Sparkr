import { motion } from "framer-motion";
import Container from "../layouts/Container";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";
import useTheme from "../../Hooks/useTheme";
import { opacity } from "../../Animation/Opacity";
import useModalCursor from "../../Hooks/useModalCursor";
import Services from "../general/Services";

const ServiceSection = () => {
  const { description, isInView } = useModalCursor();

  const { theme } = useTheme();

  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px] text-${theme}`;

  return (
    <Container id="service" pt="20">
      <div ref={description}>
        <motion.h1
          variants={opacity}
          animate={isInView ? "open" : "closed"}
          className={`${headerText}`}
          data-scroll
          data-scroll-speed="-10"
          data-scroll-position="top"
          data-scroll-delay="0.035"
        >
          <span className="text-orangePrimary">Customer-Centric</span> Design
        </motion.h1>
        <div className="mb-20 flex flex-col gap-x-4 md:flex-row lg:max-w-[86%]">
          <motion.h1
            variants={opacity}
            animate={isInView ? "open" : "closed"}
            className={`${headerText}`}
          >
            Services
          </motion.h1>

          <AnimatedTextLetters
            openDuration={0.5}
            closeDuration={0.5}
            delay={0.5}
            phrase={`With best-in-class design and engineering, our work maximizes value by putting your customers at the center of everything we do.`}
            className="mt-2 leading-[20px] sm:text-[18px]"
          />
        </div>
        <Services />
      </div>
    </Container>
  );
};

export default ServiceSection;
