import PropTypes from "prop-types";

const Container = ({ id, children, pt, py, ...otherProps }) => {
  return (
    <div
      id={id}
      className={`m-auto mb-[6rem] w-full px-4 md:pt-${pt} lg:max-w-[85vw] py-${py}`}
      {...otherProps}
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
