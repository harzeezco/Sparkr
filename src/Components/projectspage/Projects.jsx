import { motion } from "framer-motion";

import { PROJECTS } from "../../lib/data";
import ProjectDetails from "../data-display/ProjectDetails";
import { BannerRowTop } from "../general/BannerRowTop";
import RegularList from "../general/RegularList";

import Container from "../layouts/Container";

const Projects = () => {
  return (
    <Container id="project">
      <section className="pt-12">
        <div className="flex sm2h-[130px] items-center gap-x-4 overflow-hidden flex-wrap">
          <BannerRowTop title="Our" color="text-mode" />
          <BannerRowTop title="Latest" color="text-mode" />
          <BannerRowTop title="Project" color="text-default" />
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
          id="projects-list"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            stiffness: 300,
            delay: 1,
            type: "spring",
          }}
        >
          <RegularList
            items={PROJECTS}
            resourceName="card"
            itemComponent={ProjectDetails}
          />
        </motion.div>
      </section>
    </Container>
  );
};

export default Projects;
