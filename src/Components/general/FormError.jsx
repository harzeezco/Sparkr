import PropTypes from "prop-types";

const FormError = ({ error }) => {
  return <p className="text-orangePrimary pb-3">{error}</p>;
};

FormError.propTypes = {
  error: PropTypes.string,
};

export default FormError;
