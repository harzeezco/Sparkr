const ContactPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact",
    description: "Get in touch with us.",
    url: "https://www.youragencywebsite.com/contact", // URL of the Contact page
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-123-456-7890", // Your contact telephone number
      contactType: "Customer Support",
      availableLanguage: "English", // Language of support
      areaServed: "Your Service Area", // Specify the service area
    },
    publisher: {
      "@type": "Organization",
      name: "Your Agency Name",
      url: "https://www.youragencywebsite.com",
    },
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

export default ContactPageSchema;
