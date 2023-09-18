import PropTypes from "prop-types";

const Container = ({ id, children, pb, pt, py, pr }) => {
  return (
    <div
      id={id}
      className={`pb-${pb} py-${py} pr-${pr} m-auto w-full px-4 py-[2rem] pt-${pt} md:pt-16 lg:max-w-[85vw]`}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  pt: PropTypes.string,
  pb: PropTypes.string,
  pr: PropTypes.string,
  py: PropTypes.string,
};
export default Container;
