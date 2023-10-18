import useTheme from "../../Hooks/useTheme";
import {
  Pro,
  // Proline,
  Cloud,
  Greenish,
  Hues,
  Leafe,
  Penta,
  Recharge,
  Snow,
  Snowflake,
  Vision,
  ProlineLight,
  LeafeLight,
  RechargeLight,
  SnoflakeLight,
  PentaLight,
  VisionLight,
  HuesLight,
  GreenishLight,
  CloudLight,
  CactusLight,
} from "../../lib/icons.store";
import ImageWrapper from "../data-display/ImageWrapper";

const TrustedCompanies = () => {
  const { theme } = useTheme();

  return (
    <div
      id="trusted-companies"
      className="m-auto max-w-[80%] px-5 py-14 text-center"
    >
      <h1 className={`text-${theme} theme-transition pb-5 text-lg font-bold`}>
        Trusted by the best companies
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-around gap-5">
        <ImageWrapper
          src={ProlineLight}
          srcForDarkMode={Pro}
          width="100%"
          height="100%"
          alt="proline logo"
        />
        <ImageWrapper
          src={CloudLight}
          srcForDarkMode={Cloud}
          width="100%"
          height="100%"
          alt="cloud logo"
        />
        <ImageWrapper
          src={CactusLight}
          srcForDarkMode={Snow}
          width="100%"
          height="100%"
          alt="cactus logo"
        />
        <ImageWrapper
          src={HuesLight}
          srcForDarkMode={Hues}
          width="100%"
          height="100%"
          alt="Hues logo"
        />
        <ImageWrapper
          src={GreenishLight}
          srcForDarkMode={Greenish}
          width="100%"
          height="100%"
          alt="greenish logo"
        />

        <ImageWrapper
          src={SnoflakeLight}
          srcForDarkMode={Snowflake}
          width="100%"
          height="100%"
          alt="snowflake logo"
        />
        <ImageWrapper
          src={RechargeLight}
          srcForDarkMode={Recharge}
          width="100%"
          height="100%"
          alt="recharge logo"
        />
        <ImageWrapper
          src={VisionLight}
          srcForDarkMode={Vision}
          width="100%"
          height="100%"
          alt="vision logo"
        />
        <ImageWrapper
          src={LeafeLight}
          srcForDarkMode={Leafe}
          width="100%"
          height="100%"
          alt="leafe logo"
        />
        <ImageWrapper
          src={PentaLight}
          srcForDarkMode={Penta}
          width="100%"
          height="100%"
          alt="penta logo"
        />
      </div>
    </div>
  );
};

export default TrustedCompanies;
