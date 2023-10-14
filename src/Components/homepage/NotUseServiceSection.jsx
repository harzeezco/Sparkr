import AnimatedTextLetters from "../../Animation/AnimatedTextLetters";
import useTheme from "../../Hooks/useTheme";
import Header from "../general/Header";
import RegularList from "../general/RegularList";
import Services from "../general/Services";
import Container from "../layouts/Container";

const ServiceSection = () => {
  const { theme } = useTheme();

  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px]`;

  const SERVICESECTIONHEADER = [
    {
      id: 1,
      phrase: "Customer-Centric",
      className: `${headerText} text-orangePrimary`,
    },
    {
      id: 2,
      phrase: "Design",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 3,
      phrase: "Services",
      className: `${headerText} text-${theme}`,
    },
  ];

  const FIRST_LINE = SERVICESECTIONHEADER.slice(0, 2);
  const SECOND_LINE = SERVICESECTIONHEADER.slice(2);

  return (
    <Container id="service" pt="20">
      <>
        <div className="flex items-center gap-x-1">
          <RegularList
            resourceName="text"
            itemComponent={Header}
            items={FIRST_LINE}
          />
        </div>

        <div className="flex flex-col md:flex-row lg:max-w-[86%]">
          <div className="mb-3 mr-4 flex items-center gap-x-1">
            <RegularList
              resourceName="text"
              itemComponent={Header}
              items={SECOND_LINE}
            />
          </div>

          <AnimatedTextLetters
            openDuration={0.5}
            closeDuration={0.5}
            delay={0.5}
            phrase={`With best-in-class design and engineering, our work maximizes value by putting your customers at the center of everything we do.`}
            className="mt-2 leading-[20px] sm:text-[18px]"
          />
        </div>
      </>
      <Services header={true} />
    </Container>
  );
};

export default ServiceSection;
