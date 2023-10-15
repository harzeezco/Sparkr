import { motion } from "framer-motion";

import Container from "../layouts/Container";
import RegularList from "../general/RegularList";
import ProjectDetails from "../data-display/ProjectDetails";
import useTheme from "../../Hooks/useTheme";
import { PROJECTS } from "../../lib/data";
import useModalCursor from "../../Hooks/useModalCursor";
import { opacity } from "../../Animation/Opacity";

const ProjectSection = () => {
  const { description, isInView } = useModalCursor();
  const display_4_projects = PROJECTS.slice(0, 4);
  const { theme } = useTheme();

  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px] text-${theme}`;

  return (
    <Container
      id="project"
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
        our latest <span className="text-orangePrimary">project </span>
      </motion.h1>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        <RegularList
          items={display_4_projects}
          itemComponent={ProjectDetails}
          resourceName="card"
        />
      </div>

      <div className="mt-8 flex justify-center capitalize">
        <a href="/project">
          <button className="btn">view all project</button>
        </a>
      </div>
    </Container>
  );
};

export default ProjectSection;
