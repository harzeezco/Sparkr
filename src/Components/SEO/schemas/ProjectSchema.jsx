import PropTypes from "prop-types";

const ProjectSchema = ({
  projectName,
  projectURL,
  projectDescription,
  projectImageURL,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: projectName,
    description: projectDescription,
    url: projectURL,
    image: projectImageURL,
    author: {
      "@type": "Organization",
      name: "Your Agency Name",
      url: "https://www.youragencywebsite.com",
    },
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

ProjectSchema.propTypes = {
  projectName: PropTypes.string,
  projectURL: PropTypes.string,
  projectDescription: PropTypes.string,
  projectImageURL: PropTypes.string,
};

export default ProjectSchema;
