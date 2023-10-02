import useTheme from "../../Hooks/useTheme";
import CounterDetails from "../data-display/CounterDetails";
import Container from "../layouts/Container";
import useCounterRef from "../../Hooks/useCounterRef";

const IdeaSection = () => {
  const { counter1, counter2, counter3, observe } = useCounterRef();
  const { theme } = useTheme();

  return (
    <Container id="idea">
      <h1
        className={`m-auto text-center font-primary text-3xl font-bold capitalize leading-10 md:w-[70%] text-${theme} theme-transition sm:text-[3.2rem] sm:leading-[60px] lg:text-[6.5vw] lg:leading-[90px]`}
      >
        We bring <span className="text-orangePrimary">ideas</span> to life
      </h1>
      <p className="m-auto pt-3 text-center text-base leading-[30px] md:w-[70%] md:text-xl">
        Our culture is built on a foundation of taking care of our own,
        investing in continued education and wellness, and developing skills,
        because we know you can’t pour from an empty cup.
      </p>

      <div
        className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
        ref={observe}
      >
        <CounterDetails
          counter={counter1}
          header="years of experience"
          prgh_text="We have over 5+ years of experience in this design industry."
          percent_symb="+"
          data_value="05"
        />
        <CounterDetails
          counter={counter2}
          header="design awards"
          prgh_text="We have achieved over 60 design awards for our awesome work."
          percent_symb="+"
          data_value="60"
        />
        <CounterDetails
          counter={counter3}
          header="Client Satisfaction"
          prgh_text="Our client is 97% satisfied with our work and services"
          percent_symb="%"
          data_value="97"
        />
      </div>
    </Container>
  );
};

export default IdeaSection;
