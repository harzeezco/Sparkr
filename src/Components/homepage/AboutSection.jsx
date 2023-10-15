import { motion } from "framer-motion";

import useTheme from "../../Hooks/useTheme";
import Container from "../layouts/Container";

import { Puzzle_webp, Puzzle_png } from "../../lib/image-store";
import Row from "../layouts/Row";
import { opacity } from "../../Animation/Opacity";
import useModalCursor from "../../Hooks/useModalCursor";

const AboutSection = () => {
  const { theme } = useTheme();
  const { description, isInView } = useModalCursor();
  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px] text-${theme}`;

  

  return (
    <Container
      id="about"
      pt="20"
      ref={description}
      data-scroll
      data-scroll-speed="-10"
      data-scroll-position="top"
      data-scroll-delay="0.035"
    >
      <motion.h1
        variants={opacity}
        animate={isInView ? "open" : "closed"}
        className={`${headerText}`}
      >
        Our <span className="text-orangePrimary">Unique</span> Approach helps us
        Spark <span className="text-orangePrimary">your Brand</span>
      </motion.h1>

      <Row
        img_first={true}
        defaultSrc={Puzzle_webp}
        alternateSrc={Puzzle_png}
        button={true}
        first_prgh="At Sparkr, we understand that every business has its unique dreams and aspirations. Success, to us, means seeing you thrive online, reaching that audience you've always dreamt of, and achieving those milestones that define your brand's growth."
        second_prgh="We're here to listen, truly understand your goals, and handcraft a solution tailored just for you. We start by understanding the root cause of the problem and then we work with you to develop innovative and effective solutions that spark your brand to 100x."
      />
    </Container>
  );
};

export default AboutSection;
