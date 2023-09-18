import PropTypes from "prop-types";

const Checkbox = ({
  isLight,
  type = "checkbox",
  name,
  labelFor,
  ...otherProps
}) => {
  return (
    <div className="flex items-center gap-x-2">
      <input
        type={type}
        name={name}
        id={labelFor}
        className={`${isLight} border border-solid`}
        {...otherProps}
      />
      <label htmlFor={labelFor} className="text-lg">
        {labelFor}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  isLight: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  labelFor: PropTypes.string,
};

export default Checkbox;
