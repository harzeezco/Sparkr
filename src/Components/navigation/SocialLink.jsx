import PropTypes from "prop-types";

const SocialLink = ({ items }) => {
  const { icon, url, name } = items;
  return (
    <li className="flex items-center justify-center bg-colorDarkLight p-4">
      <a
        aria-label={`${name}`}
        target="_blank"
        href={`${url}`}
        rel="noopener noreferrer"
      >
        <img className="h-4" src={icon} alt={`{${name} Logo}`} />
      </a>
    </li>
  );
};

SocialLink.propTypes = {
  items: PropTypes.array,
  icon: PropTypes.node,
  name: PropTypes.string,
  url: PropTypes.string,
};

export default SocialLink;
