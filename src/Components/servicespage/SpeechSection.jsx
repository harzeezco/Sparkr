import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";
import useTheme from "../../Hooks/useTheme";
import Container from "../layouts/Container";

const SpeechSection = () => {
  const { theme } = useTheme();

  return (
    <Container id="speech" pb="0" py="14" pt="0" pr="8">
      <AnimatedTextLetters
        phrase={`“Creativity matters. In a complex, busy world, creativity helps brands to cut through the noise; to stand out. It has the power to make people feel something; to think differently.”`}
        className={`text-primary theme-transition font-normaL text-left font-primary text-[30px] text-${theme} sm:text-[45px] lg:pr-5 lg:text-[65px] lg:leading-[74px]`}
        openDuration={0.1}
        closeDuration={0.1}
      />

      <p className="mt-5">
        <AnimatedTextLetters
          openDuration={0.5}
          closeDuration={0.5}
          delay={0.2}
          phrase="David Droga, British advertising creative director"
          className="text-lg"
        />
      </p>
    </Container>
  );
};

export default SpeechSection;
