import * as React from "react";
import PropTypes from "prop-types";

const Input = React.forwardRef(
  (
    {
      label,
      labelText,
      autoComplete,
      placeholder,
      type,
      className,
      labelClass,
      otherProps,
    },
    ref,
  ) => {
    return (
      <div className="pb-2">
        <label htmlFor={label} className={labelClass}>
          {labelText}
        </label>
        <input
          autoComplete={autoComplete}
          type={type}
          placeholder={placeholder}
          name={label}
          id={label}
          className={className}
          {...otherProps}
          ref={ref}
        />
      </div>
    );
  },
);

Input.propTypes = {
  label: PropTypes.string,
  labelText: PropTypes.string,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  labelClass: PropTypes.string,
  otherProps: PropTypes.node,
};

Input.displayName = "Input";

export default Input;
