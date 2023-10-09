import Container from "../layouts/Container";
import { PROCESS_DETAILS } from "../../lib/data";
import RegularList from "../general/RegularList";
import Card from "../layouts/Card";
import useTheme from "../../Hooks/useTheme";
import Header from "../general/Header";

const ProcessSection = () => {
  const { theme } = useTheme();

  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px]`;

  const PROCESSSECTIONHEADER = [
    {
      id: 1,
      phrase: "Our",
      className: `${headerText} text-orangePrimary`,
    },
    {
      id: 2,
      phrase: "customized",
      className: `${headerText} text-orangePrimary`,
    },
    {
      id: 3,
      phrase: "workflow",
      className: `${headerText} text-${theme}`,
    },
  ];

  const FIRST_LINE = PROCESSSECTIONHEADER.slice(0, 2);
  const SECOND_LINE = PROCESSSECTIONHEADER.slice(2);

  return (
    <Container id="process" pt="20">
      <div className="flex items-center gap-x-1">
        <RegularList
          resourceName="text"
          itemComponent={Header}
          items={FIRST_LINE}
        />
      </div>

      <div className="mb-7 flex items-center gap-x-1">
        <RegularList
          resourceName="text"
          itemComponent={Header}
          items={SECOND_LINE}
        />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <RegularList
          items={PROCESS_DETAILS}
          resourceName="item"
          itemComponent={Card}
        />
      </div>
    </Container>
  );
};

export default ProcessSection;
