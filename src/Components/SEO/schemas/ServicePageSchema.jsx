const ServicesPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType:
      "Graphics Design - UI/UX, Development, Illustrations, Logo & Branding",
    provider: {
      "@type": "Organization",
      name: "Sparkr",
      url: "https://www.youragencywebsite.com",
    },
    areaServed: "Nigeria - Lagos state",
    description: "guiding companies through moments of transformation.",
    url: "https://www.youragencywebsite.com/services",
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

export default ServicesPageSchema;
