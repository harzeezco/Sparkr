import PropTypes from "prop-types";
import Project from "./Project";
import { SERVICES } from "../../lib/data";

const Service = ({ manageModal }) => {
  return (
    <div className="mt-5 flex w-full max-w-screen-xl flex-col items-center">
      {SERVICES.map((project, index) => {
        return (
          <Project
            index={index}
            title={project.title}
            manageModal={manageModal}
            key={index}
          />
        );
      })}
    </div>
  );
};

Service.propTypes = {
  manageModal: PropTypes.func,
};

export default Service;
