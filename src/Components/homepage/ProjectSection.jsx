import Container from "../layouts/Container";
import RegularList from "../general/RegularList";

import { PROJECT_CARD_DETAILS } from "../../lib/data";
import ProjectDetails from "../data-display/ProjectDetails";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const display_4_projects = PROJECT_CARD_DETAILS.slice(0, 4);

  return (
    <Container id="project" pb="[6rem]" pt="0">
      <h1 className="heading-primary">
        our latest <span className="text-orangePrimary">project</span>
      </h1>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <RegularList
          items={display_4_projects}
          itemComponent={ProjectDetails}
          resourceName="card"
        />
      </div>

      <div className="mt-8 text-center">
        <Link to='/project' className="btn-primary">view all project</Link>
      </div>
    </Container>
  );
};

export default ProjectSection;
