import PropTypes from "prop-types";
import { forwardRef } from "react";

const Container = forwardRef(({ id, children, pt, py, otherProps }, ref) => {
  return (
    <div
      id={id}
      className={`m-auto mb-[6rem] w-full px-5 md:pt-${pt} lg:max-w-[1100px] py-${py}`}
      {...otherProps}
      ref={ref}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";

Container.propTypes = {
  otherProps: PropTypes.node,
  id: PropTypes.string,
  children: PropTypes.node,
  pt: PropTypes.string,
  pb: PropTypes.string,
  pr: PropTypes.string,
  py: PropTypes.string,
};
export default Container;
