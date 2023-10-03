import PropTypes from "prop-types";

import useTheme from "../../Hooks/useTheme";

const BlogDetails = ({ items }) => {
  const { theme } = useTheme();
  const { img, date, year, title } = items;

  return (
    <div>
      <img
        src={img}
        alt="a book with a phone place on a platform"
        className="w-full"
        loading="lazy"
      />
      <p className="mb-2 mt-5 font-secondary">
        {" "}
        Trent Boult • {date}, {year}
      </p>
      <p
        className={`font-secondary text-lg font-bold  text-${theme} md:text-lg`}
      >
        {title}
      </p>
    </div>
  );
};

BlogDetails.propTypes = {
  items: PropTypes.object,
  img: PropTypes.string,
  date: PropTypes.string,
  year: PropTypes.number,
  title: PropTypes.string,
};

export default BlogDetails;
