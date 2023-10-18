import useTheme from "../../Hooks/useTheme";
import Container from "../layouts/Container";
import { VALUE_DETAILS } from "../../lib/data";
import ValueDetails from "../data-display/ValueDetails";
import RegularList from "../general/RegularList";

const ValueSection = () => {
  const { theme } = useTheme();

  const headerText = `theme-transition font-primary text-[30px] font-bold sm:text-[45px] md:leading-[74px] lg:text-[60px] text-${theme}`;

  return (
    <Container id="value">
      <h1 className={`${headerText}`}>
        Core <span className="text-orangePrimary">values</span>. <br /> What
        Makes Us Sparkr
      </h1>

      <div className="mt-20 grid grid-cols-1 gap-6 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
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
