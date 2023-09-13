import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLink = ({ navlink }) => {
  const { link, path } = navlink;

  return (
    <Link to={path} key={link}>
      {link}
    </Link>
  );
};

NavLink.propTypes = {
  navlink: PropTypes.object,
  link: PropTypes.string,
  path: PropTypes.string,
};

export default NavLink;
