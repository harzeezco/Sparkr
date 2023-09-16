import Container from "../layouts/Container";
import RegularList from "../general/RegularList";
import Card from "../layouts/Card";

import { PROJECT_CARD_DETAILS } from "../../lib/data";

const ProjectSection = () => {
  return (
    <Container id="project" pb="[6rem]" pt="0">
      <h1 className="heading-primary">
        our latest <span className="text-orangePrimary">project</span>
      </h1>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <RegularList
          items={PROJECT_CARD_DETAILS}
          itemComponent={Card}
          resourceName="card"
        />
      </div>

      <div className="mt-8 text-center">
        <button className="btn-primary">view all project</button>
      </div>
    </Container>
  );
};

export default ProjectSection;
