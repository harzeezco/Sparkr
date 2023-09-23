const ProjectsPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    description: "Explore our portfolio of projects.",
    url: "https://www.youragencywebsite.com/projects", // URL of the Projects page
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "#projects-list", // Use a selector for the list of projects
    },
    provider: {
      "@type": "Organization",
      name: "Your Agency Name",
      url: "https://www.youragencywebsite.com",
    },
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

export default ProjectsPageSchema;
