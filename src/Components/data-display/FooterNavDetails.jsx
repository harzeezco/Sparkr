import PropTypes from "prop-types";
import RegularList from "../general/RegularList";
import NavLink from "../navigation/NavLink";

const FooterNavDetails = ({ items, heading, link, content }) => {
  return (
    <nav>
      <h3 className="text-[20px] font-bold capitalize leading-8 text-white">
        {heading}
      </h3>
      <ul className="mt-7 grid gap-y-4 capitalize text-white opacity-[70%]">
        {link ? (
          <RegularList
            items={items}
            resourceName="navlink"
            itemComponent={NavLink}
          />
        ) : (
          <li className="mt-7 capitalize text-white opacity-[70%]">
            {content}
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
};

export default FooterNavDetails;
