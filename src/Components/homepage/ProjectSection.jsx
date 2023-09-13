import { PROJECT_CARD_DETAILS } from "../../lib/data";
import RegularList from "../general/RegularList";
import Card from "../layouts/Card";

const ProjectSection = () => {
  return (
    <div id="project" className="m-auto w-full px-4  pb-[6rem] lg:max-w-[85vw]">
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
    </div>
  );
};

export default ProjectSection;
