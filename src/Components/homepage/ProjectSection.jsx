import Container from "../layouts/Container";
import RegularList from "../general/RegularList";

import { PROJECT_CARD_DETAILS } from "../../lib/data";
import ProjectDetails from "../data-display/ProjectDetails";
import useTheme from "../../Hooks/useTheme";
import Header from "../general/Header";
import MagneticButton from "../general/RoundedButton";

const ProjectSection = () => {
  const display_4_projects = PROJECT_CARD_DETAILS.slice(0, 4);
  const { theme } = useTheme();

  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px]`;

  const PROJECTECTIONHEADER = [
    {
      id: 1,
      phrase: "our",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 2,
      phrase: "latest",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 3,
      phrase: "Project",
      className: `${headerText} text-orangePrimary`,
    },
  ];

  return (
    <Container id="project">
      <div className="flex items-center gap-x-1">
        <RegularList
          resourceName="text"
          itemComponent={Header}
          items={PROJECTECTIONHEADER}
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        <RegularList
          items={display_4_projects}
          itemComponent={ProjectDetails}
          resourceName="card"
        />
      </div>

      <div className="mt-8 flex justify-center capitalize">
        <a href="/project">
          <MagneticButton>
            <p>view all project</p>
          </MagneticButton>
        </a>
      </div>
    </Container>
  );
};

export default ProjectSection;
