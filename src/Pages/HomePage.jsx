import RootSection from "../Components/homepage/RootSection";
// import PageHelmet from "../Components/SEO/helmet/Pageahelmet";
import HomepageSchema from "../Components/SEO/schemas/HomePageSchema";

const HomePage = () => {
  return (
    <>
      {/* <PageHelmet
        title="Sparkr Agency - Providing Innovative Solutions"
        description="We are a leading tech agency specializing in innovative solutions for businesses. Explore our services and expertise."
      /> */}
      <RootSection />
      <HomepageSchema />
    </>
  );
};

export default HomePage;
