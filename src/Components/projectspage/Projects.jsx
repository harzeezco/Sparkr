import { PROJECT_CARD_DETAILS } from "../../lib/data";
import ProjectDetails from "../data-display/ProjectDetails";
import { BannerRowTop } from "../general/BannerRowTop";
import RegularList from "../general/RegularList";

import Container from "../layouts/Container";

const Projects = () => {
  

  return (
    <Container id="project">
      <section className="pt-12" id="projects-list">
        <div className="flex h-[130px] items-center gap-x-4 overflow-hidden">
          <BannerRowTop title="Our" color="text-mode" />
          <BannerRowTop title="Latest" color="text-mode" />
          <BannerRowTop title="Project" color="text-default" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <RegularList
            items={PROJECT_CARD_DETAILS}
            resourceName="card"
            itemComponent={ProjectDetails}
          />
        </div>
      </section>
    </Container>
  );
};

export default Projects;
