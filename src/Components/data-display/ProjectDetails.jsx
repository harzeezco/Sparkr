import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";
import Image from "../general/Image";
import { useContext } from "react";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";
import { ScaleCursorOnHoverContext } from "../../Contexts/ScaleCursorOnHoverContext";

const ProjectDetails = ({ card }) => {
  const { theme } = useTheme();
  const { setIsProjectHovered } = useContext(ScaleCursorOnHoverContext);

  const { defaultSrc, alternateSrc, job_title, id } = card;

  const project_btn = `rounded-2xl border border-${theme} px-4 py-1 text-sm font-normal text-${theme}-primary opacity-[70%] capitalize theme-transition`;

  return (
    <article className="mb-6">
      <div className="group relative">
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
        className={`theme-transition whitespace-nowrap text-[1.3rem] font-bold text-${theme} md:text-[2.4vw]`}
        openDuration={0.5}
        closeDuration={0.5}
        delay={0.1}
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
