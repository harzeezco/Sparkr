import PropTypes from "prop-types";

const BlogPostSchema = ({
  postTitle,
  postURL,
  postDate,
  authorName,
  authorURL,
  postDescription,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: postTitle,
    description: postDescription,
    datePublished: postDate, // Format: YYYY-MM-DD
    author: {
      "@type": "Person",
      name: authorName,
      url: authorURL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postURL,
    },
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

BlogPostSchema.propTypes = {
  postTitle: PropTypes.string,
  postDate: PropTypes.string,
  postDescription: PropTypes.string,
  authorName: PropTypes.string,
  authorURL: PropTypes.string,
  postURL: PropTypes.string,
};

export default BlogPostSchema;
