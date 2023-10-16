import useTheme from "../../Hooks/useTheme";
import Container from "../layouts/Container";

const JobOpeningSection = () => {
  const { theme } = useTheme();

  return (
    <Container id="job-opening">
      <h1
        className={`font-primary text-[4vw] font-bold leading-[25px] md:leading-[60px] md:max-w-[87%] text-${theme}`}
      >
        If you prefer,{" "}
        <a href="#" className={`underline transition-all hover:no-underline`}>
          send us an email
        </a>{" "}
        for new business opportunities or job openings.
      </h1>

      <div className="mt-6 md:mt-14 grid grid-cols-1 grid-rows-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className={`${
            theme === "dark" && "bg-dark-secondary"
          } h-[10rem] self-end px-5 pt-8 sm:self-start`}
        >
          <a
            href="#"
            className={`text-xl font-bold underline transition-all hover:no-underline text-${theme}`}
          >
            info@company.agency
          </a>
          <p className="pt-2 leading-7">
            Send us mail for New business, general and press.
          </p>
        </div>

        <div
          className={`${
            theme === "dark" && "bg-dark-secondary"
          } p row-span-2 h-[15rem] px-5 py-8`}
        >
          <a
            href="#"
            className={`text-xl font-bold underline transition-all hover:no-underline text-${theme}`}
          >
            career@company.agency
          </a>
          <p className="pb-10 pt-2 leading-7 ">
            Send us mail for If you wish to join our agency team.
          </p>
          <a href="#" className="btn-secondary">
            view open positions
          </a>
        </div>

        <address
          className={`${
            theme === "dark" && "bg-dark-secondary"
          } h-[12rem] self-end px-5 pt-8 not-italic sm:self-start`}
        >
          <h3 className={`text-${theme} text-xl font-bold`}>Our office</h3>

          <p className="pt-2 leading-7">
            50 Seddon Road, (H3, Private Bag 3010, Hamilton), Seddon Road,
            Frankton, Hamilton 3204, New Zealand
          </p>
        </address>
      </div>
    </Container>
  );
};

export default JobOpeningSection;
