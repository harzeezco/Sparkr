const BlogPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog",
    description: "Explore our blog for informative articles.",
    url: "https://www.youragencywebsite.com/blog", // URL of the Blog page
    publisher: {
      "@type": "Organization",
      name: "Your Agency Name",
      url: "https://www.youragencywebsite.com",
    },
    mainEntityOfPage: {
      "@type": "CollectionPage",
      mainContentOfPage: {
        "@type": "WebPageElement",
        cssSelector: ".blog-posts", // Use a selector for the list of blog posts
      },
    },
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

export default BlogPageSchema;
