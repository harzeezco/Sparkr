import Container from "../layouts/Container";
import RegularList from "../general/RegularList";

import { PROJECT_CARD_DETAILS } from "../../lib/data";
import ProjectDetails from "../data-display/ProjectDetails";
import { Link } from "react-router-dom";
import useTheme from "../../Hooks/useTheme";

const ProjectSection = () => {
  const display_4_projects = PROJECT_CARD_DETAILS.slice(0, 4);
  const { theme } = useTheme();

  return (
    <Container id="project">
      <h1
        className={`font-primary text-[30px] font-bold capitalize text-${theme} theme-transition sm:text-[45px] md:leading-[74px] lg:text-[60px]`}
      >
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
        <Link to="/project" className="btn-primary">
          view all project
        </Link>
      </div>
    </Container>
  );
};

export default ProjectSection;
