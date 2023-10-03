import PropTypes from "prop-types";
import ScrollToTopLink from "../../Animation/ScrollToTopLink";

const NavLink = ({ navlink }) => {
  const { link, path } = navlink;

  return (
    <li>
      <ScrollToTopLink to={path} key={link}>
        {link}
      </ScrollToTopLink>
    </li>
  );
};

NavLink.propTypes = {
  navlink: PropTypes.object,
  link: PropTypes.string,
  path: PropTypes.string,
};

export default NavLink;
