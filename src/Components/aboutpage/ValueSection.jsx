import useTheme from "../../Hooks/useTheme";
import { VALUE_DETAILS } from "../../lib/data";
import ValueDetails from "../data-display/ValueDetails";
import RegularList from "../general/RegularList";
import Container from "../layouts/Container";

const ValueSection = () => {
  const { theme } = useTheme();

  return (
    <Container id="value" pb="[3rem]" pt="10">
      <h1
        className={`font-primary text-3xl font-bold capitalize leading-10 text-${theme} theme-transition sm:text-[3.2rem] sm:leading-[60px] lg:text-[6vw] lg:leading-[80px]`}
      >
        Core <span className="text-orangePrimary">values</span>. <br />{" "}
        Expressed in everything.
      </h1>

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
