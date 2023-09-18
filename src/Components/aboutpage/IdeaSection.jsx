import useTheme from "../../Hooks/useTheme";
import { COUNT_DETAILS } from "../../lib/data";
import CounterDetails from "../data-display/CounterDetails";
import RegularList from "../general/RegularList";
import Container from "../layouts/Container";

const IdeaSection = () => {
  const { theme } = useTheme();

  return (
    <Container id="idea">
      <h1
        className={`m-auto text-center font-primary text-3xl font-bold capitalize leading-10 md:w-[70%] text-${theme} theme-transition sm:text-[3.2rem] sm:leading-[60px] lg:text-[6.5vw] lg:leading-[90px]`}
      >
        We bring <span className="text-orangePrimary"> ideas</span> to life
      </h1>
      <p className="m-auto pt-3 text-center text-base leading-[30px] md:w-[70%] md:text-xl">
        Our culture is built on a foundation of taking care of our own,
        investing in continued education and wellness, and developing skills,
        because we know you can’t pour from an empty cup.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
        <RegularList
          items={COUNT_DETAILS}
          itemComponent={CounterDetails}
          resourceName="item"
        />
      </div>
    </Container>
  );
};

export default IdeaSection;
