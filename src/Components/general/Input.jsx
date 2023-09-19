import PropTypes from "prop-types";

const Input = ({
  label,
  labelText,
  autoComplete,
  placeholder,
  type,
  className,
  labelClass,
  ...otherProps
}) => {
  return (
    <div className="pb-4">
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
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  labelText: PropTypes.string,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  labelClass: PropTypes.string,
};

export default Input;
