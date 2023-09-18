import PropTypes from "prop-types";
import useTheme from "../../Hooks/useTheme";
import ImageWrapper from "../data-display/ImageWrapper";

const SocialLink = ({ items }) => {
  const { icon, url, name, iconLight } = items;
  const { theme } = useTheme();

  const isLight =
    theme === "light" ? "bg-light-secondary" : "bg-dark-secondary";

  return (
    <li
      className={`flex items-center justify-center ${isLight} theme-transition p-4`}
    >
      <a
        aria-label={`${name}`}
        target="_blank"
        href={`${url}`}
        rel="noopener noreferrer"
      >
        <ImageWrapper
          className="h-4"
          src={iconLight}
          srcForDarkMode={icon}
          alt={`{${name} Logo}`}
        />
      </a>
    </li>
  );
};

SocialLink.propTypes = {
  items: PropTypes.object,
  icon: PropTypes.node,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default SocialLink;
