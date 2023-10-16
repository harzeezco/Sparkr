import * as React from "react";
import PropTypes from "prop-types";

const Checkbox = React.forwardRef(
  ({ isLight, type = "checkbox", name, labelFor, otherProps }, ref) => {
    return (
      <div className="flex items-center gap-x-2">
        <input
          type={type}
          name={name}
          id={labelFor}
          className={`${isLight} border border-solid`}
          {...otherProps}
          ref={ref}
        />
        <label htmlFor={labelFor} className="text-lg">
          {labelFor}
        </label>
      </div>
    );
  },
);

Checkbox.propTypes = {
  otherProps: PropTypes.node,
  isLight: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  labelFor: PropTypes.string,
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
