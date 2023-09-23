// PageHelmet.js
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const PageHelmet = ({
  title,
  description,
  ogImageUrl,
  twitterImageUrl,
  canonicalUrl,
}) => {
  return (
    <Helmet>
      {/* Set the page title dynamically */}
      <title>{title}</title>

      {/* Set the meta description dynamically */}
      <meta name="description" content={description} />

      {/* Set the Open Graph image URL dynamically */}
      <meta property="og:image" content={ogImageUrl} />

      {/* Set the Twitter Card image URL dynamically */}
      <meta name="twitter:image" content={twitterImageUrl} />

      {/* Specify the canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Control search engine indexing */}
      <meta name="robots" content="index, follow" />

      {/* Include a favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph meta tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Card meta tags for Twitter sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonicalUrl} />

      {/* Additional SEO best practices can be added here */}
    </Helmet>
  );
};

PageHelmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ogImageUrl: PropTypes.string,
  twitterImageUrl: PropTypes.string,
  canonicalUrl: PropTypes.string,
};

export default PageHelmet;
