import { HelmetProvider } from "react-helmet-async";
import RootSection from "../Components/homepage/RootSection";
import SEOData from "../Components/SEO/helmet/SEO-data";
import HomepageSchema from "../Components/SEO/schemas/HomePageSchema";
import withPageAnimation from "../Components/HOC/withPageAnimation";

const PageWithAnimation = withPageAnimation(RootSection);

const HomePage = () => {
  const title = "Sparkr - Digital Agency for building brands";
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

        <PageWithAnimation />
        <HomepageSchema />
      </HelmetProvider>
    </>
  );
};

export default HomePage;
