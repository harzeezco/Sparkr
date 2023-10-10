import useTheme from "../../Hooks/useTheme";
import { VALUE_DETAILS } from "../../lib/data";
import ValueDetails from "../data-display/ValueDetails";
import Header from "../general/Header";
import RegularList from "../general/RegularList";
import Container from "../layouts/Container";

const ValueSection = () => {
  const { theme } = useTheme();

  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px]`;

  const VALUESECTIONHEADER = [
    {
      id: 1,
      phrase: "Core",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 2,
      phrase: "values",
      className: `${headerText} text-orangePrimary`,
    },
    {
      id: 3,
      phrase: "Expressed",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 4,
      phrase: "in",
      className: `${headerText} text-${theme}`,
    },
    {
      id: 5,
      phrase: "everything.",
      className: `${headerText} text-${theme}`,
    },
  ];

  const FIRST_LINE = VALUESECTIONHEADER.slice(0, 3);
  const SECOND_LINE = VALUESECTIONHEADER.slice(3);

  return (
    <Container id="value">
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

      <div className="mt-20 grid grid-cols-1 gap-8 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
        <RegularList
          items={VALUE_DETAILS}
          resourceName="items"
          itemComponent={ValueDetails}
        />
      </div>
    </Container>
  );
};

export default ValueSection;
