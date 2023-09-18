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
      <h3 className={`text-${theme} theme-transition pb-5 text-lg font-bold`}>
        Trusted by the best companies
      </h3>
      <div className="flex items-center justify-around gap-x-2">
        <ImageWrapper src={ProlineLight} srcForDarkMode={Pro} alt="" />
        <ImageWrapper src={CloudLight} srcForDarkMode={Cloud} alt="" />
        <ImageWrapper src={CactusLight} srcForDarkMode={Snow} alt="" />
        <ImageWrapper src={HuesLight} srcForDarkMode={Hues} alt="" />
        <ImageWrapper src={GreenishLight} srcForDarkMode={Greenish} alt="" />
      </div>
      <div className="flex items-center justify-around gap-x-2 pt-5">
        <ImageWrapper src={SnoflakeLight} srcForDarkMode={Snowflake} alt="" />
        <ImageWrapper src={RechargeLight} srcForDarkMode={Recharge} alt="" />
        <ImageWrapper src={VisionLight} srcForDarkMode={Vision} alt="" />
        <ImageWrapper src={LeafeLight} srcForDarkMode={Leafe} alt="" />
        <ImageWrapper src={PentaLight} srcForDarkMode={Penta} alt="" />
      </div>
    </div>
  );
};

export default TrustedCompanies;
