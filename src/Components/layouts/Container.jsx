import PropTypes from "prop-types";

const Container = ({ id, children, pt, py}) => {
  return (
    <div
      id={id}
      className={`m-auto w-full px-4 mb-[6rem] md:pt-${pt} lg:max-w-[85vw] py-${py}`}
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
