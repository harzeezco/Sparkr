import useTheme from "../../Hooks/useTheme";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <div
      className="md:pt-${pt} m-auto mb-[3.5rem] w-full px-5 lg:max-w-[1100px]"
      id="hero"
    >
      <h1
        className={`whitespace-nowrap font-primary text-3xl font-bold capitalize leading-10 text-${theme} theme-transition pt-12 sm:text-[3.2rem] sm:leading-[60px] lg:text-[6.5vw] lg:leading-[80px]`}
      >
        Let’s start a <br />
        <span className="text-orangePrimary"> project </span> together{" "}
      </h1>

      <p className="pt-3 text-base leading-[30px] md:w-[65%] md:text-xl">
        Perhaps there’s a way your business could benefit by partnering with
        Route Agency? Please share your thoughts in the form below, and we’ll
        respond within 48 hours of receiving the inquiry.
      </p>
    </div>
  );
};

export default HeroSection;
