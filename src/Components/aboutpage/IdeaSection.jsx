import useCounterRef from "../../Hooks/useCounterRef";
import useTheme from "../../Hooks/useTheme";
import CounterDetails from "../data-display/CounterDetails";
import Container from "../layouts/Container";
import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";

const IdeaSection = () => {
  const { counter1, counter3, observe } = useCounterRef();
  const { theme } = useTheme();

  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px] text-${theme} text-center`;

 

  return (
    <Container id="idea">
      <h1 className={`${headerText}`}>
        We bring <span className="text-orangePrimary">ideas</span> to life
      </h1>

      <div className="m-auto text-center md:w-[70%] mt-2">
        <AnimatedTextLetters
          openDuration={0.5}
          closeDuration={0.5}
          delay={0.5}
          phrase={`Our culture is built on a foundation of taking care of our own, investing in continued education and wellness, and developing skills, because we know you can’t pour from an empty cup.`}
          className="text-base leading-[30px] md:text-xl"
        />
      </div>

      <div
        className="mt-16 grid grid-cols-1 justify-center gap-8 sm:grid-cols-[320px_320px]"
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
