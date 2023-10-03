const HomepageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sparkr Agency Application Homepage",
    description: "Welcome to Sparkr Agency's Homepage",
    url: "https://www.youragencywebsite.com",
    publisher: {
      "@type": "Organization",
      name: "Spark",
      logo: {
        "@type": "ImageObject",
        url: "https://www.youragencywebsite.com/logo.png",
        width: 150, 
        height: 40,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-123-456-7890",
        contactType: "Customer Support",
      },
      sameAs: [
        "https://www.facebook.com/youragency",
        "https://twitter.com/youragency",
        "https://www.linkedin.com/company/youragency",
        // Add your social media profiles here
      ],
    },
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

export default HomepageSchema;
