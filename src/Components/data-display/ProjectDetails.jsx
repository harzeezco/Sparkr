import { useContext, useState } from "react";
import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";
import { ScaleCursorOnHoverContext } from "../../Contexts/ScaleCursorOnHoverContext";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";

import Image from "../general/Image";

const ProjectDetails = ({ card }) => {
  const [hover, setHover] = useState(false);
  const { theme } = useTheme();
  const { setIsProjectHovered } = useContext(ScaleCursorOnHoverContext);
  const { defaultSrc, alternateSrc, job_title, id } = card;

  const project_btn = `rounded-2xl border border-${theme} px-4 py-1 text-sm font-normal text-${theme}-primary opacity-[70%] capitalize theme-transition`;

  return (
    <article className="mb-6">
      <div
        className="group relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <a href={`/project/${id}`}>
          <div
            className="image-container relative mx-auto w-full max-w-[100vw] cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsProjectHovered(true)}
            onMouseLeave={() => setIsProjectHovered(false)}
          >
            <Image
              defaultSrc={defaultSrc}
              alternateSrc={alternateSrc}
              alt="Your Image"
              loading="lazy"
              height="420"
              width="100%"
              className="custom-grayscale"
            />
          </div>
        </a>
      </div>

      <div className="my-3 flex gap-x-4">
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

      <AnimatedTextLetters
        phrase={job_title}
        className={`theme-transition whitespace-nowrap text-[1.3rem] font-bold  md:text-[2.4vw] ${
          hover ? "text-orangePrimary" : `text-${theme}`
        }`}
        openDuration={0.3}
        closeDuration={0.3}
      />
    </article>
  );
};

ProjectDetails.propTypes = {
  card: PropTypes.object,
  img: PropTypes.node,
  job_title: PropTypes.string,
};

export default ProjectDetails;
