import useTheme from "../../Hooks/useTheme";
import { TEAMS_DETAILS } from "../../lib/data";
import TeamDetails from "../data-display/TeamDetails";
import RegularList from "../general/RegularList";
import Container from "../layouts/Container";

const TeamSection = () => {
  const { theme } = useTheme();

  return (
    <Container id="team">
      <h1
        className={`m-auto text-center font-primary text-3xl font-bold capitalize leading-10  text-${theme} theme-transition sm:leading-[50px] lg:text-[54px] lg:leading-[64px]`}
      >
        Meet the team
      </h1>
      <p className="m-auto pt-3 text-center text-base leading-[30px] md:w-[65%] md:text-xl">
        A team of creative thinkers and doers who believe in the power of
        creativity to inspire change. Working seamlessly across brand and
        digital, we build modern brands with heart and spirit.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <RegularList
          items={TEAMS_DETAILS}
          resourceName="items"
          itemComponent={TeamDetails}
        />
      </div>
    </Container>
  );
};

export default TeamSection;
