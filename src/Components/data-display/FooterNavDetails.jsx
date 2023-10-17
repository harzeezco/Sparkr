import PropTypes from "prop-types";
import RegularList from "../general/RegularList";
import useTheme from "../../Hooks/useTheme";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";
import NavLink from "../navigation/NavLink";

const FooterNavDetails = ({ items, heading, link, content, mt }) => {
  const { theme } = useTheme();

  return (
    <nav>
      <AnimatedTextLetters
        phrase={heading}
        className={`text-[20px] font-bold capitalize leading-8 text-${theme} theme-transition`}
        openDuration={0.3}
        closeDuration={0.3}
        delay={0.1}
      />
      <ul className={`mt-${mt} grid gap-y-4 capitalize`}>
        {link ? (
          <RegularList
            items={items}
            resourceName="navlink"
            itemComponent={NavLink}
          />
        ) : (
          <li className="mt-7 capitalize">
            <AnimatedTextLetters
              openDuration={0.3}
              closeDuration={0.3}
              delay={0.2}
              phrase={content}
              className="mt-2 capitalize"
            />
          </li>
        )}
      </ul>
    </nav>
  );
};

FooterNavDetails.propTypes = {
  items: PropTypes.array,
  data: PropTypes.array,
  heading: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.bool,
  mt: PropTypes.string,
};

export default FooterNavDetails;
