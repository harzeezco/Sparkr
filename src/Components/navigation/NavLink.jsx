import PropTypes from "prop-types";
import ScrollToTopLink from "../../Animation/ScrollToTopLink";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";

const NavLink = ({ navlink }) => {
  const { title, path } = navlink;

  return (
    <li>
      <ScrollToTopLink to={path} key={title}>
        <AnimatedTextLetters
          openDuration={0.5}
          closeDuration={0.5}
          delay={0.5}
          phrase={title}
          className="mt-2 leading-[20px] sm:text-[18px]"
        />
      </ScrollToTopLink>
    </li>
  );
};

NavLink.propTypes = {
  navlink: PropTypes.object,
};

export default NavLink;
