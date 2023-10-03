import useTheme from "../../Hooks/useTheme";
import { PROJECT_CARD_DETAILS } from "../../lib/data";
import ProjectDetails from "../data-display/ProjectDetails";
import RegularList from "../general/RegularList";

import Container from "../layouts/Container";

const Projects = () => {
  const { theme } = useTheme();

  return (
    <Container id="project">
      <section className="pt-12" id="projects-list">
        <h1
          className={`whitespace-nowrap font-primary text-3xl font-bold capitalize text-${theme} theme-transition sm:text-[3.2rem] lg:text-[6.5vw]`}
        >
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
          <button className="btn-primary">load more</button>
        </div>
      </section>
    </Container>
  );
};

export default Projects;
