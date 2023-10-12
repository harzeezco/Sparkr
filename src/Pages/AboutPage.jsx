import RootSection from "../Components/aboutpage/RootSection";
import SEOData from "../Components/SEO/helmet/SEO-data";
import AboutPageSchema from "../Components/SEO/schemas/AboutPageSchema";
import { HelmetProvider } from "react-helmet-async";


const AboutPage = () => {
  const title = "Sparkr - We are always Reliable and Responsive";
  const description =
    "We are a leading tech agency specializing in innovative solutions for businesses. Explore our services and expertise.";

  const metaTags = [
    { name: "og:title", content: title },
    { name: "og:description", content: description },
  ];

  return (
    <>
      <HelmetProvider>
        <SEOData title={title} description={description} metaTags={metaTags} />
        <RootSection />
        <AboutPageSchema />
      </HelmetProvider>
    </>
  );
};

export default AboutPage;
