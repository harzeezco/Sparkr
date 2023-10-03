const AboutPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us",
    description:
      "A team of creative thinkers and doers who believe in the power of creativity to inspire change. Working seamlessly across brand and digital, we build modern brands with heart and spirit.",
    url: "https://www.youragencywebsite.com/about",
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "#about-content",
    },
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
};

export default AboutPageSchema;
