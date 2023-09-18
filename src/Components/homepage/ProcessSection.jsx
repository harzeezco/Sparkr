import Container from "../layouts/Container";
import { PROCESS_DETAILS } from "../../lib/data";
import RegularList from "../general/RegularList";
import Card from "../layouts/Card";
import useTheme from "../../Hooks/useTheme";

const ProcessSection = () => {
  const { theme } = useTheme();

  return (
    <Container id="process" pb="[6rem]" pt="0">
      <h1
        className={`font-weight-lg font-primary text-[30px] font-bold capitalize leading-10 text-${theme} sm:text-[45px] md:leading-[74px] lg:text-[60px]`}
      >
        our <span className="text-orangePrimary">customized</span> <br />
        workflow
      </h1>

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
