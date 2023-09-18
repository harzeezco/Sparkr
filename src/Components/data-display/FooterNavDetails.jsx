import PropTypes from "prop-types";
import RegularList from "../general/RegularList";
import NavLink from "../navigation/NavLink";
import useTheme from "../../Hooks/useTheme";

const FooterNavDetails = ({ items, heading, link, content }) => {
  const { theme } = useTheme()
  
  return (
    <nav>
      <h3
        className={`text-[20px] font-bold capitalize leading-8 text-${theme}`}
      >
        {heading}
      </h3>
      <ul className="mt-7 grid gap-y-4 capitalize">
        {link ? (
          <RegularList
            items={items}
            resourceName="navlink"
            itemComponent={NavLink}
          />
        ) : (
          <li className="mt-7 capitalize">{content}</li>
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
};

export default FooterNavDetails;
