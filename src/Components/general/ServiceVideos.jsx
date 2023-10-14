import PropTypes from "prop-types";

import { SERVICES } from "../../lib/data";
import VideoPlaceholder from "./VideoPlaceholder";
import Video from "../../assets/Images/Hero.webp";

const ServiceVideos = ({ index }) => {
  return (
    <div
      style={{ top: index * -100 + "%" }}
      className="transition-top-0.5s cubic-bezier-0.76-0-0.24-1 relative h-full w-full"
    >
      {SERVICES.map((project, index) => {
        const { src } = project;
        return (
          <div
            className="flex h-full w-full items-center justify-center"
            key={`modal_${index}`}
          >
            <VideoPlaceholder src={`/videos/${src}`} image={Video} />
          </div>
        );
      })}
    </div>
  );
};

ServiceVideos.propTypes = {
  index: PropTypes.number,
};

export default ServiceVideos;
