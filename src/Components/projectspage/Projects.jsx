import { PROJECT_CARD_DETAILS } from "../../lib/data";
import ProjectDetails from "../data-display/ProjectDetails";
import RegularList from "../general/RegularList";

import Container from "../layouts/Container";

const Projects = () => {
  return (
    <Container id="project" pb="[6rem]" pt="10">
      <section>
        <h1 className="whitespace-nowrap font-primary text-3xl font-bold capitalize leading-10 text-white sm:text-[3.2rem] sm:leading-[60px] lg:text-[6.5vw] lg:leading-[95px]">
          our latest <span className="text-orangePrimary"> project </span>
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <RegularList
            items={PROJECT_CARD_DETAILS}
            resourceName="card"
            itemComponent={ProjectDetails}
          />
        </div>

        <div className="mt-8 text-center">
          <button className="btn-primary">view all project</button>
        </div>
      </section>
    </Container>
  );
};

export default Projects;
