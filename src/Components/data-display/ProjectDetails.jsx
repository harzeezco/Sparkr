import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import upArrowDark from "../../assets/Icons/upArrowDark.svg";
import upArrowLight from "../../assets/Icons/upArrowLight.svg";
import ImageWrapper from "./ImageWrapper";
import useTheme from "../../Hooks/useTheme";

const ProjectDetails = ({ card }) => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const { img, job_title, id } = card;

  const handleNavigateToProjectDetails = () => {
    navigate(`/project/${id}`);
  };

  const project_btn = `rounded-2xl border border-${theme} px-4 py-1 text-sm font-normal text-${theme}-primary opacity-[70%] capitalize`;

  return (
    <article className="mb-6">
      <div className="group relative">
        <img src={img} alt="Your Image" className="w-full" />
        <div className="duration-9000 absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <button
            onClick={handleNavigateToProjectDetails}
            className="z-100 relative flex h-10 w-10 items-center justify-center rounded-full bg-orangePrimary  opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
          >
            <ImageWrapper
              className="h-[15px]"
              srcForDarkMode={upArrowDark}
              src={upArrowLight}
              alt="arrow"
            />
          </button>
        </div>
      </div>

      <div className="my-6 flex gap-x-4">
        <button className={`${project_btn} theme-transition cursor-auto`}>
          website
        </button>
        <button className={`${project_btn} theme-transition cursor-auto`}>
          design
        </button>
        <button className={`${project_btn} theme-transition cursor-auto`}>
          development
        </button>
      </div>
      <h3
        className={`whitespace-nowrap text-[1.3rem] font-bold text-${theme} md:text-[2.4vw]`}
      >
        {job_title}
      </h3>
    </article>
  );
};

ProjectDetails.propTypes = {
  card: PropTypes.object,
  img: PropTypes.node,
  job_title: PropTypes.string,
};

export default ProjectDetails;
