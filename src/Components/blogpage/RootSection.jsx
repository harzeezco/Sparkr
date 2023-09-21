import useTheme from "../../Hooks/useTheme";
import Container from "../layouts/Container";
import BlogInsight from "./BlogInsight";
import BlogNews from "./BlogNews";
import BlogTutorial from "./BlogTutorial";

const RootSection = () => {
  const { theme } = useTheme();

  return (
    <Container>
      <h2
        className={`font-weight-lg font-primary text-[30px] font-bold capitalize leading-10 text-${theme} w-3/6 sm:text-[45px] md:leading-[74px] lg:text-[60px] pt-12`}
      >
        latest <span className="text-orangePrimary"> blog </span>
      </h2>
      <BlogNews />
      <BlogInsight />
      <BlogTutorial />
    </Container>
  );
};

export default RootSection;
