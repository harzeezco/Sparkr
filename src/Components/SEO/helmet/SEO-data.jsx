import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEOData = ({ title, description, metaTags }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {metaTags &&
        metaTags.map((metaTag) => (
          <meta
            key={metaTag.name}
            name={metaTag.name}
            content={metaTag.content}
          />
        ))}
    </Helmet>
  );
};

SEOData.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  metaTags: PropTypes.array.isRequired,
};

export default SEOData;
